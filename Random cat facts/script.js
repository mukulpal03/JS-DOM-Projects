let url = 'https://catfact.ninja/fact';
let button = document.querySelector('#new-quote')
let quote = document.querySelector('#quote')

function fetchData() {
fetch(url)
.then(function (res) {
    return res.json()
})
.then(function (data) {
    let fact = data.fact
    quote.innerHTML = fact
})
}

button.addEventListener("click", fetchData)


