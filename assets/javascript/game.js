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
var count = 80;
var timerDown = setInterval(countDown, 1000);

//main game play function cycling through levels of difficulty

function playGame() {
        if (wins >= 9 && wins <= 19) {
                answer = wordList2[Math.floor(Math.random() * wordList2.length)];
                document.body.style.backgroundImage = "url(./assets/images/blue.gif)";
                document.getElementById("header").style.backgroundColor = "#000080";
                document.getElementById("leveltxt").innerHTML = " - LEVEL 2";
        } else if (wins >= 20) {
                answer = wordList3[Math.floor(Math.random() * wordList3.length)];
                document.body.style.backgroundImage = "url(./assets/images/galaxy.gif)";
                document.getElementById("header").style.backgroundColor = "000080";
                document.getElementById("leveltxt").style.color = "yellow";
                document.getElementById("leveltxt").innerHTML = " - LEVEL 3";
        } else if (wins <= 8) {
                answer = wordList1[Math.floor(Math.random() * wordList1.length)];
                document.body.style.backgroundImage = "url(./assets/images/foodpattern-drbl800.gif)";
                document.getElementById("header").style.backgroundColor = "red";
                document.getElementById("leveltxt").style.color = "yellow";
                document.getElementById("leveltxt").innerHTML = " - LEVEL 1";
        } else {

        };
        currentWord = answer.split("");
        blanks = answer.length;
        picClue();




        for (i = 0; i < blanks; i++) {
                currentBlanks.push("_");
        }
        document.getElementById("blankWord").innerHTML = "  " + currentBlanks.join("  ");

        console.log(answer);
        console.log(currentWord);
        console.log(blanks);
        console.log(currentBlanks);
}

//attempt at preloading images

