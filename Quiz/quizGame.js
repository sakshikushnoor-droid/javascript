//  Author : Ratna Sakshi Kushnoor
// Date : "10-23-2026"

"use strict"

// Initialize the score.
let score = 0;

// Question 1
let answer1 = prompt("What is 5 + 3?");
if (answer1 === "8") {
    score++;
}

// Question 2
let answer2 = prompt("What is 10-4?");
if (answer2 === "6") {
    score++;
}

// Question 3
let answer3 = prompt("What is 4 x 3?");
if (answer3 === "12") {
    score++;
}

//Question 4
let answer4 = prompt("What is 20 ÷ 5?");
if (answer4 === "4") {
    score++;
}

// Question 5
let answer5 = prompt("What is your favorite animal?")
if (answer5 === "cat") {
    score++;
}

let percentage = (score / 5) * 100;
alert("Your final score is: " + score + " out of 5");
alert("Your score percentage is: "+ percentage + "%");

if (score === 3) {
    alert("Good Job! You've score 3 out of 5!");
} else if (score >= 4) {
    alert("Amazing Work!");
} else {
    alert("Keep Practicing!, You can do it!");
}
