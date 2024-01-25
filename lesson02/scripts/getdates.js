const currentDate = new Date();
const year = currentDate.getFullYear();
document.getElementById("currentYear").innerHTML = year;

const lastModified = document.lastModified;
document.querySelector(".lastModified").innerHTML = `Last modified on: ${lastModified}`;