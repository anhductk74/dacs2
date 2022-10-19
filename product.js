var listImg = document.querySelectorAll('.list-image img')
var imgFeature = document.querySelector('.img-feature')
var prev = document.querySelector('.prev')
var next = document.querySelector('.next')

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
        imgFeature.style.animation = 'slideScare 1s ease-in-out forwards'
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

var subTitle1 = document.querySelector('.sub-title1')
var subTitle2 = document.querySelector('.sub-title2')
var subTitle3 = document.querySelector('.sub-title3')

var subDetail1 = document.querySelector('.sub-detail1 p')
var subDetail2 = document.querySelector('.sub-detail2 p')
var subDetail3 = document.querySelector('.sub-detail3 p')

var icon1 = document.querySelector('.sub-title1 i')
var icon2 = document.querySelector('.sub-title2 i')
var icon3 = document.querySelector('.sub-title3 i')


subDetail1.style.display='none'
subDetail2.style.display='none'
subDetail3.style.display='none'

subTitle1.addEventListener('click', e=>{
    if(subDetail1.style.display=='none'){
        icon1.classList.remove('fa-chevron-down')
        icon1.classList.add('fa-chevron-up')
        subDetail1.style.animation = 'subDetaildown 0.6s ease-in-out forwards'
        subDetail1.style.display='block'
    } else {
        icon1.classList.remove('fa-chevron-up')
        icon1.classList.add('fa-chevron-down')
        subDetail1.style.display='none'
    }
    subDetail2.style.display='none'
    subDetail3.style.display='none'
    icon2.classList.remove('fa-chevron-up')
    icon2.classList.add('fa-chevron-down')
    icon3.classList.remove('fa-chevron-up')
    icon3.classList.add('fa-chevron-down')
})

subTitle2.addEventListener('click', e=>{
    if(subDetail2.style.display=='none'){
        icon2.classList.remove('fa-chevron-down')
        icon2.classList.add('fa-chevron-up')
        subDetail2.style.animation = 'subDetaildown 0.6s ease-in-out forwards'
        subDetail2.style.display='block'
    } else {
        icon2.classList.remove('fa-chevron-up')
        icon2.classList.add('fa-chevron-down')
        subDetail2.style.display='none'
    }
    subDetail1.style.display='none'
subDetail3.style.display='none'
icon1.classList.remove('fa-chevron-up')
    icon1.classList.add('fa-chevron-down')
    icon3.classList.remove('fa-chevron-up')
    icon3.classList.add('fa-chevron-down')
})

subTitle3.addEventListener('click', e=>{
    if(subDetail3.style.display=='none'){
        icon3.classList.remove('fa-chevron-down')
        icon3.classList.add('fa-chevron-up')
        subDetail3.style.animation = 'subDetaildown 0.6s ease-in-out forwards'
        subDetail3.style.display='block'
    } else {
        icon3.classList.remove('fa-chevron-up')
        icon3.classList.add('fa-chevron-down')
        subDetail3.style.display='none'
    }
    subDetail1.style.display='none'
    subDetail2.style.display='none'
    icon2.classList.remove('fa-chevron-up')
    icon2.classList.add('fa-chevron-down')
    icon1.classList.remove('fa-chevron-up')
    icon1.classList.add('fa-chevron-down')
})

