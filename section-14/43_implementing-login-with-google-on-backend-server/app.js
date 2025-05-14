import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { fetchUserFromGoogle } from "./services/googleAuthService.js";
import { writeFile } from "fs/promises";
import users from "./usersDB.json" with { type: "json" };
import sessions from "./sessionsDB.json" with { type: "json" };

const app = express();
const PORT = 4000;

app.use(
  cors({
    origin: "http://localhost:5500",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.post("/auth/google/callback", async (req, res) => {
  const { sid } = req.cookies;
  const existingSession = sessions.find(({ sessionId }) => sid === sessionId);
  if (existingSession) {
    return res.json({ message: "Already logged in." });
  }

  const { code } = req.body;
  const { sub, email, name, picture } = await fetchUserFromGoogle(code);
  const existingUser = users.find(({ id }) => id === sub);

  if (existingUser) {
    const sessionId = crypto.randomUUID();
    sessions.push({ sessionId, userId: sub });
    await writeFile("sessionsDB.json", JSON.stringify(sessions, null, 2));
    res.cookie("sid", sessionId, {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
    });
    return res.json(existingUser);
  }

  const newUser = { id: sub, email, name, picture };
  users.push(newUser);
  await writeFile("usersDB.json", JSON.stringify(users, null, 2));
  const sessionId = crypto.randomUUID();
  sessions.push({ sessionId, userId: sub });
  await writeFile("sessionsDB.json", JSON.stringify(sessions, null, 2));
  res.cookie("sid", sessionId, {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  });
  res.json(newUser);
});

app.get("/profile", async (req, res) => {
  const { sid } = req.cookies;
  const existingSession = sessions.find(({ sessionId }) => sid === sessionId);
  if (!existingSession) {
    return res.status(401).json({ error: "Not logged in." });
  }

  const existingUser = users.find(({ id }) => id === existingSession.userId);
  if (!existingUser) {
    return res.status(404).json({ error: "User not found." });
  }

  return res.json(existingUser);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
