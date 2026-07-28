/**
 * Topic: MongoDB Aggregation Pipeline
 * 
 * Introduction:
 *  * The aggregation pipeline is a framework for data aggregation modeled on the concept of data processing pipelines. Documents enter a multi-stage pipeline that transforms the documents into aggregated results.
 * Analogy: Aggregation is like a factory assembly line. Stage 1 filters out defective toys ($match), Stage 2 paints them blue ($project), Stage 3 groups them by size ($group), and Stage 4 counts the total blocks produced ($count).
 * 
 * Why do we use it?
 *  * Aggregation is used to perform complex queries, calculations, analytics, and data transformations directly inside the database, which is highly optimized compared to running calculations in Node server code.
 * 
 * Syntax:
 *  * db.collection.aggregate([
 *   { $match: { ... } },
 *   { $group: { _id: "$field", total: { $sum: 1 } } }
 * ]);
 */

// --- Basic Example ---
// --- Mocking Aggregation Queries ---

/*
db.orders.aggregate([
  // Stage 1: Filter orders that are "Completed"
  { $match: { status: "Completed" } },

  // Stage 2: Group by customerId and calculate total spent
  { 
    $group: { 
      _id: "$customerId", 
      totalSpent: { $sum: "$amount" },
      orderCount: { $sum: 1 }
    } 
  },

  // Stage 3: Sort by totalSpent in descending order
  { $sort: { totalSpent: -1 } }
]);
*/

console.log("Aggregation pipelines process and group data through consecutive filter/transform stages.");

// --- Write Your Notes/Observations Below ---
// (Use this space to write down your thoughts, experiment results, or key takeaways)






// --- Questions / Exercises for Practice ---
// Question 1: Write an aggregation pipeline that filters users who live in "Delhi", groups them by "age", and counts the number of users for each age group.
// Write your solution here:




// Question 2: Explain the purpose of the "$project" stage in MongoDB aggregation.
// Write your solution here:




