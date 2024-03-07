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
