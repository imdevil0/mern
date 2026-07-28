/**
 * !Topic: Promises
 * 
 * ?Introduction:
 *  * A Promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value. It has 3 states: Pending, Fulfilled, or Rejected.
 * Analogy: When you order food at a restaurant counter, you receive a pager (Promise) in a "Pending" state. When the food is ready, the pager buzzes ("Fulfilled"). If they run out of ingredients, the pager blinks red ("Rejected").
 * 
 * ?Why do we use it?
 *  * Promises prevent "callback hell" (nested asynchronous callbacks) and provide a standardized way to handle asynchronous code.
 * 
 * ?Syntax:
 *  * const myPromise = new Promise((resolve, reject) => { ... });
 * myPromise.then(result => ...).catch(err => ...);
 */

// --- Basic Example ---
// Simulating an async API call
const fetchUserData = (userId) => {
  return new Promise((resolve, reject) => {
    console.log("Fetching user data...");
    setTimeout(() => {
      const success = true; // Try changing this to false to see the reject path
      if (success) {
        resolve({ id: userId, username: "dev_karan" });
      } else {
        reject("Failed to fetch user data.");
      }
    }, 2000); // 2-second delay
  });
};

// Consuming the promise
fetchUserData(42)
  .then(data => {
    console.log("Success! Data received:", data);
  })
  .catch(error => {
    console.error("Error occurred:", error);
  });




// --- Questions / Exercises for Practice ---
// Question 1: Create a Promise that resolves with a random number after 1.5 seconds. If the random number is less than 0.5, reject it.
// Write your solution here:




// Question 2: Explain the difference between resolve and reject.
// Write your solution here:




