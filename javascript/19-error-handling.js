/**
 * !Topic: Error Handling (try/catch/finally)
 * 
 * ?Introduction:
 *  * Error handling allows a program to deal with unexpected runtime errors without crashing completely.
 * Analogy: Error handling is like a safety net under a trapeze artist. If the artist makes a mistake (an error occurs), they don't hit the ground and die (app crash); instead, the net catches them (catch block) and they can recover gracefully.
 * 
 * ?Why do we use it?
 *  * If an error occurs (e.g. network failure, invalid user input, type error), we want our application to display a friendly message instead of shutting down.
 * 
 * ?Syntax:
 *  * try { ... } catch (error) { ... } finally { ... }
 */

// --- Basic Example ---
function parseJSON(jsonString) {
  try {
    // Attempting an operation that might fail
    const parsed = JSON.parse(jsonString);
    console.log("Success! Parsed Object:", parsed);
  } catch (error) {
    // Catch block runs ONLY if an error occurs in the try block
    console.error("Oops, parsing failed!");
    console.error("Error Message:", error.message);
  } finally {
    // Finally block runs ALWAYS, regardless of success or error
    console.log("JSON parsing operation complete.");
  }
}

// 1. Test with valid JSON
parseJSON('{"name": "MERN"}');

// 2. Test with invalid JSON (will trigger catch block)
parseJSON("Invalid-JSON-String");

// --- Write Your Notes/Observations Below ---
// (Use this space to write down your thoughts, experiment results, or key takeaways)






// --- Questions / Exercises for Practice ---
// Question 1: Write a function that divides two numbers. Throw an error manually if the denominator is zero, and catch the error.
// Write your solution here:




// Question 2: Explain what the finally block is typically used for (e.g., closing database connections).
// Write your solution here:




