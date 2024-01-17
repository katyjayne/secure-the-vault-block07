/* Pseudocode: Steps for solving this exercise:
1. Create a string for the user saying: You have received this message because you have been chosen to open an important vault. Here is the secret combination:
2. Assign three variables that contain the correspoding result of a calculation using unique arithmetic operators.
3. Each variable must equal one of the following numbers: 10, 40, or 39.
4. Add comments throughout the code to explain each step.
5. Create a dialog box displaying the vault codes and message.
6. Submit files with your code, or a screenshot if the code with the pseudocode showing, or a GitHub link.
*/

// Created a string for the user as outlined in Step 1 above 
const message = "You have received this message because you have been chosen to open an important vault. Here is the secret combination: "
console.log(message);

// Assigned three variables that use arithemetic operators. Each one must equal one of the following: 10, 40, or 39.

// a will equal 10
let a = 5 * 2;
// b will equal 40
let b = 80 / 2;
// c will equal 39
let c = 40 - 1;

console.log(a);
console.log(b);
console.log(c);

// Created a dialog box that will display the message and vault codes as outlined in step 5
alert(`${message} ${a} - ${b} - ${c}. `);

/* Was showing my group how to create the alert without using template literals
alert(message + " - " + a + " - " + b + " - " + c);
*/