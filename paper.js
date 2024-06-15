let but = document.querySelectorAll(".buten");

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const sis = document.getElementById("sis");

const predict = document.getElementById("predict");

const player = document.getElementById("player");
const comp = document.getElementById("comp");

const playerscore = document.getElementById("playerscore");

const computerscore = document.getElementById("computerscore");

let p_score = 0;
let c_score = 0;
const computer_choice = ["rock", "paper", "sissors"];

but.forEach((button) => {
  button.addEventListener("mouseover", function () {
    button.style.backgroundColor = " rgb(14, 214, 14)";
  });
  button.addEventListener("mouseout", function () {
    button.style.backgroundColor = "lightblue";
  });
});

rock.addEventListener("click", function () {
  win_predict("rock");
});

paper.addEventListener("click", function () {
  win_predict("paper");
});

sis.addEventListener("click", function () {
  win_predict("sissors");
});

predict.style.textTransform = "capitalize";
function win_predict(my_choice) {
  let result = "";
  let k = Math.floor(Math.random() * 3);
  let s_choice = computer_choice[k];
  if (my_choice === s_choice) {
    predict.classList.add("yellow");
    result = "IT'S A TIE ";
    playerscore.textContent = `player score :${p_score}`;
    computerscore.textContent = `computer score :${c_score}`;
  } else {
    switch (my_choice) {
      case "rock":
        result = s_choice === "sissors" ? "you win" : "you lost";
        predict.textContent = result;
        break;

      case "paper":
        result = s_choice === "sissors" ? "you lost" : "you win";
        predict.textContent = result;
        break;

      case "sissors":
        result = s_choice === "rock" ? "you lost" : "you win";
        predict.textContent = result;
        break;
    }
  }
  player.textContent = `player choice : ${my_choice}`;
  comp.textContent = `computer choice :${s_choice}`;
  predict.textContent = result;

  predict.classList.remove("green", "red");

  switch (result) {
    case "you win":
      predict.classList.remove("yellow");
      predict.classList.add("green");
      p_score++;
      playerscore.textContent = `player score :${p_score}`;
      computerscore.textContent = `computer score :${c_score}`;
      break;
    case "you lost":
      predict.classList.remove("yellow");
      predict.classList.add("red");
      c_score++;
      playerscore.textContent = `player score :${p_score}`;
      computerscore.textContent = `computer score :${c_score}`;
      break;
  }
}
