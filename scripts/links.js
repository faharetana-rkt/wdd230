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
        listElement.innerHTML = `Week ${lesson.lesson}: `;
        const links = lesson.links;
        links.forEach((link) => {
            const url = link.url;
            const title = link.title;
            const anchor = document.createElement("a");
            anchor.setAttribute('href', url);
            anchor.innerHTML = `| ${title} |`;
            listElement.appendChild(anchor);
        })
        list.appendChild(listElement);
    });
}