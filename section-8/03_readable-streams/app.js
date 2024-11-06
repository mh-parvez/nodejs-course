import fs from "fs";

// const fileBuff = await fs.readFile("chars.txt");
// const fileBuff = await fs.readFile(
//   "C:\\Users\\anura\\OneDrive\\Desktop\\streams.mp4"
// );

console.time();

// Time 2.5s
// Memory 1888 MB
// CPU 4%

// const fileBuff = await fs.readFile(
//   "C:\\Users\\anura\\OneDrive\\Desktop\\base64.mp4"
// );
// await fs.writeFile("base64.mp4", fileBuff);

// Time 7s
// Memory 50 MB
// CPU 12%

let readCount = 0;
const readStream = fs.createReadStream(
  "C:\\Users\\anura\\OneDrive\\Desktop\\streams.mp4",
  { highWaterMark: 1 * 1024 * 1024 }
);


readStream.on("data", (chunkBuffer) => {
  readCount++;
  fs.appendFileSync("streams.mp4", chunkBuffer);
});

readStream.on("end", () => {
  console.log({ readCount });
  console.timeEnd();
});

// const readStream = fs.createReadStream("chars.txt", {
//   highWaterMark: 16,
// });

// let readCount = 0;

// readStream.on("data", (chunk) => {
//   console.log(chunk.byteLength);
//   readCount++;
// });

// readStream.on("end", () => {
//   console.log({ readCount });
// });
