let now = new Date();
let h2 = document.querySelector("h2");
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
h2.innerHTML = `${day}, ${hours}:${minutes}`;

function currentCity(event) {
  event.preventDefault();
  let location = document.querySelector("#city-input");
  let currentLocation = document.querySelector(".city");
  currentLocation.innerHTML = location.value;
}

let city = document.querySelector("#search-form");
city.addEventListener("submit", currentCity);

function converTemp(event) {
  let currenTemp = document.querySelector(".temperature");
  currenTemp.innerHTML = Math.round(26 * 1.8 + 32) + "°";
}
let temperature = document.querySelector(".temperature");
temperature.addEventListener("click", converTemp);

function fromFahrenheit(event) {
  let inFahrenheit = Math.round(26 * 1.8 + 32);
  let toCelsius = document.querySelector(".temperature");
  toCelsius.innerHTML = Math.round((inFahrenheit - 32) * 0.556) + "°";
}
let celsius = document.querySelector(".temp-units");
celsius.addEventListener("click", fromFahrenheit);
