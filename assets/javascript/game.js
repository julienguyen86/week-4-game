$(document).ready(function() {

    // global variables
    var gemOne, gemTwo, gemThree, gemFour;
    var wins = 0;
    var losses = 0;
    var randomComputerNumber;
    var userTallyScore;

   
    // function that initializes the variables for each now round of the game
    function reset() {
        // computer pick a number between 19-120
        randomComputerNumber = 19 + Math.floor(Math.random() * 102);
        // random gem values between 1-12
        gemOne = 1 + Math.floor(Math.random() * 12);
        gemTwo = 1 + Math.floor(Math.random() * 12);
        gemThree = 1 + Math.floor(Math.random() * 12);
        gemFour = 1 + Math.floor(Math.random() * 12);
        // set initial value of user's ongoing gem selections sum to 0
        userTallyScore = 0;

        // update the html for the game board
        $("#wins").html("Wins: " + wins);
        $("#losses").html("Losses: " + losses);
        $("#number-to-guess").html(randomComputerNumber);
        $("#userScore").html(userTallyScore);
        consoleLogVariables();
    }

    // function to check if user has won or lost
    function WonOrLost() {
        // check if user has lost
        if (userTallyScore > randomComputerNumber) {
            losses++;
            console.log("user lost");
            reset();
        }

        // check if user has won
        if (userTallyScore == randomComputerNumber) {
            wins++;
            console.log("user won");
            reset();
        }
    }

    function consoleLogVariables() {
        console.log("wins: " + wins + " losses: " + losses);
        console.log("gemOneValue: ", gemOne + " gemTwo: " + gemTwo + " gemThreeValue: " + gemThree + " gemFourValue: " + gemFour);
        console.log("randomComputerNumber: " + randomComputerNumber + " userTallyScore: " + userTallyScore);
       

    }

    reset();

    // clicks on any of the gems by targeting the gem class
    $(".gem").on("click", function() {

        // each gem has a value attribute of gem1, gem2, gem3, or gem 4
        var pressed = $(this).attr("value");
        console.log(pressed);
        // add the value of the gem to the user's ongoing score tally
        if (pressed == "gem1") {
            userTallyScore += gemOne;
        } else if (pressed == "gem2") {
            userTallyScore += gemTwo;
        } else if (pressed == "gem3") {
            userTallyScore += gemThree;
        } else if (pressed == "gem4") {
            userTallyScore += gemFour;
        } else {
            console.log("error");
        }
        // then update the html for the user score
        $("#userScore").html(userTallyScore);
        consoleLogVariables();
        // call the function to see if user has won or lost
        WonOrLost();
    });

});