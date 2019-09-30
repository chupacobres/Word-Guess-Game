var wordsList = [
    { word: "smurf", first: "_", second: "_", third: "_", fourth: "_", fifth: "_" },
    { word: "dinosaur", first: "_", second: "_", third: "_", fourth: "_", fifth: "_", sixth: "_", seventh: "_", eighth: "_" },
    { word: "popeye", length: 6 }
];
var wordIndex = 0;
var start = document.getElementById("prompt");

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
            alert("Wrong!");
        }
        if (wordsList[wordIndex].first == "s" && wordsList[wordIndex].second == "m" && wordsList[wordIndex].third == "u" && wordsList[wordIndex].fourth == "r" && wordsList[wordIndex].fifth == "f") {
            wordIndex++;
            alert("Good Job");
            start.textContent = wordsList[wordIndex].first + " " + wordsList[wordIndex].second + " " + wordsList[wordIndex].third + " " + wordsList[wordIndex].fourth + " " + wordsList[wordIndex].fifth + " " + wordsList[wordIndex].sixth + " " + wordsList[wordIndex].seventh + " " + wordsList[wordIndex].eighth;
        }
    }
}
    // second word code
    // if (event.key === "d") {
    //     wordsList[wordIndex].first = "d";
    //     console.log(wordsList[1]);
    //     start.textContent = wordsList[wordIndex].first + " " + wordsList[wordIndex].second + " " + wordsList[wordIndex].third + " " + wordsList[wordIndex].fourth + " " + wordsList[wordIndex].fifth + " " + wordsList[wordIndex].sixth + " " + wordsList[wordIndex].seventh + " " + wordsList[wordIndex].eighth;
    // }
    //     //     if (event.key === "i") {
    //     //         wordsList[wordIndex].second = "i";
    //     //         start.textContent = wordsList[wordIndex].first + " " + wordsList[wordIndex].second + " " + wordsList[wordIndex].third + " " + wordsList[wordIndex].fourth + " " + wordsList[wordIndex].fifth + " " + wordsList[wordIndex].sixth + " " + wordsList[wordIndex].seventh + " " + wordsList[wordIndex].eighth;
    //     //     }
    //     //     if (event.key === "n") {
    //     //         wordsList[wordIndex].third = "n";
    //     //         start.textContent = wordsList[wordIndex].first + " " + wordsList[wordIndex].second + " " + wordsList[wordIndex].third + " " + wordsList[wordIndex].fourth + " " + wordsList[wordIndex].fifth + " " + wordsList[wordIndex].sixth + " " + wordsList[wordIndex].seventh + " " + wordsList[wordIndex].eighth;
    //     //     }
    //     //     if (event.key === "o") {
    //     //         wordsList[wordIndex].fourth = "o";
    //     //         start.textContent = wordsList[wordIndex].first + " " + wordsList[wordIndex].second + " " + wordsList[wordIndex].third + " " + wordsList[wordIndex].fourth + " " + wordsList[wordIndex].fifth + " " + wordsList[wordIndex].sixth + " " + wordsList[wordIndex].seventh + " " + wordsList[wordIndex].eighth;
    //     //     }
    //     //     if (event.key === "s") {
    //     //         wordsList[wordIndex].fifth = "s";
    //     //         start.textContent = wordsList[wordIndex].first + " " + wordsList[wordIndex].second + " " + wordsList[wordIndex].third + " " + wordsList[wordIndex].fourth + " " + wordsList[wordIndex].fifth + " " + wordsList[wordIndex].sixth + " " + wordsList[wordIndex].seventh + " " + wordsList[wordIndex].eighth;
    //     //     }
    //     //     if (event.key === "a") {
    //     //         wordsList[wordIndex].fifth = "a";
    //     //         start.textContent = wordsList[wordIndex].first + " " + wordsList[wordIndex].second + " " + wordsList[wordIndex].third + " " + wordsList[wordIndex].fourth + " " + wordsList[wordIndex].fifth + " " + wordsList[wordIndex].sixth + " " + wordsList[wordIndex].seventh + " " + wordsList[wordIndex].eighth;
    //     //     }
    //     //     if (event.key === "u") {
    //     //         wordsList[wordIndex].fifth = "u";
    //     //         start.textContent = wordsList[wordIndex].first + " " + wordsList[wordIndex].second + " " + wordsList[wordIndex].third + " " + wordsList[wordIndex].fourth + " " + wordsList[wordIndex].fifth + " " + wordsList[wordIndex].sixth + " " + wordsList[wordIndex].seventh + " " + wordsList[wordIndex].eighth;
    //     //     }
    //     //     if (event.key === "r") {
    //     //         wordsList[wordIndex].fifth = "r";
    //     //         start.textContent = wordsList[wordIndex].first + " " + wordsList[wordIndex].second + " " + wordsList[wordIndex].third + " " + wordsList[wordIndex].fourth + " " + wordsList[wordIndex].fifth + " " + wordsList[wordIndex].sixth + " " + wordsList[wordIndex].seventh + " " + wordsList[wordIndex].eighth;
    //     //     }
    //     //     if (event.key !== "d" && event.key !== "i" && event.key !== "n" && event.key !== "o" && event.key !== "s" && event.key !== "a" && event.key !== "u" && event.key !== "r") {
    //     //         alert("Wrong!");
    //     //     }
    //     // }

}