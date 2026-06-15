const convertBtn = document.getElementById("convertBtn");
const resetBtn = document.getElementById("resetBtn");
const result = document.getElementById("result");

convertBtn.addEventListener("click", () => {

    const temperature = parseFloat(document.getElementById("temperature").value);

    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;

    // Validation
    if (isNaN(temperature)) {
        result.innerHTML = "❌ Please enter a valid number";
        return;
    }

    // Same unit
    if (fromUnit === toUnit) {
        result.innerHTML = `${temperature.toFixed(2)} ${getSymbol(toUnit)}`;
        return;
    }

    let convertedTemp;

    // Celsius conversions
    if (fromUnit === "celsius") {

        if (toUnit === "fahrenheit") {
            convertedTemp = (temperature * 9/5) + 32;
        }
        else if (toUnit === "kelvin") {
            convertedTemp = temperature + 273.15;
        }

    }

    // Fahrenheit conversions
    else if (fromUnit === "fahrenheit") {

        if (toUnit === "celsius") {
            convertedTemp = (temperature - 32) * 5/9;
        }
        else if (toUnit === "kelvin") {
            convertedTemp = ((temperature - 32) * 5/9) + 273.15;
        }

    }

    // Kelvin conversions
    else if (fromUnit === "kelvin") {

        if (toUnit === "celsius") {
            convertedTemp = temperature - 273.15;
        }
        else if (toUnit === "fahrenheit") {
            convertedTemp = ((temperature - 273.15) * 9/5) + 32;
        }

    }

    result.innerHTML = `
        ✅ ${convertedTemp.toFixed(2)} ${getSymbol(toUnit)}
    `;
});


// Reset Button
resetBtn.addEventListener("click", () => {

    document.getElementById("temperature").value = "";
    document.getElementById("fromUnit").selectedIndex = 0;
    document.getElementById("toUnit").selectedIndex = 0;

    result.innerHTML = "--";
});


// Function for symbols
function getSymbol(unit) {

    switch(unit){

        case "celsius":
            return "°C";

        case "fahrenheit":
            return "°F";

        case "kelvin":
            return "K";

        default:
            return "";
    }
}
