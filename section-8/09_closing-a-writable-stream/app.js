import fs from "fs";

const writeStream = fs.createWriteStream("file.txt", { highWaterMark: 4 });

writeStream.end("Hi, I am Anurag.");

writeStream.on("finish", () => {
  console.log("Finished");
});

writeStream.on("close", () => {
  console.log("closed");
});