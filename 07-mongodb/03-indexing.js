/**
 * Topic: MongoDB Indexing
 * 
 * Introduction:
 *  * Indexes support the efficient execution of queries in MongoDB. Without indexes, MongoDB must perform a collection scan (scan every document) to select matching documents.
 * Analogy: Finding a topic in a 500-page book without an index requires scanning page-by-page. With an index, you look up the topic name alphabetically and flip directly to the correct page.
 * 
 * Why do we use it?
 *  * As your database grows to millions of documents, scanning every page slows down queries exponentially. Indexing keeps queries lightning-fast.
 * 
 * Syntax:
 *  * db.collection.createIndex({ fieldName: 1 }); // 1 for ascending, -1 for descending
 */

// --- Basic Example ---
// --- Mocking MongoDB Indexing Queries ---

/*
// Creating a single-field index on email
db.users.createIndex({ email: 1 });

// Creating a compound index on status AND age
db.users.createIndex({ status: 1, age: -1 });

// Querying indexed fields
db.users.find({ email: "student@mern.com" }).explain("executionStats");
*/

console.log("Indexes optimize query performance by avoiding full-collection scans.");

// --- Write Your Notes/Observations Below ---
// (Use this space to write down your thoughts, experiment results, or key takeaways)






// --- Questions / Exercises for Practice ---
// Question 1: What is a compound index? Give an example scenario where it would be useful.
// Write your solution here:




// Question 2: What is the downside of creating too many indexes on a single collection?
// Write your solution here:




