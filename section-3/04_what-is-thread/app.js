const { Worker } = require("worker_threads");

debugger;
for (let i = 0; i < 10000000000; i++) {
  if (i % 4000000000 == 0) {
    console.log(`Running loop 1 ${i}`);
  }
}
new Worker("./a");
new Worker("./b");
new Worker("./c");

// console.time();
// for (let i = 0; i < 10000000000; i++) {
//   if (i % 4000000000 == 0) {
//     console.log(`Running loop 1 ${i}`);
//   }
// }
// for (let i = 0; i < 10000000000; i++) {
//   if (i % 4000000000 == 0) {
//     console.log(`Running loop 1 ${i}`);
//   }
// }
// for (let i = 0; i < 10000000000; i++) {
//   if (i % 4000000000 == 0) {
//     console.log(`Running loop 1 ${i}`);
//   }
// }
// console.timeEnd();
