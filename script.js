const options = ["rock", "paper", "scissors"];

const userContainer = document.querySelector("#container");
const computerContainer = document.querySelector("#computer");
const computerResult = document.querySelector("#computer1");
const userResult = document.querySelector("#user");

const result = document.querySelector("#result");
const again = document.querySelector("#again");

again.onclick = playAgain;
function playAgain() {
  userContainer.removeAttribute("value");
  computerContainer.removeAttribute("value");
  result.innerHTML = "";
  userResult.innerText = "";
  computerResult.innerText = "";
}

options.forEach((element) => {
  const userContainer = document.querySelector("#container");
  const button = document.createElement("button");
  button.innerHTML = element;
  button.classList.add(element);
  userContainer.appendChild(button);
  button.setAttribute(
    "style",
    "background-color: #4CAF50;border: none;color: white;padding: 15px 32px;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;margin: 4px 2px;cursor: pointer;"
  );

  button.onclick = userChoice;
});

function userChoice(e) {
  const playerSelection = e.target.innerText;
  const x = userContainer.setAttribute("value", playerSelection);
  const computer = computerChoice(options);
  const user = userContainer.getAttribute("value");
  computerResult.innerHTML = computer;
  computerResult.setAttribute("style", "color:#4CAF50");
  userResult.innerHTML = user;
  userResult.setAttribute("style", "color:#4CAF50");
  const gameResult = winner(computer, user);
  result.innerHTML = gameResult[0];
  result.setAttribute("style", `color:${gameResult[1]}`);
}

function computerChoice(arr) {
  const random = Math.floor(Math.random() * arr.length);
  computerContainer.setAttribute("value", arr[random]);
  return arr[random];
}

function winner(ComputerChoice, playerChoice) {
  if (playerChoice === ComputerChoice) {
    return ["It's a tie!", "orange"];
  }
  if (playerChoice === "rock") {
    if (ComputerChoice === "scissors") {
      return ["You win!", "green"];
    } else {
      return ["You lose! Try again.", "red"];
    }
  }
  if (playerChoice === "paper") {
    if (ComputerChoice === "rock") {
      return ["You win!", "green"];
    } else {
      return ["You lose! Try again.", "red"];
    }
  }
  if (playerChoice === "scissors") {
    if (ComputerChoice === "rock") {
      return ["You lose! Try again.", "red"];
    } else {
      return ["You win!", "green"];
    }
  }
}
