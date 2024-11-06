import fs from "fs";

console.time();

const readStream = fs.createReadStream(
  "C:\\Users\\anura\\OneDrive\\Desktop\\streams.mp4",
  { highWaterMark: 1 * 1024 * 1024 }
);

const writeStream = fs.createWriteStream("streams.mp4");

readStream.on("data", (chunkBuffer) => {
  // Time 4.5s
  // Memory 45MB
  // CPU 12%
  // fs.appendFileSync("streams.mp4", chunkBuffer);

  // Time 1.5s
  // Memory 1GB
  // CPU 20%
  writeStream.write(chunkBuffer);
});

readStream.on("end", () => {
  console.timeEnd();
});
