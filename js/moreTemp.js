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

    // This is a simple solution, but it depends on the tests being in
    // the correct sequence.
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
