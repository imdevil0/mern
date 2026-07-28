/**
 * Topic: Request & Response Objects
 * 
 * Introduction:
 *  * The Request object (req) represents the HTTP request and has properties for the query string, parameters, body, HTTP headers, etc. The Response object (res) represents the HTTP response that an Express app sends when it gets an HTTP request.
 * Analogy: Request is a letter sent by a customer ordering a custom shirt (specifying sizes, colors). Response is the package sent back containing the shirt along with a delivery receipt (status codes, headers).
 * 
 * Why do we use it?
 *  * Knowing how to parse client inputs (req.params, req.body, req.query) and return appropriate formats (res.json, res.sendStatus) is core to writing APIs.
 * 
 * Syntax:
 *  * req.params // /user/:id
 * req.query // /search?name=karan
 * req.body // JSON payload
 */

// --- Basic Example ---
const express = require('express');
const app = express();
app.use(express.json());

// Handling req.params, req.query, and req.body
app.post('/items/:category', (req, res) => {
  const category = req.params.category; // Route parameter
  const limit = req.query.limit;         // Query parameter (e.g. ?limit=5)
  const itemData = req.body;            // Body parameter (parsed JSON)

  res.status(200).json({
    status: "Success",
    received: {
      category,
      limit,
      itemData
    }
  });
});

// --- Write Your Notes/Observations Below ---
// (Use this space to write down your thoughts, experiment results, or key takeaways)






// --- Questions / Exercises for Practice ---
// Question 1: Write a route that extracts a user's search keyword from query parameters and filters a mock array of items.
// Write your solution here:




// Question 2: When would you use req.params vs req.query?
// Write your solution here:




