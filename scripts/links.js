const baseURL = "https://faharetana-rkt.github.io/wdd230/";
const linksURL = "https://faharetana-rkt.github.io/wdd230/data/links.json";
const list = document.querySelector("ul");

async function getLessonData() {
    const response = await fetch(linksURL);
    const data = await response.json();
    //console.table(data.lessons);
    displayLinks(data.lessons);
}

getLessonData();

const displayLinks = (lessons) => {
    lessons.forEach((lesson) => {
        const listElement = document.createElement("li");
        const anchor = document.createElement("a");
        listElement.innerHTML = `Week ${lesson}: <span>${lesson.title}</span>`;
        const anchorList = document.querySelector("span");
        anchor.setAttribute('href', lesson.url);
        anchorList.appendChild(anchor);
        list.appendChild(listElement);
    });
}