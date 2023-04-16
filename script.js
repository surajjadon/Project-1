const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "426c82b41emshca1912a772c38d9p1b4b41jsnaf965b0fc446",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const temperatureImage = document.getElementById("temperature-image");

function updateTemperatureImage(temperature) {
  if (temperature >= 0 && cloud_pct <= 10) {
    temperatureImage.src = "sun.png";
    temperatureImage.alt = "Sun Image";
  } else if (temperature > 10 && temperature <= 50) {
    temperatureImage.src = "s1.png";
    temperatureImage.alt = "Cloud Image";
  } else if (temperature > 50 && temperature <= 90) {
    temperatureImage.src = "untitled.png";
    temperatureImage.alt = "Cloud Image";
  } else if (temperature > 90) {
    temperatureImage.src = "ice.png";
    temperatureImage.alt = "Sun Image";
  }
  console.log("Image src:", temperatureImage.src);
}

const cloudpercentageImage = document.getElementById("cloudpercentage-image");
function updateCloudpercentageImage(cloud_pct) {
  let weatherText = "";

  if (cloud_pct >= 0 && cloud_pct <= 10) {
    weatherText = "Clear";
  } else if (cloud_pct > 10 && cloud_pct <= 50) {
    weatherText = "Partly cloudy";
  } else if (cloud_pct > 50 && cloud_pct <= 90) {
    weatherText = "Mostly cloudy";
  } else if (cloud_pct > 90) {
    weatherText = "Overcast";
  }

  cloudpercentageImage.textContent = weatherText;

  console.log("Weather status:", weatherText);
}

const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      updateTemperatureImage(response.cloud_pct);
      updateCloudpercentageImage(response.cloud_pct);
      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;

      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};

const getWeather2 = (city) => {
  const apiKey = "4ffdc76c26504b2eb6aa980212990a3e";

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const forecastTable = document.getElementById("forecast-table");
      forecastTable.innerHTML = "";

      for (let i = 0; i < data.list.length; i += 8) {
        const date = new Date(data.list[i].dt_txt);
        const temp = data.list[i].main.temp;
        const humidity = data.list[i].main.humidity;

        const row = document.createElement("tr");

        row.innerHTML = `-
        <td>${date.toLocaleDateString()}</td>
        <td id="temp1">${temp}</td>
        <td id="humidity1">${humidity}</td>
        `;

        forecastTable.appendChild(row);
      }
    })
    .catch((error) => console.error(error));
};
const submit = document.getElementById("submit");
const cityInput = document.getElementById("city");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (city) {
    getWeather(city);
    getWeather2(city);
  }
});
getWeather("Varanasi");
getWeather2("Varanasi");
