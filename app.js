//Chapter-4 VARIABLE NAMES: LEGAL & ILLEGAL.......

//Question-1
//Declare 3 variables in one statement.
// var num1 = 10, num2 = 20, num3 = 30;

// document.write("The value of number 1 is " + num1 + "<br> ")
// document.write("The value of number 2 is " + num2 + "<br> ")
// document.write("The value of number 3 is " + num3 + "<br> ")


//Question-2
// Legal Variable Names:
// var1 (Valid: starts with a letter, number allowed after first character)
// myVariable (Valid: can include letters, numbers, and underscores)
// _underscoreVar (Valid: starts with an underscore)
// myVariable123 (Valid: can include letters and numbers, but not starting with a number)
// firstName (Valid: normal alphanumeric name)

// Illegal Variable Names:
// 123variable (Invalid: cannot start with a number)
// @variable (Invalid: special characters like @ are not allowed)
// var-123 (Invalid: hyphens - are not allowed in variable names)
// if (Invalid: reserved keyword in JavaScript)
// function (Invalid: reserved keyword in JavaScript)

//Question-3
//Display this in your browser
// var heading = "Rules for Naming JS Variables"
// var rule1 = "Variable names can only contain, numbers, $ and _ . For example: $my_1stVariable"
// var rule2 = "Variable must begin with a letter, $ or _ . For example: $name, _name or name"
// var rule3 = "Variable names are case sensitive"
// var rule4 = "Variable names should not be JS keywords"


// document.write("<h1>" + heading + "</h1> <br> ")
// document.write("<p>" + rule1 + "</p>")
// document.write("<p>" + rule2 + "</p>")
// document.write("<p>" + rule3 + "</p>")
// document.write("<p>" + rule4 + "</p>")

//Chapter-5 MATH EXPRESSIONS.......

//Question-1
//   // Declare variables and assign values
//   var num1 = 3; // First number
//   var num2 = 5; // Second number

//   // Add the two numbers
//   var sum = num1 + num2;

//   // Display the result using document.write
//   document.write("The sum of " + num1 + " and " + num2 + " is: " + sum);

 //Question-2
  // Declare and initialize two numbers
//   var num1 = 15; // You can change this value
//   var num2 = 5;  // You can change this value

//   // Perform arithmetic operations
//   var sum = num1 + num2;          // Addition
//   var difference = num1 - num2;  // Subtraction
//   var product = num1 * num2;     // Multiplication
//   var difference = num1 / num2;    // Division
//   var modulus = num1 % num2;     // Modulus

//   // Display the results in the browser
// document.write("The sum of " + num1 + " And " + num2 + " is " + sum + " <br> <br>" );
// document.write("The sum of " + num1 + " And " + num2 + " is " + difference + " <br> <br>  ");
// document.write("The sum of " + num1 + " And " + num2 + " is " + product + " <br> <br>  ");
// document.write("The sum of " + num1 + " And " + num2 + " is " + difference + " <br> <br>  ");
// document.write("The sum of " + num1 + " And " + num2 + " is " + modulus + " <br> <br>  ");

 //Question-3
//   // a. Declare a variable
//   var myVariable;


//   // b. Show the value of the variable after declaration
//   document.write("Value after variable declaration is: " + myVariable + "<br>");



//   // c. Initialize the variable with some number
//   myVariable = 5;



//   // d. Show the initial value
//   document.write("Initial value: " + myVariable + "<br>");



//   // e. Increment the variable
//   myVariable++;



//   // f. Show the value after increment
//   document.write("Value after increment is: " + myVariable + "<br>");



//   // g. Add 7 to the variable
//   myVariable += 7;



//   // h. Show the value after addition
//   document.write("Value after addition is: " + myVariable + "<br>");



//   // i. Decrement the variable
//   myVariable--;


//   // j. Show the value after decrement
//   document.write("Value after decrement is: " + myVariable + "<br>");



