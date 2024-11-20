let ContainerCarousel = document.querySelector('#ContainerCarousel');
let ContainerImageCarousel = document.querySelector('#ContainerImageCarousel');
let ContainerIndicator = document.querySelector('#ContainerIndicator');
let ContainerCarouselSlide = document.querySelector('#ContainerCarouselSlide');
let NextCarousel = document.querySelector('#NextCarousel');
let PreviousCarousel = document.querySelector('#PreviousCarousel');
let FirstLoaded = true;

if(FirstLoaded) {
    console.log('masuk loaded');
    ShowSlider('default');
    FirstLoaded = false;
}
NextCarousel.addEventListener('click', () => {
    ShowSlider('next');
});
PreviousCarousel.addEventListener('click', () => {
    ShowSlider('prev');
});

function ShowSlider(type) {
    let CarouselContent = document.querySelectorAll('#CarouselContent');
    let HighlightImg = document.querySelectorAll('#HighlightImg');
    let IndicatorCarousel = document.querySelectorAll('#IndicatorCarousel');
    let CarouselSlide = document.querySelectorAll('#CarouselSlide');
    if(type === 'next') {
        ContainerCarousel.appendChild(CarouselContent[0]);
        ContainerImageCarousel.appendChild(HighlightImg[0]);
        ContainerCarouselSlide.appendChild(CarouselSlide[0]);
        ContainerIndicator.prepend(IndicatorCarousel[IndicatorCarousel.length - 1]);
        setTimeout(() => {
            HighlightImg[1].classList.replace('hidden', 'CarouselImageAnimation');
            HighlightImg[0].classList.replace('CarouselImageAnimation', 'hidden');
            CarouselContent[1].classList.replace('hidden', 'CarouselContentAnimation');
            CarouselContent[0].classList.replace('CarouselContentAnimation', 'hidden');
        }, 10);
    } else if(type === 'prev') {
        ContainerCarousel.prepend(CarouselContent[CarouselContent.length - 1]);
        ContainerImageCarousel.prepend(HighlightImg[HighlightImg.length - 1]);
        ContainerCarouselSlide.prepend(CarouselSlide[CarouselSlide.length - 1]);
        ContainerIndicator.appendChild(IndicatorCarousel[0]);
        setTimeout(() => {
            HighlightImg[CarouselContent.length - 1].classList.replace('hidden', 'CarouselImageAnimation');
            HighlightImg[0].classList.replace('CarouselImageAnimation', 'hidden');
            CarouselContent[CarouselContent.length - 1].classList.replace('hidden', 'CarouselContentAnimation');
            CarouselContent[0].classList.replace('CarouselContentAnimation', 'hidden');
        }, 10);
    } else {
        document.addEventListener("DOMContentLoaded", function () {
            CarouselContent[0].classList.replace('hidden', 'CarouselContentAnimation');
            HighlightImg[0].classList.replace('hidden', 'CarouselImageAnimation');
        });
    }
}

// function PreviousSlider() {
//     if(NumberContent > 0) {
//         CarouselContent[NumberContent].classList.replace('block', 'hidden');
//         CarouselContent[NumberContent - 1].classList.replace('hidden', 'block');
//         HighlightImg[NumberContent].classList.replace('block', 'hidden');
//         HighlightImg[NumberContent - 1].classList.replace('hidden', 'block');
//         IndicatorCarousel[NumberContent].classList.replace('scale-150', 'scale-100');
//         IndicatorCarousel[NumberContent - 1].classList.replace('scale-100', 'scale-150');
//         NumberContent--;
//         console.log(NumberContent);
//         console.log(CarouselContent[NumberContent].classList);
//     } else {
//         CarouselContent[NumberContent].classList.replace('block', 'hidden');
//         HighlightImg[NumberContent].classList.replace('block', 'hidden');
//         IndicatorCarousel[NumberContent].classList.replace('scale-150', 'scale-100');
//         NumberContent = 5;
//         CarouselContent[NumberContent - 1].classList.replace('hidden', 'block');
//         HighlightImg[NumberContent - 1].classList.replace('hidden', 'block');
//         IndicatorCarousel[NumberContent - 1].classList.replace('scale-100', 'scale-150');
//         NumberContent--;
//         console.log(NumberContent);
//         console.log(CarouselContent[NumberContent].classList);
//     }
// }
