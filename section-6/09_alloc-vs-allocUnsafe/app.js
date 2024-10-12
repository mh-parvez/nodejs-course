import { Buffer } from "buffer";

console.time("Buffer.alloc");
for (let i = 0; i < 10000; i++) {
  Buffer.alloc(1024); // 1KB buffer
}
console.timeEnd("Buffer.alloc");

console.time("Buffer.allocUnsafe");
for (let i = 0; i < 10000; i++) {
  Buffer.allocUnsafe(1024); // 1KB buffer
}
console.timeEnd("Buffer.allocUnsafe");