function preloader() {
        var apple = new Image();
        var blueberry = new Image();
        var sandwich = new Image();
        var brownie = new Image();
        var orange = new Image();
        var bacon = new Image();
        var carrot = new Image();
        var hamburger = new Image();
        var nut = new Image();
        var avocado = new Image();
        var bagel = new Image();
        var burrito = new Image();
        var cheese = new Image();
        var cake = new Image();
        var ketchup = new Image();
        var potato = new Image();
        var soup = new Image();
        var coffee = new Image();
        var waffle = new Image();
        var egg = new Image();
        var sushi = new Image();
        var artichoke = new Image();
        var kimchi = new Image();
        var basil = new Image();
        var taro = new Image();
        var cobbler = new Image();
        var cantaloupe = new Image();
        var daikon = new Image();
        var hummus = new Image();
        var habanero = new Image();
        var brioche = new Image();
        var spaghetti = new Image();
        var cheddar = new Image();
        var bundt = new Image();
        var mussels = new Image();
        var pomegranate = new Image();
        var romaine = new Image();
        var espresso = new Image();
        var lasagna = new Image();
        var macaroon = new Image();
        var porcini = new Image();
        var mangosteen = new Image();
        var raclette = new Image();
        var durian = new Image();
        var okonomiyaki = new Image();
        var poutine = new Image();
        var caipirinha = new Image();
        var gnocchi = new Image();
        var guanciale = new Image();
        var napoleon = new Image();
        var endive = new Image();
        var mascarpone = new Image();
        var paella = new Image();
        var prosciutto = new Image();
        var pomelo = new Image();
        var eclair = new Image();
        var tiramisu = new Image();
        var macchiato = new Image();
        var bento = new Image();
        var anancini = new Image();

        apple.src = "./assets/images/apple.png";
        blueberry.src = "./assets/images/blueberry.png";
        sandwich.src = "./assets/images/sandwich.png";
        brownie.src = "./assets/images/brownie.png";
        orange.src = "./assets/images/orange.png";
        bacon.src = "./assets/images/bacon.png";
        carrot.src = "./assets/images/carrot.png";
        hamburger.src = "./assets/images/hamburger.png";
        nut.src = "./assets/images/nut.png";
        avocado.src = "./assets/images/avocado.png";
        bagel.src = "./assets/images/bagel.png";
        burrito.src = "./assets/images/burrito.png";
        cheese.src = "./assets/images/cheese.png";
        cake.src = "./assets/images/cake.png";
        ketchup.src = "./assets/images/ketchup.png";
        potato.src = "./assets/images/potato.png";
        soup.src = "./assets/images/soup.png";
        coffee.src = "./assets/images/coffee.png";
        waffle.src = "./assets/images/waffle.png";
        egg.src = "./assets/images/egg.png";
        sushi.src = "./assets/images/sushi.png";
        artichoke.src = "./assets/images/artichoke.png";
        kimchi.src = "./assets/images/kimchi.png";
        basil.src = "./assets/images/basil.png";
        taro.src = "./assets/images/taro.png";
        cobbler.src = "./assets/images/cobbler.png";
        cantaloupe.src = "./assets/images/cantaloupe.png";
        daikon.src = "./assets/images/daikon.png";
        hummus.src = "./assets/images/hummus.png";
        habanero.src = "./assets/images/habanero.png";
        brioche.src = "./assets/images/brioche.png";
        spaghetti.src = "./assets/images/spaghetti.png";
        cheddar.src = "./assets/images/cheddar.png";
        bundt.src = "./assets/images/bundt.png";
        mussels.src = "./assets/images/mussels.png";
        pomegranate.src = "./assets/images/pomegranate.png";
        romaine.src = "./assets/images/romaine.png";
        espresso.src = "./assets/images/espresso.png";
        lasagna.src = "./assets/images/lasagna.png";
        macaroon.src = "./assets/images/macaroon.png";
        porcini.src = "./assets/images/porcini.png";
        mangosteen.src = "./assets/images/mangosteen.png";
        raclette.src = "./assets/images/raclette.png";
        durian.src = "./assets/images/durian.png";
        okonomiyaki.src = "./assets/images/okonomiyaki.png";
        poutine.src = "./assets/images/poutine.png";
        caipirinha.src = "./assets/images/caipirinha.png";
        gnocchi.src = "./assets/images/gnocchi.png";
        guanciale.src = "./assets/images/guanciale.png";
        napoleon.src = "./assets/images/napoleon.png";
        endive.src = "./assets/images/endive.png";
        mascarpone.src = "./assets/images/mascarpone.png";
        paella.src = "./assets/images/paella.png";
        prosciutto.src = "./assets/images/prosciutto.png";
        pomelo.src = "./assets/images/pomelo.png";
        eclair.src = "./assets/images/eclair.png";
        tiramisu.src = "./assets/images/tiramisu.png";
        macchiato.src = "./assets/images/macchiato.png";
        bento.src = "./assets/images/bento.png";
        anancini.src = "./assets/images/anancini.png";
}

function addLoadEvent(func) {
        var oldonload = window.onload;
        if (typeof window.onload != 'function') {
                window.onload = func;
        } else {
                window.onload = function () {
                        if (oldonload) {
                                oldonload();
                        }
                        func();
                }
        }
}

addLoadEvent(preloader);

//logic for picture generation

