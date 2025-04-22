let clock = document.querySelector('#clock')

setInterval(function () {
    let date = new Date();

    let currTime = date.toLocaleTimeString();

    clock.innerHTML = currTime
})