
// var slytherine = {
//     name: "slytherine", 
//     letters: 10, 
//     vowels: 4
// };
// var hufflepuff = {
//     name: "hufflepuff", 
//     letters: 10,
//     vowels: 3
// };
// var gryffindor = {
//     name: "gryffindor", 
//     letters: 10, 
//     vowels: 3
// };
// var ravenclaw = {
//     name: "ravenclaw", 
//     letters: 9, 
//     vowels: 3
// };
// var wordBank = [slytherine, hufflepuff, gryffindor, ravenclaw];
// var randWord = wordBank[Math.floor(Math.random()*wordBank.length)];
// var spaces = parseInt(randWord.letters); 
// console.log(randWord.name);

// //arr will be replaced with spaces
// //when fn is fed spaces, it will add 1x " _ " for each letter in the guessed word
// function displayLength(arr) {
//     for(l=1, l < arr, l++){
//         document.getElementById().innerHTML = " _ "*arr;
//     }
// }




//to-do list:
//create array and random picker to sort through arrays of potention words
//check
//create and define game objects
//check
//add necessary methods to objects
//
//create functions for tracking key strokes and scanning picked word for match
//
//set up scoring
//
//set up game reset
//
//style html using bootstrap
//
// add additional functions
//
//game flow:
//html start screen displays "hit any button to continue"
//
//js eventListener .keyup changes css display from display: block to display: hidden or potentially z-index from # to 0
//on the same event listener, a random element is chosen from the array
//using the object.property letters: js displays spaces for number of letters
//the counter for guess remaining is set to 8
//js eventListener for function(arr): arr.key (object property key of the player choice)
//conditional logic if(key === a letter in random word){space changes to letter;
//and that choice is popped out of the list of optional letters;
//the visualized array at the bottom of letters left to choose refreshes to display new options;}else{player loses a life; letter leaves the letter bank}
//keys are continually listened to and removed from array until live === 0 || last letter is guessed. This triggers either "win" message or "loss" message, but always triggers new game and adds ++ to either wins or losses
//
//BONUS: hint button in exchange for a life


//spitballing

var game = {
    answer : "",
    ansArr : [],
    words : [
        'dog',
        'cat',
        'mouse'
    ],
    lives: 0,
    getAnswer: function (arr) {
        answer = arr[Math.floor(Math.random()*arr.length)];
        String(answer);
        return answer;
    },//this picks a random answer
    answerArraySplit: function(callback) {
        //designed to feed in the getAnswer method which = answer which = the random word which was turned into a string in that method
        ansArr = callback.split("");
        console.log(ansArr);
        //ansArr is now and object with the .length property
        //there should be html here to display an array of "_" with the length of ansArr
        // ansArr.push(str);
        return ansArr;
    },
    //letters: this.answer.length, this figures out how many letters are in the answer NO LONGER NEEDED
    lives: function (callbackOne) {
        console.log(callbackOne)
        lives = parseInt(callbackOne.length) - 2;
        document.getElementById("playerLives").innerHTML = lives;
        console.log(lives);
        return lives;
   }, //this figures out how lives you start with
//     spaces: function (arr) {
//         document.getElementById().innerHTML = " _ "*arr;
//     },//this creates spaces for each letter in answer
//     gameStart: function (){
//         document.getElementById("startScreen").style = {display:hidden};
//         document.getElementById("playerLives").innerHTML = game.lives;
//         game.spaces(game.letters);
//     },//this hides start screen, displays lives, and adds spaces
//     // keyPress: function(event){
//     //     var letterGuess = event.key;
//     //     if ((this.answer.indexOf("letterGuess")>0)){
//     //         figure out a way to add the letter to the game and keep playing
//     //     }else if((this.answer.indexOf("letterGuess)== -1) && 
//     //     (this.lives > 0)){ //else if you get a wrong guess while still having lives
//     //     document.getElementById("playerGuesses").innerHTML = + letterGuess;
//     //         adds your letter to guessed letters
//     //     newLives = parseInt(document.getElementById("playerLives")) - 1;
//     //     calculates new lives
//     //     document.getElementById("playerLives").innerHTML = newLives;
//     //         posts new life count to htmlS
//     //     }else{dispay game over restart message}
//     // )
}

game.getAnswer(game.words);
game.lives(game.answerArraySplit(game.getAnswer(game.words)));


// //on first keypress run game start
// document.onkeyup = game.gameStart(){
//     //as long as 
//     for(chances=game.lives, chances>0){
//         clicks[1].addEventListener("keyup", keyPress(event){

//         }
        
//         //basically just call gameStart, then set loop to listen for keyUp (until lives =0) to trigger keyPress
        
// )}}
// }



// document.onkeyup = addEventListener("keyup", function(event){
//     car.driveToWork();
//     console.log(event.key);
//   });

//   if referencing multiple methods upon an event listener, start a new function that runs at the event and then nest the methods inside of the function to run in sequential order as you would any subsequent operations in a function separated by ;

//   var arr = ["b", "e", "n"]
// console.log(arr.join(""));		.join is an array method
// var name ="ben"
// console.log(name.split(""));		.split is a string method


// the car-object thing stores its new miles in itself. reference

// function genAlphabet() {
// 	var alph = [];

// 	for (var i = 65; i < 91; i++) {
// 		alph.push(String.fromCharCode(i).toLowerCase());
// 	}

// 	return alph;
// }

// var alphabet = genAlphabet();


// Call back functions in use
// var alphbet = ["a", "b", "c"]
// var callback = function (element);
//     languages.forEach(function(element) {
//         console.log(element)
//     });(longer way to do the thing below)

