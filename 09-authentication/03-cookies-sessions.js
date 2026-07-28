/**
 * Topic: Cookies & Sessions
 * 
 * Introduction:
 *  * Cookies are small text files stored on the client browser. Sessions are server-side storage options that keep user state relative to a specific session ID stored in a cookie.
 * Analogy: A session is like a coat check room at a museum. They take your coat (data) and give you a plastic number tag (cookie/session ID). You carry the tag in your pocket. Whenever you return, you show the tag, and they fetch your specific coat.
 * 
 * Why do we use it?
 *  * HTTP is stateless. Without cookies or sessions, a user would have to enter their username and password on every single click/refresh.
 * 
 * Syntax:
 *  * Cookies: res.cookie("key", "val", { options });
 * Sessions: req.session.user = data;
 */

// --- Basic Example ---
// --- Mocking Cookie & Session handling in Express ---

/*
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = express();

app.use(cookieParser());
app.use(session({
  secret: 'session-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, maxAge: 60000 } // Secure requires HTTPS
}));

// Setting a cookie
app.get('/set-cookie', (req, res) => {
  res.cookie('username', 'karan_dev', { httpOnly: true });
  res.send('Cookie set!');
});

// Setting a session value
app.get('/login', (req, res) => {
  req.session.user = { id: 101, username: 'karan' };
  res.send('Session established!');
});
*/

console.log("Cookies and Sessions preserve state in stateless HTTP communications.");

// --- Write Your Notes/Observations Below ---
// (Use this space to write down your thoughts, experiment results, or key takeaways)






// --- Questions / Exercises for Practice ---
// Question 1: What does the "httpOnly" flag do in a cookie configuration, and why is it important for security?
// Write your solution here:




// Question 2: Compare cookies and JWT in terms of storing authentication state.
// Write your solution here:




