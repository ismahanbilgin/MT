// script.js
let score = 0;
let timeLeft = 30;
let gameInterval;
let timerInterval;

function startGame() {
    score = 0;
    timeLeft = 30;
    document.getElementById("score").textContent = score;
    document.getElementById("time").textContent = timeLeft;
    document.getElementById("modal").classList.add("hidden");

    gameInterval = setInterval(spawnBox, 800);
    timerInterval = setInterval(updateTimer, 1000);
}

function spawnBox() {
    const box = document.createElement("div");
    box.className = "box";
    box.style.top = Math.random() * 340 + "px";
    box.style.left = Math.random() * 90 + "%";

    box.onclick = () => {
        score++;
        document.getElementById("score").textContent = score;
        box.remove();
    };

    document.getElementById("gameArea").appendChild(box);

    setTimeout(() => {
        if (box.parentElement) box.remove();
    }, 1000);
}

function updateTimer() {
    timeLeft--;
    document.getElementById("time").textContent = timeLeft;

    if (timeLeft <= 0) {
        clearInterval(gameInterval);
        clearInterval(timerInterval);
        endGame();
    }
}

function endGame() {
    document.getElementById("finalScore").textContent = score;
    document.getElementById("modal").classList.remove("hidden");
}

function restartGame() {
    document.getElementById("gameArea").innerHTML = "";
    startGame();
}

startGame();
