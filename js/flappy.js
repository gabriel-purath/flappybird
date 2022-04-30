const pipe = document.querySelector('.pipe');
const hole = document.querySelector('.hole');
const bird = document.querySelector('.bird');
const counter = document.querySelector('.score');
const marisa = document.querySelector('.marisa')
let score = 0;
let jumping = 0;

hole.addEventListener('animationiteration', () => {
    const random = -((Math.random()*400) + 150)
    hole.style.top = random + 'px';
    score ++;
    counter.innerHTML = score;
})

marisa.addEventListener('animationiteration', ()=> {
    const random = ((Math.random()*400) + 150);
    marisa.style.top = random + 'px';
})
setInterval(() => {
    const topValue = parseInt(window.getComputedStyle(bird).getPropertyValue('top'));
    if(jumping == 0) {
    bird.style.top = (topValue + 2.6) + 'px';
    }

    const pipeLeft =  parseInt(window.getComputedStyle(pipe).getPropertyValue('left'));
    const holeTop =  parseInt(window.getComputedStyle(hole).getPropertyValue('top'));
    const cTop = -(500 - topValue)
   
    if(topValue > 500 ||((pipeLeft < 40)&&(pipeLeft > -50)&&((cTop < holeTop - 10) || (cTop > holeTop + 130)))){
        alert('Game Over Noobs')
        bird.style.top = 100 + 'px'
        score = -1
        pipe.style.left = 800 + 'px'
    }
}, 10)

function jump(){
    jumping = 1
    let jumpCounter = 0
    if(jumping == 1) {
        const jumpInterval = setInterval(() => {
            const topValue = parseInt(window.getComputedStyle(bird).getPropertyValue('top'));
            if(jumpCounter < 20){
              bird.style.top = (topValue - 5.3) + 'px';   
            }else{
                jumpCounter = 0;
                jumping = 0;
                clearInterval(jumpInterval)
            }
            jumpCounter += 1.5;
        }, 10)
    }
}