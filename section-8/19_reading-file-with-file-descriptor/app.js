import fs from "fs";

const fd = fs.openSync("text.txt");

const readBuffer = Buffer.alloc(4);

fs.read(
  fd,
  {
    buffer: readBuffer,
    length: 5,
    position: 2,
    offset: 2,
  },
  (err, bytesRead, buffData) => {
    console.log(buffData.toString());
  }
);
