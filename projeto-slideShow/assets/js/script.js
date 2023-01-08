let images = document.querySelectorAll('.item').length;
let currentSlide = 0;

document.querySelector('.sliderWidth').style.width = `calc(100vw * ${images})`;
document.querySelector('.slider-setas').style.height = 
`${document.querySelector('.slider').clientHeight}px`;

function goPrev(){
    currentSlide--;
    if(currentSlide < 0){
        currentSlide = 2;
    }
    updateMargin();
    }
    
    function goNext (){
    currentSlide++;
    if(currentSlide > 2){
    currentSlide = 0;
    }
    updateMargin();
    }
    
    function updateMargin(){
    let sliderItemWidth = document.querySelector('.item').clientWidth;
    let newMargin = (currentSlide * sliderItemWidth)
    document.querySelector('.sliderWidth').style.marginLeft = `-${newMargin}px`
    }
    setInterval(goNext,5000)
    
