/**
 * Topic: Path Module
 * 
 * Introduction:
 *  * The path module provides utilities for working with file and directory paths.
 * Analogy: The path module is like a GPS. Instead of hardcoding absolute directions like "Turn left, go 5 miles", it calculates correct relative coordinates depending on where you are.
 * 
 * Why do we use it?
 *  * Different Operating Systems use different path separators (/ for Mac/Linux, \\ for Windows). The path module ensures your code runs flawlessly on any platform.
 * 
 * Syntax:
 *  * const path = require("path");
 * path.join(__dirname, "folder", "file.js");
 */

// --- Basic Example ---
const path = require('path');

// 1. Join multiple path segments together
const fullPath = path.join('users', 'local', 'config.json');
console.log("Joined Path:", fullPath);

// 2. Get absolute path of current folder
console.log("Directory Name (__dirname):", __dirname);
console.log("File Name (__filename):", __filename);

// 3. Extract details from a path
console.log("File Extension:", path.extname(__filename));
console.log("Base File Name:", path.basename(__filename));

// --- Write Your Notes/Observations Below ---
// (Use this space to write down your thoughts, experiment results, or key takeaways)






// --- Questions / Exercises for Practice ---
// Question 1: Create a path pointing to a nested subdirectory "../assets/images/logo.png" using path.resolve and path.join. Compare the output.
// Write your solution here:




// Question 2: How does path.resolve() differ from path.join()?
// Write your solution here:




