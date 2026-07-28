/**
 * !Topic: Objects
 * 
 * ?Introduction:
 *  * Objects are collections of key-value pairs representing structured data. Keys are strings (properties) and values can be any data type including functions (methods).
 * Analogy: Think of a real-world object like a car. It has properties (brand: "Toyota", color: "blue") and behaviors/methods (start: function).
 * 
 * Why do we use it?
 *  * We use objects to model real-world concepts or bundle related data and methods together in a clean, self-contained entity.
 * 
 * ?Syntax:
 *  * const obj = { key1: value1, key2: value2, method() { ... } };
 */

// --- Basic Example ---
// Creating a student object
const student = {
  firstName: "Karan",
  lastName: "Sharma",
  age: 21,
  skills: ["JavaScript", "React"],
  // A method: function inside an object
  getFullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

// Accessing properties (Dot notation and Bracket notation)
console.log("Age (dot):", student.age);
console.log("Skills (bracket):", student["skills"]);

// Calling a method
console.log("Full Name:", student.getFullName());

// Modifying and adding properties
student.age = 22;
student.city = "New Delhi";
console.log("Updated student:", student);






// --- Questions / Exercises for Practice ---
// Question 1: Create a "book" object with properties title, author, year, and a method "getDetails" that returns a description string.
// Write your solution here:




// Question 2: Add a property "genres" (an array) to your book object, and add a new genre to it programmatically.
// Write your solution here:




