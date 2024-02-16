// Step: 2
function continueGame() {
    // generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log(alphabet)

    // set randomly generated to the screen
    const currentAlphabet = document.getElementById('current-alphabet')
    currentAlphabet.innerText = alphabet
    
    // set background color
    setBackgroundColorById(alphabet)

}

// Step: 1
function play() {
  hideElementByID("home-screen");
  showElementById("play-ground");
  continueGame()
}

