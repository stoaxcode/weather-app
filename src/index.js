import { fetchWeatherData } from "./modules/apiData.js";
import "./styles/main.css";

const weatherResultData = fetchWeatherData;




searchWeather.addEventListener("keydown", e => {
    if (e.key === "Enter") {
    e.preventDefault();
    weatherResultData;
    }
});


//TODO: Continue the code
