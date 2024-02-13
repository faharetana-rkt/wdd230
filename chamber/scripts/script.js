const lastModified = document.lastModified;
document.querySelector(".lastModified").innerHTML = `Last modified on: ${lastModified}`;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");
hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const modeButton = document.querySelector(".mode");
const body = document.querySelector("body");
const main = document.querySelector("main");
const card = document.querySelector(".card");
const tutorCard = document.querySelector("#tutor");
const weatherCard = document.querySelector("#weather");
const barberCard = document.querySelector("#barber");
const itCard = document.querySelector("#it");
const eventPara = document.querySelector("#events p");
const weatherPara = document.querySelector("#weather p");
const h1 = document.querySelector("h1");

modeButton.addEventListener("click", () => {
    body.classList.toggle('dark-mode');
    main.classList.toggle('dark-mode');
    card.classList.toggle('dark-mode');
    tutorCard.classList.toggle('dark-mode');
    weatherCard.classList.toggle('dark-mode');
    barberCard.classList.toggle('dark-mode');
    itCard.classList.toggle('dark-mode');
    eventPara.classList.toggle('dark-mode');
    weatherPara.classList.toggle('dark-mode');
    h1.classList.toggle('dark-mode');

    // Change color of weather and events paragraphs and all paragraphs inside
    const weatherParas = document.querySelectorAll("#weather p");
    const eventsParas = document.querySelectorAll("#events p");

    if (body.classList.contains('dark-mode')) {
        // Dark mode is active
        weatherParas.forEach(para => {
            para.style.color = 'white';
        });
        eventsParas.forEach(para => {
            para.style.color = 'white';
        });
    } else {
        // Dark mode is inactive
        weatherParas.forEach(para => {
            para.style.color = 'black';
        });
        eventsParas.forEach(para => {
            para.style.color = 'black';
        });
    }
});
