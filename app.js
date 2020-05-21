document.addEventListener('DOMContentLoaded', ()=>{
    const cardArray = [
        {
            name: "pikachu", 
            img: "images/pikachu.jpg"
        },
        {
            name: "pikachu", 
            img: "images/pikachu.jpg"
        },
        {
            name: "ivysaur",
            img: "images/ivysaur.jpg"
        },
        {
            name: "ivysaur",
            img: "images/ivysaur.jpg"
        },
        {
            name: "eevee",
            img: "images/eevee.jpg"
        },
        {
            name: "eevee",
            img: "images/eevee.jpg"
        },
        {
            name: "magikarp",
            img: "images/magikarp.jpg"
        },
        {
            name: "magikarp",
            img: "images/magikarp.jpg"
        },
        {
            name: "charizard",
            img: "images/charizard.jpg"
        },
        {
            name: "charizard",
            img: "images/charizard.jpg"
        },
        {
            name: "meowth",
            img: "images/meowth.jpg"
        },
        {
            name: "meowth",
            img: "images/meowth.jpg"
        }
    ]
//create game board

cardArray.sort(() => .5 - Math.random())

let grid = document.querySelector(".grid")
const resultDisplay = document.querySelector("#result")
let cardsChosen = []
let cardsChosenId = []
let cardsWon = [];

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        let card = document.createElement("img")
        card.setAttribute("src", 'images/blank.png')
        card.setAttribute("data-id", i)
        card.addEventListener("click", flipcard)
        grid.appendChild(card)
    }
}
function checkForMatch() {
    let cards = document.querySelectorAll("img")
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute("src", "images/white.png")
        cards[optionTwoId].setAttribute("src", "images/white.png")
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute("src", "images/blank.png")
        cards[optionTwoId].setAttribute("src", "images/blank.png")
        alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length //this is the number of cards won
    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = "Congratulations, you've won!"
    }
}

function flipcard() {
    let cardId = this.getAttribute("data-id")
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)

    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}
createBoard()

})