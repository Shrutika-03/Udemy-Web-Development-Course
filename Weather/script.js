document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const getWeather = document.getElementById("weatherBtn");
  const weatherInfo = document.getElementById("weather-info");
  const cityName = document.getElementById("city-name");
  const temperature = document.getElementById("temp");
  const description = document.getElementById("desc");
  const errorMsg = document.getElementById("error-msg");

  const API_KEY = "9dd535f1a2f31a90b979aca60896481c"; //env variables

  getWeather.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (!city) return;

    //it may throw an error
    //server/database is always in another continent
    try {
      const wetherResponse = await fetchData(city);
      displayData(wetherResponse);
    } catch (error) {
      showError();
    }
  });

  async function fetchData(city) {
    //gets the data

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    const response = await fetch(url);

    console.log(typeof response);
    console.log("RESPONSE", response);

    if (!response.ok) {
      throw new Error("City not found");
    }

    const json = await response.json();
    return json;
  }

  function displayData(weatherData) {
    //display data
    console.log(weatherData);

    const { name, main, weather } = weatherData;
    cityName.textContent = name;
    temperature.textContent = `Temperature: ${main.temp}`;
    description.textContent = `Weather: ${weather[0].description}`;

    // unlock info
    weatherInfo.classList.remove("hidden");
    errorMsg.classList.add("hidden");
  }

  function showError() {
    //error message
    weatherInfo.classList.remove("hidden");
    errorMsg.classList.add("hidden");
  }
});
