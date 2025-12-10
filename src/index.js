import "./styles/main.css";

const button = document.querySelector("button");

const searchWeather = document.querySelector("input").value.trim().toLowerCase();

async function fetchWeatherData() {
    
    try {
        const response = await fetch(
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchWeather}?unitGroup=us&key=9LGT3GPK5XZZ8HXPRHZHVSURY&contentType=json`
     );
        if (!response.ok) {
            throw new Error("Weather location not found!");
        }
            const weatherData = await response.json();
            console.log("Weather Data:", weatherData);
            const weather = weatherData.address;

            console.log("Result found:", weather);
    }catch(err) {
        alert(err.message);
    }
}

button.addEventListener("click", (e) => {

    e.preventDefault();
    fetchWeatherData();
})

//TODO: Continue the code
