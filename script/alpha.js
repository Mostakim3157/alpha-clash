// step:4
// function handleKeyboardKeyPress(event) {
//   const playerPressed = event.key;
//   console.log('player pressed', playerPressed)

//   // get the expected to press
//   const currentAlphabetElement = document.getElementById('current-alphabet')
//   const currentAlphabet = currentAlphabetElement.innerText
//   const expectedAlphabet = currentAlphabet.toLocaleLowerCase()
//   console.log(expectedAlphabet, 'playerPressed', playerPressed)

//   // check matched or not
//   if(playerPressed === expectedAlphabet){
//     continueGame()
//     console.log('win')
//   }
//   else{
//     console.log('lost a life')
//   }
// }

function handleKeyboardKeyPress(event) {
  const playerPressed = event.key;

// stop the game if player pressed esc
  if(playerPressed === 'Escape'){
    gameOver();
  }


  // expected to press
  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();

  if (playerPressed === expectedAlphabet) {
    continueGame();

    const currentScore = getElementValueById("current-score");
    const updatedScore = currentScore + 1;
    setElementValueById("current-score", updatedScore);

    // // update score
    // // 1.get the current score
    // const currentScoreElement = document.getElementById('current-score')
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);

    // // 2. increase the score
    // const newScore = currentScore + 1;

    // // 3. set the updated score
    // currentScoreElement.innerText = newScore

    //star a new round
    removeBackgroundColorById(expectedAlphabet);
  } else {
    // console.log('duru mia' )
    // // 1. get the current number
    // const currentLifeElement = document.getElementById('current-life')
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeText)

    // // 2.decrease the value of life
    // const newLife = currentLife - 1;

    // // 3. set the value of new life
    // currentLifeElement.innerText = newLife;

    const currentLife = getElementValueById("current-life");
    const updatedLife = currentLife - 1;
    setElementValueById("current-life", updatedLife);

    if (updatedLife === 0) {
      gameOver();
      console.log("khela sesh");
    }
  }
}

document.addEventListener("keyup", handleKeyboardKeyPress);

// Step: 2
function continueGame() {
  // generate a random alphabet
  const alphabet = getARandomAlphabet();

  // set randomly generated to the screen
  const currentAlphabet = document.getElementById("current-alphabet");
  currentAlphabet.innerText = alphabet;

  // set background color
  setBackgroundColorById(alphabet);
}

// Step: 1
function play() {
  // hide everything show only the playground
  hideElementByID("home-screen");
  hideElementByID("final-score");
  showElementById("play-ground");
  continueGame();

  // reset scoreboard
  setElementValueById("current-life", 5);
  setElementValueById("current-score", 0);
}

function gameOver() {
  hideElementByID("play-ground");
  showElementById("final-score");

  //update final score
  const finalResult = getElementValueById("current-score");
  setElementValueById("final-result", finalResult);

  const currentAlphabet = getElementTextById('current-alphabet')
  removeBackgroundColorById(currentAlphabet);
}
