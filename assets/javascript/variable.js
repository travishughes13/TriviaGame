// These variables control the text on the start page

var title = "Dandy Trivia";

$("#title").text(title);

var instructions = "Press the button below to test your space knowledge, baby";

$("#instructions").text(instructions);

var startButton = "Light my fire, baby";

$("#button1").text(startButton);

// Initial button states
var button2;
var button3;
var button4;
var button5;

// Initial right wrong count

var right;
var right = 0;

var wrong;
var wrong = 0;

// initial question number
var questionNumber;

var questionNumber = 0;

// All the questions
var question;

var question = ["What is the largest moon of Saturn?", "What is the largest planet in the solar system?",
				"What was the first artificial satellite?", "Who was the first man in space?",
				"What force bends light rays travelling through the universe?", 
				"Which planet has a day that lasts eight months?", "Which planet is the densest?",
				"Which planet has the Great Red Spot?", "Which of these is not a galaxy type?",
				"What galaxy is made of old stars?"];


// All the potential answers. Correct answers indexed at [4]
var answerSetOne;
var answerSetTwo;
var answerSetThree;
var answerSetFour;
var answerSetFive;
var answerSetSix;
var answerSetSeven;
var answerSetEight;
var answerSetNine;
var answerSetTen;
var answerSets;

var answerSetOne = ["Europa, baby", "Ganymeade, baby", "Eupraxia, baby", "Titan, baby", "Titan, baby"];
var answerSetTwo = ["Jupiter, baby", "Mars, baby", "Alpha Netraxi, baby", "Saturn, baby", "Jupiter, baby"];
var answerSetThree = ["GPS, baby", "Sputnik I, baby", "Haley, baby", "Voyager, baby", "Sputnik I, baby"];
var answerSetFour = ["Yuri Gagarin, baby", "Neil Armstrong, baby", "Buzz Aldrin, baby", "Luke Skywalker, baby", "Yuri Gagarin, baby"];
var answerSetFive = ["Love, baby", "Pressure, baby", "Gravity, baby", "Mass, baby", "Gravity, baby"];
var answerSetSix = ["Mercury, baby", "Pluto, baby", "Jupiter, baby", "Venus, baby", "Venus, baby"];
var answerSetSeven = ["Earth, baby", "Jupiter, baby", "Saturn, baby", "Mars, baby", "Earth, baby"];
var answerSetEight = [""];
var answerSetNine = ["Irregular, baby", "Spiral, baby", "Lenticular, baby", "Orbital, baby", "Orbital, baby"];
var answerSetTen = ["Irregular, baby", "Spiral, baby", "Lenticular, baby", "SO, baby", "Lenticular, baby"];
var answerSets = [answerSetOne, answerSetTwo, answerSetThree, answerSetFour, answerSetFive, answerSetSix, answerSetSeven,
				  answerSetEight, answerSetNine, answerSetTen];

// This gives the right answer
var theRightOneBaby;
var theRightOneBaby = answerSets[questionNumber][4];

// This hides the initial page when called
var pageHide = function() {
	$("section").css('background-image', 'none")');
	$("section").css('background-image', 'url("assets/images/image26.png")');
	$("#title").css("display", "none");
	$("#button1").css("display", "none");
};

// This shows the questions when called
var questionShow = function() {
	$("#timer-banner").css("display", "inline");
	$("#instructions").text(question[questionNumber]);
	$("#button2").css("display", "inline");
	$("#button3").css("display", "inline");
	$("#button4").css("display", "inline");
	$("#button5").css("display", "inline");
	pageTimer();
};

// This hides the questions when called
var questionHide = function() {
	$("#timer-banner").css("display", "none");
	$("#instructions").css("display", "none");
	$("#button1").css("display", "none");
	$("#button2").css("display", "none");
	$("#button3").css("display", "none");
	$("#button4").css("display", "none");
	$("#button5").css("display", "none");
};

