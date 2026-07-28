/**
 * !Topic: Arrow Functions
 * 
 * ?Introduction:
 *  * Arrow functions are a shorter syntax for writing function expressions. They do not have their own "this" binding.
 * Analogy: Think of arrow functions as a compact, streamlined pocket-blender. Sleeker, quicker to set up, but with slightly different internal wiring (lexical scope of this).
 * 
 * ?Why do we use it?
 *  * They write cleaner, more readable code, especially when passing functions as arguments to array methods like map, filter, etc.
 * 
 * ?Syntax:
 *  * const funcName = (params) => { return value; };
 *  Implicit return if single line:
 * const double = x => x * 2;
 */

// --- Basic Example ---
// Traditional function expression
const add = function(a, b) {
  return a + b;
};

// Arrow function equivalent
const addArrow = (a, b) => {
  return a + b;
};
console.log("Add with arrow:", addArrow(5, 7));

// Shorthand arrow function (implicit return for single expression)
const multiply = (a, b) => a * b;
console.log("Multiply with shorthand arrow:", multiply(3, 4));

// Arrow function with single parameter (parentheses are optional)
const greet = name => `Hello, ${name}!`;
console.log(greet("Alice"));


// --- Questions / Exercises for Practice ---
// Question 1: Convert a standard function that calculates rectangle perimeter to an arrow function with implicit return.
// Write your solution here:

