var wordsList = [
    { word: "smurf", first: "_", second: "_", third: "_", fourth: "_", fifth: "_" },
    { word: "dinosaur", length: 8 },
    { word: "popeye", length: 6 }
];
var wordIndex = 0;
var start = document.getElementById("prompt");

document.onkeyup = function (event) {
    start.textContent = wordsList[wordIndex].first + " " + wordsList[wordIndex].second + " " + wordsList[wordIndex].third + " " + wordsList[wordIndex].fourth + " " + wordsList[wordIndex].fifth;
}
