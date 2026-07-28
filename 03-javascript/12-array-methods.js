/**
 * !Topic: Array Methods (map, filter, reduce, find, forEach)
 * 
 * ?Introduction:
 *  * Array methods are built-in functions in JavaScript to manipulate and transform arrays easily.
 * Analogy: map is like a factory machine changing every item on a conveyor belt; filter is like a sieve letting only items matching a condition through; reduce is like a trash compactor squeezing all items into a single block of output.
 * 
 * ?Why do we use it?
 *  * Instead of writing long loops to modify arrays, these declarative methods let you express what you want to achieve directly and cleanly.
 * 
 * ?Syntax:
 *  * arr.map(item => newItem)
 * arr.filter(item => condition)
 * arr.reduce((acc, curr) => newVal, initialVal)
 */

// --- Basic Example ---
const numbers = [1, 2, 3, 4, 5];

// 1. forEach: Simple iteration (no return value)
numbers.forEach(num => console.log("Number:", num));

// 2. map: Transforms each element, returns a new array
const squared = numbers.map(num => num * num);
console.log("Squared numbers:", squared);

// 3. filter: Filters elements based on condition, returns new array
const evens = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evens);

// 4. find: Finds the first element matching condition
const firstGreaterThanThree = numbers.find(num => num > 3);
console.log("First number > 3:", firstGreaterThanThree);

// 5. reduce: Reduces array to a single value (e.g., sum)
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum of numbers:", sum);




// --- Questions / Exercises for Practice ---
// Question 1: Given an array of product objects [{name: "A", price: 10}, {name: "B", price: 20}], use map to get an array of only prices.
// Write your solution here:




// Question 2: Use filter to filter out products that cost less than 15.
// Write your solution here:




