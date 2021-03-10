function buildName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

function getName() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('surname').value;
    if (firstName == "" || lastName == "") {
        return;
    }

    fullName = buildName(firstName, lastName);
    document.getElementById('fullName').innerHTML = fullName;
}
