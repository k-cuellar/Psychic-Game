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

        //displays user input in "array" span
        $("#array").append(userInput);

        //if user guesses correctly, alert "you win!", reset guesses, clear guessed letters, add 1 to wins, choose new random letter
        if (userInput === chosenLetter) {
            wins++;
            guesses = 9;
            alert("You Won!");
            chosenLetter = letters[(Math.floor(Math.random() * letters.length))];
            $("#array").empty();
        }
        //when user guesses get to 0, add 1 to losses, reset guesses, clear guessed letters, choose new random letter
        else if (guesses === 1) {
            losses++;
            guesses = 9;
            alert("You lose! Try again.")
            chosenLetter = letters[(Math.floor(Math.random() * letters.length))];
            $("#array").empty();
        }
        //if user guesses incorrectly, subract 1 from remaining guesses
        else if (userInput !== chosenLetter) {
            guesses--;
        };

       //prints wins, losses, and guesses in HTML 
        $("#printWins").text(wins);
        $("#printLosses").text(losses);
        $("#printGuesses").text(guesses);

    });
    

 

    
