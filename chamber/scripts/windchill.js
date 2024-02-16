const tempCelsius = parseInt(document.querySelector("#temp").innerHTML);
const windspeed = parseInt(document.querySelector("#windSpeed").innerHTML);
const tempFahrenheit = ((9 / 5) * tempCelsius) + 32;

const windchill = 35.74 + 0.6215 * tempFahrenheit - (35.75 * windspeed ** 0.16) + 0.4275 * tempCelsius * windspeed ** 0.16;
const rounded = Number(windchill.toFixed(2));
document.querySelector("#windChill").innerHTML = rounded;