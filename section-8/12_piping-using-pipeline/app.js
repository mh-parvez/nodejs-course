import fs from "fs";
import { pipeline } from "stream";

console.time();

const readStream = fs.createReadStream(
  "C:\\Users\\anura\\OneDrive\\Desktop\\streams.mp4",
  {
    highWaterMark: 1 * 1024 * 1024,
  }
);
const writeStream = fs.createWriteStream("streams.mp4", {
  highWaterMark: 1 * 1024 * 1024,
});

pipeline(readStream, writeStream, (err) => {
  console.log(err);
});

// readStream.pipe(writeStream);

// readStream.on("error", (err) => {
//   console.log(err);
// });

setTimeout(() => {
  readStream.destroy("Khatam");
}, 1000);

setInterval(() => {
  console.log("Hii");
}, 100);

// readStream.on("data", (chunk) => {
//   const isEmpty = writeStream.write(chunk);
//   if (!isEmpty) {
//     readStream.pause();
//   }
// });

// writeStream.on("drain", () => {
//   readStream.resume();
// });

readStream.on("end", () => {
  console.timeEnd();
});
