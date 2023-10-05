document.addEventListener("DOMContentLoaded", function () {
    const temperatureInput = document.getElementById("temperature");
    const unitFromSelect = document.getElementById("unitFrom");
    const unitToSelect = document.getElementById("unitTo");
    const convertButton = document.getElementById("convertButton");
    const resultContainer = document.getElementById("result");

    convertButton.addEventListener("click", function () {
        const inputTemperature = parseFloat(temperatureInput.value);

        if (isNaN(inputTemperature)) {
            alert("Please enter a valid temperature.");
            return;
        }

        const unitFrom = unitFromSelect.value;
        const unitTo = unitToSelect.value;
        let convertedTemperature;

        if (unitFrom === "celsius" && unitTo === "fahrenheit") {
            convertedTemperature = (inputTemperature * 9/5) + 32;
        } else if (unitFrom === "fahrenheit" && unitTo === "celsius") {
            convertedTemperature = (inputTemperature - 32) * 5/9;
        } else if (unitFrom === "celsius" && unitTo === "kelvin") {
            convertedTemperature = inputTemperature + 273.15;
        } else if (unitFrom === "kelvin" && unitTo === "celsius") {
            convertedTemperature = inputTemperature - 273.15;
        } else if (unitFrom === "fahrenheit" && unitTo === "kelvin") {
            convertedTemperature = (inputTemperature - 32) * 5/9 + 273.15;
        } else if (unitFrom === "kelvin" && unitTo === "fahrenheit") {
            convertedTemperature = (inputTemperature - 273.15) * 9/5 + 32;
        } else {
            convertedTemperature = inputTemperature; // If units are the same
        }

        resultContainer.innerHTML = `
            <div class="result-section">
                <p>${inputTemperature.toFixed(2)} ${unitFrom.toUpperCase()} = ${convertedTemperature.toFixed(2)} ${unitTo.toUpperCase()}</p>
            </div>
        `;
    });
});
