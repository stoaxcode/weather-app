export { fetchWeatherData, searchWeather };

const locationData = document.querySelector(".location");

const searchWeather = document.getElementById("search-input");


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

            console.log("location found:", weather.trim());
            locationData.innerText = `${weather}`;
    }catch(err) {
        alert(err.message);
    }
}

