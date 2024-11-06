import { createReadStream, createWriteStream } from "fs";

const readStream = createReadStream(
  "C:\\Users\\anura\\OneDrive\\Desktop\\streams.mp4"
);

readStream.pipe(process.stdout)

