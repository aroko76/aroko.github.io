let weather = {
  apiKey: "bd51d2066dbdf8c675cecb35774fecc1",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { description, icon } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".temp").innerText = Math.trunc(temp) + " °C";
    document.querySelector(".icon").src =
      "http://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".humidity").innerText =
      "humidity: " + humidity + "%";
    document.querySelector(".speed").innerText =
      "wind speed: " + Math.trunc(speed) + "km/h";
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/? " + name + "')";
  },

  search: function () {
    this.fetchWeather(document.querySelector(".search-bar ").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});
document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });
//
