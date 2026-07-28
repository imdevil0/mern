/**
 * !Topic: Scope in JavaScript
 * 
 * ?Introduction:
 *  * Scope determines the visibility or accessibility of variables in different parts of your code. JS has Global Scope, Function/Local Scope, and Block Scope.
 * Analogy: Global scope is like a public park (anyone can enter/see). Block scope is like a locked room inside a private house (only people inside that room can see what is in it).
 * 
 * ?Why do we use it?
 *  * Scope prevents variable conflicts and leaks, ensuring variables are only accessed where they are intended to be.
 * 
 * ?Syntax:
 *  * Variables declared with let and const inside { } are block-scoped. var is NOT block-scoped, only function-scoped!
 */

// --- Basic Example ---
// 1. Global Scope
const globalVar = "I am global";

function checkScope() {
  // 2. Local/Function Scope
  const functionVar = "I am local to checkScope";
  console.log("Inside function:", globalVar);   // Accessible
  console.log("Inside function:", functionVar); // Accessible
}

checkScope();
// console.log(functionVar); // ReferenceError: functionVar is not defined

// 3. Block Scope (Created by if-else, loops, or custom curlies)
if (true) {
  let blockVar = "I am block scoped";
  var functionScopedVar = "I am function scoped (var)";
  console.log(blockVar); // Accessible
}
// console.log(blockVar); // ReferenceError: blockVar is not defined
console.log(functionScopedVar); // Accessible! (Because var ignores block scope!)




// --- Questions / Exercises for Practice ---
// Question 1: Predict what will print: Create a nested structure of functions and block statements and trace the variable scopes.
// Write your solution here:





