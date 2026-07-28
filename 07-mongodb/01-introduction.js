/**
 * Topic: Introduction to MongoDB
 * 
 * Introduction:
 *  * MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database, MongoDB uses JSON-like documents with optional schemas.
 * Analogy: Traditional SQL databases are like grid ledgers (fixed rows and columns). MongoDB is like a filing cabinet. You can slide sheets of paper (documents) of any shape or content into folders (collections) without conforming to a rigid table grid.
 * 
 * Why do we use it?
 *  * MongoDB offers high scalability, flexible document structures, and plays naturally with JavaScript since documents map directly to JavaScript objects.
 * 
 * Syntax:
 *  * NoSQL structures:
 * Database -> Collections -> Documents
 */

// --- Basic Example ---
// MongoDB document example (BSON/JSON format)
const sampleDocument = {
  "_id": "507f1f77bcf86cd799439011",
  "username": "mern_student",
  "email": "student@mern.com",
  "profile": {
    "firstName": "Karan",
    "skills": ["JavaScript", "Node.js"]
  },
  "createdAt": "2026-07-08T12:00:00Z"
};

console.log("MongoDB stores data as BSON documents, which resemble JS Objects:", JSON.stringify(sampleDocument, null, 2));

// --- Write Your Notes/Observations Below ---
// (Use this space to write down your thoughts, experiment results, or key takeaways)






// --- Questions / Exercises for Practice ---
// Question 1: Compare SQL (Relational) vs NoSQL (Document-based) databases. List 3 key differences.
// Write your solution here:




// Question 2: Explain what BSON is and how it differs from JSON.
// Write your solution here:




