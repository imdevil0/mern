/**
 * Topic: File System (fs Module)
 * 
 * Introduction:
 *  * The Node.js File System module (fs) allows you to work with the file system on your computer (reading, writing, deleting, and modifying files).
 * Analogy: The fs module is like a physical office filing clerk. You tell the clerk: "Read this file out loud" or "Write this text down on a new sheet and file it away."
 * 
 * Why do we use it?
 *  * We use the fs module to store persistent data locally, read configuration files, build logs, and handle file uploads.
 * 
 * Syntax:
 *  * const fs = require("fs");
 * fs.writeFileSync(path, content);
 * fs.readFileSync(path, encoding);
 */

// --- Basic Example ---
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'practice.txt');

// 1. Writing a file synchronously
try {
  fs.writeFileSync(filePath, 'Learning MERN is awesome!\n', 'utf-8');
  console.log("File written successfully.");
} catch (error) {
  console.error("Error writing file:", error);
}

// 2. Reading a file synchronously
try {
  const content = fs.readFileSync(filePath, 'utf-8');
  console.log("File Content:", content);
} catch (error) {
  console.error("Error reading file:", error);
}

// Cleanup: Delete the practice file
try {
  fs.unlinkSync(filePath);
  console.log("Temporary file deleted.");
} catch (error) {
  console.error("Error deleting file:", error);
}

// --- Write Your Notes/Observations Below ---
// (Use this space to write down your thoughts, experiment results, or key takeaways)






// --- Questions / Exercises for Practice ---
// Question 1: Use asynchronous fs.writeFile and fs.readFile to write and read a custom text file.
// Write your solution here:




// Question 2: Explain the difference between synchronous methods (e.g., readFileSync) and asynchronous methods (e.g., readFile).
// Write your solution here:




