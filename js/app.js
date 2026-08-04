/*-------------- Constants -------------*/


/*---------- Variables (state) ---------*/
let card1 = ""
let card2 = ""
let alt1 = ""
let alt2 = ""
let moves = 0
let countdown = 60;
let timer;
let matchingPairs = 0 
let gameStarted = false


/*----- Cached Element References  -----*/

const restartBtn = document.querySelector('#restart-btn')
const cards = document.querySelectorAll('.card')
const elmntMoves = document.querySelector('#moves')
const gameTimer = document.querySelector('#timer')
const startBtn = document.querySelector('#start-btn')
const gameBoard = document.querySelector('#game-board')
const gameMessage = document.querySelector('#game-message')
const totalPairs = cards.length/2



/*-------------- Functions -------------*/

function flipCard(event) {
    if(!gameStarted){
        return
    }
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
      
    if (alt1 === alt2 ){

        matchingPairs++;

        if (matchingPairs === totalPairs){
            clearInterval(timer)
            gameMessage.textContent = "Congratulations! You Won!! ";
            gameStarted = false;
        }

         resetCards();
    }else {
        setTimeout(() => {
            card1.classList.remove('flipped')
            card2.classList.remove('flipped')
            resetCards();

        }, 500);
        
    }

    
    }

    function restartGame() {
         cards.forEach((card) => {
        card.classList.remove('flipped')
    })
            resetCards();

            moves = 0
            matchingPairs = 0
             elmntMoves.textContent = moves;

             gameStarted = false

             clearInterval(timer)
             countdown =60 
             gameTimer.textContent= countdown
             gameMessage.textContent = ""

    }
    
    function resetCards(){
            card1 = ""
            card2 = ""
            alt1 = ""
            alt2 = ""
    }

    function startTimer(){
        timer = setInterval(()=> {
            countdown-- ;
            gameTimer.textContent = countdown;

            if (countdown === 0){
                clearInterval(timer)
                gameMessage.textContent = "Oops, you lost. Try again :( ";
                gameStarted = false
            }
        }, 1000);

    }


    function startGame(){
        gameStarted = true

        shuffleCards();

        cards.forEach((card) => {
        card.classList.add('flipped')
        })

        setTimeout(()=>{
            cards.forEach((card) => {
            card.classList.remove('flipped')
        })

        startTimer()

    }, 5000)
    }


    function shuffleCards (){
        const randomCards = [...cards]

        randomCards.sort(() => Math.random() -0.5)

        randomCards.forEach((card) =>{
            gameBoard.appendChild(card)
        })
    }
     
 
/*----------- Event Listeners ----------*/

cards.forEach ((card) => {
    card.addEventListener('click', flipCard)
});

restartBtn.addEventListener('click', restartGame)
startBtn.addEventListener('click', startGame)

