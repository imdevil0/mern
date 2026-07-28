/**
 * !Topic: Functions
 * 
 * ?Introduction:
 *  * A function is a block of code designed to perform a particular task. It is executed when it is called (invoked).
 * Analogy: Think of a food blender. You feed it raw ingredients (arguments), it runs a predefined process (blending), and returns a smoothie (return value).
 * 
 * ?Why do we use it?
 *  * Functions allow us to write code once and reuse it multiple times without duplication. They also help organize code into logical, modular pieces.
 * 
 * ?Syntax:
 *  * function functionName(parameter1, parameter2) { ... return value; }
 * const funcExpr = function() { ... };
 */

// --- Basic Example ---
// 1. Function Declaration
function greetUser(username) {
  return "Hello, " + username + "! Welcome back.";
}
// Invoking/Calling the function
const greeting = greetUser("Karan");
console.log(greeting);

// 2. Function Expression (Function stored in a variable)
const calculateTotal = function(price, taxRate) {
  const tax = price * taxRate;
  return price + tax;
};
const total = calculateTotal(100, 0.18);
console.log("Total Price with tax:", total);




// --- Questions / Exercises for Practice ---
// Question 1: Create a function named "calculateArea" that accepts radius of a circle and returns the area.
// Write your solution here:




// Question 2: Create a function that checks if a given number is prime and returns a boolean value.
// Write your solution here:




