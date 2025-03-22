const gameArea = document.getElementById("gameArea");
const startButton = document.getElementById("startGame");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");

let score = 0;
let time = 30;
let interval;

startButton.addEventListener("click", startGame);

function startGame() {
    score = 0;
    time = 30;
    scoreDisplay.textContent = score;
    timeDisplay.textContent = time;

    gameArea.innerHTML = "";
    generateTopos();
    
    interval = setInterval(updateTime, 1000);
}

function generateTopos() {
    for (let i = 0; i < 9; i++) {
        let number = Math.floor(Math.random() * 50) + 1; // Número aleatorio
        let topo = document.createElement("div");
        topo.classList.add("topo");
        topo.textContent = number;
        topo.dataset.number = number; // Guardamos el número
        topo.addEventListener("click", () => checkNumber(topo));
        gameArea.appendChild(topo);
    }
}

function checkNumber(topo) {
    let number = parseInt(topo.dataset.number);
    if (isPrime(number)) { // Cambia la condición según la modalidad
        score += 10;
        scoreDisplay.textContent = score;
        topo.style.backgroundColor = "green"; // Feedback visual
    } else {
        topo.style.backgroundColor = "red";
    }
}

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function updateTime() {
    time--;
    timeDisplay.textContent = time;
    if (time === 0) {
        clearInterval(interval);
        alert("¡Tiempo agotado! Tu puntaje: " + score);
    }
}
