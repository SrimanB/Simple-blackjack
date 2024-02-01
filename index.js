let player = {
    name: "By Sriman",  
}
let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("cards-el")
let newEl = document.getElementById("newcard-el")

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name


function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10){
        return 10
    }else if (randomNumber === 1){
        return 11
    }else{
        return randomNumber
    }
}



function startGame(){
    isAlive = true
    let firstCard =  getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}


function renderGame(){
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    }
    else if (sum === 21) {
        message = "Woo!! Blackjack! You won!!!!!"
        hasBlackjack = true
    }
    else {
        message = "Sorry you lose"
        isAlive = false
    }    
    messageEl.textContent = message
    cardEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
}

function newCard(){
    if (isAlive === true && hasBlackjack === false){
        let thirdCard = getRandomCard()
        sum += thirdCard
        cards.push(thirdCard)
        renderGame()
    }

}


