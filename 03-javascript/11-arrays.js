/**
 * !Topic: Arrays
 * 
 * ?Introduction:
 *  * An array is a special variable that can hold more than one value at a time, indexed sequentially starting from 0.
 * Analogy: Think of an array as a train with cars. The first car is at index 0, the second at index 1, and each car can carry different passengers.
 * 
 * ?Why do we use it?
 *  * We use arrays to store lists of related data (like list of users, shopping cart items, etc.) in a single, ordered variable.
 * 
 * ?Syntax:
 *  * const arrName = [item1, item2, ...];
 * const length = arrName.length;
 */

// --- Basic Example ---
// Creating an array of fruits
const fruits = ["Apple", "Banana", "Cherry"];

// Accessing elements (0-indexed)
console.log("First fruit:", fruits[0]);
console.log("Array length:", fruits.length);

// Modifying elements
fruits[1] = "Blueberry";
console.log("Modified fruits array:", fruits);

// Adding and removing items
fruits.push("Dragonfruit"); // Adds to end
console.log("After push:", fruits);

const lastFruit = fruits.pop(); // Removes from end
console.log("Popped element:", lastFruit);
console.log("After pop:", fruits);

// --- Write Your Notes/Observations Below ---
// (Use this space to write down your thoughts, experiment results, or key takeaways)






// --- Questions / Exercises for Practice ---
// Question 1: Create an array of your favorite films. Add one to the beginning of the array and remove one from the end.
// Write your solution here:




// Question 2: Write code to find the index of a specific film in your array.
// Write your solution here:




