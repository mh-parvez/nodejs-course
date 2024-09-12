function add(...nums) {
  return nums.reduce((curr, acc) => curr + acc);
}

console.log(module);
console.log(exports);
console.log(module.exports === exports);
// module.exports = add;