function picClue() {
        if (answer === wordList1[0]) {
                document.getElementById("image").src = "./assets/images/apple.png";
        } else if (answer === wordList1[1]) {
                document.getElementById("image").src = "./assets/images/blueberry.png";
        } else if (answer === wordList1[2]) {
                document.getElementById("image").src = "./assets/images/sandwich.png";
        } else if (answer === wordList1[3]) {
                document.getElementById("image").src = "./assets/images/brownie.png";
        } else if (answer === wordList1[4]) {
                document.getElementById("image").src = "./assets/images/orange.png";
        } else if (answer === wordList1[5]) {
                document.getElementById("image").src = "./assets/images/bacon.png";
        } else if (answer === wordList1[6]) {
                document.getElementById("image").src = "./assets/images/carrot.png";
        } else if (answer === wordList1[7]) {
                document.getElementById("image").src = "./assets/images/hamburger.png";
        } else if (answer === wordList1[8]) {
                document.getElementById("image").src = "./assets/images/nut.png";
        } else if (answer === wordList1[9]) {
                document.getElementById("image").src = "./assets/images/avocado.png";
        } else if (answer === wordList1[10]) {
                document.getElementById("image").src = "./assets/images/bagel.png";
        } else if (answer === wordList1[11]) {
                document.getElementById("image").src = "./assets/images/burrito.png";
        } else if (answer === wordList1[12]) {
                document.getElementById("image").src = "./assets/images/cheese.png";
        } else if (answer === wordList1[13]) {
                document.getElementById("image").src = "./assets/images/cake.png";
        } else if (answer === wordList1[14]) {
                document.getElementById("image").src = "./assets/images/ketchup.png";
        } else if (answer === wordList1[15]) {
                document.getElementById("image").src = "./assets/images/potato.png";
        } else if (answer === wordList1[16]) {
                document.getElementById("image").src = "./assets/images/soup.png";
        } else if (answer === wordList1[17]) {
                document.getElementById("image").src = "./assets/images/coffee.png";
        } else if (answer === wordList1[18]) {
                document.getElementById("image").src = "./assets/images/waffle.png";
        } else if (answer === wordList1[19]) {
                document.getElementById("image").src = "./assets/images/egg.png";
        } else if (answer === wordList2[0]) {
                document.getElementById("image").src = "./assets/images/sushi.png";
        } else if (answer === wordList2[1]) {
                document.getElementById("image").src = "./assets/images/artichoke.png";
        } else if (answer === wordList2[2]) {
                document.getElementById("image").src = "./assets/images/kimchi.png";
        } else if (answer === wordList2[3]) {
                document.getElementById("image").src = "./assets/images/basil.png";
        } else if (answer === wordList2[4]) {
                document.getElementById("image").src = "./assets/images/taro.png";
        } else if (answer === wordList2[5]) {
                document.getElementById("image").src = "./assets/images/cobbler.png";
        } else if (answer === wordList2[6]) {
                document.getElementById("image").src = "./assets/images/cantaloupe.png";
        } else if (answer === wordList2[7]) {
                document.getElementById("image").src = "./assets/images/daikon.png";
        } else if (answer === wordList2[8]) {
                document.getElementById("image").src = "./assets/images/hummus.png";
        } else if (answer === wordList2[9]) {
                document.getElementById("image").src = "./assets/images/habanero.png";
        } else if (answer === wordList2[10]) {
                document.getElementById("image").src = "./assets/images/brioche.png";
        } else if (answer === wordList2[11]) {
                document.getElementById("image").src = "./assets/images/spaghetti.png";
        } else if (answer === wordList2[12]) {
                document.getElementById("image").src = "./assets/images/cheddar.png";
        } else if (answer === wordList2[13]) {
                document.getElementById("image").src = "./assets/images/bundt.png";
        } else if (answer === wordList2[14]) {
                document.getElementById("image").src = "./assets/images/mussels.png";
        } else if (answer === wordList2[15]) {
                document.getElementById("image").src = "./assets/images/pomegranate.png";
        } else if (answer === wordList2[16]) {
                document.getElementById("image").src = "./assets/images/romaine.png";
        } else if (answer === wordList2[17]) {
                document.getElementById("image").src = "./assets/images/espresso.png";
        } else if (answer === wordList2[18]) {
                document.getElementById("image").src = "./assets/images/lasagna.png";
        } else if (answer === wordList2[19]) {
                document.getElementById("image").src = "./assets/images/macaroon.png";
        } else if (answer === wordList3[0]) {
                document.getElementById("image").src = "./assets/images/porcini.png";
        } else if (answer === wordList3[1]) {
                document.getElementById("image").src = "./assets/images/mangosteen.png";
        } else if (answer === wordList3[2]) {
                document.getElementById("image").src = "./assets/images/raclette.png";
        } else if (answer === wordList3[3]) {
                document.getElementById("image").src = "./assets/images/durian.png";
        } else if (answer === wordList3[4]) {
                document.getElementById("image").src = "./assets/images/okonomiyaki.png";
        } else if (answer === wordList3[5]) {
                document.getElementById("image").src = "./assets/images/poutine.png";
        } else if (answer === wordList3[6]) {
                document.getElementById("image").src = "./assets/images/caipirinha.png";
        } else if (answer === wordList3[7]) {
                document.getElementById("image").src = "./assets/images/gnocchi.png";
        } else if (answer === wordList3[8]) {
                document.getElementById("image").src = "./assets/images/guanciale.png";
        } else if (answer === wordList3[9]) {
                document.getElementById("image").src = "./assets/images/napoleon.png";
        } else if (answer === wordList3[10]) {
                document.getElementById("image").src = "./assets/images/endive.png";
        } else if (answer === wordList3[11]) {
                document.getElementById("image").src = "./assets/images/mascarpone.png";
        } else if (answer === wordList3[12]) {
                document.getElementById("image").src = "./assets/images/paella.png";
        } else if (answer === wordList3[13]) {
                document.getElementById("image").src = "./assets/images/prosciutto.png";
        } else if (answer === wordList3[14]) {
                document.getElementById("image").src = "./assets/images/pomelo.png";
        } else if (answer === wordList3[15]) {
                document.getElementById("image").src = "./assets/images/eclair.png";
        } else if (answer === wordList3[16]) {
                document.getElementById("image").src = "./assets/images/tiramisu.png";
        } else if (answer === wordList3[17]) {
                document.getElementById("image").src = "./assets/images/macchiato.png";
        } else if (answer === wordList3[18]) {
                document.getElementById("image").src = "./assets/images/bento.png";
        } else if (answer === wordList3[19]) {
                document.getElementById("image").src = "./assets/images/anancini.png";
        }

};

