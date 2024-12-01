
let coins = 30;
let round = 1;
let currentBet = 3;
let imageLevel = 0;

const maxRounds = 10;

const images = [
    { actor: "Denzel", src: "/static/denzel-pixelated.png" },
    { actor: "Will", src: "/static/will-pixelated.png" }
];

function updateScoreboard() {
    document.getElementById('coins').innerText = coins;
    document.getElementById('round').innerText = round;
}

function loadImages() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const otherIndex = (randomIndex + 1) % images.length;

    document.getElementById('image1').src = images[randomIndex].src;
    document.getElementById('image2').src = images[otherIndex].src;
}

function makeBet(bet) {
    if (round > maxRounds) {
        alert("Game Over! Final coins: " + coins);
        return;
    }

    coins -= bet;
    if (Math.random() > 0.5) {
        coins += bet * 2;
        alert("Correct! You won " + bet * 2 + " coins!");
    } else {
        alert("Wrong! You lost " + bet + " coins.");
    }

    round += 1;
    updateScoreboard();
    loadImages();
}

function upres() {
    imageLevel += 1;
    currentBet -= 1;

    if (currentBet < 1) {
        alert("Cannot upres further!");
        return;
    }
}

window.onload = () => {
    updateScoreboard();
    loadImages();
};
    