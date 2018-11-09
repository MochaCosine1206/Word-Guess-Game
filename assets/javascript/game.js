var wordList1 = ["apple", "blueberry", "sandwich", "brownie", "orange", "bacon", "carrot", "hamburger", "nut", "avocado", "bagel", "burrito", "cheese", "cake", "ketchup", "potato", "soup", "coffee", "waffle", "egg"];
var wordList2 = ["sushi", "artichoke", "kimchi", "basil", "taro", "cobbler", "cantaloupe", "daikon", "hummus", "serrano", "brioche", "spaghetti", "cheddar", "torte", "mussels", "pomegranate", "romaine", "espresso", "lasagna", "macaroon"];
var wordList3 = ["porcini", "mangosteen", "raclette", "durian", "okonomiyaki", "poutine", "caipirinha", "gnocchi", "guanciale", "napoleon", "endive", "mascarpone", "paella", "prosciutto", "pomelo", "eclair", "tiramisu", "macchiato", "bento", "anancini"];
var answer = "";
var blanks = 0
var wins = 0;
var losses = 0;
var guessesRemaining = 10;
var currentWord = [];
var currentBlanks = [];
var alreadyGuessed = [];
var wrongGuess = [];


function playGame() {
        if (wins > 9) {
                answer = wordList2[Math.floor(Math.random() * wordList2.length)];
        } else if (wins > 19) {
                answer = wordList3[Math.floor(Math.random() * wordList3.length)];
        } else {
                answer = wordList1[Math.floor(Math.random() * wordList1.length)];
        };
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

function startOver() {
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

        if (currentWord.toString() == currentBlanks.toString()) {
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
