var wordList = ["christmas", "santa", "reindeer", "sleigh", "frosty", "roudolph", "yule", "stockings", "fireplace", "snowy", "tree"];
var answer = "";
var blanks = 0
var wins = 0;
var losses = 0;
var guessesRemaining = 10;
var currentWord = [];
var currentBlanks = [];
var alreadyGuessed = [];
var wrongGuess = [];

//Need to get index of guessed letter in the answer and display it in the proper place in the blanks  

function playGame() {
        answer = wordList[Math.floor(Math.random() * wordList.length)];
        currentWord = answer.split("");
        blanks = answer.length;

        for (i = 0; i < blanks; i++) {
                currentBlanks.push("_");
        }
        document.getElementById("blankWord").innerHTML = "  " + currentBlanks.join("  ");

        console.log(answer);
        console.log(currentWord);
        console.log(blanks);
        console.log(currentBlanks);
}




function startOver () {
        guessesRemaining = 10;
        wrongGuess = [];
        currentBlanks = [];
        playGame()
}

function checkltr(letter) {
        var wordLetter = false;
        for (var i = 0; i < blanks; i++) {
                if (answer[i] == letter) {
                        wordLetter = true;
                }
        }
        if (wordLetter) {
                for (var i = 0; i < blanks; i++) {
                        if (answer[i] == letter) {
                                currentBlanks[i] = letter;
                        }
                }
        }
        else {
                wrongGuess.push(letter);
                guessesRemaining--;
        }
        console.log(currentBlanks);
}

function win() {
        console.log("wins: " + wins + "| losses:" + losses + "|guesses left:" + guessesRemaining)

        if(currentWord.toString() == currentBlanks.toString()) {
                wins++;
                document.getElementById("wins").innerHTML = wins;
                startOver();
                
        } else if (guessesRemaining === 0) {
                // losses++;
                startOver();
                // document.getElementById("losses").innerHTML = losses;
        }
        document.getElementById("guessesRMN").innerHTML = guessesRemaining;
        document.getElementById("blankWord").innerHTML = "  " + currentBlanks.join("  ");
}


playGame()

document.onkeypress = function (event) {
        var guess = String.fromCharCode(event.keyCode).toLowerCase();
        checkltr(guess);
        win();
        console.log(guess);

        document.getElementById("lettersGuessed").innerHTML = "  " + wrongGuess.join(" ");

}
