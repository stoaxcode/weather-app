import "./styles/main.css";

const button = document.querySelector("button");


async function fetchWeatherData(locationName) {
    
    try {
        const response = await fetch(
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationName}?unitGroup=us&key=9LGT3GPK5XZZ8HXPRHZHVSURY&contentType=json`
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
    const searchWeather = document.querySelector("input").value.trim().toLowerCase();
    e.preventDefault();
    fetchWeatherData(searchWeather);
});


//TODO: Continue the code
