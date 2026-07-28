/**
 * !Topic: Loops (for, while, do-while)
 * 
 * ?Introduction:
 *  * Loops are used to execute a block of code repeatedly as long as a specified condition is true.
 * Analogy: Loops are like running laps on a athletic track. You start at lap 1, and you keep running as long as your lap count is less than or equal to 10.
 * 
 * ?Why do we use it?
 *  * Loops prevent writing repetitive code. Instead of printing "Hello" 100 times manually, a loop can do it in 3 lines.
 * 
 * ?Syntax:
 *  * for (initialization; condition; increment/decrement) { ... }
 * while (condition) { ... }
 */

// --- Basic Example ---
// 1. For Loop: Used when we know how many times we want to loop
console.log("For Loop:");
for (let i = 1; i <= 5; i++) {
  console.log("Lap number:", i);
}

// 2. While Loop: Used when the number of loops is dynamic/unknown
console.log("\nWhile Loop:");
let count = 1;
while (count <= 3) {
  console.log("Count is:", count);
  count++;
}

// 3. Do-While Loop: Guarantees the code executes at least once
console.log("\nDo-While Loop:");
let num = 10;
do {
  console.log("This will print at least once. Num:", num);
  num++;
} while (num < 5);



// --- Questions / Exercises for Practice ---
// Question 1: Write a loop that prints only even numbers from 1 to 20.
// Write your solution here:




// Question 2: Write a while loop that keeps doubling a starting number until it exceeds 100.
// Write your solution here:




