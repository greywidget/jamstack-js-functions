function clothesCheck() {
    var temperature;
    var dressAdvice;
    temperature = document.getElementById('temperature').value;
    if (temperature == "") {
        return;
    }

    // All dropdown values are valid numerics so not validating here.
    var tempC = parseInt(temperature);
    var dressAdvice;

    // The Zen of Python point 5: Flat is better than nested...
    if (tempC >= 50)
        dressAdvice = 'Pants and Vest are fine';
    else if (tempC >= 30)
        dressAdvice = 'Wear a Coat';
    else if (tempC >= 0)
        dressAdvice = 'Wear a Coat and a Hat';
    else
        dressAdvice = 'Stay Inside';

    document.getElementById('dressSense').innerHTML = dressAdvice;
}
