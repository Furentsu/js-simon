// Asking the user how many numbers he/she is willing to try to remember.
let numbersToBeGenerated = parseInt(prompt("Choose how many numbers you want to be generated by the computer:"))

// Saving the chosen numbers into a variable.
let selectedNumbers = randomNumberGenerator(numbersToBeGenerated, 1, 100);
alert(selectedNumbers);

// After 30 seconds, asking the user to remember the numbers that have just been displayed in the previous alert message.
let startGame = setTimeout(function() {
    let userArray = getUserInput(numbersToBeGenerated);
    finalResult(selectedNumbers, userArray);
}, 30000);



// FUNCTIONS

// Function needed to generate and show the user some random numbers within a fixed interval, given the user's first input.
function randomNumberGenerator(num, min, max) {
    let generatedArray = [];
    while (generatedArray.length < num) {
        let generatedNumber = (Math.floor(Math.random() * (max - min + 1)) + min);
        if (!(generatedArray.includes(generatedNumber))) {
            generatedArray.push(generatedNumber);
        }
    }
    return generatedArray;
} 

// Function needed to prompt the user repeatedly for at least n times, where n = length of the array populated by randomly generated numbers (i.e first user's input, stored in the variable "numbersToBeGenerated").
function getUserInput(num) {
    let userArray = [];
    while (userArray.length < num) {
        let userInput = parseInt(prompt("Try to remember all the numbers you have just seen!"));
        if (!(userArray.includes(userInput))) {
            userArray.push(userInput);
        }
    }
    return userArray;
}

// Function needed to evaluate and display the final result.
function finalResult(originalArray, userArray) {
    let gotNumbers = [];
    let missedNumbers = [];
    for (let i=0; i < originalArray.length; i++) {
            if (originalArray.includes((userArray[i]))) {
                gotNumbers.push(userArray[i]);
            } else {
                missedNumbers.push(userArray[i]);
            }
    }
    if (gotNumbers.length == 0) {
        alert("Apparently, you do not have an exceptional memory...");
    } else if (gotNumbers.length < originalArray.length) {
        alert("You got " + gotNumbers.length + " number/s correctly out of " + originalArray.length + " ==> " + gotNumbers.toString() + ". You missed the following number/s: " + missedNumbers.toString()) + " .";
    } else {
        alert("You got them all! Congratulations!!");
    }
}