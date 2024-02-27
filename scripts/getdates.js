const currentDate = new Date();
const year = currentDate.getFullYear();
document.getElementById("currentYear").innerHTML = year;

const lastModified = document.lastModified;
document.querySelector(".lastModified").innerHTML = `Last modified on: ${lastModified}`;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");
hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

/* Page visits code start here*/
const visitsDisplay = document.querySelector("#visits");

let numVisits = Number(window.localStorage.getItem("visits-ls"));

if (numVisits !== 0) {
	visitsDisplay.innerHTML = `Page visits: <strong>${numVisits}</strong>`;
} else {
	visitsDisplay.innerHTML = "This is your first visit!!!";
}


numVisits++;
localStorage.setItem("visits-ls", numVisits);
