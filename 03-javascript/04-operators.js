/**
 * !Topic: Operators
 * 
 * ?Introduction:
 *  * Operators are symbols used to perform operations on operands (variables and values).
 * Analogy: Operators are like buttons on a calculator (+, -, *, /) or logical switches (AND, OR, NOT) on a dashboard.
 * 
 * ?Why do we use it?
 *  * We use operators to do mathematical calculations, compare values, check conditions, and build complex logic in our code.
 * 
 * ?Syntax:
 *  * Arithmetic: +, -, *, /, %, **
 * Comparison: ==, ===, !=, !==, >, <, >=, <=
 * Logical: &&, ||, !
 */

// --- Basic Example ---
// 1. Arithmetic Operators
let a = 10;
let b = 3;
console.log("Addition:", a + b);
console.log("Remainder (Modulo):", a % b); // 10 divided by 3 has a remainder of 1

// 2. Comparison Operators (=== checks both value and type)
let x = 5;
let y = "5";
console.log("Loose equality (==):", x == y);  // true
console.log("Strict equality (===):", x === y); // false (highly recommended to use strict!)

// 3. Logical Operators
let isAdult = true;
let hasLicense = false;
console.log("Can drive (isAdult && hasLicense):", isAdult && hasLicense);
console.log("Can walk or drive (isAdult || hasLicense):", isAdult || hasLicense);


// --- Questions / Exercises for Practice ---
// Question 1: Compare a number and a string representation of the same number using == and ===. Explain why the result differs.
// Write your solution here:




