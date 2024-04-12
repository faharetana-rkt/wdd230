const apiKey = 'f26976f1030d69a9f418448c9d6ec7d5';
const city = 'Toamasina';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        updateWeatherCard(data);
    })
    .catch(error => console.error('Error fetching data: ', error));

function updateWeatherCard(data) {
    const temperature = data.main.temp; // Temperature in Kelvin
    const description = data.weather[0].description; // Weather condition
    const temperatureCelsius = (temperature - 273.15).toFixed(2);
    document.querySelector('#weather').textContent = `${temperatureCelsius}°C - ${description}`;
}
