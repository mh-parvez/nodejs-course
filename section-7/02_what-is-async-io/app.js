// import fsPromises from "fs/promises";
import fs from "fs";

setTimeout(() => {
  console.log("hii");
}, 0);

// Async IO
// const fileContent = await fsPromises.readFile("file.txt", "utf8");
fs.readFile("file.txt", "utf8", (err, data) => {
    console.log(data);
});

console.log('123');


// sync IO
// const fileContent = fs.readFileSync("file.txt", "utf8");

// console.log(fileContent);
