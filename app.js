let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnIndicator = document.querySelector("#turn-indicator");
let playAgainBtn = document.querySelector("#play-again");

let isXturn = true; // X starts
let count = 0; // To track draw

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetGame = () => {
  isXturn = true;
  count = 0;
  msgContainer.classList.add("hide");
  turnIndicator.innerText = "X";
  boxes.forEach((b) => {
    b.disabled = false;
    b.innerText = "";
    b.classList.remove("x", "o", "win");
  });
};

boxes.forEach((box, idx) => {
  box.addEventListener("click", () => {
    if (box.innerText !== "") return; // already filled

    if (isXturn) {
      box.innerText = "X";
      box.classList.add("x");
    } else {
      box.innerText = "O";
      box.classList.add("o");
    }

    box.disabled = true;
    count++;
    turnIndicator.innerText = isXturn ? "O" : "X";
    isXturn = !isXturn;

    let isWinner = checkWinner();
    if (isWinner) return;

    if (count === 9) {
      gameDraw();
    }
  });
});

const gameDraw = () => {
  msg.innerText = `Game was a draw.`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const disableBoxes = () => {
  boxes.forEach((b) => (b.disabled = true));
};

const showWinner = (winner, pattern) => {
  msg.innerText = `Congratulations — ${winner} wins!`;
  msgContainer.classList.remove("hide");
  // highlight winning boxes
  pattern.forEach((i) => boxes[i].classList.add("win"));
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let [a, b, c] = pattern;
    let valA = boxes[a].innerText;
    let valB = boxes[b].innerText;
    let valC = boxes[c].innerText;

    if (valA !== "" && valA === valB && valB === valC) {
      showWinner(valA, pattern);
      return true;
    }
  }
  return false;
};

if (newGameBtn) newGameBtn.addEventListener("click", resetGame);
if (resetBtn) resetBtn.addEventListener("click", resetGame);
if (playAgainBtn) playAgainBtn.addEventListener("click", resetGame);