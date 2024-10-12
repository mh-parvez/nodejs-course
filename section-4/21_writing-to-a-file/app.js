import { readFile, writeFile, appendFile } from "node:fs/promises";

// const contentBuffer = await readFile(
//   "C:\\Users\\anura\\OneDrive\\Desktop\\file-1.txt"
// );

try {
  const contentBuffer = await readFile("./nodejss.png");
  writeFile("C:\\Users\\anura\\OneDrive\\Desktop\\abc.png", contentBuffer);
} catch (err) {
  appendFile(
    "error.log",
    `\n\n${new Date().toLocaleTimeString()}\n${err.message}\n${err.stack}`
  );
  console.log(err);
  console.log(`To see full error message go to ./error.log file`);
}
// console.log(contentBuffer);

// setInterval(() => {
//   writeFile("file-1.txt", new Date().toLocaleTimeString());
// }, 500);
