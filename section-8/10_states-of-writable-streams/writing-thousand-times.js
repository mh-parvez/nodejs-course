import fs from "fs";

const writeStream = fs.createWriteStream("file.txt", { highWaterMark: 4 });

let i = 1;

writeStream.cork();
write100A();

function write100A() {
  while (i <= 1000) {
    console.log(writeStream.writableLength);
    const isEmpty = writeStream.write("a");
    i++;

    if (!isEmpty) {
      break;
    }
  }
}

writeStream.on("drain", () => {
  write100A();
});
