
var user = prompt('what is your name?');
console.log('user name:', user);
if (user === null) {
    user = 'Guest';
}
alert('Hi there ' + user + 'I\'m going to ask you few questions.');
var correctanswers = 0;
var totalquestions = 0;
var Question1 = prompt(user + ' My favorite color is blue. Please answer yes/no Or y/n');
console.log('user answer1:', Question1);
totalquestions++;
if (Question1 != null && Question1 != '') {
    if (Question1.toUpperCase() === 'Y' || Question1.toUpperCase() === 'YES') {
        alert('You are correct. Lets move on 4 more to go');
        correctanswers++;
    }
    else if (Question1.toUpperCase() === 'N' || Question1.toUpperCase() === 'NO') {
        alert('You are wrong. Lets try another question, we have 4 more. All the best!!');
    }
}
else {
    alert('Please answer only in yes/no Or y/n. All the best!!');
}

var Question2 = prompt(' My favorite Car is Harrier.Please answer yes/no Or y/n');
console.log('user answer2:', Question2);
totalquestions++;
if (Question2.toUpperCase() === 'Y' || Question2.toUpperCase() === 'YES') {
    alert('You are correct. Lets move on we have 3 more');
    correctanswers++;
}
else if (Question2.toUpperCase() === 'N' || Question2.toUpperCase() === 'NO') {
    alert('You are wrong. Lets try another question, we have 3 more. All the best!!');
}
else {
    alert('Please answer only in yes/no Or y/n. All the best!!');
}

var Question3 = prompt(' My favorite Book is HarryPotter.Please answer yes/no Or y/n');
console.log('user answer3:', Question3);
totalquestions++;
if (Question3.toUpperCase() === 'N' || Question3.toUpperCase() === 'NO') {
    alert('You are correct. Lets move on we have 2 more');
    correctanswers++;
}
else if (Question3.toUpperCase() === 'Y' || Question3.toUpperCase() === 'YES') {
    alert('You are wrong. Lets try another question, we have 2 more. All the best!!');
}
else {
    alert('Please answer only in yes/no Or y/n. All the best!!');
}
var Question4 = prompt(' My favorite Cartoon character is Jerry.Please answer yes/no Or y/n');
console.log('user answer4:', Question4);
totalquestions++;
if (Question4.toUpperCase() === 'Y' || Question4.toUpperCase() === 'YES') {
    alert('You are correct. Lets move on we have one more');
    correctanswers++;
}
else if (Question4.toUpperCase() === 'N' || Question4.toUpperCase() === 'NO') {
    alert('You are wrong. Lets try another question, we have 1 more. All the best!!');
}
else {
    alert('Please answer only in yes/no Or y/n. All the best!!');
}

var Question5 = prompt(' My favorite sport is cricket.Please answer yes/no Or y/n');
console.log('user answer5:', Question5);
totalquestions++;
if (Question5.toUpperCase() === 'N' || Question5.toUpperCase() === 'NO') {
    alert('You are correct. We are done with the questions. Let me provide more details about me in my profile');
    correctanswers++;
}
else if (Question5.toUpperCase() === 'Y' || Question5.toUpperCase() === 'YES') {
    alert('You are wrong. Lets try another question, Let me provide more details about me in my profile');
}
else {
    alert('Please answer only in yes/no Or y/n. Let me provide more details about me in my profile');
}

if (parseInt(correctanswers) > 0) {
    alert('Hi ' + user + '! You have guessed ' + correctanswers + ' correctly out of ' + totalquestions + '.<br> ' + (correctanswers / totalquestions * 100) + ' % of your guesses are correct.');
}
else {
    alert('Hi ' + user + '! Sorry, none of your guesses are correct, try again');
}


var fav_num;
var numtimes = 1;

while (fav_num !== 79) {
    fav_num = parseInt(prompt('Can you guess my favorite number between 1 to 100?'));

    if (fav_num < 30) {
        console.log('user answer6:', fav_num);
        alert('Sorry! You guessed too low! You can double it up.');
        numtimes++;
    } else if (fav_num >= 30 && fav_num <= 78) {
        console.log('user answer6:', fav_num);
        alert('Sorry! You guessed low!');
        numtimes++;
    } else if (fav_num > 79 && fav_num < 100) {
        console.log('user answer6:', fav_num);
        alert('Sorry! You guessed high! But you are close enough.');
        numtimes++;
    } else if (fav_num >= 100) {
        console.log('user answer6:', fav_num);
        alert('Sorry! You guessed Too high!');
        numtimes++;
    } else if (isNaN(fav_num) || fav_num === null) {
        console.log('user answer6:', fav_num);
        alert('Please enter an actual number');
        numtimes++;
    }
}
alert('Total number of guesses: ' + numtimes + '.');
alert('Hi ' + user + 'It took ' + numtimes + ' guesses until you got it ');


var birds = ["eagle", "kingfisher", "peacock", "parrot", "woodpecker", "swift"];
var chance = 1;
for (i = 0; i < birds.length; i++) {
    alert('This is your guess number ' + chance + '.');
    var fav_bird = prompt('What is one of my favorite birds?');
    console.log('user answer7:', fav_bird);
    if (birds.includes(fav_bird.toLowerCase())) {
        alert('Yes, it is right!!!! You got it corretc on the ' + chance + ' chance.');
        chance++;
        break;
    }
    else {
        alert('Incorrect guess - you are running out of chances. Think!!');
        chance++;
    }   
}
    console.log('question 8:', birds);
    alert('Possible answers are ' + birds + '.');