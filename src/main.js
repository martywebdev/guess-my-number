const guess = document.querySelector(".guess");
const message = document.querySelector(".message");
const number = document.querySelector(".number");
const checkBtn = document.querySelector(".check");
const resetBtn = document.querySelector(".again");
const score = document.querySelector(".score");
const highScore = document.querySelector(".highscore");

let random;
let userScore;

const updateMessage = (msg) => (message.textContent = msg);

const updateStyles = (toAdd, toRemove) => {
  document.body.classList.remove(...toRemove);
  document.body.classList.add(...toAdd);
};

const updateNumberStyles = (toAdd, toRemove) => {
  number.classList.remove(...toRemove);
  number.classList.add(...toAdd);
};

const check = () => {
  const userGuess = Number(guess.value);

  if (userScore < 1) {
    updateMessage("🔴You lose!");
    return;
  }

  if (!userGuess) {
    updateMessage("🎈No Number");
    userScore--;
  } else if (userGuess < random) {
    updateMessage("Too Low");
    userScore--;
  } else if (userGuess > random) {
    updateMessage("Too high");
    userScore--;
  } else {
    updateMessage("🎉Correct Number");
    number.textContent = random;

    if (userScore > Number(highScore.textContent)) {
      highScore.textContent = userScore;
    }

    checkBtn.disabled = true;
    updateStyles(["bg-green-500"], ["bg-[#222]"]);
    updateNumberStyles(["w-[30rem]"], ["w-[15rem]"]);
  }

  score.textContent = userScore;
};

const reset = () => {
  guess.value = "";
  number.textContent = "?";
  updateMessage("");
  userScore = 20;
  score.textContent = userScore;
  random = Math.floor(Math.random() * 20) + 1;

  checkBtn.disabled = false;
  updateStyles(["bg-[#222]"], ["bg-green-500"]);
  updateNumberStyles(["w-[15rem]"], ["w-[30rem]"]);
};

reset();

checkBtn.addEventListener("click", check);

resetBtn.addEventListener("click", reset);
