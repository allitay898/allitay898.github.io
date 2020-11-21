function windChill(){
    let t = parseFloat(document.getElementById("currentTemp").innerText);
    let s = parseFloat(document.getElementById("windSpeed").innerText);
    let output = "";

    /*if(t >= 50 && s > 10){
    f = (35.74+(0.6215 * t)) - (35.75*Math.pow(s,0.16))+(0.4275*t)*(Math.pow(s,0.16));
    }
    else f = "N/A"*/

    (t <= 50 && s < 10) ? output = ((35.74+(0.6215 * t)) - (35.75*Math.pow(s,0.16))+(0.4275*t)*(Math.pow(s,0.16))).toFixed(0) : output = "N/A"; document.getElementById("windchill").innerHTML = output;
 
}