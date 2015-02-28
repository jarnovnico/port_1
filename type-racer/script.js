// SOURCE:  Hearingcolleges Programing,
//          http://jsfiddle.net/pvk6p/89/,
//          Lambo img: cervical_lordosis, from http://www.pixeljoint.com/pixelart/37271.htm
//          Lambo sound: http://www.zedge.net/ringtone/308452/ & http://soundbible.com/1178-Tires-Squealing.html

//          & I got help from other students (Dylan Vens for example) also our teatcher Joost Faber.
//
//NOW.. THE CODE:

// First a bunch of variables:
var lambo = document.getElementById("lambo"); // The image(car) that is going to move.
var carSound = new Audio('lamborghini_sound.mp3'); // Loud car sound. WARNING!
var carTires = new Audio('tires_squealing.mp3'); // Loud tires squealing sound.
var score = 0; //This is not to be confused with the 'score' id in the HTML. It is used for the Array of words.
var totalScore = 0; //This is the score on the botton of the HTML. The total score.

// Array for all the possible answers to type.
var correctAnswers = ["Car", "Houselab", "Mobilephoneholder", "Headsetconfiguration", "Aligatorfarm", "Computerscience", "Urbandictionary", "Championsleague"]
// The order of the strings in the arrays is the same order as the words in the inputfields.

// Loop all the words in the array and execute code if/else:
for (var i=0; i<8; i++) {
    var wordField = document.getElementById(''+i);
    wordField.onblur = function (event) {
        var id = event.target.id;
        console.log(id);
        if (event.target.value === correctAnswers[id]) {
            score++ // If variable 'correctAnswers' is the same as the number in the array; go to next number in array.
            event.target.classList.add('correct'); // If correct make background input green
            lambo.classList.add('position'+score); // Image position change on 'correct'
            totalScore++; // If correct +1 point (score)
            document.getElementById("score").value = totalScore; // Update score in HTML
            carSound.play(); // Play the sound of the Lambo driving
            carTires.pause(); // Pause the tire squealing
        } else {
            event.target.classList.add('wrong'); // If wrong make background input red
            totalScore--;   // If wrong -1 point (score)
            document.getElementById("score").value = totalScore;
            carSound.pause(); // Pause the Lambo driving
            carTires.play(); // Play the tire squealing
        }
    };
}

// Object with information about the car you are racing.
var car = {
    name: "Aventador",
    type: "Sport",
    brand: "Lamborghini"
}

// If you click on the picture of the car you will get a message.
var onClick = function() {
    alert("This is a "+car.brand+" "+car.name+". Please pay attention to the race!");
}

// This is the stopwatch
// More variables with the header being also a array with number 0
var h1 = document.getElementsByTagName('h1')[0];
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var seconds = 0;
var time;

// The time in seconds. It doesn't go higher then 60 seconds.
var addTime = function() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
    }
    
    // If seconds is higher then 9 add next number.
    if (seconds > 9) {
        h1.innerHTML = seconds;
    } else {
        h1.innerHTML = "0" + seconds;
    }
    
    timer();
}

// The function above addTime is used to set the setTimeout to 1000 miliseconds.
var timer = function() {
    time = setTimeout(addTime, 1000);
}

// Call the timer function
timer();

// Stop time button
stop.onclick = function() {
    clearTimeout(time);
}