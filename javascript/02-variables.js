/**
 * !Topic: Variables (var, let, const)
 * 
 * ?Introduction:
 *  * Variables are containers for storing data values. JavaScript uses var, let, and const.
 * Analogy: Think of a variable as a labeled storage box. "var" is a flimsy box from the 90s, "let" is a sturdy modern cardboard box that can be opened and repackaged, and "const" is a steel safe that cannot be changed once locked.
 * 
 * ?Why do we use it?
 *  * We use variables to store values like user input, configuration settings, or math results so we can reference and reuse them throughout our application.
 * 
 * ?Syntax:
 *  * let variableName = value;
 * const constantName = value;
 * var oldVariable = value; // Avoid using var in modern JS!
 */

// --- Basic Example ---
// 1. let: Can be reassigned but not redeclared in the same scope
let score = 10;
console.log("Initial Score:", score);
score = 15; // Reassignment is allowed
console.log("Updated Score:", score);

// 2. const: Cannot be reassigned or redeclared
const birthYear = 2000;
console.log("Birth Year:", birthYear);
// birthYear = 2001; // Uncommenting this will throw an Error: Assignment to constant variable.

// 3. var: Old way, function-scoped and hoisted (Avoid this)
var name = "Alex";
console.log("Name:", name);
var name = "Jordan"; // Redeclaration is allowed with var
console.log("Updated Name:", name);




// --- Questions / Exercises for Practice ---
// Question 1: Declare a constant for your favorite color and a let variable for your age. Reassign your age and print both variables.
// Write your solution here:




