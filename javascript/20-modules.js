/**
 * !Topic: Modules (export/import)
 * 
 * ?Introduction:
 *  * Modules allow you to break up your code into separate files. This makes it easier to maintain the code-base. JavaScript has two module systems: ES Modules (import/export) and CommonJS (require/module.exports).
 * Analogy: Modules are like Lego sets. Instead of having a giant single piece, you have separate blocks (math block, rendering block, auth block) that you import and connect together.
 * 
 * ?Why do we use it?
 *  * Modules promote reusability, organization, and namespace management, preventing variable name collisions across different files.
 * 
 * ?Syntax:
 *  * Export: export const add = (a, b) => a + b;
 * Import: import { add } from "./math.js";
 */

// --- Basic Example ---
// --- Simulating Module Export and Import in Comments ---

/* 
// File: mathUtils.js
export const pi = 3.14159;

export function add(a, b) {
  return a + b;
}

export default function multiply(a, b) {
  return a * b;
}
*/

/*
// File: app.js
// Importing named exports and default export
import multiply, { pi, add } from "./mathUtils.js";

console.log("PI value:", pi);
console.log("Add:", add(2, 3));
console.log("Multiply (Default):", multiply(4, 5));
*/

console.log("Modules enable ES6 import/export syntax to divide code into smaller, manageable files.");

// --- Write Your Notes/Observations Below ---
// (Use this space to write down your thoughts, experiment results, or key takeaways)






// --- Questions / Exercises for Practice ---
// Question 1: What is the difference between a default export and a named export?
// Write your solution here:




// Question 2: Write comments showing how you would export an object representing configurations and import it into another file.
// Write your solution here:




