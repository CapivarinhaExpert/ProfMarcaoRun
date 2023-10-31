var mario = document.querySelector('.mario');
var pipe = document.querySelector('.pipe');
var container = document.getElementById('container');
var player = document.getElementById('play');
var menu = document.getElementById('menu');
var pontuacao = document.getElementById('pontuação')





const jump = () => {
    mario.classList.add('jump')
    setTimeout(() => {
        mario.classList.remove('jump')
    }, 1000)



}



const loop = setInterval(() => {
    var pipePosition = pipe.offsetLeft;
    var marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = "none"
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = "none"
        mario.style.bottom = `${marioPosition}px`

    }

}, 10);

window.addEventListener('keydown', jump)

let iterationCount = 0;
pipe.addEventListener('animationiteration', () => {
    iterationCount = iterationCount +100;
    pontuacao.innerText = iterationCount;
});






function play() {
    menu.style.display = "none"
    container.style.display = "block"
}

player.addEventListener('click', play)