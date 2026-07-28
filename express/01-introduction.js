/**
 * Topic: Introduction to Express.js
 * 
 * Introduction:
 *  * Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building single, multi-page, and hybrid web applications.
 * Analogy: If HTTP module is like coding raw radio signals, Express is like a pre-built radio station dashboard, complete with knobs for routing, security, and broadcast frequencies.
 * 
 * Why do we use it?
 *  * Writing APIs using raw Node.js HTTP requires parsing URLs, bodies, and handling routes manually. Express provides an elegant, structured interface that does this out-of-the-box.
 * 
 * Syntax:
 *  * const express = require("express");
 * const app = express();
 * app.listen(port);
 */

// --- Basic Example ---
// We simulate an Express server structure here
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to Express.js!');
});

const PORT = 3000;
// Note: We won't block the test runner here
const server = app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
  server.close();
});

// --- Write Your Notes/Observations Below ---
// (Use this space to write down your thoughts, experiment results, or key takeaways)






// --- Questions / Exercises for Practice ---
// Question 1: Describe how Express makes handling HTTP request methods (GET, POST) simpler compared to native Node.js http.
// Write your solution here:




// Question 2: Create a simple endpoint that returns a welcome JSON object.
// Write your solution here:




