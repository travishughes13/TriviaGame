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

var right = 0;

var wrong = 0;

// initial question number

var questionNumber = 0;

// All the questions

var question = ["What is the largest moon of Saturn?", "What is the largest planet in the solar system?",
				"What was the first artificial satellite?", "Who was the first man in space?",
				"What force bends light rays travelling through the universe?", 
				"Which planet has a day that lasts eight months?", "Which planet is the densest?",
				"Which planet has the Great Red Spot?", "Which of these is not a galaxy type?",
				"What galaxy is made of old stars?"];


// All the potential answers. Correct answers indexed at [4]

var answerSetOne = ["Europa, baby", "Ganymeade, baby", "Eupraxia, baby", "Titan, baby", "Titan, baby"];
var answerSetTwo = ["Jupiter, baby", "Mars, baby", "Alpha Netraxi, baby", "Saturn, baby", "Jupiter, baby"];
var answerSetThree = ["GPS, baby", "Sputnik I, baby", "Haley, baby", "Voyager, baby", "Sputnik I, baby"];
var answerSetFour = ["Yuri Gagarin, baby", "Neil Armstrong, baby", "Buzz Aldrin, baby", "Luke Skywalker, baby", "Yuri Gagarin, baby"];
var answerSetFive = ["Love, baby", "Pressure, baby", "Gravity, baby", "Mass, baby", "Gravity, baby"];
var answerSetSix = ["Mercury, baby", "Pluto, baby", "Jupiter, baby", "Venus, baby", "Venus, baby"];
var answerSetSeven = ["Earth, baby", "Jupiter, baby", "Saturn, baby", "Mars, baby", "Earth, baby"];
var answerSetEight = ["Mars, baby", "Saturn, baby", "Uranus, baby", "Jupiter, baby", "Jupiter, baby"];
var answerSetNine = ["Irregular, baby", "Spiral, baby", "Lenticular, baby", "Orbital, baby", "Orbital, baby"];
var answerSetTen = ["Irregular, baby", "Spiral, baby", "Lenticular, baby", "SO, baby", "Lenticular, baby"];
var answerSets = [answerSetOne, answerSetTwo, answerSetThree, answerSetFour, answerSetFive, answerSetSix, answerSetSeven,
				  answerSetEight, answerSetNine, answerSetTen];


// This defines what is hidden on the initial page
function initialPage() {
	$("#timer-banner").css("display", "none");
	$("#button2").css("display", "none");
	$("#button3").css("display", "none");
	$("#button4").css("display", "none");
	$("#button5").css("display", "none");
};


// This sets up the look of the initial page
initialPage();


// This hides the initial page when called
function pageHide() {
	$("section").css('background-image', 'none")');
	$("section").css('background-image', 'url("assets/images/image26.png")');
	$("#title").css("display", "none");
	$("#button1").css("display", "none");
};


// This shows the questions when called
function questionShow() {
	$("#timer-banner").css("display", "inline");
	$("#instructions").css("display", "block");
	$("#instructions").text(question[questionNumber]);
	$("#button2").css("display", "inline");
	$("#button3").css("display", "inline");
	$("#button4").css("display", "inline");
	$("#button5").css("display", "inline");
};


// This hides the questions when called
function questionHide() {
	$("#timer-banner").css("display", "none");
	$("#instructions").css("display", "none");
	$("#button1").css("display", "none");
	$("#button2").css("display", "none");
	$("#button3").css("display", "none");
	$("#button4").css("display", "none");
	$("#button5").css("display", "none");
};


// This shows the answer page when called
function answerShow() {
	$("#answer-display").css("display", "inline");
	$("#image-display").css("display", "inline");
};





// This hides the answer page when called
function answerHide() {
	$("#answer-display").css("display", "none");
	$("#image-display").css("display", "none");
};


// This displays when all the questions have been answered
function gameOver() {
    answerHide();
    questionHide();
	$("#instructions").css("display", "none");
	$("#button2").css("display", "none");
	$("#button3").css("display", "none");
	$("#button4").css("display", "none");
	$("#button5").css("display", "none");

	$("#right").css("display", "inline");
	$("#right").text("You got " + right + " right, baby");

	$("#wrong").css("display", "inline");
	$("#wrong").text("You got " + wrong + " wrong, baby");

	$("#restart").css("display", "inline");
	$("#restart").text("We all want to start over, baby");
	$("restart").on("click", gameRestart);
};


// This is called when the game is restarted
function gameRestart() {
	$("#right").css("display", "none");
	$("#wrong").css("display", "none");
	$("#restart").css("display", "none");
	right = 0;
	wrong = 0;
	questionNumber = 0;
	questionShow();
};

var intervalId;
var intervalId2;




// This is the general question page timer *Incomplete*
function pageTimer1(){

	// These are the variables for the timer
	var number = 10;
    intervalId;

// This pulls the correct answer from the current answer choices array
var theRightOneBaby = answerSets[questionNumber][4];

// This is if the answer is right
function answerRight() {
	$("#answer-display").text("That's right, baby!!");
	$("#image-display").css('background-image', 'url("http://i.imgur.com/cQJQwkE.gif")');
};


// This is if the answer is wrong
function answerWrong() {
	$("#answer-display").text("The right answer was " + theRightOneBaby);
	$("#image-display").css('background-image', 'url("http://68.media.tumblr.com/0866faf72391c268bc59bafde3725a68/tumblr_ogzqlz1svD1vxw3g6o1_500.gif")');
};


// These define the buttons for the answer choices for the current question set
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
			right += 1;
    		questionNumber += 1;
			clearTimeout(run);
			questionHide();
			answerShow();
			answerRight();
			answerTimer1();
		}

	else {
		wrong += 1;
    	questionNumber += 1;
		clearTimeout(run);
		questionHide();
		answerShow();
		answerWrong();
		answerTimer1();
		}
	});

$("#button3").on("click", function(){

	if ($("#button3").text() === theRightOneBaby) {
			right += 1;
    		questionNumber += 1;
			clearTimeout(run);
			questionHide();
			answerShow();
			answerRight();
			answerTimer1();
		}

	else {
		wrong += 1;
    	questionNumber += 1;
		clearTimeout(run);
		questionHide();
		answerShow();
		answerWrong();
		answerTimer1();
		}
	});


$("#button4").on("click", function(){

	if ($("#button4").text() === theRightOneBaby) {
			right += 1;
    		questionNumber += 1;
			clearTimeout(run);
			questionHide();
			answerShow();
			answerRight();
			answerTimer1();
		}

	else {
		wrong += 1;
    	questionNumber += 1;
		clearTimeout(run);
		questionHide();
		answerShow();
		answerWrong();
		answerTimer1();
		}
	});


$("#button5").on("click", function(){

	if ($("#button5").text() === theRightOneBaby) {
			right += 1;
    		questionNumber += 1;
			clearTimeout(run);
			questionHide();
			answerShow();
			answerRight();
			answerTimer1();
		}

	else {
		wrong += 1;
    	questionNumber += 1;
		clearTimeout(run);
		questionHide();
		answerShow();
		answerWrong();
		answerTimer1();
		}
	});

    // This is the timer function
    function run() {
    		intervalId = setInterval(decrement, 1000);
    		};


    // This is the function that runs when run() is called
    function decrement() {
      number--;
	  $("#timer-banner").html("<h4>" + number + "</h4>");


    // This function clears the interval
    function stop() {
    	clearInterval(intervalId);
    	intervalId = 10;
    };

	// This defines what happens when the timer runs out
	if (number === 0){
    	stop();
		wrong += 1;
    	answerShow();
    	questionHide();
        answerWrong();
    	answerTimer1();
      };


};


    // This calls the run() function
    run();

    if (right + wrong >= 9) {
		gameOver();
};

};

// This runs the answer page timer
function answerTimer1(){

	// These are the variables for the answer page timer
	var number = 5;
    var intervalId2;


    // This runs the timer
    function run() {
      intervalId2 = setInterval(decrement, 1000);
    };


    // This is the function run by the run() function
    function decrement() {
      number--;

    // This defines what happens when the timer hits zero
	if (number === 0) {
    	clearTimeout(run);
        answerHide();
        questionShow();
    	pageTimer1();
      };


    // This stops the run() function
    function stop() {
      clearInterval(intervalId2);
      intervalId2 = 5;
    }
	};

	// This calls the answer timer run() function
    run();
};


// This button starts the game
$("#button1").on('click', function(){
	pageHide();
	questionShow();
	pageTimer1();
});


// This button should reset the game
$("#restart").on("click", gameRestart);
