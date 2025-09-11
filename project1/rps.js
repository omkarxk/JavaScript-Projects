const score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  looses: 0,
  ties: 0,
};

updateScoreElement();

function playgame(playerChoice) {
  const computerChoice = pickComputerChoice();
  let result = "";

  if (playerChoice === "Rock") {
    if (computerChoice === "Paper") {
      result = "You Lose!";
    } else if (computerChoice === "Scissors") {
      result = "You Win!";
    } else if (computerChoice === "Rock") {
      result = "Its a tie!";
    }
  }

  if (playerChoice === "Paper") {
    if (computerChoice === "Scissors") {
      result = "You Lose!";
    } else if (computerChoice === "Rock") {
      result = "You Win!";
    } else if (computerChoice === "Paper") {
      result = "Its a tie!";
    }
  }

  if (playerChoice === "Scissors") {
    if (computerChoice === "Rock") {
      result = "You Lose!";
    } else if (computerChoice === "Paper") {
      result = "You Win!";
    } else if (computerChoice === "Scissors") {
      result = "Its a tie!";
    }
  }

  if (result === "You Win!") {
    score.wins = score.wins + 1;
  } else if (result === "You Lose!") {
    score.looses = score.looses + 1;
  } else if (result === "Its a tie!") {
    score.ties = score.ties + 1;
  }

  localStorage.setItem("score", JSON.stringify(score));
  updateScoreElement();

  document.querySelector(".js-result").innerHTML = result;
  document.querySelector(
    ".js-result"
  ).innerHTML = `You <img class="move1" src="image/${playerChoice}-emoji.png"/>
        Computer <img class="move1" src="image/${computerChoice}-emoji.png"/>`;
}

function pickComputerChoice() {
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerChoice = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerChoice = "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerChoice = "Scissors";
  }
  return computerChoice;
}

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `wins: ${score.wins}, looses: ${score.looses}, ties: ${score.ties}`;
}
