/**
 * Topic: MVC Architecture in Express
 * 
 * Introduction:
 *  * MVC (Model-View-Controller) is a design pattern that separates an application into three main logical components: the Model, the View, and the Controller.
 * Analogy: In a restaurant, the Model is the pantry/ingredients (database), the View is the food plating presentation (frontend UI), and the Controller is the chef (backend logic) who takes ingredients and transforms them into meals.
 * 
 * Why do we use it?
 *  * MVC structures your codebase, making it modular, scalable, easy to maintain, and testable as teams and features grow.
 * 
 * Syntax:
 *  * Folders:
 * /models - schema definitions
 * /controllers - business logic handlers
 * /routes - route endpoint mappings
 */

// --- Basic Example ---
// --- Simulating MVC Structure in Comments ---

/*
// 1. File: models/userModel.js (Model)
const users = []; // Mock database array
exports.findAll = () => users;
exports.create = (user) => { users.push(user); return user; };
*/

/*
// 2. File: controllers/userController.js (Controller)
const UserModel = require('../models/userModel');

exports.getUsers = (req, res) => {
  const data = UserModel.findAll();
  res.status(200).json(data);
};

exports.addUser = (req, res) => {
  const newUser = UserModel.create(req.body);
  res.status(201).json(newUser);
};
*/

/*
// 3. File: routes/userRoutes.js (Routes)
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getUsers);
router.post('/', userController.addUser);

module.exports = router;
*/

console.log("MVC divides your codebase into Model (data), View (UI), and Controller (logic).");

// --- Write Your Notes/Observations Below ---
// (Use this space to write down your thoughts, experiment results, or key takeaways)






// --- Questions / Exercises for Practice ---
// Question 1: What are the main benefits of splitting logic into controllers instead of writing it all in routes?
// Write your solution here:




// Question 2: Draw or detail a folder structure that implements MVC in an Express codebase.
// Write your solution here:




