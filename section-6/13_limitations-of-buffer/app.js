import fs from "fs/promises";

const a = await fs.readFile("C:\\Users\\anura\\OneDrive\\Desktop\\a.mp4");
const b = await fs.readFile("C:\\Users\\anura\\OneDrive\\Desktop\\b.mp4");
const c = await fs.readFile("C:\\Users\\anura\\OneDrive\\Desktop\\c.mp4");

console.log(a.byteLength);
console.log(b.byteLength);
console.log(c.byteLength);

console.log("End");
