let animationPlay = false;

const animationAncorElement = document.querySelector('.animation-ancor');
const pauseBtn = document.querySelector('.pause-btn');
const muteBtn = document.querySelector('.mute-btn');

const yearBlock = document.querySelector('.year-value');
const monthBlock = document.querySelector('.month-value');
const dayBlock = document.querySelector('.day-value');
const hourBlock = document.querySelector('.hour-value');

const startDate = new Date(2018, 6);

document.querySelector('.activate-element').addEventListener('click', function () {
    muteBtn.innerHTML = "<i class=\"fas fa-volume-down\"></i>";
    audio.play();
    setTimeout(() => {
        animationAncorElement.classList.add('start-animation');
        animationPlay = true;
    }, 4500);
    timeTimer();
});

pauseBtn.addEventListener('click', function () {
    if(animationPlay) {
        animationAncorElement.classList.add('pause-animation');
        animationPlay = false;
        pauseBtn.innerHTML = "<i class=\"fas fa-play\"></i>";
    } else {
        animationAncorElement.classList.remove('pause-animation');
        animationPlay = true;
        pauseBtn.innerHTML = "<i class=\"fas fa-pause\"></i>";
    }
});

muteBtn.addEventListener('click', function () {
    if(audio.muted) {
        muteBtn.innerHTML = "<i class=\"fas fa-volume-down\"></i>";
        audio.muted = false;
    } else {
        muteBtn.innerHTML = "<i class=\"fas fa-volume-mute\"></i>";
        audio.muted = true;
    }
});

function timeTimer() {
    let timer = setTimeout(function timeCount() {
        const now = Date.now();
        const dif = new Date();
        dif.setTime(now - startDate);

        yearBlock.innerHTML = (dif.getFullYear() - 1970) + '';
        monthBlock.innerHTML = dif.getMonth() + '';
        dayBlock.innerHTML = dif.getDay() + '';
        hourBlock.innerHTML = dif.getHours() + '';

        timer = setTimeout(timeCount, 1000);
    }, 1000);
}