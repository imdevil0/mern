/**
 * Topic: CORS (Cross-Origin Resource Sharing)
 * 
 * Introduction:
 *  * CORS is a security mechanism implemented by web browsers to restrict web pages from making requests to a different domain than the one that served the web page.
 * Analogy: CORS is like a visa checkpoint. If a frontend app running at "localhost:3000" tries to fetch data from a backend server at "localhost:5000", the browser blocks it unless the backend server explicitly writes a letter (CORS headers) saying: "I trust localhost:3000; let them in."
 * 
 * Why do we use it?
 *  * It prevents malicious websites from reading sensitive data from your API on behalf of authenticated clients (Same-Origin Policy).
 * 
 * Syntax:
 *  * const cors = require("cors");
 * app.use(cors({ origin: "http://your-frontend.com" }));
 */

// --- Basic Example ---
const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for ALL origins (Not recommended for production!)
app.use(cors());

// Enable CORS for specific origins (Secure way)
const corsOptions = {
  origin: 'http://localhost:5173', // Vite default port
  methods: 'GET,POST,PUT,DELETE',
  credentials: true
};
app.use(cors(corsOptions));

// --- Write Your Notes/Observations Below ---
// (Use this space to write down your thoughts, experiment results, or key takeaways)






// --- Questions / Exercises for Practice ---
// Question 1: What error do you see in the browser console when a CORS request fails?
// Write your solution here:




// Question 2: Why is enabling "cors()" with wildcard (*) credentials considered unsafe for APIs that handle authentication cookies?
// Write your solution here:




