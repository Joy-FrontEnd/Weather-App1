function showDate(timestamp) {
  let date = new Date (timestamp);
  let hours = date.getHours();
   if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  let day = days[date.getDay()];
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes}`;
}




function showTemperature(response) {
  
  let tempElement = document.querySelector(".temp");
  let cityElement = document.querySelector(".city");
  let weatherElement = document.querySelector(".weather");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector(".date");
  let iconElement = document.querySelector("#weather-icons")
  tempElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  weatherElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = showDate(response.data.dt * 1000)
  iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)
  iconElement.setAttribute("alt", response.data.weather[0].description);
}

function searchWeather(city) {
let apiKey = "847fb93bdb350f3f8e4c62e543d7f8f1";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(showTemperature);
}

function showWeather(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  searchWeather(cityInputElement.value);
}

searchWeather("Nairobi")

let form = document.querySelector("#search-form");
form.addEventListener("submit", showWeather);


function showPosition(position) { 
let coords = document.querySelector("#coords-info"); 
let cityInputElement = document.querySelector("#city-input"); 
coords.innerHTML = `Your latitiude is ${position.coords.latitude} and longitude is ${position.coords.longitude}`;
}

function getCurrentPosition() { 
navigator.geolocation.getCurrentPosition(showPosition);
}
let button = document.querySelector(".current-button");
button.addEventListener("click", getCurrentPosition);