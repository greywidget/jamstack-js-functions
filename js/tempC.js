function coatCheck() {
    var temperature;
    var dressAdvice;
    temperature = document.getElementById('temperature').value;
    if (temperature == "") {
        return;
    }

    // All dropdown values are valid numerics so not validating here.
    tempC = parseInt(temperature);
    dressAdvice = ( tempC < 50 ) ? "Best you wear a coat!" : "Pants and vest are fine!";
    document.getElementById('dressSense').innerHTML = dressAdvice;
}
