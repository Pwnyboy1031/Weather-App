import { updateDisplay } from "./ui";

async function getWeather(searchedCity) {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=32f6de3ab826413d9e4145439231304&q=${searchedCity}`, {mode: 'cors'});
    const data = await response.json();
    console.log(data)
    const city = data.location.name;
    const tempF = data.current.temp_f + "°";
    const tempC = data.current.temp_c;
    const condition = data.current.condition.text;
    const conditionIconSrc = data.current.condition.icon;
    console.log(condition);
    updateDisplay(city, tempF, tempC, condition, conditionIconSrc);
}

getWeather();

document.addEventListener("keypress", (e) => {
    if (e.code === "Enter") {
        const city = citySearch.value;
        console.log(e.code);
        getWeather(city);
    }
})

