/**
 * Topic: Password Hashing with Bcrypt
 * 
 * Introduction:
 *  * Password hashing is a cryptographic method that turns a plain-text password into a fixed-length string of characters (a hash) that cannot be reversed.
 * Analogy: Hashing is like putting a key through a meat grinder. You get a ground-up key (hash) that is impossible to reconstruct into the original key. However, if you run the exact same key through the grinder again, it produces the same pattern, allowing validation.
 * 
 * Why do we use it?
 *  * If a database is leaked or hacked, storing plain-text passwords exposes everyone. Hashed passwords ensure the leaked data is useless to hackers.
 * 
 * Syntax:
 *  * const bcrypt = require("bcrypt");
 * const hash = await bcrypt.hash(password, saltRounds);
 * const isMatch = await bcrypt.compare(password, hash);
 */

// --- Basic Example ---
const bcrypt = require('bcrypt');

async function demoPasswordHashing() {
  const plainPassword = "SecretPassword123";
  const saltRounds = 10; // Computational difficulty

  // 1. Hashing the password
  const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
  console.log("Plain Text:", plainPassword);
  console.log("Hashed Password:", hashedPassword);

  // 2. Comparing inputs
  const correctMatch = await bcrypt.compare("SecretPassword123", hashedPassword);
  const wrongMatch = await bcrypt.compare("WrongPassword", hashedPassword);

  console.log("Match correct password:", correctMatch); // true
  console.log("Match incorrect password:", wrongMatch);  // false
}

demoPasswordHashing();

// --- Write Your Notes/Observations Below ---
// (Use this space to write down your thoughts, experiment results, or key takeaways)






// --- Questions / Exercises for Practice ---
// Question 1: Explain why salt is added during password hashing (what problem does salting solve?).
// Write your solution here:




// Question 2: What is the recommended range for saltRounds, and why shouldn't it be too high or too low?
// Write your solution here:




