/**
 * Topic: Node.js Module System (CommonJS)
 * 
 * Introduction:
 *  * Node.js uses CommonJS by default for module management, where each file is treated as a separate module using require() and module.exports.
 * Analogy: Think of files as specialized tools in a workshop. To use a socket wrench in another room, you must place it in the "module.exports" box, and the other room must call "require()" to unpack it.
 * 
 * Why do we use it?
 *  * It lets us organize our code into manageable, reusable chunks, keeping the global scope clean and logic separated.
 * 
 * Syntax:
 *  * Export: module.exports = value; or exports.name = value;
 * Import: const module = require("./path");
 */

// --- Basic Example ---
// --- Simulating CommonJS Exports and Imports ---

/*
// File: calculator.js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

module.exports = {
  add,
  subtract
};
*/

/*
// File: app.js
const calculator = require("./calculator");
console.log("Addition:", calculator.add(10, 5));
*/

console.log("CommonJS uses require() and module.exports for sharing code across files.");

// --- Write Your Notes/Observations Below ---
// (Use this space to write down your thoughts, experiment results, or key takeaways)






// --- Questions / Exercises for Practice ---
// Question 1: Write a script that exports an object with user configurations and requires it in a separate file.
// Write your solution here:




// Question 2: What is the difference between exports and module.exports in Node.js?
// Write your solution here:




