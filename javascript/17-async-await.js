/**
 * !Topic: Async/Await
 * 
 * ?Introduction:
 *  * Async/Await is a syntax built on top of Promises to make asynchronous code look and behave like synchronous code.
 * Analogy: Instead of holding a pager (Promise) and waiting for it to buzz so you can go get your food (.then), you sit at the table and use "await" to block your progress until the waiter serves the food directly to you.
 * 
 * ?Why do we use it?
 *  * It greatly increases code readability, simplifies error handling using try-catch blocks, and avoids chaining multiple .then() blocks.
 * 
 * ?Syntax:
 *  * async function myFunc() { const val = await promiseInstance; }
 */

// --- Basic Example ---
// Simulated database call returning a Promise
const getUserRole = (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Admin");
    }, 1000);
  });
};

// Async function
async function processUser(id) {
  try {
    console.log("Process started...");
    // Await pauses execution until the promise resolves
    const role = await getUserRole(id);
    console.log("User role retrieved:", role);
  } catch (error) {
    console.error("Error processing user:", error);
  } finally {
    console.log("Process completed.");
  }
}

processUser(99);

// --- Write Your Notes/Observations Below ---
// (Use this space to write down your thoughts, experiment results, or key takeaways)






// --- Questions / Exercises for Practice ---
// Question 1: Convert a promise-based fetch chain to use async/await.
// Write your solution here:




// Question 2: Explain how errors are caught in async/await functions compared to promise chaining.
// Write your solution here:




