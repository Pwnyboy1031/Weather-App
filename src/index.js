import { updateCurrent, updateForecast } from "./ui";


async function getWeather(searchedCity) {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=32f6de3ab826413d9e4145439231304&q=${searchedCity}`, {mode: 'cors'});
        const data = await response.json();
        const city = data.location.name;
        const tempF = data.current.temp_f + "°";
        const tempC = data.current.temp_c;
        const condition = data.current.condition.text;
        const conditionIconSrc = data.current.condition.icon;
        updateCurrent(city, tempF, tempC, condition, conditionIconSrc);
    } catch(e) {
        console.log(e);
    }
    
}

async function getForecast(searchedCity) {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=32f6de3ab826413d9e4145439231304&q=${searchedCity}&days=3&aqi=noalerts=no`, {mode: 'cors'});
        const data = await response.json();
        const forecast = data.forecast;
        const currentTime = data.current.last_updated;
        updateForecast(forecast, currentTime);
    } catch(e) {
        alert("Please enter a valid location")
    }
    
}


getWeather("London");
getForecast("London");

document.addEventListener("keypress", (e) => {
    if (e.code === "Enter") {
        try {
            const city = citySearch.value;
        getWeather(city);
        getForecast(city);
        document.getElementById("forecastContainer").innerHTML = "";
        } catch(e) {
            alert("Please enter a valid location");
        }
        
    }
})

