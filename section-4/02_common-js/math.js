function sum(...nums) {
  return nums.reduce((curr, acc) => curr + acc);
}

function product(...nums) {
  return nums.reduce((curr, acc) => curr * acc);
}

exports.sum = sum
exports.product = product

// module.exports.sum = sum
// module.exports.product = product

// module.exports = {
//   sum,
//   product,
// };

// console.log(module.exports);