import fs from "fs/promises";

const a = await fs.readFile("C:\\Users\\anura\\OneDrive\\Desktop\\nodejs.png");

console.log(a.byteLength);
