const body = document.querySelector("body");
const input = document.getElementById("input-city");
const button = document.getElementById("button");

button.addEventListener("click", getCityWeatherInfo);
const apiKey = "aa5a826cc684a7127fa32b9ff1a5cf8e";

//get data from API by city name
function getCityWeatherInfo() {
  let cityName = input.value;

  if (!cityName) {
    alert("please insert a city");
  }

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === "404") {
        alert("It is not a city name");
      }
      renderWeatherInfo(data);
    });
}

//all callbacks,render weather info
function renderWeatherInfo(data) {
  renderCityName(data.name);
  renderCityTempreture(Math.round(data.main.feels_like - 273.15));
  renderWeatherType(data.weather[0].icon);
  renderWindSpeed(data.wind.speed);
  renderHowCloudy(data.clouds.all, data.weather[0].description);
  renderSunrise(new Date(data.sys.sunrise * 1000));
  renderSunset(new Date(data.sys.sunset * 1000));
}

//all functions
const h2 = document.createElement("h2");
function renderCityName(nameOfCity) {
  h2.innerHTML = nameOfCity;
  body.appendChild(h2);
}

const fH6 = document.createElement("h6");
function renderCityTempreture(tempreture) {
  fH6.innerHTML = `tempreture feels like: ${tempreture} &deg c`;
  h2.appendChild(fH6);
}
const image = document.createElement("img");
function renderWeatherType(icon) {
  image.src = ` http://openweathermap.org/img/wn/${icon}@2x.png`;
  body.appendChild(image);
}
const sH6 = document.createElement("h6");
function renderWindSpeed(windSpeed) {
  sH6.innerHTML = `wind speed: ${windSpeed} m/s`;
  fH6.appendChild(sH6);
}
const p = document.createElement("p");
function renderHowCloudy(cloudStatus, description) {
  p.innerHTML = `Cloudiness: ${cloudStatus} % <br> ${description}`;
  sH6.appendChild(p);
}
const p2 = document.createElement("p");
function renderSunrise(sunrise) {
  p2.innerHTML = `Sunrise: ${sunrise.toLocaleTimeString()}`;
  p.appendChild(p2);
}
const p3 = document.createElement("p");
function renderSunset(sunset) {
  p3.innerHTML = `Sunset: ${sunset.toLocaleTimeString()}`;
  p2.appendChild(p3);
}

//get the users current position.
//Use that position to fetch weather data from that position.

const button2 = document.getElementById("button2");
const positionP = document.getElementById("status");
button2.addEventListener("click", geoFindMe);
function geoFindMe() {
  navigator.geolocation.getCurrentPosition(showPosition);
}
//this function create location lat. &long.
function showPosition(position) {
  let userLatitude = position.coords.latitude;
  let userLongitude = position.coords.longitude;

  const header = document.createElement("h6");
  header.innerHTML = "Current position:";
  body.appendChild(header);
  positionP.innerHTML = `Latitude: ${userLatitude.toFixed(2)}<br>
  Longitude:${userLongitude.toFixed(2)}`;
  header.appendChild(positionP);
  renderLocationWheather(userLatitude, userLongitude);
}
//get weather info from Api by current lat and lon
function renderLocationWheather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((result) => renderWeatherInfo(result));
}

//When a user has gotten a location through either the input element or
//the geo location api, save that location using localstorage.

//on page loading, should render functions by localstorage values.(but not working)
document.addEventListener("DOMContentLoaded", useLocalStorage);
function useLocalStorage() {
  /* Didnot know how to get input.value for  "cityName", so put just the name"Rome".
  Beside donot know how either input element or current location work*/
  localStorage.setItem("cityName", "Rome");
  let storageCity = localStorage.getItem("cityName");
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${storageCity}&appid=${apiKey}`
  )
    .then((res) => res.json())
    .then((data) => renderWeatherInfo(data));

  //navigator.geolocation.getCurrentPosition(showPosition);
  location.reload;
}
