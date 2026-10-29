// POPULAR PLACE CAROUSEL

const popTrack = document.querySelector('.popular-track');
const popSlides = document.querySelectorAll('.popular-slide');
const popPrev = document.querySelector('.prev-pop');
const popNext = document.querySelector('.next-pop');
const popDotsWrap = document.querySelector('.popular-dots');

let popIdx = 0;
const popTotal = popSlides.length;

// Create dots
for (let i = 0; i < popTotal; i++) {
    const d = document.createElement('div');
    d.classList.add('dot');
    if (i === 0) d.classList.add('active');
    d.addEventListener('click', () => goPop(i));
    popDotsWrap.appendChild(d);
}
const popDots = popDotsWrap.querySelectorAll('.dot');

function updatePop() {
    popTrack.style.transform = `translateX(${-popIdx * 100}%)`;
    popDots.forEach((d, i) => d.classList.toggle('active', i === popIdx));
}

function goPop(idx) {
    popIdx = idx;
    if (popIdx < 0) popIdx = popTotal - 1;
    if (popIdx >= popTotal) popIdx = 0;
    updatePop();
}

popNext.addEventListener('click', () => goPop(popIdx + 1));
popPrev.addEventListener('click', () => goPop(popIdx - 1));

let popAutoplay;
function startPopAutoplay() {
    popAutoplay = setInterval(() => {
        goPop(popIdx + 1);
    }, 5000); // 5000ms = 5 seconds
}
function resetPopAutoplay() {
    clearInterval(popAutoplay);
    startPopAutoplay();
}
startPopAutoplay();

// PLACES TO VISIT
const visitTrack = document.querySelector('.visit-track');
const visitSlides = document.querySelectorAll('.visit-track .card-slide');
const visitPrev = document.querySelector('.prev-visit');
const visitNext = document.querySelector('.next-visit');
const visitDotsWrap = document.querySelector('.visit-dots');

let visitIdx = 0;
const visitPerView = 3;
const visitTotal = Math.ceil(visitSlides.length / visitPerView);

for (let i = 0; i < visitTotal; i++) {
    const d = document.createElement('div');
    d.classList.add('dot');
    if (i === 0) d.classList.add('active');
    d.addEventListener('click', () => goVisit(i));
    visitDotsWrap.appendChild(d);
}
const visitDots = visitDotsWrap.querySelectorAll('.dot');

function updateVisit() {
    visitTrack.style.transform = `translateX(${-visitIdx * 100}%)`;
    visitDots.forEach((d, i) => d.classList.toggle('active', i === visitIdx));
}

function goVisit(idx) {
    visitIdx = idx;
    if (visitIdx < 0) visitIdx = visitTotal - 1;
    if (visitIdx >= visitTotal) visitIdx = 0;
    updateVisit();
}

visitNext.addEventListener('click', () => goVisit(visitIdx + 1));
visitPrev.addEventListener('click', () => goVisit(visitIdx - 1));


// HIDDEN PLACES — 9 slides

const hiddenTrack = document.querySelector('.hidden-track');
const hiddenSlides = document.querySelectorAll('.hidden-track .card-slide');
const hiddenPrev = document.querySelector('.prev-hidden');
const hiddenNext = document.querySelector('.next-hidden');
const hiddenDotsWrap = document.querySelector('.hidden-dots');

let hiddenIdx = 0;
const hiddenPerView = 3;
const hiddenTotal = Math.ceil(hiddenSlides.length / hiddenPerView);

for (let i = 0; i < hiddenTotal; i++) {
    const d = document.createElement('div');
    d.classList.add('dot');
    if (i === 0) d.classList.add('active');
    d.addEventListener('click', () => goHidden(i));
    hiddenDotsWrap.appendChild(d);
}
const hiddenDots = hiddenDotsWrap.querySelectorAll('.dot');

function updateHidden() {
    hiddenTrack.style.transform = `translateX(${-hiddenIdx * 100}%)`;
    hiddenDots.forEach((d, i) => d.classList.toggle('active', i === hiddenIdx));
}

function goHidden(idx) {
    hiddenIdx = idx;
    if (hiddenIdx < 0) hiddenIdx = hiddenTotal - 1;
    if (hiddenIdx >= hiddenTotal) hiddenIdx = 0;
    updateHidden();
}

hiddenNext.addEventListener('click', () => goHidden(hiddenIdx + 1));
hiddenPrev.addEventListener('click', () => goHidden(hiddenIdx - 1));