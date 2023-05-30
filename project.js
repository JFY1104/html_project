window.addEventListener('load', function () {
    let indicators = document.querySelectorAll('.indicator li')
    let extra = document.querySelector('.extra > h3')
    let slides = document.querySelectorAll('.slides li')
    let index = 0
    let next = document.querySelector('.extra > .next')
    let prev = document.querySelector('.extra > .prev')
    let main = document.querySelector('.main')

    indicators.forEach(function (ele, i) {
        ele.addEventListener('click', function () {
            document.querySelector('.indicator .active').classList.remove('active')
            ele.classList.add('active')
            /* extra.innerText = `第${i + 1}張圖` */
            document.querySelector('.slides .active').classList.remove('active')
            slides[i].classList.add('active')
            index = i
        })
    });
    next.addEventListener('click', function () {
        index++
        if (index > indicators.length - 1) {
            index = 0

        }
        indicators[index].click()
    });
    prev.addEventListener('click', function () {
        index--
        if (index < 0) {
            index = indicators.length - 1

        }
        indicators[index].click()

    })
    let timeId = setInterval(function () {
        next.click()

    }, 5000)
    main.addEventListener('mouseenter', function () {
        clearInterval(timeId)
    })
    main.addEventListener('mouseleave', function () {
        timeId = setInterval(function () {
            next.click()
        }, 5000);
    })
})
function showmore() {
    var show = document.querySelector('.showmore')
    show.style.height = "auto"
    document.getElementById("showmorebtn").style.display = 'none'
}
const button = document.getElementById("changecolor")
body = document.getElementById("body")
var url1 = "https://images6.alphacoders.com/130/1303882.jpeg"
var url2 = "https://images8.alphacoders.com/516/516463.jpg"
var changeimg = true
var chcolor = document.getElementById("title")
button.onclick = function () {
    if (changeimg) {
        body.style.backgroundImage = `url(${url1})`
        body.style.backgroundRepeat = "repeat-y"
        body.style.backgroundAttachment = "fixed";
        body.style.backgroundPosition = "center";
        body.style.backgroundSize = "cover";
        title.style.backgroundColor = "gray "
        changeimg = false
    }
    else {
        body.style.backgroundImage = `url(${url2})`
        body.style.backgroundRepeat = "repeat-y"
        body.style.backgroundAttachment = "fixed";
        body.style.backgroundPosition = "center";
        body.style.backgroundSize = "cover";
        title.style.backgroundColor = "white"
        changeimg = true
    }

}