# Word-Guess-Game


![image](https://user-images.githubusercontent.com/41648281/48491058-ee83af00-e7e3-11e8-8174-98809678f8e4.png)
This is the week 3 assignment of the bootcamp.  We were tasked with creating a "word-guess" game in which the following parameters had to be met:
 - A random word is chosen by the computer.
 - The user then has to guess the word, letter for letter.
   - If the letter matches, it displays in the correct blank.
   - If the user guesses the word, they get a point.
   - If the user is not able to guess the letter of the word, it is displayed in a "letter's guessed" area, and the number of guesses decreases by one.
   
   I added some additional functionality:
   - If the user gets a certain number of points, the level advances, and the word choices become more complex.
   - Since the complexity increases throughout the game, I added a visual clue for each word.
   - In order to create a sense of urgency, I added a countdown timer which flashes red at 10 seconds or less.
   - If the counter reaches 0, the game starts over.
   - If the user uses up all their guesses, the game starts over.
   
   [play here](https://mochacosine1206.github.io/Word-Guess-Game/)
