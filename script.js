var numbers = [1, 2, 3, "4", 4, 5, 6, 7, 8, 9, 10, 11];

numbers.push("Not a number");
numbers.push("New line");
numbers.push("Developer2700");

// console.log(numbers[0]);

/* for (var i = 0; i < numbers.length; i++) {
    console.log(i);
    console.log(numbers[i]);
    if (numbers[i] % 2 === 0) {
    console.log(numbers[i]); 
  }
}
*/

/* for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    continue;
  }
  console.log(numbers[i]);
}
*/

/*for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    continue;
  }
  console.log(numbers[i]); // Displays an even number
}
*/

numbers.push("String");

for (var i = 0; i < numbers.length; i++) {
  if (typeof numbers[i] === "string") {
    // break;
    continue;
  }
  console.log(numbers[i]); // Displays an even number
}
