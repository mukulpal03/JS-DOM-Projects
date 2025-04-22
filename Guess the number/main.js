let randomNumber = Math.floor(Math.random() * 100 + 1)

let userInput = document.querySelector('#guessField')
let submit = document.querySelector('#subt')
let guessSlot = document.querySelector('.guesses')
let remainingGuess = document.querySelector('.lastResult')
let message = document.querySelector('.lowOrHi')
let startOver = document.querySelector('.resultParas')

let button = document.createElement('button')

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame) {
    submit.addEventListener("click", function (event) {
        event.preventDefault()
        let guess = Number(userInput.value)
        validateGuess(guess)  
    }) 
}

function validateGuess(guess) {
    if(isNaN(guess)) {
        displayMessage("please enter a valid number")
    } else if(guess < 1) {
        displayMessage("please enter a number more than 1")
    } else if(guess > 100) {
        displayMessage("please enter a number less than 100")
    } else {
        if(numGuess >= 10) {
            displayGuess(guess)
            displayMessage(`Game Over! Random number was ${randomNumber}`)
            endGame();
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function displayGuess(guess) {
    prevGuess.push(guess)
    userInput.value = '';
    guessSlot.innerHTML = `${prevGuess}, `;
    numGuess++
    remainingGuess.innerHTML = `${11 - numGuess}`
}

function checkGuess(guess) {
    if(guess === randomNumber) {
        displayMessage(`You guessed it right`);
        endGame();
    } else if(guess < randomNumber) {
        displayMessage(`Your guess is Low, Guess a larger number`)
    } else if(guess > randomNumber) {
        displayMessage(`Your guess is High, Guess a smaller number`)
    }
}

function displayMessage(messageToDisplay) {
    message.innerHTML = `<h2>${messageToDisplay}</h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    button.id = "newGame"
    button.innerHTML = "Start new game"
    startOver.appendChild(button)
    playGame = false
    newGame();
}

function newGame() {
    document.querySelector('#newGame').addEventListener("click", function () {
        randomNumber = Math.floor(Math.random() * 100 + 1)
        numGuess = 1
        prevGuess = []
        userInput.removeAttribute()
        remainingGuess.innerHTML = `${10 - numGuess}`
        guessSlot.innerHTML = ''
        playGame = true;
    })
}

