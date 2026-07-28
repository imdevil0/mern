/**
 * !Topic: Fetch API
 * 
 * ?Introduction:
 *  * The Fetch API provides a JavaScript interface for accessing and manipulating parts of the protocol, such as requests and responses. It retrieves resources asynchronously across the network.
 * Analogy: Fetch is like sending a mail carrier to a specific address (URL) to fetch a package (JSON data). The carrier goes, retrieves the package, and returns it to your door.
 * 
 * ?Why do we use it?
 *  * We use fetch to load data from external APIs or servers without reloading the web page, enabling dynamic data updates.
 * 
 * ?Syntax:
 *  * fetch(url).then(res => res.json()).then(data => ...)
 */

// --- Basic Example ---
// We will use a mock API endpoint
const API_URL = "https://jsonplaceholder.typicode.com/posts/1";

async function getPostData() {
  try {
    console.log("Requesting data...");
    const response = await fetch(API_URL);

    // Check if the response was successful (status 200-299)
    if (!response.ok) {
      throw new Error("HTTP error! status: " + response.status);
    }

    // Convert response stream to JSON
    const data = await response.json();
    console.log("Data Received:", data);
  } catch (error) {
    console.error("Failed to fetch:", error.message);
  }
}

// Running the fetch function
getPostData();

// --- Write Your Notes/Observations Below ---
// (Use this space to write down your thoughts, experiment results, or key takeaways)






// --- Questions / Exercises for Practice ---
// Question 1: Use fetch to get data from "https://jsonplaceholder.typicode.com/users" and log the names of all users.
// Write your solution here:




// Question 2: Explain the purpose of the statement "response.json()".
// Write your solution here:




