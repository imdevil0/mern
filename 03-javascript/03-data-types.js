/**
 * !Topic: Data Types in JavaScript
 * 
 * ?Introduction:
 *  * Data types define the type of data a variable can hold. JavaScript has Primitive types (Number, String, Boolean, Undefined, Null, Symbol, BigInt) and Non-Primitive/Reference types (Object, Array, Function).
 * Analogy: Imagine toys categorized by physical attributes—some are blocks (numbers), some are strings (letters), and some are boxes holding multiple toys (objects).
 * 
 * ?Why do we use it?
 *  * Understanding data types ensures that we manipulate data correctly. For instance, adding numbers (5 + 5 = 10) is different from joining strings ("5" + "5" = "55").
 * 
 * ?Syntax:
 *  * typeof operand // returns the type of the value
 */

// --- Basic Example ---
// Primitive Types
const count = 42;             // Number
const name = "MERN Stack";    // String
const isCodingFun = true;     // Boolean
let unassignedValue;          // Undefined
const emptyValue = null;      // Null (represents intentional empty value)

console.log("Type of count:", typeof count);
console.log("Type of name:", typeof name);
console.log("Type of isCodingFun:", typeof isCodingFun);
console.log("Type of unassignedValue:", typeof unassignedValue);
console.log("Type of emptyValue:", typeof emptyValue); // Note: typeof null is 'object' (a historical JS bug)

// Reference Types
const user = { name: "Karan", age: 25 }; // Object
const skills = ["MongoDB", "Express", "React", "Node"]; // Array (which is also an object)

console.log("Type of user:", typeof user);
console.log("Type of skills:", typeof skills);

// --- Questions / Exercises for Practice ---
// Question 1: Create variables of all primitive types and check their types using "typeof".
// Write your solution here:



