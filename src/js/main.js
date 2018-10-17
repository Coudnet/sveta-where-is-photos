let animationPlay = false;

let animationAncorElement = document.querySelector('.animation-ancor');
let pauseBtn = document.querySelector('.pause-btn');
let muteBtn = document.querySelector('.mute-btn');

let startDate = new Date(2018, 6);

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
    let dif = null;
    let timer = setTimeout(function timeCount() {
        let dif = calcDate(Date.now(), startDate);
        document.querySelector('.year-value').innerHTML = dif.years;
        document.querySelector('.month-value').innerHTML = dif.months;
        document.querySelector('.day-value').innerHTML = dif.days;
        document.querySelector('.hour-value').innerHTML = dif.hours;

        timer = setTimeout(timeCount, 1000);
    }, 1000);
}

function calcDate(date1, date2) {
    let diff = Math.floor(date1 - date2);
    let day = 1000 * 60 * 60 * 24;

    let hours = Math.floor(diff / (day / 24));
    let days = Math.floor(diff / day);
    let months = Math.floor(days / 31);
    let years = Math.floor(months / 12);

    months -= years * 12;
    days -= ((years * 12 + months) * 30);
    hours -= ((((years * 12 + months) * 30) + days) * 24);

    return {
        years: years,
        months: months,
        days: days,
        hours: hours
    }
}