//logic for Countdown formatting

function countDown() {
        document.getElementById("counter").innerHTML = count--;
        if (count > 10) {
                $(document).ready(function () {
                        $("#counter").css("color", "black");
                });
        } else if (count <= 9) {
                $(document).ready(function () {
                        $("#counter").css("color", "red");
                        $("#counter").animate({ "font-size": "+=40px" }, 'fast')
                        $("#counter").animate({ "font-size": "-=40px" }, 'fast');
                });
        }
        if (count < 1) {
                count = 80;
                totalReset()
        };
};

//logic for point gained reset

function startOver() {
        wrongGuess = [];
        currentBlanks = [];
        playGame()

}

//logic for point lost, guesses used, and timeout reset

function totalReset() {
        wrongGuess = [];
        currentBlanks = [];
        wins = 0;
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("guessesRMN").innerHTML = guessesRemaining = 10;
        document.getElementById("lettersGuessed").innerHTML = "  " + wrongGuess.join(" ");
        playGame()
}

//checks if the user input matches any indexed letter from the current random word.  If the letter matches, the guess is inserted into the same index in the word blanks

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
}

//win function.  If words match, win count goes up, then object resets.  If guesses remaining equal 0, game does a total reset, all points lost, start over.

function win() {

        if (currentWord.toString() == currentBlanks.toString()) {
                wins++;
                document.getElementById("wins").innerHTML = wins;
                startOver();

        } else if (guessesRemaining === 0) {
                totalReset();
        }
        document.getElementById("guessesRMN").innerHTML = guessesRemaining;
        document.getElementById("blankWord").innerHTML = "  " + currentBlanks.join("  ");
}


playGame()

//on Keyup,  check letter is run with the key pressed, win function is triggered, letters guessed blanks triggered.

document.onkeyup = function (event) {
        var guess = String.fromCharCode(event.keyCode).toLowerCase();
        checkltr(guess);
        win();
        console.log(guess);

        document.getElementById("lettersGuessed").innerHTML = "  " + wrongGuess.join(" ");

}
