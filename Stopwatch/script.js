
let start = document.querySelector('#start');
let stop = document.querySelector('#stop');
let reset = document.querySelector('#reset');
let milliseconds = document.querySelector('#milliseconds');
let seconds = document.querySelector('#seconds');
let minutes = document.querySelector('#minutes');
let hours = document.querySelector('#hours');

let milliTimer = 0;
let secTimer = 0;
let minTimer = 0;
let hourTimer = 0;
let timerInterval;

function updateDisplay() {
    milliseconds.innerHTML = milliTimer < 10 ? '0' + milliTimer : milliTimer;
    seconds.innerHTML = secTimer < 10 ? '0' + secTimer : secTimer;
    minutes.innerHTML = minTimer < 10 ? '0' + minTimer : minTimer;
    hours.innerHTML = hourTimer < 10 ? '0' + hourTimer : hourTimer;
}

function incrementTimers() {
    milliTimer++;
    if (milliTimer >= 100) {
        milliTimer = 0;
        secTimer++;
        if (secTimer >= 60) {
            secTimer = 0;
            minTimer++;
            if (minTimer >= 60) {
                minTimer = 0;
                hourTimer++;
            }
        }
    }
    updateDisplay();
}


start.addEventListener('click', function (e) {
    e.preventDefault();
    clearInterval(timerInterval);
    timerInterval = setInterval(incrementTimers, 10);
});

reset.addEventListener('click', function () {
    milliseconds.innerHTML = '00';
    seconds.innerHTML = '00';
    minutes.innerHTML = '00';
    hours.innerHTML = '00';
    milliTimer = 0;
    secTimer = 0;
    minTimer = 0;
    hourTimer = 0;
    clearInterval(timerInterval);
});

stop.addEventListener('click', function () {
    clearInterval(timerInterval);
});

start.addEventListener('click', function () {
    start.setAttribute('disabled', '')
    reset.setAttribute('disabled', '')
})

stop.addEventListener('click', function () {
    start.removeAttribute('disabled', '')
    reset.removeAttribute('disabled', '')
})