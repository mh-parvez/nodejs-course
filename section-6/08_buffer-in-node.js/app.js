import { Buffer } from "buffer";

const nodeBuffer = Buffer.alloc(4);
const nodeBuffer2 = Buffer.from([97, 98, 99, 100]);
const nodeBuffer3 = Buffer.allocUnsafe(4);

// console.log(nodeBuffer.toString("utf-8"));

console.log(nodeBuffer.byteLength);
console.log(nodeBuffer2.byteLength);
console.log(nodeBuffer3.byteLength);
console.log(nodeBuffer.buffer.byteLength);
console.log(nodeBuffer2.buffer.byteLength);
console.log(nodeBuffer3.buffer.byteLength);
