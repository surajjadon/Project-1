const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "bacea70ba9msh3321d340be99861p1f289cjsn997d5584ed6e",
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

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});
getWeather("Varanasi");
