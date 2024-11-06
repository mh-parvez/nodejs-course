import fs from "fs";

const writeStream = fs.createWriteStream("file.txt", { highWaterMark: 4 });

writeStream.cork();

writeStream.write("hi");
writeStream.write("hi");
writeStream.write("hi");
writeStream.write("hi");


writeStream.end();
console.log(writeStream.writableEnded);
console.log(writeStream.writableLength);
// console.log(writeStream.destroy());

setTimeout(() => {
  console.log(writeStream.writableFinished);
  console.log(writeStream.writableLength);
}, 10);
