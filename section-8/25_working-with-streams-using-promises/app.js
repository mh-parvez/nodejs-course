import fs from "fs/promises";

const readFileHandle = await fs.open(
  "C:\\Users\\anura\\OneDrive\\Desktop\\streams.mp4"
);

const writeFileHandle = await fs.open("streams.mp4", "w");

const readStream = readFileHandle.createReadStream();
const writeStream = writeFileHandle.createWriteStream();

readStream.pipe(writeStream);
