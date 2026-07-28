/**
 * Topic: Middleware in Express
 * 
 * Introduction:
 *  * Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.
 * Analogy: Middleware is like security checkpoints at an airport. First, your ticket is checked (authentication), then your luggage is scanned (data parsing), and only then do you board the plane (final route handler).
 * 
 * Why do we use it?
 *  * Middleware enables logging, checking permissions, parsing request bodies, modifying response headers, and handling errors across all routes uniformly.
 * 
 * Syntax:
 *  * app.use((req, res, next) => { ... next(); });
 */

// --- Basic Example ---
const express = require('express');
const app = express();

// 1. Application-level middleware: Logger
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // Pass control to the next handler
});

// Built-in middleware to parse JSON bodies
app.use(express.json());

app.get('/dashboard', (req, res) => {
  res.send("Dashboard content");
});

// --- Write Your Notes/Observations Below ---
// (Use this space to write down your thoughts, experiment results, or key takeaways)






// --- Questions / Exercises for Practice ---
// Question 1: Write a custom middleware that rejects requests if they don't include an "Authorization" header.
// Write your solution here:




// Question 2: What happens if you forget to call "next()" inside a middleware function?
// Write your solution here:




