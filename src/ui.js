
import {format} from 'date-fns';

function updateCurrent(city, tempF, tempC, condition, conditionSrc, wind) {
    document.getElementById("cityName").innerHTML = city;
    document.getElementById("temperature").innerHTML = tempF;
    document.getElementById("condition").innerHTML = condition;
    document.getElementById("conditionLogo").setAttribute("src", conditionSrc);
}

function updateForecast(forecast, currentTime) {

    let currentTimeindex = parseInt(currentTime.slice(-5,-3));

        // fix this, its currently an infinite loop
    for (let i = currentTimeindex + 1; i <= currentTimeindex + 5; i++) {
       let day = 0;

        if (i >= 24) {
            day = 1;
            currentTimeindex = currentTimeindex - i;
            i = 0;
        }

        const hourlyContainer = document.createElement("div");
        hourlyContainer.setAttribute("class", "hourly");
        hourlyContainer.setAttribute("id", i)
        forecastContainer.appendChild(hourlyContainer);

        const time = document.createElement("h4");
        time.innerHTML = format(new Date(forecast.forecastday[day].hour[i].time), 'h a');
        hourlyContainer.appendChild(time);

        //condition image
        conditionLogo = document.createElement("img");
        conditionLogo.setAttribute("src", forecast.forecastday[day].hour[i].condition.icon);
        hourlyContainer.appendChild(conditionLogo);

        //condition
        condition = document.createElement("center");
        condition.innerHTML = forecast.forecastday[day].hour[i].condition.text;
        hourlyContainer.appendChild(condition);

        //temperature
        temperature = document.createElement("div")
        temperature.setAttribute("class", "forecastTemp")
        temperature.innerHTML = forecast.forecastday[day].hour[i].temp_f + "°";
        hourlyContainer.appendChild(temperature)
    }
}

export {updateCurrent, updateForecast}