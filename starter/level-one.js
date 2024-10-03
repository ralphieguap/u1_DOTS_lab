let score = 0
let arenaEl = document.querySelector('.js-arena')
let scoreEl = document.querySelector('.js-score')

ballEl.addEventListener('click', () => {
  score += 10

  if ( score < 100 ) {
    scoreEl.innerText = score
  } else {
    declareWinner()
  }
})

function declareWinner() {
  document.body.classList.add('game-over')
}