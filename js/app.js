/*-------------- Constants -------------*/


/*---------- Variables (state) ---------*/
let card1 = ""
let card2 = ""
let alt1 = ""
let alt2 = ""
let moves = 0

/*----- Cached Element References  -----*/

const restartBtn = document.querySelector('#restart-btn')
const cards = document.querySelectorAll('.card')
const elmntMoves = document.querySelector('#moves')
const gameTimer = document.querySelector('#timer')



/*-------------- Functions -------------*/

function flipCard(event) {
    const clickedCard = event.currentTarget;

    if(clickedCard === card1){
        return
    }

    clickedCard.classList.add('flipped')

    if(card1 ===""){
        card1 = clickedCard;
        console.log(card1)
         moves ++;
        elmntMoves.textContent = moves;
    }else {
        card2 = clickedCard;

        moves ++;
        elmntMoves.textContent = moves;
        console.log(card2)

        matchingCards();
        
        
    }
    console.log(card1, card2) //checks if function works
}

function matchingCards (){
    alt1 = card1.querySelector('.back-card img').alt
    alt2 = card2.querySelector('.back-card img').alt
      console.log(alt1)
      console.log(alt2)
    if (alt1 === alt2 ){
         card1 = ""
         card2 = ""
         alt1 = ""
         alt2 = ""
    }else {
        setTimeout(() => {
            card1.classList.remove('flipped')
            card2.classList.remove('flipped')

            card1 = ""
            card2 = ""
            alt1 = ""
            alt2 = ""

        }, 500);
        
    }

    
    }

    function restartGame() {
         cards.forEach((card) => {
        card.classList.remove('flipped')
    })
            card1 = ""
            card2 = ""
            alt1 = ""
            alt2 = ""
            moves = 0
             elmntMoves.textContent = moves;

    }
    

     
 
/*----------- Event Listeners ----------*/

cards.forEach ((card) => {
    card.addEventListener('click', flipCard)
});

restartBtn.addEventListener('click', restartGame)

