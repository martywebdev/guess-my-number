
const guess = document.querySelector('.guess')
const message = document.querySelector('.message')
let  random;
const number = document.querySelector('.number')

guess.addEventListener('change', e => {
    number.textContent = e.target.value
})

const check = () => {
    console.log(random)
    if (Number(guess.value) < random) {
        message.textContent = 'Higher'
    } else if (Number(guess.value) > random) {
        message.textContent = 'Lower'
    } else if (Number(guess.value) === random) {
        message.textContent = '🎉Correct Number'
    }
}

const reset = () => {
    guess.value = ''
    number.textContent = '?'
    random =  Math.floor(Math.random() * 20) + 1;
}

reset()