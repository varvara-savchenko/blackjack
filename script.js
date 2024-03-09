// A-1/11, J/Q/K - 10

let cards = [];
let cardsSum = 0;
let hasBlackJack = false;
let inGame = false;
let message = "";
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el") //diff way to retrieve el
let cardsEl = document.getElementById("cards-el")
let player = {
    name: "Player",
    chips: 100
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": " + player.chips + "$";

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1; //return num between 1 and 13
    if (randomCard > 10) {
        return 10;
    } else if (randomCard === 1) {
        return 11;
    } else {
        return randomCard;
    }
}

function startGame() {
    inGame = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards.push(firstCard, secondCard);
    cardsSum = firstCard + secondCard;
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + cardsSum;
    if (cardsSum < 21) {
        message = "Do you want to draw a new card?"
    } else if (cardsSum === 21) {
        message = "Wohoo! You've got a Blackjack! Things can get better!"
        hasBlackJack = true;
    } else {
        message = "You're out of the game. Stay strong!"
        inGame = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    if (inGame && cardsSum < 21) {
        let newCard = getRandomCard();
        cards.push(newCard)
        cardsSum += newCard;
        renderGame()
    }
}


//node script.js
