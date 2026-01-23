const searchInput = document.getElementById("search-input");
const locationEl = document.querySelector(".location");
const tempEl = document.querySelector("#temp");
const condEl = document.querySelector("#condition");
const condImg = document.querySelector(".cond-icon");

// API's

const toJSON = (response) => {
  if (!response.ok) {
    throw new Error("Weather location not found!");
  }
  return response.json();
};

const apiGet = (url) => fetch(url).then(toJSON);

const buildWeatherUrl = (locationName) =>
  `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(
    locationName
  )}?unitGroup=us&key=9LGT3GPK5XZZ8HXPRHZHVSURY&contentType=json`;

const fetchWeatherData = (locationName) =>
  apiGet(buildWeatherUrl(locationName));

// Conversion

const pickWeatherLocation = (data) => ({
  address: data.resolvedAddress,
  temp: data.currentConditions?.temp,
  cond: data.currentConditions?.conditions,
  condIcon: `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/3rd%20Set%20-%20Color/${data.currentConditions?.icon}.png`,
});

const iconManager = () => {
    return {
    hideInvalid: () => {   
    const images = document.querySelectorAll("img");
    images.forEach(img => {
        if (!img.src || img.src === '') {
        img.style.display = 'none';
        }
    });
    },

    setFallback: (imgElement, src, fallbackSrc = '') => {
    imgElement.style.display = 'block';
    imgElement.src = src;
    imgElement.onerror = () => {
        if (fallbackSrc) {
            imgElement.src = fallbackSrc;
        } else {
            imgElement.style.display = 'none';
        }
    };
    }
    };
}

const icons = iconManager();

// Renderers

const renderWeather = (weather) => {
  locationEl.textContent = weather.address;
  tempEl.textContent = weather.temp;
  condEl.textContent = weather.cond;
  icons.setFallback(condImg, weather.condIcon);
};

const renderError = (err) => {
  console.error("Weather error:", err);
  
  locationEl.textContent = "Error";
  tempEl.textContent = "--";
  condEl.textContent = "Unable to find weather for this location. Please try again.";
 
    condImg.style.display = 'none';
};

// Operator

const searchWeather = async () => {
  try {
    const locationName = searchInput.value.trim();
    if (!locationName) return;

    const data = await fetchWeatherData(locationName);
    const weather = pickWeatherLocation(data);
    console.log("Data:", data);

    renderWeather(weather);
  } catch (err) {
    renderError(err);

  }
};

export { fetchWeatherData, searchWeather, iconManager };
