const track = document.querySelector('.carouselTrack');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carouselButtonRight');
const prevButton = document.querySelector('.carouselButtonLeft');
const dotsNav = document.querySelector('.carouselNav');
const dots = Array.from(dotsNav.children);
const slideWidth = slides[0].getBoundingClientRect().width;

// arrange the slides next to one another

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('currentSlide');
    targetSlide.classList.add('currentSlide');
};

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('currentSlide');
    targetDot.classList.add('currentSlide');
};

// when I click left, move slides to the left

prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.currentSlide');
    let prevSlide = currentSlide.previousElementSibling;
    if(!prevSlide) prevSlide = slides[slides.length - 1];
    const currentDot = dotsNav.querySelector('.currentSlide');
    let prevDot = currentDot.previousElementSibling;
    if(!prevDot) prevDot = dots[dots.length - 1];
    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    const name = prevSlide.getAttribute('name');
    fetch(`/data/${name}.json`)
        .then(response => response.json())
        .then(data => {
            const projectDisplayer = document.querySelector('.projectDisplayer');
            projectDisplayer.innerHTML = renderProject(data);
        });
});

// when I click right, move slides to the right

nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.currentSlide');
    let nextSlide = currentSlide.nextElementSibling;
    if(!nextSlide) nextSlide = slides[0];
    const currentDot = dotsNav.querySelector('.currentSlide');
    let nextDot = currentDot.nextElementSibling;
    if(!nextDot) nextDot = dots[0];
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    const name = nextSlide.getAttribute('name');
    fetch(`/data/${name}.json`)
        .then(response => response.json())
        .then(data => {
            const projectDisplayer = document.querySelector('.projectDisplayer');
            projectDisplayer.innerHTML = renderProject(data);
        });
});

// when I click the nav indicators, move to that slide

dotsNav.addEventListener('click', e => {
    // what indicator was clicked on ?
    const targetDot = e.target.closest('button');
    if (!targetDot) return;
    const currentSlide = track.querySelector('.currentSlide');
    const currentDot = dotsNav.querySelector('.currentSlide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];
    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
});

function renderProject(data){
    return `<div class="w-1/3 m-auto"><img src="${data.logo}" alt="${data.logo}" class="my-3"/></div><h1 class="text-xl my-3 text-red-700">${data.title}</h1><p class="my-3">${data.date}</p><p class="my-3 text-sm">${data.description}</p><p class="my-3 text-sm">${data.skills}</p><a href="${data.link}" class="my-2 text-blue-400" >Voir le projet</a>`;
}