//   // k. Calculate the remainder after dividing the variable by 3
//   var remainder = myVariable % 3;


//   // l. Show the remainder
//   document.write("The remainder is: " + remainder + "<br>");

//Question-4
// // Step 1: Store the cost of one movie ticket in a variable
// var ticketPrice = 600;

// // Step 2: Calculate the cost of buying 5 tickets
// var totalCost = ticketPrice * 5;

// // Step 3: Display the total cost in the browser
// document.write("The cost of buying 5 movie tickets is: " + totalCost + " PKR");

//Question-5
 // Number for multiplication
//  var number = 4;

//    // Showing the multiplication table manually
//    document.write( number + " x 1 = " + (number * 1) + "<br> ");
//    document.write( number + " x 2 = " + (number * 2 ) + " <br> ");
//    document.write( number + " x 3 = " + (number * 3 ) + " <br> ");
//    document.write( number + " x 4 = " + (number * 4 ) + " <br> ");
//    document.write( number + " x 5 = " + (number * 5 ) + " <br> ");
//    document.write( number + " x 6 = " + (number * 6 ) + " <br> ");
//    document.write( number + " x 7 = " + (number * 7 ) + " <br> ");
//    document.write( number + " x 8 = " + (number * 8 ) + " <br> ");
//    document.write( number + " x 9 = " + (number * 9 ) + " <br> ");
//    document.write( number + " x 10 = " + (number * 10 ) + " <br> ");

//Question-6
// Step 1: Store a Celsius temperature into a variable
// var celsius = 25;

// // Step 2: Convert it to Fahrenheit
// var fahrenheit = (celsius * 9 / 5) + 32;

// // Step 3: Display Celsius to Fahrenheit result
// document.write(celsius + "°C is " + fahrenheit + "°F <br>");

// // Step 4: Store a Fahrenheit temperature into a variable
// var fahrenheitTemp = 77;

// // Step 5: Convert it to Celsius
// var celsiusConverted = (fahrenheitTemp - 32) * 5 / 9;

// // Step 6: Display Fahrenheit to Celsius result
// document.write(fahrenheitTemp + "°F is " + celsiusConverted + "°C");

//Question-7
//  // a. Price of item 1
//  var priceItem1 = 500; // Price of item 1 in PKR

//  // b. Price of item 2
//  var priceItem2 = 300; // Price of item 2 in PKR

//  // c. Ordered quantity of item 1
//  var quantityItem1 = 2; // Ordered quantity of item 1

//  // d. Ordered quantity of item 2
//  var quantityItem2 = 3; // Ordered quantity of item 2

//  // e. Shipping charges
//  var shippingCharges = 100; // Shipping charges in PKR

//  // Step 1: Calculate the total cost of each item
//  var totalCostItem1 = priceItem1 * quantityItem1; // Total cost of item 1
//  var totalCostItem2 = priceItem2 * quantityItem2; // Total cost of item 2

//  // Step 2: Calculate the total cost including shipping
//  var totalCostBeforeShipping = totalCostItem1 + totalCostItem2; // Total before shipping
//  var finalTotalCost = totalCostBeforeShipping + shippingCharges; // Final total cost including shipping

//  // Step 3: Display the receipt
//  document.write("<h2>Receipt</h2>");
//  document.write("Item 1: Price = " + priceItem1 + " PKR, Quantity = " + quantityItem1 + "<br>");
//  document.write("Total cost of Item 1: " + totalCostItem1 + " PKR<br><br>");
 
//  document.write("Item 2: Price = " + priceItem2 + " PKR, Quantity = " + quantityItem2 + "<br>");
//  document.write("Total cost of Item 2: " + totalCostItem2 + " PKR<br><br>");
 
//  document.write("Shipping Charges: " + shippingCharges + " PKR<br><br>");
 
//  document.write("Total Cost Before Shipping: " + totalCostBeforeShipping + " PKR<br>");
//  document.write("Final Total Cost (including shipping): " + finalTotalCost + " PKR<br>");
