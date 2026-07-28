/**
 * !Topic: Conditionals (if, else, switch, ternary)
 * 
 * ?Introduction:
 *  * Conditionals are used to perform different actions based on different conditions.
 * Analogy: A conditional is like a road fork with signs: "If you have a VIP ticket, go left. Else, go right."
 * 
 * ?Why do we use it?
 *  * We use conditionals to make decisions in our code, allowing dynamic control flow instead of running everything sequentially.
 * 
 * ?Syntax:
 *  * if (condition) { ... } else if (otherCondition) { ... } else { ... }
 * 
 * *type ternary = condition ? valueIfTrue : valueIfFalse;
 */

// --- Basic Example ---
// 1. If-Else Statement
const temperature = 32;
if (temperature > 30) {
  console.log("It's hot outside!");
} else if (temperature >= 15) {
  console.log("Pleasant weather.");
} else {
  console.log("It's cold!");
}

// 2. Ternary Operator (Shorthand for simple if-else)
const age = 20;
const status = age >= 18 ? "Adult" : "Minor";
console.log("User status:", status);
// Nested ternary example (not recommended for readability)
const score = 85;
const grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : "F";
console.log("Grade:", grade);

// 3. Switch Case (Good for checking a single variable against multiple options)
const day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the work week.");
    break;
  case "Friday":
    console.log("Weekend is near!");
    break;
  default:
    console.log("Just another day.");
}

// --- Questions / Exercises for Practice ---
// Question 1: Write an if-else conditional to assign grades (A, B, C, D, F) based on a test score variable.
// Write your solution here:




// Question 2: Convert your if-else statement into a switch case or ternary operator if applicable.
// Write your solution here:




