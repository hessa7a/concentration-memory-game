/*-------------- Constants -------------*/


/*---------- Variables (state) ---------*/
let card1 = ""
let card2 = ""

/*----- Cached Element References  -----*/

const restartBtn = document.querySelector('#restart-btn')
const cards = document.querySelectorAll('.card')
const elmntMoves = document.querySelector('#moves')
const gameTimer = document.querySelector('#timer')

/*-------------- Functions -------------*/

function flipCard(event) {
    const clickedCard = event.currentTarget;
    clickedCard.classList.add('flipped')
    console.log('clicked') //checks if function works
}

/*----------- Event Listeners ----------*/

cards.forEach ((card) => {
    card.addEventListener('click', flipCard)
});

