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
menu = document.getElementById("menu")
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
        menu.style.backgroundColor = "#5ca6f0"
        changeimg = false
    }
    else {
        body.style.backgroundImage = `url(${url2})`
        body.style.backgroundRepeat = "repeat-y"
        body.style.backgroundAttachment = "fixed";
        body.style.backgroundPosition = "center";
        body.style.backgroundSize = "cover";
        title.style.backgroundColor = "white"
        menu.style.backgroundColor = "rgb(250, 208, 131)"
        changeimg = true
    }

}
img1 = document.getElementById("songimg1")
img2 = document.getElementById("songimg2")
img3 = document.getElementById("songimg3")
img4 = document.getElementById("songimg4")
img5 = document.getElementById("songimg5")
img6 = document.getElementById("songimg6")
img7 = document.getElementById("songimg7")
img8 = document.getElementById("songimg8")
img9 = document.getElementById("songimg9")
img10 = document.getElementById("songimg10")
img11 = document.getElementById("songimg11")
img12 = document.getElementById("songimg12")
img13 = document.getElementById("songimg13")
img14 = document.getElementById("songimg14")
img15 = document.getElementById("songimg15")

function confirmsong() {
    var showtable = document.getElementById("song").value;

    if (showtable == "s1") {
        console.log(showtable)
        img1.style.display = "block"
        img2.style.display = 'none'
        img3.style.display = 'none'
        img4.style.display = 'none'
        img5.style.display = 'none'
        img6.style.display = 'none'
        img7.style.display = 'none'
        img8.style.display = 'none'
        img9.style.display = 'none'
        img10.style.display = 'none'
        img11.style.display = 'none'
        img12.style.display = 'none'
        img13.style.display = 'none'
        img14.style.display = 'none'
        img15.style.display = 'none'
    }
    if (showtable == "s2") {
        img1.style.display = 'none'
        img2.style.display = 'block'
        img3.style.display = 'none'
        img4.style.display = 'none'
        img5.style.display = 'none'
        img6.style.display = 'none'
        img7.style.display = 'none'
        img8.style.display = 'none'
        img9.style.display = 'none'
        img10.style.display = 'none'
        img11.style.display = 'none'
        img12.style.display = 'none'
        img13.style.display = 'none'
        img14.style.display = 'none'
        img15.style.display = 'none'
    }
    if (showtable == "s3") {
        img1.style.display = 'none'
        img2.style.display = 'none'
        img3.style.display = 'block'
        img4.style.display = 'none'
        img5.style.display = 'none'
        img6.style.display = 'none'
        img7.style.display = 'none'
        img8.style.display = 'none'
        img9.style.display = 'none'
        img10.style.display = 'none'
        img11.style.display = 'none'
        img12.style.display = 'none'
        img13.style.display = 'none'
        img14.style.display = 'none'
        img15.style.display = 'none'
    }
    if (showtable == "s4") {
        img1.style.display = 'none'
        img2.style.display = 'none'
        img3.style.display = 'none'
        img4.style.display = 'block'
        img5.style.display = 'none'
        img6.style.display = 'none'
        img7.style.display = 'none'
        img8.style.display = 'none'
        img9.style.display = 'none'
        img10.style.display = 'none'
        img11.style.display = 'none'
        img12.style.display = 'none'
        img13.style.display = 'none'
        img14.style.display = 'none'
        img15.style.display = 'none'
    }
    if (showtable == "s5") {
        img1.style.display = 'none'
        img2.style.display = 'none'
        img3.style.display = 'none'
        img4.style.display = 'none'
        img5.style.display = 'block'
        img6.style.display = 'none'
        img7.style.display = 'none'
        img8.style.display = 'none'
        img9.style.display = 'none'
        img10.style.display = 'none'
        img11.style.display = 'none'
        img12.style.display = 'none'
        img13.style.display = 'none'
        img14.style.display = 'none'
        img15.style.display = 'none'
    }
    if (showtable == "s6") {
        img1.style.display = 'none'
        img2.style.display = 'none'
        img3.style.display = 'none'
        img4.style.display = 'none'
        img5.style.display = 'none'
        img6.style.display = 'block'
        img7.style.display = 'none'
        img8.style.display = 'none'
        img9.style.display = 'none'
        img10.style.display = 'none'
        img11.style.display = 'none'
        img12.style.display = 'none'
        img13.style.display = 'none'
        img14.style.display = 'none'
        img15.style.display = 'none'
    }
    if (showtable == "s7") {
        img1.style.display = 'none'
        img2.style.display = 'none'
        img3.style.display = 'none'
        img4.style.display = 'none'
        img5.style.display = 'none'
        img6.style.display = 'none'
        img7.style.display = 'block'
        img8.style.display = 'none'
        img9.style.display = 'none'
        img10.style.display = 'none'
        img11.style.display = 'none'
        img12.style.display = 'none'
        img13.style.display = 'none'
        img14.style.display = 'none'
        img15.style.display = 'none'
    }
    if (showtable == "s8") {
        img1.style.display = 'none'
        img2.style.display = 'none'
        img3.style.display = 'none'
        img4.style.display = 'none'
        img5.style.display = 'none'
        img6.style.display = 'none'
        img7.style.display = 'none'
        img8.style.display = 'block'
        img9.style.display = 'none'
        img10.style.display = 'none'
        img11.style.display = 'none'
        img12.style.display = 'none'
        img13.style.display = 'none'
        img14.style.display = 'none'
        img15.style.display = 'none'
    }
    if (showtable == "s9") {
        img1.style.display = 'none'
        img2.style.display = 'none'
        img3.style.display = 'none'
        img4.style.display = 'none'
        img5.style.display = 'none'
        img6.style.display = 'none'
        img7.style.display = 'none'
        img8.style.display = 'none'
        img9.style.display = 'block'
        img10.style.display = 'none'
        img11.style.display = 'none'
        img12.style.display = 'none'
        img13.style.display = 'none'
        img14.style.display = 'none'
        img15.style.display = 'none'
    }
    if (showtable == "s10") {
        img1.style.display = 'none'
        img2.style.display = 'none'
        img3.style.display = 'none'
        img4.style.display = 'none'
        img5.style.display = 'none'
        img6.style.display = 'none'
        img7.style.display = 'none'
        img8.style.display = 'none'
        img9.style.display = 'none'
        img10.style.display = 'block'
        img11.style.display = 'none'
        img12.style.display = 'none'
        img13.style.display = 'none'
        img14.style.display = 'none'
        img15.style.display = 'none'
    }
    if (showtable == "s11") {
        img1.style.display = 'none'
        img2.style.display = 'none'
        img3.style.display = 'none'
        img4.style.display = 'none'
        img5.style.display = 'none'
        img6.style.display = 'none'
        img7.style.display = 'none'
        img8.style.display = 'none'
        img9.style.display = 'none'
        img10.style.display = 'none'
        img11.style.display = 'block'
        img12.style.display = 'none'
        img13.style.display = 'none'
        img14.style.display = 'none'
        img15.style.display = 'none'
    }
    if (showtable == "s12") {
        img1.style.display = 'none'
        img2.style.display = 'none'
        img3.style.display = 'none'
        img4.style.display = 'none'
        img5.style.display = 'none'
        img6.style.display = 'none'
        img7.style.display = 'none'
        img8.style.display = 'none'
        img9.style.display = 'none'
        img10.style.display = 'none'
        img11.style.display = 'none'
        img12.style.display = 'block'
        img13.style.display = 'none'
        img14.style.display = 'none'
        img15.style.display = 'none'
    }
    if (showtable == "s13") {
        img1.style.display = 'none'
        img2.style.display = 'none'
        img3.style.display = 'none'
        img4.style.display = 'none'
        img5.style.display = 'none'
        img6.style.display = 'none'
        img7.style.display = 'none'
        img8.style.display = 'none'
        img9.style.display = 'none'
        img10.style.display = 'none'
        img11.style.display = 'none'
        img12.style.display = 'none'
        img13.style.display = 'block'
        img14.style.display = 'none'
        img15.style.display = 'none'
    }
    if (showtable == "s14") {
        img1.style.display = 'none'
        img2.style.display = 'none'
        img3.style.display = 'none'
        img4.style.display = 'none'
        img5.style.display = 'none'
        img6.style.display = 'none'
        img7.style.display = 'none'
        img8.style.display = 'none'
        img9.style.display = 'none'
        img10.style.display = 'none'
        img11.style.display = 'none'
        img12.style.display = 'none'
        img13.style.display = 'none'
        img14.style.display = 'block'
        img15.style.display = 'none'
    }
    if (showtable == "s15") {
        img1.style.display = 'none'
        img2.style.display = 'none'
        img3.style.display = 'none'
        img4.style.display = 'none'
        img5.style.display = 'none'
        img6.style.display = 'none'
        img7.style.display = 'none'
        img8.style.display = 'none'
        img9.style.display = 'none'
        img10.style.display = 'none'
        img11.style.display = 'none'
        img12.style.display = 'none'
        img13.style.display = 'none'
        img14.style.display = 'none'
        img15.style.display = 'block'
    }


} 