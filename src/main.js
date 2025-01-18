
const guess = document.querySelector('.guess')
const message = document.querySelector('.message')
const number = document.querySelector('.number')
const checkBtn = document.querySelector('.check');
const resetBtn = document.querySelector('.again');
const score = document.querySelector('.score')

let  random;
let userScore = Number(score.textContent)

guess.addEventListener('input', e => {
    number.textContent = e.target.value
})

const check = () => {
    console.log(random);  // For debugging purposes
    const userGuess = Number(guess.value);

    if (userScore < 1) {
        message.textContent = 'You lose!'
        return
    }
    
    if (!userGuess) {
        message.textContent = '🎈No Number';
        userScore--
    } else {
        if (userGuess < random) {
            message.textContent = 'Too Low';
            userScore--
        } else if (userGuess > random) {
            message.textContent = 'Too high';  
            userScore--
        } else if (userGuess === random) {
            message.textContent = '🎉Correct Number';
            //add score
        }
    }
    
    score.textContent = userScore
};

const reset = () => {
    guess.value = '';
    number.textContent = '?';
    message.textContent = '';
    score.textContent = '20'
    random = Math.floor(Math.random() * 20) + 1;
}

reset()

// Trigger the check function when the Check button is clicked
checkBtn.addEventListener('click', check);

// Trigger the reset function when the Reset button is clicked
resetBtn.addEventListener('click', reset);
