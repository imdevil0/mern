/**
 * Topic: Introduction to Mongoose
 * 
 * Introduction:
 *  * Mongoose is an Elegant MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose provides a straight-forward, schema-based solution to model your application data.
 * Analogy: Mongoose is like a building template inspector. While MongoDB is a flexible filing cabinet that accepts any sheets of paper, Mongoose acts as a quality inspector who ensures that every sheet has standard fields (like Title, Author, Date) before storing it.
 * 
 * Why do we use it?
 *  * It enforces structure, type validation, middleware, and relationships, saving you from writing validation boilerplate in Express.
 * 
 * Syntax:
 *  * const mongoose = require("mongoose");
 * mongoose.connect("mongodb://localhost:27017/dbname");
 */

// --- Basic Example ---
const mongoose = require('mongoose');

// Connecting to local MongoDB instance
async function connectDB() {
  try {
    await mongoose.connect('mongodb://localhost:27017/practice_db');
    console.log("MongoDB connected via Mongoose!");
    await mongoose.connection.close(); // Close for script runner safety
  } catch (error) {
    console.error("Database connection error:", error.message);
  }
}

connectDB();

// --- Write Your Notes/Observations Below ---
// (Use this space to write down your thoughts, experiment results, or key takeaways)






// --- Questions / Exercises for Practice ---
// Question 1: Explain the role of Mongoose as an ODM (Object Document Mapper).
// Write your solution here:




// Question 2: What are the advantages of using Mongoose over the raw MongoDB driver?
// Write your solution here:




