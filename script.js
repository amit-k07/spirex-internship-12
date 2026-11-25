
let randomNumber = Math.floor(Math.random() * 20) + 1;

let attempts = 5;
let score = 0;

function checkGuess() {

    let guess = Number(document.getElementById("guessInput").value);

    let message = document.getElementById("message");

    if (guess < 1 || guess > 20 || !Number.isInteger(guess)) {
        message.innerText = "Please enter a number between 1 and 20!";
        message.style.color = "orange";
        return;
    }

    if (attempts === 0) {
        return;
    }
    attempts--;

    document.getElementById("attempts").innerText = attempts;

    if (guess === randomNumber) {

        message.innerText = "🎉 Correct! You Won!";
        message.style.color = "green";

        score += attempts * 10 + 10;

        document.getElementById("score").innerText = score;

        document.getElementById("checkBtn").disabled = true;
        document.getElementById("playAgain").style.display = "block";

        showCelebration();

    } else if (guess > randomNumber) {

        message.innerText = "📈 Too High! Try Again.";
        message.style.color = "red";

    } else {

        message.innerText = "📉 Too Low! Try Again.";
        message.style.color = "blue";
    }

    document.getElementById("guessInput").value = "";

    if (attempts === 0 && guess !== randomNumber) {

        message.innerText = "😢 Game Over! Number was " + randomNumber;

        document.getElementById("checkBtn").disabled = true;
        document.getElementById("playAgain").style.display = "block";
    }
}

function restartGame() {

    randomNumber = Math.floor(Math.random() * 20) + 1;

    attempts = 5;

    document.getElementById("attempts").innerText = attempts;

    document.getElementById("guessInput").value = "";

    document.getElementById("message").innerText = "Let's start the game!";

    document.getElementById("message").style.color = "#555";

    document.getElementById("checkBtn").disabled = false;

    document.getElementById("playAgain").style.display = "none";

    document.getElementById("celebration").innerHTML = "";
}

function showCelebration() {

    let celebration = document.getElementById("celebration");

    let colors = ["red", "blue", "yellow", "green", "orange", "purple"];

    for (let i = 0; i < 80; i++) {

        let confetti = document.createElement("div");

        confetti.className = "confetti";

        confetti.style.left = Math.random() * 100 + "%";

        confetti.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];

        confetti.style.animationDelay = Math.random() * 2 + "s";

        celebration.appendChild(confetti);
    }
}
