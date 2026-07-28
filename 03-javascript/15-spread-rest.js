/**
 * !Topic: Spread and Rest Operators
 * 
 * ?Introduction:
 *  * The spread and rest operators are written with three dots (...). The spread operator unpacks elements; the rest operator packs elements into an array.
 * Analogy: Spread is like shaking a box of Lego blocks so they scatter on the floor. Rest is like gathering loose Lego blocks from the floor and putting them into a single storage bucket.
 * 
 * ?Why do we use it?
 *  * Spread allows copying or combining arrays and objects. Rest allows functions to accept any number of arguments or capture remaining properties.
 * 
 * ?Syntax:
 *  * Spread: const newArr = [...oldArr, newItem];
 * Rest: function sum(...numbers) { ... }
 */

// --- Basic Example ---
// 1. Spread Operator (...) - Unpacking
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, ...arr2]; // Merges arrays
console.log("Combined Array:", combinedArr);

const user = { name: "Alice", role: "User" };
const updatedUser = { ...user, active: true }; // Merges objects
console.log("Updated User:", updatedUser);

// 2. Rest Operator (...) - Packing remaining items
function sumAll(...numbers) {
  // numbers is an array holding all passed arguments
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log("Sum of numbers:", sumAll(1, 2, 3, 4));

const { name, ...otherDetails } = { name: "Bob", age: 30, city: "London" };
console.log("Name:", name);
console.log("Rest details:", otherDetails);

// --- Write Your Notes/Observations Below ---
// (Use this space to write down your thoughts, experiment results, or key takeaways)






// --- Questions / Exercises for Practice ---
// Question 1: Write a function that accepts one required parameter (name) and a rest parameter (hobbies) and prints a statement combining them.
// Write your solution here:




// Question 2: Copy an object containing nested arrays using the spread operator, and note whether the nested array is deep copied or shallow copied.
// Write your solution here:




