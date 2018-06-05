var wins = 0;
var losses = 0;
var guesses = 9;
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


//randomizes computer choice of letter from "letters" array
var chosenLetter = letters[(Math.floor(Math.random() * letters.length))];

//On keypress...
$(document).keypress(function(whichKey){

        //converts keypress to string, converts to lowercase 
        var userInput = String.fromCharCode(whichKey.which).toLowerCase(); 

        //adds user guess into "guessed" array
        $("#array").append(userInput);

        if (userInput === chosenLetter) {
            wins++;
            guesses = 9;
            alert("You Won!");
            chosenLetter = letters[(Math.floor(Math.random() * letters.length))];
            $("#array").empty();
        }
        else if (guesses === 1) {
            losses++;
            guesses = 9;
            alert("You lose! Try again.")
            chosenLetter = letters[(Math.floor(Math.random() * letters.length))];
            $("#array").empty();
        }
        else if (userInput !== chosenLetter) {
            guesses--;
        };

        $("#printWins").text(wins);
        $("#printLosses").text(losses);
        $("#printGuesses").text(guesses);

    });
    

 

    
