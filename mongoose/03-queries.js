/**
 * Topic: Mongoose Queries
 * 
 * Introduction:
 *  * Mongoose models provide several helper functions for CRUD operations. These methods return Mongoose Query objects.
 * Analogy: Mongoose queries are like asking a smart librarian. Instead of saying "give me books", you say "Give me the book with ID 10" or "Give me the top 3 books by J.K. Rowling".
 * 
 * Why do we use it?
 *  * Writing queries allows us to fetch precise data, filter collections, update documents, and control return formats programmatically.
 * 
 * Syntax:
 *  * Model.find(filter);
 * Model.findById(id);
 * Model.findOneAndUpdate(filter, update, { new: true });
 */

// --- Basic Example ---
// --- Mocking Mongoose Queries in comments ---

/*
const User = require('./models/User');

// 1. Finding multiple documents
async function getAdultUsers() {
  const users = await User.find({ age: { $gte: 18 } });
  return users;
}

// 2. Finding by ID
async function getUserById(id) {
  const user = await User.findById(id);
  return user;
}

// 3. Updating and returning updated document
async function updateEmail(id, newEmail) {
  const updatedUser = await User.findByIdAndUpdate(
    id,
    { email: newEmail },
    { new: true } // Returns the modified document instead of original
  );
  return updatedUser;
}
*/

console.log("Mongoose queries return Promises that resolve to document arrays or single documents.");

// --- Write Your Notes/Observations Below ---
// (Use this space to write down your thoughts, experiment results, or key takeaways)






// --- Questions / Exercises for Practice ---
// Question 1: Write a Mongoose query to delete a user by their unique ID.
// Write your solution here:




// Question 2: Explain what the option "{ new: true }" does in findOneAndUpdate.
// Write your solution here:




