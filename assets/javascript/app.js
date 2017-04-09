// These variables control the text on the stat page

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

// This function sets up the question page
var initialize = function(){
	$("#timer-banner").css("display", "inline");
	$("section").css('background-image', 'none")');
	$("section").css('background-image', 'url("assets/images/image26.png")');
	$("#title").css("display", "none");
	$("#button1").css("display", "none");
	$("#button2").css("display", "inline");
	$("#button3").css("display", "inline");
	$("#button4").css("display", "inline");
	$("#button5").css("display", "inline");
};

// This will clear out the screen so the congrats or dumdum screens can be displayed
var answerScreen = function () {
	questionNumber += 1;
	right += 1;
	$("#instructions").css("display", "none");
	$("#button1").css("display", "none");
	$("#button2").css("display", "none");
	$("#button3").css("display", "none");
	$("#button4").css("display", "none");
	$("#button5").css("display", "none");
};

// This is the third 'screen'


// This starts the game
$("#button1").on('click', function(){

	initialize();

	$("#instructions").text(question[questionNumber]);

	var theRightOneBaby = answerSetOne[4];

	var button2 = answerSetOne[0];
	$("#button2").text(button2);

	var button3 = answerSetOne[1];
	$("#button3").text(button3);

	var button4 = answerSetOne[2];
	$("#button4").text(button4);

	var button5 = answerSetOne[3];
	$("#button5").text(button5);
	console.log($("#button5").text());

	var congrats = function(){
	answerScreen();
	$("#answer-display").css("display", "inline");
	$("#answer-display").text("That's right, baby!!");
	$("section").css('background-image', 'none")');
	$("#image-display").css("display", "inline");
	$("#image-display").css('background-image', 'url("http://i.imgur.com/cQJQwkE.gif")');
	};

	var dumdum = function() {
	answerScreen();
	$("#answer-display").css("display", "inline");
	$("#answer-display").text("You dumb. The right answer was " + answerSetOne[4]);
	$("section").css('background-image', 'none")');
	$("#image-display").css("display", "inline");
	$("#image-display").css('background-image', 'url("http://68.media.tumblr.com/0866faf72391c268bc59bafde3725a68/tumblr_ogzqlz1svD1vxw3g6o1_500.gif")');
	};

	$("#button2").on("click", function(){

		if ($("#button2").text() === theRightOneBaby) {
			congrats();
		}
		else {(dumdum()
			)};
		});

	$("#button3").on("click", function(){

		if ($("#button3").text() === theRightOneBaby) {
			congrats();
		}
		else {(dumdum()
			)};
		});

	$("#button4").on("click", function(){

		if ($("#button4").text() === theRightOneBaby) {
			congrats();
		}
		else {(dumdum()
			)};
		});
	$("#button5").on("click", function(){

		if ($("#button5").text() === theRightOneBaby) {
			congrats();
		}
		else {(dumdum()
			)};
		});

});