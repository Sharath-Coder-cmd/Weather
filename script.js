//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric

let key = "3b568a0ce64691675789b3a6115edb43";

const getweather = (city) => {
  var url = "https://api.openweathermap.org/data/2.5/weather";
  var full = `${url}?q=${city}&appid=${key}&units=metric`;
  var weather = fetch(full);

  return weather.then((response) => {
    return response.json();
    
  });
};

function searchcity(city) {
  var city = document.getElementById("search").value;

  getweather(city)
    .then((response) => {
      display(response);
    })

    .catch((err) => {
      console.log(err);
    });
}

function display(weather) {
  document.getElementById("name").innerText = weather.name;
  document.getElementById("temp").innerText = weather.main.temp;
  document.getElementById("climate").innerText = weather.weather[0].main;
  document.getElementById("min").innerHTML = weather.main.temp_min;
  document.getElementById("max").innerText = weather.main.temp_max;
  document.getElementById("deg").innerHTML = weather.wind.deg;
  document.getElementById("gust").innerText = weather.main.feels_like;
  document.getElementById("wind").innerText = weather.wind.speed;
}
