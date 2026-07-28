/**
 * Topic: Error Handling Middleware
 * 
 * Introduction:
 *  * Express error-handling middleware is defined with four arguments instead of three: (err, req, res, next).
 * Analogy: Think of error-handling middleware as a centralized hospital emergency room. Whenever a route fails, it directs the patient (error) to this ER, which diagnoses the issue and sends a recovery message.
 * 
 * Why do we use it?
 *  * Instead of scattering try-catch blocks everywhere, we can forward errors to a single location that logs the error and returns a clean, standard response to the client.
 * 
 * Syntax:
 *  * app.use((err, req, res, next) => { ... res.status(500).json(...) });
 */

// --- Basic Example ---
const express = require('express');
const app = express();

// Route that manually throws an error
app.get('/broken', (req, res, next) => {
  const err = new Error("Something went wrong on the server!");
  err.status = 500;
  next(err); // Passing error to the next handler
});

// Centralized Error-Handling Middleware (Must be last!)
app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  console.error("Centralized Error Log:", err.message);

  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  });
});

// --- Write Your Notes/Observations Below ---
// (Use this space to write down your thoughts, experiment results, or key takeaways)






// --- Questions / Exercises for Practice ---
// Question 1: Implement a custom error handler that handles MongoDB "CastError" or duplicate key errors and returns user-friendly messages.
// Write your solution here:




// Question 2: Why is it important to place the error-handling middleware at the very end of all app.use() and route definitions?
// Write your solution here:




