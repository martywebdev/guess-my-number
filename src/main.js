
const guess = document.querySelector('.guess')
const message = document.querySelector('.message')
const random = Math.floor(Math.random() * 20) + 1;

const check = () => {
    console.log(random)
    if (Number(guess.value) !== random) {
        alert('You failed')
    } else {
        alert('fuck')
    }
}