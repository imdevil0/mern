/**
 * Topic: JWT (JSON Web Tokens)
 * 
 * Introduction:
 *  * JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.
 * Analogy: JWT is like a secure concert wristband. Once you show your ID at the gate (login), the guard wraps a signed wristband (token) around your arm. For every subsequent event or ride, you just show your wristband instead of re-verifying your ID.
 * 
 * Why do we use it?
 *  * JWTs allow stateless authentication. The server doesn't need to keep session records in memory; it can verify credentials just by checking the cryptographic signature of the token.
 * 
 * Syntax:
 *  * const jwt = require("jsonwebtoken");
 * const token = jwt.sign(payload, secret, options);
 * const decoded = jwt.verify(token, secret);
 */

// --- Basic Example ---
// Simulating JWT signing and verification (Conceptual)
const jwt = require('jsonwebtoken');

const SECRET_KEY = "my_super_secret_key";
const userPayload = { userId: 123, role: "editor" };

// 1. Sign (Generate) Token
const token = jwt.sign(userPayload, SECRET_KEY, { expiresIn: '1h' });
console.log("Signed JWT Token:\n", token);

// 2. Verify Token
try {
  const decoded = jwt.verify(token, SECRET_KEY);
  console.log("\nDecoded Payload:", decoded);
} catch (error) {
  console.error("Token verification failed:", error.message);
}

// --- Write Your Notes/Observations Below ---
// (Use this space to write down your thoughts, experiment results, or key takeaways)






// --- Questions / Exercises for Practice ---
// Question 1: Write an Express middleware that extracts a Bearer token from the Authorization header and verifies it.
// Write your solution here:




// Question 2: What are the three parts of a JWT and what does each contain?
// Write your solution here:




