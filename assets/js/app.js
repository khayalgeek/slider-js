const buttons =document.querySelectorAll("[data-carousel-button]");


buttons.forEach(button=>{
     button.addEventListener('click', carouselBetaV1)
})

function carouselBetaV1(){
    let that =this;
    const offset = that.dataset.carouselButton === 'next' ? 1 : -1;

    const slides = that
                   .closest('[data-carousel]')
                   .querySelector('[data-slides]');

    const activeSlide = slides.querySelector('[data-active]');

    let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    if(newIndex < 0) newIndex = slides.children.length - 1;
    if(newIndex >= slides.children.length ) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete  activeSlide.dataset.active;
}