/**
 * Topic: Mongoose Validation
 * 
 * Introduction:
 *  * Validation is defined in the Schema Type definition. Mongoose has built-in validators and custom validators.
 * Analogy: Validation is like a strict entry gate scanner. It checks: Is the email actually formatted like an email? Is the password at least 8 characters long? If not, it rings the alarm and stops the record from entering.
 * 
 * Why do we use it?
 *  * Validation ensures bad or malicious data never contaminates your database, preserving the integrity of your application.
 * 
 * Syntax:
 *  * field: { type: String, required: [true, "Custom error msg"], minlength: 8 }
 */

// --- Basic Example ---
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  phoneNumber: {
    type: String,
    validate: {
      validator: function(v) {
        // Simple regex checking for 10 digit number
        return /\d{10}/.test(v);
      },
      message: props => `${props.value} is not a valid 10-digit phone number!`
    },
    required: [true, 'User phone number required']
  }
});

console.log("Custom validators ensure data integrity at the database model level.");

// --- Write Your Notes/Observations Below ---
// (Use this space to write down your thoughts, experiment results, or key takeaways)






// --- Questions / Exercises for Practice ---
// Question 1: Add a custom validator to an email schema field using a regular expression to verify email structure.
// Write your solution here:




// Question 2: What are built-in validators available for Number and String schema types?
// Write your solution here:




