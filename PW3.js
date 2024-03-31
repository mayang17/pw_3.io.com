let tempFrom = document.getElementById("tempFrom");
let tempTo = document.getElementById("tempTo");
let tempResult = document.getElementById("tempResult");
let tempInput = document.getElementById("tempInput");
let btn = document.getElementById("btn");

function onChange() {
    tempResult.value = "";
    tempInput.value = "";
}

function CelToFah(param) {
    return (9 / 5) * param + 32;
}

function CelToRea(param) {
    return (4 / 5) * param;
}

function FahToCel(param) {
    return (5 / 9) * (param - 32);
}

function FahToRea(param) {
    return (4 / 9) * (param - 32);
}

function ReaToCel(param) {
    return (5 / 4) * param;
}

function ReaToFah(param) {
    return (9 / 4) * param + 32;
}

function convert() {
    let inputValueFloat = parseFloat(tempInput.value);

    // Celcius Logic
    if (tempFrom.value === "celcius" && tempTo.value === "celcius") {
        tempResult.value = tempInput.value;
    } else if (tempFrom.value === "celcius" && tempTo.value === "fahrenheit") {
        tempResult.value = CelToFah(inputValueFloat).toFixed(2);
    } else if (tempFrom.value === "celcius" && tempTo.value === "reamur") {
        tempResult.value = CelToRea(inputValueFloat).toFixed(2);
    } else if (tempFrom.value === "celcius" && tempTo.value === "kelvin") {
        tempResult.value = (inputValueFloat + 273.15).toFixed(2);
    }

    // Fahrenheit Logic
    else if (tempFrom.value === "fahrenheit" && tempTo.value === "fahrenheit") {
        tempResult.value = tempInput.value;
    } else if (tempFrom.value === "fahrenheit" && tempTo.value === "celcius") {
        tempResult.value = FahToCel(inputValueFloat).toFixed(2);
    } else if (tempFrom.value === "fahrenheit" && tempTo.value === "reamur") {
        tempResult.value = FahToRea(inputValueFloat).toFixed(2);
    } else if (tempFrom.value === "fahrenheit" && tempTo.value === "kelvin") {
        tempResult.value = ((inputValueFloat - 32) * (5 / 9) + 273.15).toFixed(2);
    }

    // Reamur Logic
    else if (tempFrom.value === "reamur" && tempTo.value === "reamur") {
        tempResult.value = tempInput.value;
    } else if (tempFrom.value === "reamur" && tempTo.value === "fahrenheit") {
        tempResult.value = ReaToFah(inputValueFloat).toFixed(2);
    } else if (tempFrom.value === "reamur" && tempTo.value === "celcius") {
        tempResult.value = ReaToCel(inputValueFloat).toFixed(2);
    } else if (tempFrom.value === "reamur" && tempTo.value === "kelvin") {
        tempResult.value = (inputValueFloat * (5 / 4) + 273.15).toFixed(2);
    }

    // Kelvin Logic
    else if (tempFrom.value === "kelvin" && tempTo.value === "kelvin") {
        tempResult.value = tempInput.value;
    } else if (tempFrom.value === "kelvin" && tempTo.value === "celcius") {
        tempResult.value = (inputValueFloat - 273.15).toFixed(2);
    } else if (tempFrom.value === "kelvin" && tempTo.value === "fahrenheit") {
        tempResult.value = ((inputValueFloat - 273.15) * (9 / 5) + 32).toFixed(2);
    } else if (tempFrom.value === "kelvin" && tempTo.value === "reamur") {
        tempResult.value = ((inputValueFloat - 273.15) * (4 / 5)).toFixed(2);
    }
}

// Color Changes
if (btn) {
    btn.addEventListener("click", function (event) {
        document.body.style.backgroundColor = document.getElementById("bg-color").value;
        event.preventDefault();
    });
}
