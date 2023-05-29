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