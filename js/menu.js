/*-------------- Constants -------------*/


/*---------- Variables (state) ---------*/


/*----- Cached Element References  -----*/
const easyBtn = document.querySelector('#easy-btn')
const mediumBtn = document.querySelector('#medium-btn')
const hardBtn = document.querySelector('#hard-btn')



/*-------------- Functions -------------*/

function startGame (time){
    localStorage.setItem('timer', time)
    location.href = 'game.html'
}


/*----------- Event Listeners ----------*/
easyBtn.addEventListener('click',() =>  startGame(90))
mediumBtn.addEventListener('click',() =>  startGame(60))
hardBtn.addEventListener('click',() =>  startGame(30))