// 7. Write a parameterized static method checkCharType() to
// check whether a character is an alphabet, a digit or a special
// character.
// The method should also return the value.
// Test Cases:
// checkCharType('a')→ Expected output: Alphabet
// checkCharType('1') → Expected output: Digit
// checkCharType('#') → Expected output: Special character

const arr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

function checkCharType(c) {
  let isChar = false;
  arr.forEach((val) => {
    if (val === c) {
      isChar = true;
    }
  });

  if (isChar) {
    return "Alphabet";
  }

  let isNum = false;
  nums.forEach((val) => {
    if (val === c) {
      isNum = true;
    }
  });

  if (isNum) {
    return "Digit";
  }

  return "Special Character";
}

console.log(checkCharType("9"));
