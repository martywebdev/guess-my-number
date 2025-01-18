const guess = document.querySelector(".guess");
const message = document.querySelector(".message");
const number = document.querySelector(".number");
const checkBtn = document.querySelector(".check");
const resetBtn = document.querySelector(".again");
const score = document.querySelector(".score");

let random;
let userScore = Number(score.textContent);

guess.addEventListener("input", (e) => {});

const check = () => {
  console.log(random); // For debugging purposes
  const userGuess = Number(guess.value);

  if (userScore < 1) {
    message.textContent = "🔴You lose!";
    return;
  }

  if (!userGuess) {
    message.textContent = "🎈No Number";
    userScore--;
  } else {
    if (userGuess < random) {
      message.textContent = "Too Low";
      userScore--;
    } else if (userGuess > random) {
      message.textContent = "Too high";
      userScore--;
    } else if (userGuess === random) {
      message.textContent = "🎉Correct Number";
      number.textContent = random;

      //add score
      // vanilla js
      // document.body.style.backgroundColor = "green";
      //tailwind
      document.body.classList.remove("bg-[#222]"); // Remove the existing background color class
      document.body.classList.add("bg-green-500");
      number.classList.remove("w-[15rem]");
      number.classList.add("w-[30rem]");
    }
  }

  score.textContent = userScore;
};

const reset = () => {
  guess.value = "";
  number.textContent = "?";
  message.textContent = "";
  score.textContent = "20";
  document.body.classList.remove("bg-green-500");
  document.body.classList.add("bg-[#222]");
  random = Math.floor(Math.random() * 20) + 1;
  number.classList.add("w-[15rem]");
  number.classList.remove("w-[30rem]");
};

reset();

// Trigger the check function when the Check button is clicked
checkBtn.addEventListener("click", check);

// Trigger the reset function when the Reset button is clicked
resetBtn.addEventListener("click", reset);
