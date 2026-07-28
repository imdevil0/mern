/**
 * !Topic: Destructuring (Array and Object)
 * 
 * ?Introduction:
 *  * Destructuring is a special syntax that allows us to "unpack" values from arrays, or properties from objects, into distinct variables.
 * Analogy: Imagine a package arriving with a kit inside. Instead of taking out parts one by one and assigning them places, destructuring is like opening the box and directly dropping each component into its dedicated slot.
 * 
 * ?Why do we use it?
 *  * It makes variable declarations cleaner, shorter, and easier to read, especially when extracting multiple fields from objects.
 * 
 * ?Syntax:
 *  * const { name, age } = user;
 * const [first, second] = array;
 */

// --- Basic Example ---
// 1. Object Destructuring
const user = {
  id: 101,
  email: "john@example.com",
  profile: { name: "John Doe", city: "Mumbai" }
};

// Extracting email and name
const { email, profile: { city } } = user;
console.log("Email:", email);
console.log("City:", city);

// 2. Array Destructuring
const coordinates = [40.7128, -74.0060];

// Extracting latitude and longitude
const [lat, lng] = coordinates;
console.log("Latitude:", lat);
console.log("Longitude:", lng);




// --- Questions / Exercises for Practice ---
// Question 1: Given an object const person = { firstName: "Jane", job: "Developer", country: "Canada" }, destructure firstName and job.
// Write your solution here:




// Question 2: Destructure the first and third items of an array, skipping the second item.
// Write your solution here:




