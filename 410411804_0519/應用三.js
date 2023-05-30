const button = document.getElementById("toggle")
const body = document.querySelector("body")
const h2 = document.querySelector("h2")
const img = document.querySelector("img")
var changeimg = false

button.onclick = function () {
    button.classList.toggle('dark')
    body.classList.toggle('dark')
    h2.classList.toggle('dark')
    if (changeimg) {
        img.src = "img\\html1.png"
        changeimg = false;
    }
    else {
        img.src = "img\\css1.png"
        changeimg = true;
    }
}


