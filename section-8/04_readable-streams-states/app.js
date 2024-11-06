import fs from "fs";

const readStream = fs.createReadStream("chars.txt", { highWaterMark: 4 });

readStream.on("data", (chunk) => {
  const { readableHighWaterMark, bytesRead } = readStream;
  if (readableHighWaterMark === bytesRead) {
    fs.writeFileSync("abc.txt", chunk);
  } else {
    fs.appendFileSync("abc.txt", chunk);
  }

  // readStream.pause();
  // setTimeout(() => {
  //   readStream.resume();
  // }, 200);
});

readStream.on("resume", () => {
  console.log("Stream Resumed");
});

readStream.on("pause", () => {
  console.log("Stream Pause");
});
