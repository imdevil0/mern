/**
 * Topic: HTTP Module (Basic Server)
 * 
 * Introduction:
 *  * The http module allows Node.js to transfer data over the HyperText Transfer Protocol (HTTP) and create web servers.
 * Analogy: An HTTP server is like a receptionist at an office building. It sits and waits for visitors (requests). When a visitor arrives and asks for a department, the receptionist directs them (response) accordingly.
 * 
 * Why do we use it?
 *  * It is the core building block of backend web development in Node.js, allowing us to listen to client requests and send data/HTML back.
 * 
 * Syntax:
 *  * const http = require("http");
 * const server = http.createServer((req, res) => { ... });
 * server.listen(port);
 */

// --- Basic Example ---
const http = require('http');

// Create a server instance
const server = http.createServer((req, res) => {
  // Set response headers
  res.writeHead(200, { 'Content-Type': 'application/json' });
  
  // Send back a JSON response
  res.end(JSON.stringify({
    message: "Welcome to your first Node.js HTTP Server!",
    path: req.url,
    method: req.method
  }));
});

// Port configuration
const PORT = 3000;
// We start listening but immediately close in this example to prevent hanging processes
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  server.close(); // Closed for automation safety
});

// --- Write Your Notes/Observations Below ---
// (Use this space to write down your thoughts, experiment results, or key takeaways)






// --- Questions / Exercises for Practice ---
// Question 1: Create a server that routes requests: returns "Welcome Home" when visiting "/" and "About Us" when visiting "/about".
// Write your solution here:




// Question 2: Explain what response headers (res.writeHead) do and why Content-Type is important.
// Write your solution here:




