var wordsList = [
    { word: "smurf", first: "_", second: "_", third: "_", fourth: "_", fifth: "_" },
    { word: "dinosaur", first: "_", second: "_", third: "_", fourth: "_", fifth: "_", sixth: "_", seventh: "_", eighth: "_" },
    { word: "popeye", first: "_", second: "_", third: "_", fourth: "_", fifth: "_", sixth: "_" }
];
var wordIndex = 0;
var start = document.getElementById("prompt");
var host = document.getElementById("message");
var score = document.getElementById("liferemain");
var wrongLetters = document.getElementById("lettersused");
var guessesLeft = 10;
score.textContent = guessesLeft;

document.onkeyup = function (event) {
    start.textContent = wordsList[wordIndex].first + " " + wordsList[wordIndex].second + " " + wordsList[wordIndex].third + " " + wordsList[wordIndex].fourth + " " + wordsList[wordIndex].fifth;
    document.onkeyup = function (event) {
        function wordStatus() {
            start.textContent = wordsList[wordIndex].first + " " + wordsList[wordIndex].second + " " + wordsList[wordIndex].third + " " + wordsList[wordIndex].fourth + " " + wordsList[wordIndex].fifth;
        }

        if (event.key === "s") {
            wordsList[wordIndex].first = "s";
            wordStatus();
        }
        if (event.key === "m") {
            wordsList[wordIndex].second = "m";
            wordStatus();
        }
        if (event.key === "u") {
            wordsList[wordIndex].third = "u";
            wordStatus();
        }
        if (event.key === "r") {
            wordsList[wordIndex].fourth = "r";
            wordStatus();
        }
        if (event.key === "f") {
            wordsList[wordIndex].fifth = "f";
            wordStatus();
        }
        if (event.key !== "s" && event.key !== "m" && event.key !== "u" && event.key !== "r" && event.key !== "f") {
            guessesLeft = guessesLeft - 1
            score.textContent = guessesLeft;
            var nope = event.key;
            lettersarray=[];
            lettersarray.push(nope);
            for (i=0;i<lettersarray.length;i++){
            wrongLetters.textContent=lettersarray[i];
            }
            alert("Wrong!");
            
            
        }
        if (guessesLeft == 0) {
            document.write("<h1>game over</h1>");
        }
        if (wordsList[wordIndex].first == "s" && wordsList[wordIndex].second == "m" && wordsList[wordIndex].third == "u" && wordsList[wordIndex].fourth == "r" && wordsList[wordIndex].fifth == "f") {
            wordIndex++;
            host.textContent = "Good Job!";
            start.textContent = wordsList[wordIndex].first + " " + wordsList[wordIndex].second + " " + wordsList[wordIndex].third + " " + wordsList[wordIndex].fourth + " " + wordsList[wordIndex].fifth + " " + wordsList[wordIndex].sixth + " " + wordsList[wordIndex].seventh + " " + wordsList[wordIndex].eighth;
            document.onkeyup = function (event) {
                function wordStatus() {
                    start.textContent = wordsList[wordIndex].first + " " + wordsList[wordIndex].second + " " + wordsList[wordIndex].third + " " + wordsList[wordIndex].fourth + " " + wordsList[wordIndex].fifth + " " + wordsList[wordIndex].sixth + " " + wordsList[wordIndex].seventh + " " + wordsList[wordIndex].eighth;
                }
                if (event.key === "d") {
                    wordsList[wordIndex].first = "d";
                    wordStatus();
                }
                if (event.key === "i") {
                    wordsList[wordIndex].second = "i";
                    wordStatus();
                }
                if (event.key === "n") {
                    wordsList[wordIndex].third = "n";
                    wordStatus();
                }
                if (event.key === "o") {
                    wordsList[wordIndex].fourth = "o";
                    wordStatus();
                }
                if (event.key === "s") {
                    wordsList[wordIndex].fifth = "s";
                    wordStatus();
                }
                if (event.key === "a") {
                    wordsList[wordIndex].sixth = "a";
                    wordStatus();
                }
                if (event.key === "u") {
                    wordsList[wordIndex].seventh = "u";
                    wordStatus();
                }
                if (event.key === "r") {
                    wordsList[wordIndex].eighth = "r";
                    wordStatus();
                }
                if (event.key !== "d" && event.key !== "i" && event.key !== "n" && event.key !== "o" && event.key !== "s" && event.key !== "a" && event.key !== "u" && event.key !== "r") {
                    guessesLeft = guessesLeft - 1
                    score.textContent = guessesLeft;
                    alert("Wrong!");
                }
                if (guessesLeft == 0) {
                    document.write("<h1>game over</h1>");
                }

                if (wordsList[wordIndex].first == "d" && wordsList[wordIndex].second == "i" && wordsList[wordIndex].third == "n" && wordsList[wordIndex].fourth == "o" && wordsList[wordIndex].fifth == "s" && wordsList[wordIndex].sixth == "a" && wordsList[wordIndex].seventh == "u" && wordsList[wordIndex].eighth == "r") {
                    wordIndex++;
                    host.textContent = "Yay, two words down..!!";
                    start.textContent = wordsList[wordIndex].first + " " + wordsList[wordIndex].second + " " + wordsList[wordIndex].third + " " + wordsList[wordIndex].fourth + " " + wordsList[wordIndex].fifth + " " + wordsList[wordIndex].sixth;
                    document.onkeyup = function (event) {
                        function wordStatus() {
                            start.textContent = wordsList[wordIndex].first + " " + wordsList[wordIndex].second + " " + wordsList[wordIndex].third + " " + wordsList[wordIndex].fourth + " " + wordsList[wordIndex].fifth + " " + wordsList[wordIndex].sixth;
                        }
                        if (event.key === "p") {
                            wordsList[wordIndex].first = "p";
                            wordsList[wordIndex].third = "p";
                            wordStatus();
                        }
                        if (event.key === "o") {
                            wordsList[wordIndex].second = "o";
                            wordStatus();
                        }
                        if (event.key === "e") {
                            wordsList[wordIndex].fourth = "e";
                            wordsList[wordIndex].sixth = "e";
                            wordStatus();
                        }
                        if (event.key === "y") {
                            wordsList[wordIndex].fifth = "y";
                            wordStatus();
                        }
                        if (event.key !== "p" && event.key !== "o" && event.key !== "e" && event.key !== "y") {
                            guessesLeft = guessesLeft - 1
                            score.textContent = guessesLeft;
                            alert("Wrong!");
                            if (guessesLeft == 0) {
                                document.write("<h1>game over</h1>");
                            }
                        }
                        if (wordsList[wordIndex].first == "p" && wordsList[wordIndex].second == "o" && wordsList[wordIndex].third == "p" && wordsList[wordIndex].fourth == "e" && wordsList[wordIndex].fifth == "y" && wordsList[wordIndex].sixth == "e") {
                            // alert("Wow!! you did it");
                            host.textContent = "Congratulations, you win!!";
                        }
                    }
                }
            }
        }
    }
}
