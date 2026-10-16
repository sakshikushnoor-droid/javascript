"use strict";
// 1. Welcome message
alert("Welcome to the Adventure Realm! Let's create your hero!")

//2. Character Name
const characterName = prompt("What is your character's name?")

//3. Pet / Companion
const pet = prompt(`What kind of pet does ${characterName} have?(dragon, wolf, robot, unicorn, phoenix, etc.)`,"dragon");

//4. Super Power
const superpower = prompt (`What is ${characterName}'s special superpower?`);

//5. Likes fighting monsters
const likesFighting = confirm(`Does ${characterName} like fighting monsters? click OK for YES click cancel for NO`);

//6. Loading / preparing message
alert(`Gathering magic for ${characterName}... almost ready!`);


// 7. Final character story
alert(`====================================
       YOUR HERO'S PROFILE
====================================

Name: ${characterName}
Pet: ${pet}
Superpower: ${superpower}
Monster Fighter? ${likesFighting ? "Yes" : "No"}

${characterName} begins an amazing adventure with their loyal ${pet} by their side. Together, they use ${superpower} to face whatever challenges come their way!

====================================`);
