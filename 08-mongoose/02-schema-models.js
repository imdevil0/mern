/**
 * Topic: Mongoose Schemas and Models
 * 
 * Introduction:
 *  * A Mongoose Schema defines the structure of the document, default values, validators, etc., whereas a Mongoose Model provides an interface to the database for creating, querying, updating, deleting records.
 * Analogy: A Schema is like a blueprint of a house (showing dimensions, rooms, plumbing). A Model is the actual house constructed from that blueprint, ready to be occupied.
 * 
 * Why do we use it?
 *  * Schemas define strict typing and validation, while models provide the helper methods (e.g., User.find(), User.create()) to manipulate the corresponding collection.
 * 
 * Syntax:
 *  * const schema = new mongoose.Schema({ ... });
 * const ModelName = mongoose.model("CollectionName", schema);
 */

// --- Basic Example ---
const mongoose = require('mongoose');

// Defining a Schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number,
    min: 18
  },
  email: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Creating a Model
const User = mongoose.model('User', userSchema);

console.log("Model initialized from user schema successfully.");

// --- Write Your Notes/Observations Below ---
// (Use this space to write down your thoughts, experiment results, or key takeaways)






// --- Questions / Exercises for Practice ---
// Question 1: Create a schema for a "Product" model including fields name (required String), price (Number), inStock (Boolean), and tags (Array of Strings).
// Write your solution here:




// Question 2: Explain how collection naming works in Mongoose (e.g. how Model "User" maps to collection "users").
// Write your solution here:




