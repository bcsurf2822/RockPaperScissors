//Possible outcomes are rock destroys scissors
//Scissors cut paper
//Paper covers rock--tie ends in a draw
//1. Get users choice
//2. Get the computers choice
//3. Compare the two choices and determine winner
//Start program and display the results

//1.Getting Users Choic
const getUserChoice = function (userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock') {
        return userInput;
    } else if (userInput === 'paper') {
        return userInput;
    } else if (userInput === 'scissors') {
        return userInput
    } else {
        console.log('Error must return value');
    };
};

//2. Getting Computers Choice
const getComputerChoice = function () {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
};

//A tie, and other variations

const determineWinner = function (userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'The Game is a tie';
    };
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The computer has won';
        } else {
            return 'The user has won';
        }
    };
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'The computer has won';
        } else {
            return 'The user has won';
        }
    };
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'The computer has won';
        } else {
            return 'The user has won';
        }
    };
};


const playGame = function () {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice ();
    console.log(userChoice);
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
    };

playGame();
