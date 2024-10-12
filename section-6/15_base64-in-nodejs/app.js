import fs from "fs/promises";

// btoa()
const bufferContent = await fs.readFile("a.png");

const a = bufferContent.toString("base64url");

// atob()
// fs.writeFile("new-file.txt", a);

fs.writeFile("new-img.txt", a);