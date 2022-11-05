const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const clouds = document.querySelector('.clouds')
var gameover = document.getElementById('gameover')
var lblScore = document.getElementById('lblScore')

const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500);
}

var score = 0
var valid = 0

const loop = setInterval(() => {
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsPosition = clouds.offsetLeft;
    
    if (pipePosition > 0){
        valid = 1;
    }
    
    if (pipePosition <= 0 && valid == 1){
        {score = score + 1}
        lblScore.innerHTML=score;
        valid = 0;
    }

    // console.log(pipePosition)


    if (pipePosition <= 120 && pipePosition >= 0 && marioPosition <= 80){
       
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src = 'images/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;

        gameover.innerHTML = 'Game Over';

        clearInterval(loop);

    }
}, 10);

document.addEventListener('keydown', jump)