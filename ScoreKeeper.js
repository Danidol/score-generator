var p1Btn = document.querySelector("#p1Btn");
var p2Btn = document.querySelector("#p2Btn");
var resetBtn = document.querySelector("#resetBtn");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var playingTo = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = prompt("What score do you want to play up to?");
winningScore = Number(winningScore);
playingTo.textContent = winningScore;






p1Btn.addEventListener("click", function () {
    if (!gameOver) {
        p1Score++;
        p1Display.textContent = p1Score;
        if (p1Score === winningScore) {
            gameOver = true;
            p1Display.classList.add("winner")
            p2Display.classList.add("looser")
        }
    }
});

p2Btn.addEventListener("click", function () {
    if (!gameOver) {
        p2Score++;
        p2Display.textContent = p2Score;
    }
    if (p2Score === winningScore) {
        gameOver = true;
        p2Display.classList.add("winner")
        p1Display.classList.add("looser")
    }
});

resetBtn.addEventListener("click", function () {
    reset();
});

function reset() {
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Score = 0;
    p2Score = 0;
    p1Display.classList.remove("winner")
    p1Display.classList.remove("looser")
    p2Display.classList.remove("winner")
    p2Display.classList.remove("looser")
    gameOver = false;

}

numInput.addEventListener("change", function () {
    playingTo.textContent = this.value;
    winningScore = Number(this.value);
    reset();
})