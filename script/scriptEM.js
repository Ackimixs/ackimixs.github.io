function soundOn() {
    var ElonMusk = new Audio('../music/The Elon Musk Song [OFFICIAL].wav');
    ElonMusk.play();
}

$( document ).on("click", "img", soundOn);