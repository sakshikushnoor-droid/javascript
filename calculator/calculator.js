// Created by Ratna Sakshi Kushnoor on October 30, 2026.
"use strict";

let choice;
let num1;
let num2;

choice = prompt(

    "A Simple Calculator\n" +

    "1. Adding Two Numbers\n" +

    "2. Subtracting Two Numbers\n" +

    "3. Multiplying Two Numbers\n" +

    "4. Dividing Two Numbers\n" +

    "5. Exit the Program\n" +

    "Enter your choice between 1 to 5 :"
);


    switch (choice) {
        case "1":
            num1 = Number(prompt("Enter the first number: "));
            num2 = Number(prompt("Enter the second number: "));
            alert("Sum: "+ (num1 + num2));
            break;
    
        case "2" :
            num1 = Number(prompt("Enter the first number: "));
            num2 = Number(prompt("Enter the second number: "));
            alert("Difference: "+ (num1 - num2));
            break;
        
        case "3" :
            num1 =  Number(prompt("Enter the first number: "));
            num2 = Number(prompt("Enter the second number: "));
            alert("Product: " + (num1 * num2));
            break;

        case "4" :
            num1 =  Number(prompt("Enter the first number: "));
            num2 = Number(prompt("Enter the second number: "));
            alert("Quotient: " + (num1 / num2));
            break;

        case "5" :
            alert ("Exiting the Program! Goodbye!");
            break;

        default:
            alert("Invalid Choice, Please select 1 through 5.");
            break;

    }




    

    