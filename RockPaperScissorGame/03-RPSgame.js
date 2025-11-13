let btn1 = document.querySelector(".btnrock");
let btn2 = document.querySelector(".btnpaper");
let btn3 = document.querySelector(".btnscissors");
let div = document.querySelector(".container-1");
const moves = {
  Win: 0,
  Lose: 0,
  Tie: 0,
};

let computermove = "";
function computerturn() {
  let compturn = Math.random();

  if (compturn >= 0 && compturn < 1 / 3) {
    computermove = "rock";
  } else if (compturn >= 1 / 3 && compturn < 2 / 3) {
    computermove = "paper";
  } else if (compturn >= 2 / 3 && compturn < 1) {
    computermove = "scissors";
  }
  // return computermove;
  // console.log("Computermove ",computermove)
}

let result = "";
let usermove = "";
function gameresult() {
  if (
    (usermove == "rock" && computermove == "paper") ||
    (usermove == "paper" && computermove == "scissors") ||
    (usermove == "scissors" && computermove == "rock")
  ) {
    result = "You lose :(";
    moves.Lose += 1;
  } else if (
    (usermove == "paper" && computermove == "rock") ||
    (usermove == "rock" && computermove == "scissors") ||
    (usermove == "scissors" && computermove == "paper")
  ) {
    result = "You WIN :)";
    moves.Win += 1;
  } else if (
    (usermove == "rock" && computermove == "rock") ||
    (usermove == "paper" && computermove == "paper") ||
    (usermove == "scissors" && computermove == "scissors")
  ) {
    result = "Tie ;)";
    moves.Tie += 1;
  }

  div.innerHTML = ` <div class="turns">You: <img src="images/${usermove}-emoji.png" class="emoji-1">
                    Computer:<img src="images/${computermove}-emoji.png" class="emoji-1"> </div>
                    <div class="result">Result: ${result}</div>
                <div class="scores"> Win: ${moves.Win}, Lose: ${moves.Lose}, Tie: ${moves.Tie} 
                    <button class="reset">Reset Score</button></div>`;

  let reset = div.querySelector(".reset");
  let reset1 = div.querySelector(".scores");
  reset.addEventListener("click", () => {
    moves.Win = 0;
    moves.Lose = 0;
    moves.Tie = 0;
    reset1.innerHTML = `Win: ${moves.Win}, Lose: ${moves.Lose}, Tie: ${moves.Tie} 
                    <button class="reset">Reset Score</button>`;
  });
}

btn1.addEventListener("click", () => {
  usermove = "rock";
  computerturn();
  gameresult();
});

btn2.addEventListener("click", () => {
  usermove = "paper";
  computerturn();
  gameresult();
});

btn3.addEventListener("click", () => {
  usermove = "scissors";
  computerturn();
  gameresult();
});
