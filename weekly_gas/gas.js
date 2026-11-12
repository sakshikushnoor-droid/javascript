/* Name Ratna Sakshi, Date: Nov, 11 2026. */

"use strict";
let userName = prompt("Enter your name");

if (userName === null) {
    alert("You've cancelled the name prompt.")
}
else {
    userName = userName.trim();

    while (userName === "") {
        userName = prompt("Please enter your name:")
    
    
    if (userName === null) {
        alert("You've cancelled the name prompt.");
    }
    else {
    userName = userName.trim();
  }
}
}

// Funtion

function getGasAverage() {

    let count = 0;
    let total = 0;
    let goodGasData = 0;
    let average = 0;

    let gasAmount = Number(prompt("Enter your first week's gas total. Enter -1 when you are done."));

while (gasAmount !== -1) {
    
    if (isNaN(gasAmount)) {
        gasAmount = Number(prompt("Invalid entry. Please enter your gas total:"));
    }
    else {
        total += gasAmount;
        count++;

        gasAmount = Number(prompt("Enter your next week's gas total. Enter -1 when you're done."));
    }
  }
  //Calculate Average
  if (count === 0) {
    average = 0;
  }
  else {
    average = total / count;
  }

  // Display the results
    alert(userName + "'s average weekly gas bill is $" + average.toFixed(2));

    alert(userName + " entered " + count + " entries.");
}

getGasAverage();