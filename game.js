const canvas = document.querySelector('#game')
const game = canvas.getContext('2d');

window.addEventListener('load', startGame)

function startGame() {
    //game.fillRect(100, 0, 150, 100)
    //game.clearRect(50, 50, 100, 100)
    game.font = '25px monospace'
    game.fillStyle = 'green'
    game.textAlign = 'center'
    game.fillText('Hiroshi', 100, 100)

}   