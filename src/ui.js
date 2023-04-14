
function updateDisplay(city, tempF, tempC, condition, conditionSrc,) {
    document.getElementById("cityName").innerHTML = city;
    document.getElementById("temperature").innerHTML = tempF;
    document.getElementById("condition").innerHTML = condition;
    document.getElementById("conditionLogo").setAttribute("src", conditionSrc);
}

export {updateDisplay}