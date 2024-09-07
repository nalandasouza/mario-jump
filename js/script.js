const clouds = document.querySelector('.clouds');
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500);
}

let pipeSpeed = 1500;

const loop = setInterval(() => {
    const cloudsPosition = clouds.offsetLeft;
    const pipePosition = pipe.offsetLeft;
    const marioPosition =  +window.getComputedStyle(mario).bottom.replace('px', '');

    pipe.style.animationDuration= `${pipeSpeed}ms`;
    pipeSpeed -= 0.1;
    
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition <= 102) {
        
        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '80px';
        mario.style.marginLeft = '45px';

        clearInterval(loop);
    }

}, 10)

document.addEventListener('keydown', jump);