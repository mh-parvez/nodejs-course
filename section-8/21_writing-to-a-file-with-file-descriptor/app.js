import fs from "fs";

const fd = fs.openSync("text.txt", "w");

// const buff = Buffer.from("123");

// fs.write(fd, "त्र", (err, bytesWritten, writtenData) => {
//   console.log(bytesWritten);
//   console.log(writtenData);
// });

const bytesWritten = fs.writeSync(fd, "त्र");

console.log(bytesWritten);
