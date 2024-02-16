// Step: 1
function hideElementByID(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

// Step: 2
function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

// Step: 4
function setBackgroundColorById(elementId){
  const element = document.getElementById(elementId);
  element.classList.add('bg-orange-400')

}

// Step: 3
function getARandomAlphabet() {
    // get or create alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    // get a random index between 0-25
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index]
    return alphabet

}



