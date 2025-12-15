import { fetchWeatherData, searchWeather } from "./modules/apiData.js";
import "./styles/main.css";

const weatherResultData = fetchWeatherData;




searchWeather.addEventListener("keydown", e => {
    if (e.key === "Enter") {
    e.preventDefault();
    weatherResultData(searchWeather.value);
    }
});


//TODO: Continue the code
