/* This JS file created by 
Vasudev Jaiswal 
Owner of Jaiswal's Development Studio */
let player = {
    name: " per ",
    chips: 200
}

let cards = []
let Sum = 0
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $ " + player.chips


function getRandomCard() {
    let randomNumer = Math.floor(Math.random() * 13) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }

}

function startGame() {
    isAlive = true
    let Firstcard = getRandomCard()
    let Secondcard = getRandomCard()
    cards = [Firstcard + Secondcard]
    sum = Firstcard + Secondcard
    renderGame()
}


function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + Sum
    if (Sum <= 21) {
        message = "Do you want to draw a new card? "
    } else if (Sum == 21) {
        message = " You've got a Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game! "
        isAlive = false
    }

    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        Sum += card
        cards.push(card)
        renderGame()
    }
}
