//Part A #1: Initialize variables to store the following arrays. Remember to use descriptive names.

let protein = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grain = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let veggie = ['peas', 'green beans', 'kale','edamame', 'broccoli', 'asparagus'];
let bevy = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let dessert = ['apple', 'banana', 'more kale','ice cream', 'chocolate', 'kiwi'];

let pantry = [protein, grain, veggie, bevy, dessert];
let meal = [];

let astronauts = ['Tom', 'Sally', 'Neil', 'Elon', 'Christy', 'Juan'];


//Part A #2: Construct a for loop that assembles a meal for each of 6 astronauts.

/*for (let j = 0; j < 6; j++) {
for (let i = 0; i < pantry.length; i++) {
      meal.push(pantry[i][j]);
  }   
  }

console.log(meal.join());
*/

//LC solution
for (let i = 0; i < 6; i++) {
    let meal = [protein[i], grain[i], veggie[i], bevy[i], dessert[i]];
    console.log(meal);
}


//Part C #5: Using a while loop, ask the user to select the number of meals to assemble.  Validate the input to make sure it is an integer from 1 - 6.
const input = require('readline-sync');
let num = input.question('How many meals need to be made?')
num = Number(num);
while (num <= 6 && num > 0) {
  
}

//Skill boosts: 
// a. Use string formatting to print something more interesting than “[‘chicken’, ‘rice’, ‘peas’, ‘juice’, ‘apple’]” for the meal outputs.
// b. Use an “array of arrays” to store the food options in a ‘pantry’.
// c. Modify your code to check each meal for kale.  If present, after the meal output add, “Don’t worry, you can have double chocolate tomorrow.”