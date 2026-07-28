/**
 * Topic: MongoDB CRUD Operations
 * 
 * Introduction:
 *  * CRUD stands for Create, Read, Update, and Delete. These are the four basic operations to manipulate collection documents.
 * Analogy: Think of managing a contact list. Adding a contact (Create), searching for a name (Read), updating a phone number (Update), and deleting a spam contact (Delete).
 * 
 * Why do we use it?
 *  * Every web application interacts with a database to perform these basic operations to manage data flow (e.g. adding products, reading feed, updating user profile).
 * 
 * Syntax:
 *  * db.collection.insertOne(doc);
 * db.collection.find(filter);
 * db.collection.updateOne(filter, update);
 * db.collection.deleteOne(filter);
 */

// --- Basic Example ---
// --- Mocking MongoDB CRUD Operations in Shell command style ---

/*
// 1. CREATE
db.users.insertOne({
  name: "Karan",
  age: 23,
  status: "Active"
});

// 2. READ
db.users.find({ status: "Active" });

// 3. UPDATE
db.users.updateOne(
  { name: "Karan" },
  { $set: { age: 24 } }
);

// 4. DELETE
db.users.deleteOne({ name: "Karan" });
*/

console.log("CRUD operations map to insert, find, update, and delete methods in MongoDB.");

// --- Write Your Notes/Observations Below ---
// (Use this space to write down your thoughts, experiment results, or key takeaways)






// --- Questions / Exercises for Practice ---
// Question 1: Write the MongoDB query to update all users whose age is greater than 18 to have a status of "Adult".
// Write your solution here:




// Question 2: What does the "$set" operator do in update operations?
// Write your solution here:




