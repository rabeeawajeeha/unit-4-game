//computer randomly selects a number between 18-120 for player to match

var randomNum = 18 + Math.floor(Math.random() * 120);

//show this number under #numToGuess

$("#numToGuess").html(randomNum);
console.log(randomNum);


//computer randomly selects a number between 1-12 for each gem

var bluecrystal = 1 + Math.floor(Math.random() * 12);
var purplecrystal = 1 + Math.floor(Math.random() * 12);
var greencrystal = 1 + Math.floor(Math.random() * 12);
var whitecrystal = 1 + Math.floor(Math.random() * 12);

//set all variables to 0

var userTotal = 0;
var wins = 0;
var losses = 0;
$("#totalNum").html(userTotal);
$("#wins").html(wins);
$("#losses").html(losses);

//reset all variables once game is won/lost

var reset = function() {
    userTotal = 0;
    randomNum = 18 + Math.floor(Math.random() * 120);
    bluecrystal = 1 + Math.floor(Math.random() * 12);
    purplecrystal = 1 + Math.floor(Math.random() * 12);
    greencrystal = 1 + Math.floor(Math.random() * 12);
    whitecrystal = 1 + Math.floor(Math.random() * 12);
    console.log(randomNum);
    $("#numToGuess").html(randomNum);
    $("#totalNum").html(userTotal);
    $("#wins").html(wins);
    $("#losses").html(losses);
}

//if else statement for winning or losing. 
//if total === random win.
//if total > random lose.

var winCheck = function() {
    if (userTotal == randomNum) {
        wins++;
        alert("Nice Work! You won!");
        $("#wins").html(wins);
        reset();

    } else if (userTotal > randomNum) {
        losses++;
        alert("You did not win! Try Again!");
        $("#losses").html(losses);
        reset();
    }
};

//whenever user clicks (on.click) a gem, the random number is added to total score.
//show this number under #totalNum

$("#white").on("click", function() {
    userTotal = userTotal + whitecrystal;
    console.log(userTotal);
    $("#totalNum").html(userTotal);
    winCheck();
})

$("#green").on("click", function() {
    userTotal = userTotal + greencrystal;
    console.log(userTotal);
    $("#totalNum").html(userTotal);
    winCheck();
})

$("#purple").on("click", function() {
    userTotal = userTotal + purplecrystal;
    console.log(userTotal);
    $("#totalNum").html(userTotal);
    winCheck();
})

$("#blue").on("click", function() {
    userTotal = userTotal + bluecrystal;
    console.log(userTotal);
    $("#totalNum").html(userTotal);
    winCheck();
})