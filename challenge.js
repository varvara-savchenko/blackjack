// where should we START counting? 
//where is the FINISH line? 
//what's the STEP SIZE we should use? 
//for (let count = 1; count < 11; count += 1)


for (let i = 10; i <= 100; i += 10) {
    console.log(i)
}


//combining with arrays 

let message = [
    "hello",
    "hi",
    "hola",
    "hey hey"
]

for (let i = 0; i < message.length; i += 1) {
    console.log(message[i])
}

//JS + HTML
let sentence = ["Hi", "my", "name", "is"]
let greetingEl = document.getElementById("greeting-el")

for (let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i] + " "; //+= to keep previous content and adding space
}

//return 

let player1Time = 100;
let player2Time = 200;

function getTotalRaceTime() {
    return player1Time + player2Time;
}

let totalTime = getTotalRaceTime()

console.log(totalTime)


//math random

function rollTheDice() {
    let randomNumber = Math.floor(Math.random() * 6) + 1
    return randomNumber
}

console.log(rollTheDice())


//node challenge.js
