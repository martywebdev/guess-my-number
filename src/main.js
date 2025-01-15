
const guess = document.querySelector('.guess')
const message = document.querySelector('.message')
const number = document.querySelector('.number')
const checkBtn = document.querySelector('.check');
const resetBtn = document.querySelector('.again');

let  random;


guess.addEventListener('input', e => {
    number.textContent = e.target.value
})

const check = () => {
    console.log(random);  // For debugging purposes
    const userGuess = Number(guess.value);
    if (!userGuess) {
        message.textContent = '🎈No Number';
    } else {
        if (userGuess < random) {
            message.textContent = 'Higher';
        } else if (userGuess > random) {
            message.textContent = 'Lower';
        } else if (userGuess === random) {
            message.textContent = '🎉Correct Number';
        }
    }
    
};

const reset = () => {
    guess.value = '';
    number.textContent = '?';
    message.textContent = '';
    random = Math.floor(Math.random() * 20) + 1;
}

reset()

// Trigger the check function when the Check button is clicked
checkBtn.addEventListener('click', check);

// Trigger the reset function when the Reset button is clicked
resetBtn.addEventListener('click', reset);
