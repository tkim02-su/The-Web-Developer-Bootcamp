//Functions to calculate the converted values
function convertToFahrenheit(inputValueCelsius) {
    return inputValueCelsius * 9 / 5 + 32
}

function convertToCelsius(inputValueFahrenheit) {
    return (inputValueFahrenheit - 32) / 1.8;
}

//Function to do the converison based on which value has been added
function convertFtoC() {
    const fahrenheit = document.getElementById("inputFahrenheit").value;
    document.getElementById("converted-value-fahrenheit").innerHTML = convertToCelsius(fahrenheit);
}

function convertCtoF() {
    const celsius = document.getElementById("inputCelsius").value;
    document.getElementById("converted-value-celsius").innerHTML = convertToFahrenheit(celsius);
}
