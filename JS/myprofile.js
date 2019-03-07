"use strict";

var counter1 = 0;
var counter2 = 0;
var retryCounter = 0;
var correctAnsCounter = 0;
var question1 = "My favorite color is blue. Please answer yes/no Or y/n"
var question2 = "My favorite Car is Harrier.Please answer yes/no Or y/n"
var question3 = "My favorite Book is HarryPotter.Please answer yes/no Or y/n";
var question4 = "My favorite Cartoon character is Jerry.Please answer yes/no Or y/n";
var question5 = "My favorite sport is cricket.Please answer yes/no Or y/n";
var question6 = "What is one of my favorite birds?";
var questions = [question1, question2, question3, question4, question5, question6];

var answers = {
    colour: "y",
    car: "y",
    book: "n",
    cartoon: "y",
    sport: "n",
    birds: ["eagle", "kingfisher", "peacock", "parrot", "woodpecker", "swift"]
}

var userName = prompt('what is your name?');
console.log('user name:', userName);
if (userName === null || " ") {
    userName = 'Guest';
}

alert("Hi " + userName + ", let's play a little guessing game About Me!!.");
for (counter2 = 0; counter2 < questions.length; counter2++) {

    var guessed = prompt(questions[counter2]);
    console.log(guessed);

    if (counter2 === questions.length - 2) {
        var fav_num;
        counter1 = 1;

        while (fav_num !== 79) {
            fav_num = parseInt(prompt('Can you guess my favorite number between 1 to 100?'));

            if (fav_num < 30) {
                console.log('user answer6:', fav_num);
                alert('Sorry! You guessed too low! You can double it up.');
                counter1++;
            } else if (fav_num >= 30 && fav_num <= 78) {
                console.log('user answer6:', fav_num);
                alert('Sorry! You guessed low!');
                counter1++;
            } else if (fav_num > 79 && fav_num < 100) {
                console.log('user answer6:', fav_num);
                alert('Sorry! You guessed high! But you are close enough.');
                counter1++;
            } else if (fav_num >= 100) {
                console.log('user answer6:', fav_num);
                alert('Sorry! You guessed Too high!');
                counter1++;
            } else if (isNaN(fav_num) || fav_num === null) {
                console.log('user answer6:', fav_num);
                alert('Please enter an actual number');
                counter1++;
            }
        }
        alert('Total number of guesses: ' + counter1 + '.');
        alert('Hi ' + userName + 'It took ' + counter1 + ' guesses until you got it ');

    } 
    
    else {
        var isCorrect = checkAnswer(counter2 + 1, guessed);
        console.log("Is answer correct:" + isCorrect)
        if (isCorrect === "Y") {
            correctAnsCounter++;
            if (counter2 < questions.length - 1) {
                alert("You guessed it right. Let's move to the next one!")
            } else {
                alert("You guessed it right.")
            }
        } else {
            tryAgain(counter2);
        }
    }
}
alert("You correctly guessed " + correctAnsCounter + " out of " + questions.length + ". Thanks for playing the game!");


/* Function declarations */
function getUserName() {
    var name = prompt("What's your name?")
    console.log(name);
    return name;
}

function checkAnswer(questionNum, input) {
    var correctAns = "N";

    if (input === null || input === "") {
        correctAns = "N";
    } else {

        if (questionNum === 1 && input.toLowerCase().substring(0, 1) === answers.colour) {
            correctAns = "Y";
        }

        if (questionNum === 2 && input.toLowerCase().substring(0, 1) === answers.car) {
            correctAns = "Y";
        }

        if (questionNum === 3 && input.toLowerCase().substring(0, 1) === answers.book) {
            correctAns = "Y";
        }

        if (questionNum === 4 && input.toLowerCase().substring(0, 1) === answers.cartoon) {
            correctAns = "Y";
        }

        if (questionNum === 5 && input.toLowerCase().substring(0, 1) === answers.sport) {
            correctAns = "Y";
        }

        if (questionNum === 6 && answers.birds.includes(input.toLowerCase())) {
            correctAns = "Y";
        }
    }
    return correctAns;
}

function tryAgain(qNum) {
    var tryAgain = "You guessed it wrong.";
    var nextQuestion = "No problem, let's go for the next question."
    if (counter2 < questions.length - 1) {
        var tryAgain = tryAgain + " " + nextQuestion;
    }
    alert(tryAgain);
}