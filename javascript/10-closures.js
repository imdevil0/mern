/**
 * !Topic: Closures
 * 
 * ?Introduction:
 *  * A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In simple terms, a closure allows an inner function to access the scope of its outer function even after the outer function has finished executing.
 * Analogy: Imagine a hiker (inner function) carrying a backpack (lexical environment) containing trail snacks (variables) packed by their guide (outer function). Long after leaving the guide, the hiker can still open the backpack and eat the snacks.
 * 
 * ?Why do we use it?
 *  * Closures are powerful because they allow data encapsulation (private variables) and let us create stateful functions.
 * 
 * ?Syntax:
 *  * function outer() { let secret = 10; return function inner() { return secret; } }
 */

// --- Basic Example ---
function createCounter() {
  let count = 0; // Private variable enclosed by createCounter

  // Returning an inner function that closes over the count variable
  return function() {
    count++;
    return count;
  };
}

const counter1 = createCounter();
console.log("First count:", counter1()); // 1
console.log("Second count:", counter1()); // 2

const counter2 = createCounter();
console.log("New counter:", counter2()); // 1 (independent from counter1)

// --- Write Your Notes/Observations Below ---
// (Use this space to write down your thoughts, experiment results, or key takeaways)






// --- Questions / Exercises for Practice ---
// Question 1: Create a closure function "createGreeting" that takes a greeting (e.g. "Hello") and returns a function that takes a name and prints the full greeting.
// Write your solution here:




// Question 2: Why is the private variable protected from outside modification in a closure?
// Write your solution here:




