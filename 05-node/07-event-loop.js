/**
 * Topic: Event Loop in Node.js
 * 
 * Introduction:
 *  * The Event Loop is what allows Node.js to perform non-blocking I/O operations, despite JavaScript being single-threaded, by offloading operations to the system kernel whenever possible.
 * Analogy: Think of Node.js as a single clerk. When a customer asks for a task that takes time (like cooking food), the clerk sends the task to the kitchen (Libuv threadpool) and continues taking orders. Once the kitchen finishes, a bell rings (event callback), and the clerk delivers the food to the customer.
 * 
 * Why do we use it?
 *  * Understanding the event loop is crucial for writing high-performance Node.js code, avoiding blocking operations, and understanding order of execution.
 * 
 * Syntax:
 *  * Node runtime handles this internally. Microtask queue (process.nextTick, promises) runs before Macrotask queue (setTimeout, setInterval).
 */

// --- Basic Example ---
console.log("1. Start");

// Macrotask (queued)
setTimeout(() => {
  console.log("4. setTimeout (Macrotask)");
}, 0);

// Microtask (queued, runs before macrotasks)
Promise.resolve().then(() => {
  console.log("3. Promise resolved (Microtask)");
});

console.log("2. End");

// --- Write Your Notes/Observations Below ---
// (Use this space to write down your thoughts, experiment results, or key takeaways)






// --- Questions / Exercises for Practice ---
// Question 1: Predict the exact console output order: setTimeout, process.nextTick, setImmediate, and synchronous logs.
// Write your solution here:




// Question 2: Why should you avoid using CPU-heavy operations (like infinite loops or sync cryptos) in Node.js?
// Write your solution here:




