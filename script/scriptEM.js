function soundOn() {
    var ElonMusk = new Audio('../music/this is Elon Musk.wav');
    ElonMusk.play();
}

$( document ).on("click", "img", soundOn);