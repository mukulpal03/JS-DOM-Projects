const randomColor = function() {
    const getRandomValue = () => Math.floor(Math.random() * 256);
    const red = getRandomValue();
    const green = getRandomValue();
    const blue = getRandomValue();
    return `rgb(${red}, ${green}, ${blue})`;
};

const startBtn = document.querySelector('#startBtn');
const stopBtn = document.querySelector('#stopBtn');
const colorBox = document.querySelector('#colorBox');

let intervalId;

const startChangingColor = function() {
    if (!intervalId) {
        intervalId = setInterval(function() {
            const color = randomColor();
            colorBox.style.backgroundColor = color;
            colorBox.innerHTML = `<p><b>${color}</b></p>`;
        }, 1000);
    }
};

const stopChangingColor = function() {
    clearInterval(intervalId);
    intervalId = null;
};

startBtn.addEventListener("click", startChangingColor);
stopBtn.addEventListener('click', stopChangingColor);
