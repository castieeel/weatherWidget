const APP_ID = 'd6953a12ba4fe968fa4593f2f8b4b632';
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5';
const lang = 'ru';
const units = 'metric';

const type = document.querySelector('.center__type');
const temp = document.querySelector('.center__temp');
const city = document.querySelector('.center__city');
const minTemp = document.querySelector('.bottom__min-temp');
const maxTemp = document.querySelector('.bottom__max-temp');
const icon = document.querySelector('.icon');

document.addEventListener('DOMContentLoaded', () => {
    navigator.geolocation.getCurrentPosition((data) => {
        const { latitude, longitude } = data.coords;
        fillingReq(latitude, longitude);
    });
})

const suggest = new Suggest(document.querySelector('.suggest'), {
    data: cities.map(name => name.name),
});

function weatherLocation(nameCity) {
    let obj = cities.find(name => name.name === nameCity);
    let arr = obj.coordinates.split(',');
    const latitude = arr[0];
    const longitude = arr[1];
    fillingReq(latitude, longitude);
}

function fillingReq(latitude, longitude) {
    request({
        url: `${API_BASE_URL}/weather`,
        params: {
            lat: latitude,
            lon: longitude,
            appid: APP_ID,
            lang: lang,
            units: units,
        },
        onSuccess: (data) => {
            type.textContent = data.weather[0].description;
            temp.textContent = Math.round(data.main.temp);
            city.textContent = data.name;
            minTemp.textContent = "Мин.темп: " + Math.round(data.main.temp_min);
            maxTemp.textContent = "Макс.темп: " + Math.round(data.main.temp_max);
            icon.src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
        }
    });
}