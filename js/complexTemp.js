function clothesCheckWithLogicalOperator() {
    var temperature;
    var dressAdvice;
    temperature = document.getElementById('temperature').value;
    if (temperature == "") {
        return;
    }

    // All dropdown values are valid numerics so not validating here.
    var tempC = parseInt(temperature);
    var dressAdvice;

    // This is a bit more complex than the Task5 solution, but 
    // the checks can be in any order - hence I've moved them around.
    if (tempC >= 50)
        dressAdvice = 'Pants and Vest are fine';
    else if (tempC < 0)
        dressAdvice = 'Stay Inside';
    else if (tempC < 30 && tempC >= 0)
        dressAdvice = 'Wear a Coat and a Hat';
    else if (tempC < 50 && tempC >= 30)
            dressAdvice = 'Wear a Coat';
    
    document.getElementById('dressSense').innerHTML = dressAdvice;
}
