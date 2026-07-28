/**
 * Topic: NPM (Node Package Manager)
 * 
 * Introduction:
 *  * NPM is a command-line utility and package manager for installing and managing Node.js libraries and dependencies.
 * Analogy: NPM is like an App Store for developers. If you need a utility to format dates, you don't write it from scratch; you download it from the store (npm install date-fns).
 * 
 * Why do we use it?
 *  * NPM gives access to millions of free, open-source libraries, boosting development speed and efficiency.
 * 
 * Syntax:
 *  * npm init -y // Initialize a project
 * npm install package_name // Install dependency
 * npm install -D package_name // Install development dependency
 */

// --- Basic Example ---
// Typical package.json structure:
const samplePackageJSON = {
  "name": "mern-learning",
  "version": "1.0.0",
  "description": "Learning MERN stack from basics",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
};

console.log("Package.json handles all dependency metadata:", JSON.stringify(samplePackageJSON, null, 2));

// --- Write Your Notes/Observations Below ---
// (Use this space to write down your thoughts, experiment results, or key takeaways)






// --- Questions / Exercises for Practice ---
// Question 1: Explain the difference between standard dependencies and devDependencies.
// Write your solution here:




// Question 2: What is the purpose of the package-lock.json file?
// Write your solution here:




