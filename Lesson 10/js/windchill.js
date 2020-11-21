function windChill(){
    let t = parseFloat(document.getElementById("currentTemp").innerText);
    let s = parseFloat(document.getElementById("windSpeed").innerText);


// Calculate the Wind Chill Factor
var windChillFactor = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);

// Round windChillFactor
var digits = 1;
var multiplier = Math.pow(10, digits);
var windChillFactorRounded = Math.round(windChillFactor * multiplier ) / multiplier;

document.getElementById("windChill").innerHTML = windChillFactorRounded;
}