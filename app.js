const slides = document.getElementsByClassName("slide")


setInterval(() => {
    const activeSlide = document.querySelector("[display-active]");
    
    let newIndex = [...slides].indexOf(activeSlide) + 1;

    if (newIndex < 0) { newIndex = slides.length - 1; }
    else if (newIndex >= slides.length) { newIndex = 0; };

    slides[newIndex].setAttribute("display-active", '');
    activeSlide.removeAttribute("display-active", '');

    // slides[newIndex].dataset.active = true;
    // delete activeSlide.dataset.active;

}, 2000);