//     languages.forEach(callback);


//     you can pass html by including element tags in the .innerHTML = part

//     anytime you run a return, it ends the function
// ex: if (index = array.length){
// return;
// }


// arr = ["a", "b", "c"];
// arr[1] = "d";

//SHORT GAME CODE

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Guess The Word!</title>
    <style src="css/style.css"></style>
</head>

<body>
    <div id="startScreen">Click any key to start!</div>
    <p>Word length: <span id="spaces"></span></p>
    <p>Player Lives: <span id="playerLives"></span></p>
    <p>Player Incorrect Guesses: <span id="usedLetters"></span></p>
    <h1 id="lettersGuessed"></h1>
    <script>

        var game = {

            answer: "placeholder",

            words: ["dog", "cat", "mouse", "alphabaloogia"],

            // answerString: answer = 0,

            // answerArr: ansArr = 0,

            // answerEmptyArr: emptArr = 0,

            // answerLength: ansLength = 0,

            gameStart: function (arr) {
                answer = arr[Math.floor(Math.random() * arr.length)];
                console.log(answer);
                String(answer);
                ansArr = answer.split("");
                console.log(ansArr);
                //designed to feed in the getAnswer method which = answer which = the random word which was turned into a string in that method
                //ansArr is now and object with the .length property
                //there should be html here to display an array of "_" with the length of ansArr
                // ansArr.push(str);
                emptArr = ansArr;
                console.log(emptArr);
                for (i = 0; i < emptArr.length; i++) {
                    emptArr.splice(i, 1, "_");
                };
                console.log(emptArr);
                document.getElementById("spaces").innerHTML = emptArr;
                console.log()
                ansLength = parseInt(emptArr.length);
                lives = parseInt(emptArr.length) - 2;
                document.getElementById("playerLives").innerHTML = lives;
                console.log(lives);
                return lives;
            },

            }//this is the start game operations






            // answerObj: {
            //     answerString: answer,
            //     answerArr: ansArr,
            //     answerEmptyArr: empArr,
            //     answerLength: ansLength,
            // },
        

        document.onkeyup = addEventListener("keyup", function (event) {
            console.log("Im listening");
            game.gameStart(game.words);
            game.answerArraySplit(answer);
            game.emptyArray(ansArr);
            game.lives(empArr);
        });
// document.onkeyup= function(event){}//GAMEPLAY)
// game.getAnswer(game.words);
// game.displayBlank(answer)
// game.emptyArray(answer);
// game.lives(game.answerArraySplit(game.getAnswer(game.words)));


//longgame code
    </script>


    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Guess The Word!</title>
        <style src="css/style.css"></style>
    </head>
    
    <body>
        <div id="startScreen">Click any key to start!</div>
        <p>Word length: <span id="spaces"></span></p>
        <p>Player Lives: <span id="playerLives"></span></p>
        <p>Player Incorrect Guesses: <span id="usedLetters"></span></p>
        <h1 id="lettersGuessed"></h1>
        <script>
    
            var game = {
    
                answer: "placeholder",
    
                words: ["dog", "cat", "mouse"],
    
                answerString: answer = "",
    
                answerArr: ansArr = [],
    
                answerEmptyArr: emptArr = [],
    
                answerLength: ansLength = 0,
    
                getAnswer: function (arr) {
                    answer = arr[Math.floor(Math.random() * arr.length)];
                    console.log(answer);
                    String(answer);
                    return answer;
                },//this picks a random answer
    
                answerArraySplit: function (str) {
                    ansArr = str.split("");
                    console.log(ansArr);
                    this.answerArr = ansArr;
                    console.log(this.answerArr);
                    //designed to feed in the getAnswer method which = answer which = the random word which was turned into a string in that method
                    //ansArr is now and object with the .length property
                    //there should be html here to display an array of "_" with the length of ansArr
                    // ansArr.push(str);
                },
    
                emptyArray: function (arr) {
                    console.log(this.answerArr);
                    emptArr = this.answerArr;
                    console.log(emptArr);
                    for (i = 0; i < emptArr.length; i++) {
                        emptArr.splice(i, 1, "_");
                    };
                    console.log(emptArr);
                    document.getElementById("spaces").innerHTML = emptArr;
                },
    
                lives: function (arr) {
                    console.log(arr)
                    ansLength = parseInt(arr.length);
                    lives = parseInt(arr.length) - 2;
                    document.getElementById("playerLives").innerHTML = lives;
                    console.log(lives);
                    return lives;
                },
    
                // answerObj: {
                //     answerString: answer,
                //     answerArr: ansArr,
                //     answerEmptyArr: empArr,
                //     answerLength: ansLength,
                // },
            }
    
            document.onkeyup = addEventListener("keyup", function (event) {
                console.log("Im listening");
                console.log(answer);
                console.log(ansArr);
                console.log(emptArr);
                console.log(ansLength);
                game.getAnswer(game.words);
                game.answerArraySplit(answer);
                game.emptyArray(this.answerArr);
                game.lives(emptArr);
                console.log("Im listening");
                console.log(answer);
                console.log(ansArr);
                console.log(emptArr);
                console.log(ansLength);
            });
    // document.onkeyup= function(event){}//GAMEPLAY)
    // game.getAnswer(game.words);
    // game.displayBlank(answer)
    // game.emptyArray(answer);
    // game.lives(game.answerArraySplit(game.getAnswer(game.words)));
    
        </script>
    </body>
    
    </html>


</body>

</html>

</meta>