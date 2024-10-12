const digitsList1 = [2, 4, 6, 5];
const digitsList2 = [7, 3, "a"];
const octalNum1 = 0o12;
const octalNum2 = 0o237;
const hexNum1 = 0x843;
const hexNum2 = 0x45a;

// console.log(octalNum2);

// const num1 = 2 * 1 + 4 * 10 + 6 * 100 + 5 * 1000;

// const num2 = 7 * Math.pow(10, 0) + 3 * Math.pow(10, 1) + 2 * Math.pow(10, 2);

function digitsToNumber(digits, radix = 10) {
  return digits.reduce(
    (acc, curr, index) => acc + curr * Math.pow(radix, index),
    0
  );
}

// console.log(num1);
// console.log(digitsToNumber(digitsList1));
console.log(digitsToNumber(digitsList2, 16));
