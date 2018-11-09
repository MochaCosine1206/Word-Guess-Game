var wordList1 = ["apple", "blueberry", "sandwich", "brownie", "orange", "bacon", "carrot", "hamburger", "nut", "avocado", "bagel", "burrito", "cheese", "cake", "ketchup", "potato", "soup", "coffee", "waffle", "egg"];
var wordList2 = ["sushi", "artichoke", "kimchi", "basil", "taro", "cobbler", "cantaloupe", "daikon", "hummus", "habanero", "brioche", "spaghetti", "cheddar", "bundt", "mussels", "pomegranate", "romaine", "espresso", "lasagna", "macaroon"];
var wordList3 = ["porcini", "mangosteen", "raclette", "durian", "okonomiyaki", "poutine", "caipirinha", "gnocchi", "guanciale", "napoleon", "endive", "mascarpone", "paella", "prosciutto", "pomelo", "eclair", "tiramisu", "macchiato", "bento", "anancini"];
var answer = "";
var blanks = 0;
var wins = 0;
var losses = 0;
var guessesRemaining = 10;
var currentWord = [];
var currentBlanks = [];
var alreadyGuessed = [];
var wrongGuess = [];
// var countDown = 60;


function playGame() {
        if (wins >= 9 && wins <= 19) {
                answer = wordList2[Math.floor(Math.random() * wordList2.length)];
                document.body.style.backgroundImage = "url(./assets/images/blue.gif)";
                document.getElementById("header").style.backgroundColor = "#000080";
                document.getElementById("leveltxt").innerHTML = " - LEVEL 2";
        } else if (wins > 19) {
                answer = wordList3[Math.floor(Math.random() * wordList3.length)];
                document.body.style.backgroundImage = "url(./assets/images/galaxy.gif)";
                document.getElementById("header").style.backgroundColor = "white";
                document.getElementById("header h1").style.color = "#000080";
                document.getElementById("leveltxt").innerHTML = " - LEVEL 3";
        } else {
                answer = wordList1[Math.floor(Math.random() * wordList1.length)];
                document.getElementById("leveltxt").innerHTML = " - LEVEL 1";
        };
        currentWord = answer.split("");
        blanks = answer.length;
        picAud()


        for (i = 0; i < blanks; i++) {
                currentBlanks.push("_");
        }
        document.getElementById("blankWord").innerHTML = "  " + currentBlanks.join("  ");

        console.log(answer);
        console.log(currentWord);
        console.log(blanks);
        console.log(currentBlanks);
}

