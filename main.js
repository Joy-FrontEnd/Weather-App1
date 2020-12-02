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
  tempElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  weatherElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = showDate(response.data.dt * 1000)

}

let apiKey = "847fb93bdb350f3f8e4c62e543d7f8f1";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=dubai&appid=${apiKey}&units=metric`;
console.log(apiUrl);
axios.get(apiUrl).then(showTemperature);