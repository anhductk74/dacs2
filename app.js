var overview = document.querySelector('.overview');
var menu = document.querySelector('.menu');
var close = document.querySelector('.background');
var menuIcon = document.querySelector('.nav-header__logo i');
menu.style.transform = 'translateX(-240px)'
menuIcon.addEventListener('click', function(){
    if(menu.style.transform=='translateX(-240px)'){
        menu.style.transform = 'translateX(0px)';
        overview.classList.add('background')
    } else {
        menu.style.transform = 'translateX(-240px)';
        overview.classList.remove('background')
    }
})

document.addEventListener('keydown', function(e) {
    menu.style.transform = 'translateX(-240px)';
        overview.classList.remove('background')
})

var navScroll = document.querySelector('.nav-header')
window.onscroll = function() {
    if(window.scrollY == 0){
        navScroll.style.height = '65px'
    } else {
        navScroll.style.height = '55px'
    }
}



var listImg = document.querySelectorAll('.content-hide img')
var imgFeature = document.querySelector('.content__img img')

var prev = document.querySelector('.content-show .prev')
var next = document.querySelector('.content-show .next')

var currentIndex = 0

function showImg(index){
    currentIndex = index
    imgFeature.src = listImg[index].getAttribute('src')
}



listImg.forEach((item, index)=>{
    item.addEventListener('click', e=>{
        showImg(index)
    })
})

prev.addEventListener('click', function(){
    if(currentIndex == 0){
        currentIndex = listImg.length - 1
    } else {
        currentIndex--
    }
    imgFeature.style.animation = ''
    setTimeout(()=>{
        imgFeature.style.animation = 'slideScare 2s ease-in-out forwards'
        showImg(currentIndex)
    }, 200)
})

next.addEventListener('click', function(){
    if(currentIndex == listImg.length - 1){
        currentIndex=0
    } else {
        currentIndex++
    }
    imgFeature.style.animation = ''
    setTimeout(()=>{
        imgFeature.style.animation = 'slideScare 1s ease-in-out forwards'
        showImg(currentIndex)
    }, 100)
})