function picAud() {
        if (answer === wordList1[0]) {
                document.getElementById("image").src="./assets/images/apple.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList1[1]) {
                document.getElementById("image").src="./assets/images/blueberry.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList1[2]) {
                document.getElementById("image").src="./assets/images/sandwich.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList1[3]) {
                document.getElementById("image").src="./assets/images/brownie.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList1[4]) {
                document.getElementById("image").src="./assets/images/orange.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList1[5]) {
                document.getElementById("image").src="./assets/images/bacon.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList1[6]) {
                document.getElementById("image").src="./assets/images/carrot.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList1[7]) {
                document.getElementById("image").src="./assets/images/hamburger.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList1[8]) {
                document.getElementById("image").src="./assets/images/nut.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList1[9]) {
                document.getElementById("image").src="./assets/images/avocado.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList1[10]) {
                document.getElementById("image").src="./assets/images/bagel.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList1[11]) {
                document.getElementById("image").src="./assets/images/burrito.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList1[12]) {
                document.getElementById("image").src="./assets/images/cheese.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList1[13]) {
                document.getElementById("image").src="./assets/images/cake.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList1[14]) {
                document.getElementById("image").src="./assets/images/ketchup.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList1[15]) {
                document.getElementById("image").src="./assets/images/potato.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList1[16]) {
                document.getElementById("image").src="./assets/images/soup.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList1[17]) {
                document.getElementById("image").src="./assets/images/coffee.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList1[18]) {
                document.getElementById("image").src="./assets/images/waffle.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList1[19]) {
                document.getElementById("image").src="./assets/images/egg.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList2[0]) {
                document.getElementById("image").src="./assets/images/sushi.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList2[1]) {
                document.getElementById("image").src="./assets/images/artichoke.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList2[2]) {
                document.getElementById("image").src="./assets/images/kimchi.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList2[3]) {
                document.getElementById("image").src="./assets/images/basil.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList2[4]) {
                document.getElementById("image").src="./assets/images/taro.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList2[5]) {
                document.getElementById("image").src="./assets/images/cobbler.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList2[6]) {
                document.getElementById("image").src="./assets/images/cantaloupe.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList2[7]) {
                document.getElementById("image").src="./assets/images/daikon.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList2[8]) {
                document.getElementById("image").src="./assets/images/hummus.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList2[9]) {
                document.getElementById("image").src="./assets/images/habanero.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList2[10]) {
                document.getElementById("image").src="./assets/images/brioche.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList2[11]) {
                document.getElementById("image").src="./assets/images/spaghetti.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList2[12]) {
                document.getElementById("image").src="./assets/images/cheddar.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList2[13]) {
                document.getElementById("image").src="./assets/images/bundt.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList2[14]) {
                document.getElementById("image").src="./assets/images/mussels.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList2[15]) {
                document.getElementById("image").src="./assets/images/pomegranate.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList2[16]) {
                document.getElementById("image").src="./assets/images/romaine.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList2[17]) {
                document.getElementById("image").src="./assets/images/espresso.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList2[18]) {
                document.getElementById("image").src="./assets/images/lasagna.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList2[19]) {
                document.getElementById("image").src="./assets/images/macaroon.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList3[0]) {
                document.getElementById("image").src="./assets/images/porcini.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList3[1]) {
                document.getElementById("image").src="./assets/images/mangosteen.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList3[2]) {
                document.getElementById("image").src="./assets/images/raclette.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList3[3]) {
                document.getElementById("image").src="./assets/images/durian.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList3[4]) {
                document.getElementById("image").src="./assets/images/okonomiyaki.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList3[5]) {
                document.getElementById("image").src="./assets/images/poutine.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList3[6]) {
                document.getElementById("image").src="./assets/images/caipirinha.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList3[7]) {
                document.getElementById("image").src="./assets/images/gnocchi.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList3[8]) {
                document.getElementById("image").src="./assets/images/guanciale.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList3[9]) {
                document.getElementById("image").src="./assets/images/napoleon.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList3[10]) {
                document.getElementById("image").src="./assets/images/endive.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList3[11]) {
                document.getElementById("image").src="./assets/images/mascarpone.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList3[12]) {
                document.getElementById("image").src="./assets/images/paella.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList3[13]) {
                document.getElementById("image").src="./assets/images/prosciutto.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList3[14]) {
                document.getElementById("image").src="./assets/images/pomelo.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList3[15]) {
                document.getElementById("image").src="./assets/images/eclair.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList3[16]) {
                document.getElementById("image").src="./assets/images/tiramisu.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList3[17]) {
                document.getElementById("image").src="./assets/images/macchiato.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList3[18]) {
                document.getElementById("image").src="./assets/images/bento.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        } else if (answer === wordList3[19]) {
                document.getElementById("image").src="./assets/images/anancini.png";
                document.getElementById("clues").innerHTML = "If you don't know this, we're all disappointed!";
        }

};

// function time() {
//         countDown = 60;
//         document.getElementById("counter").innerHTML = countDown;

// };

function startOver() {
        // guessesRemaining = 10;
        wrongGuess = [];
        currentBlanks = [];
        playGame()
}

function totalReset() {
        wins = 0;
        document.getElementById("wins").innerHTML = wins;
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
                totalReset();
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
        // time();
        console.log(guess);

        document.getElementById("lettersGuessed").innerHTML = "  " + wrongGuess.join(" ");

}
