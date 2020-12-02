function showTemperature(response) {
  console.log(response.data);
  let tempElement = document.querySelector(".temp");
  let cityElement = document.querySelector(".city");
  let weatherElement = document.querySelector(".weather");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  tempElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  weatherElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);

}

let apiKey = "847fb93bdb350f3f8e4c62e543d7f8f1";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Nairobi&appid=${apiKey}&units=metric`;
console.log(apiUrl);
axios.get(apiUrl).then(showTemperature);