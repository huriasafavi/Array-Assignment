//question 1
// Create an array named fruits that contains the following string  elements: "apple", "banana", "mango", "orange";
var fruits = ["apple", "banana", "mango", "orange"];
console.log(fruits);
//question 2
// Declare an array named numbers that can contain only number  elements and initialize it with the values 10, 20, 30, and 40.
var numbers = [10, 20, 30, 40];
console.log(numbers);
//question 3
// Access the third element of the fruits array and assign it to a  variable named thirdFruit.
var thirdFruit = fruits[2];
console.log(thirdFruit);
//question 4
// Change the second element of the numbers array to 25.
var number = [10, 20, 30, 40];
number[1] = 25;
console.log(number);
//question 5
// Add the element "grape" to the end of the fruits array using the  method.
fruits.push("grapes");
console.log(fruits);
//question 6
// Remove the last element from the fruits array using the  method and assign it to a variable named lastFruit.
var lastFruit = fruits.pop();
console.log(lastFruit);
console.log(fruits);
//question 7
// Remove the first element from the fruits array using the  method and assign it to a variable named firstFruit.
var firstFruit = fruits.shift();
console.log(firstFruit);
console.log(fruits);
//question 8
// Add the element "kiwi" to the beginning of the fruits array using the method.
var fruitss = ["apple", "banana", "mango", "orange"];
fruits.unshift("kiwi");
console.log(fruits);
//question 9
// Remove 2 elements from the fruits array starting from index 1 using the method.
fruits.splice(1, 2);
console.log(fruits);
//question 10
// Insert the elements "pineapple" and "pear" at index 2 of the fruits array using the method.
fruits.splice(2, 0, "pineapple", "pear");
console.log(fruits);
//question 11
// Create a new array named citrusFruits that contains the first two elements of the fruits array using the method.
var citrusFruits = fruits.slice(0, 2);
console.log(citrusFruits);
//question 12
// Create a new array named lastTwoFruits that contains the last  two elements of the fruits array using the method.
var lastTwoFruits = fruits.slice(-2);
console.log(lastTwoFruits);
