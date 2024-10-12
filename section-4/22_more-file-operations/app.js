import { watch } from "node:fs";
import {
  rename,
  copyFile,
  cp,
  unlink,
  rmdir,
  rm,
  writeFile,
  appendFile,
  mkdir,
  stat,
  readFile,
} from "node:fs/promises";

// Rename method is used to move and rename
// rename("src", "build");
// rename("app.js", "C:\\Users\\anura\\OneDrive\\Desktop\\script.js");
// copyFile("backend.png", "C:\\Users\\anura\\OneDrive\\Desktop\\nodejs.png");
// cp("./src", "C:\\Users\\anura\\OneDrive\\Desktop\\src", { recursive: true });
// unlink('backend.png')
// rm("src", { recursive: true });

// appendFile('styles.css', '')

// const stats = await stat("src");

// console.log(stats);

watch("file.txt", async (eventType) => {
  if (eventType === "change") {
    console.log(await readFile("file.txt", "utf-8"));
  }
});
