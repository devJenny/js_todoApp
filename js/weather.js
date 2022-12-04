// const API_KEY = "0d05202f52c6ff39a067e1193e8e45de";
const API_KEY = config.apikey;

// 정상
function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live it", lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url).then(response => response.json()).then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        // city.innerHTML = data.name;
        weather.innerHTML = `💎 SEOUL<br>📢 ${data.weather[0].main}<br>📍 ${data.main.temp}`;
    })
}

// 에러
function onGeoError() {
    Swal.fire(
        "I don't know your location",
        "confirm your location",
        'warning'
    )
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);