// This shows the answer page when called
var answerShow = function() {
	$("#answer-display").css("display", "inline");
	$("#image-display").css("display", "inline");
	answerTimer();
};

// This is if the answer is right
var answerRight = function() {
	$("#answer-display").text("That's right, baby!!");
	$("#image-display").css('background-image', 'url("http://i.imgur.com/cQJQwkE.gif")');
};

// This is if the answer is wrong
var answerWrong = function() {
	$("#answer-display").text("The right answer was " + answerSetOne[4]);
	$("#image-display").css('background-image', 'url("http://68.media.tumblr.com/0866faf72391c268bc59bafde3725a68/tumblr_ogzqlz1svD1vxw3g6o1_500.gif")');
};

// This hides the answer page when called
var answerHide = function() {
	$("#answer-display").css("display", "none");
	$("#image-display").css("display", "none");
};

// This displays when all the questions have been answered
var gameOver = function() {
	$("#right").css("display", "inline");
	$("#right").text("You got " + right + " right, baby");

	$("#wrong").css("display", "inline");
	$("#wrong").text("You got " + wrong + " wrong, baby");

	$("#restart").css("display", "inline");
	$("#restart").text("Do you want to start over, baby?");
};

// This is called when the game is restarted
var gameRestart = function() {
	$("#right").css("display", "none");
	$("#wrong").css("display", "none");
	$("#restart").css("display", "none");
	right = 0;
	wrong = 0;
	questionShow();
};

// This is the general question page timer *Incomplete*
var pageTimer = function(){
	var number = 30;
    var intervalId;

    function run() {
      if (questionShow() === true) {
      intervalId = setInterval(decrement, 1000);
    }}

    function decrement() {
      number--;

	$("#timer-banner").html("<h3>" + number + "</h3>");

	if (number === 0 || questionHide() === true) {
    	stop();
      }

    function stop() {
      clearInterval(intervalId);
    }
    run();
}};

// This runs the answer page timer
var answerTimer = function(){
	var number = 10;
    var intervalId;

    function run() {
      if (questionHide() === true) {
      intervalId = setInterval(decrement, 1000);
    }}

    function decrement() {
      number--;

	if (number === 0 || questionShow() === true) {
    	stop();
      }

    function stop() {
      clearInterval(intervalId);
    }
    run();
}};

// This button starts the game
$("#button1").on('click', function(){
	pageHide();
	questionShow();
};

// This defines the value of the buttons
var button2 = answerSets[questionNumber][0];
$("#button2").text(button2);

var button3 = answerSets[questionNumber][1];
$("#button3").text(button3);

var button4 = answerSets[questionNumber][2];
$("#button4").text(button4);

var button5 = answerSets[questionNumber][3];
$("#button5").text(button5);


// This should define what happens when a button is clicked
$("#button2").on("click", function(){

	if ($("#button2").text() === theRightOneBaby) {

			questionHide();
			answerShow();
			answerRight();
			right += 1;
		}

	else {

		questionHide();
		answerShow();
		answerWrong();
		wrong += 1;
	}

$("#button3").on("click", function(){

	if ($("#button3").text() === theRightOneBaby) {

			questionHide();
			answerShow();
			answerRight();
			right += 1;
		}

	else {
		
		questionHide();
		answerShow();
		answerWrong();
		wrong += 1;
	}


$("#button4").on("click", function(){

	if ($("#button4").text() === theRightOneBaby) {

			questionHide();
			answerShow();
			answerRight();
			right += 1;
		}

	else {
		
		questionHide();
		answerShow();
		answerWrong();
		wrong += 1;
	}


$("#button5").on("click", function(){

	if ($("#button5").text() === theRightOneBaby) {

			questionHide();
			answerShow();
			answerRight();
			right += 1;
		}

	else {
		
		questionHide();
		answerShow();
		answerWrong();
		wrong += 1;
	}

if (right + wrong === 10) {
	gameOver();
};

$("#restart").on("click", function(){
	gameRestart();
})




















