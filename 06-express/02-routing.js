/**
 * Topic: Routing in Express
 * 
 * Introduction:
 *  * Routing refers to determining how an application responds to a client request to a particular endpoint (URI) and a specific HTTP request method (GET, POST, PUT, DELETE).
 * Analogy: Routing is like a mailroom with sorting boxes. The letter to "/billing" goes to the Billing department box, while "/support" goes to the Support team box.
 * 
 * Why do we use it?
 *  * Routing allows us to build RESTful APIs where resources have clean, predictable endpoints matching their state-changing operations.
 * 
 * Syntax:
 *  * app.get("/path", (req, res) => ...);
 * app.post("/path", (req, res) => ...);
 */

// --- Basic Example ---
const express = require('express');
const app = express();

// GET: Retrieve data
app.get('/api/users', (req, res) => {
  res.json([{ id: 1, name: "Karan" }]);
});

// POST: Create data
app.post('/api/users', (req, res) => {
  res.status(201).send("User created");
});

// PUT: Update data
app.put('/api/users/:id', (req, res) => {
  res.send(`User ${req.params.id} updated`);
});

// DELETE: Delete data
app.delete('/api/users/:id', (req, res) => {
  res.send(`User ${req.params.id} deleted`);
});

// --- Write Your Notes/Observations Below ---
// (Use this space to write down your thoughts, experiment results, or key takeaways)






// --- Questions / Exercises for Practice ---
// Question 1: Explain the semantic difference between GET, POST, PUT, and DELETE methods.
// Write your solution here:




// Question 2: Implement a route parameter that allows capturing a book category and sorting parameters in the URL path.
// Write your solution here:




