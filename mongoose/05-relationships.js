/**
 * Topic: Mongoose Relationships & Populate
 * 
 * Introduction:
 *  * Mongoose allows relationships between documents using "Refs" (References) to reference documents in other collections, which can then be fetched using the populate() method.
 * Analogy: Imagine a Library card. It doesn't print the whole book on the card; it just prints the Book ID. When you "populate" the card, the system replaces the Book ID with the actual Book details.
 * 
 * Why do we use it?
 *  * Instead of storing massive nested arrays (subdocuments) which hit document size limits, referencing keeps collections clean, organized, and normalized.
 * 
 * Syntax:
 *  * field: { type: mongoose.Schema.Types.ObjectId, ref: "ModelName" }
 */

// --- Basic Example ---
const mongoose = require('mongoose');

// 1. Author Schema
const authorSchema = new mongoose.Schema({
  name: String,
  bio: String
});
const Author = mongoose.model('Author', authorSchema);

// 2. Book Schema referencing Author
const bookSchema = new mongoose.Schema({
  title: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author' // Matches mongoose.model name
  }
});
const Book = mongoose.model('Book', bookSchema);

// Simulating query with population
/*
async function getBookWithAuthor(bookId) {
  return await Book.findById(bookId).populate('author'); 
  // Replaces the author ID with the actual Author document!
}
*/

console.log("Mongoose relationships use ObjectId references and .populate() to link documents.");

// --- Write Your Notes/Observations Below ---
// (Use this space to write down your thoughts, experiment results, or key takeaways)






// --- Questions / Exercises for Practice ---
// Question 1: Create a "Post" schema and a "Comment" schema where each Comment references a Post ObjectId.
// Write your solution here:




// Question 2: Write the Mongoose query to find a comment and populate its associated post details.
// Write your solution here:




