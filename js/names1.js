function setName(firstName, lastName) {
    document.getElementById('fullName').innerHTML = `${firstName} ${lastName}`;
}

function buildFullName() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('surname').value;
    // Just return if either are blank. There will be a validation message
    if (firstName == "" || lastName == "") {
        return;
    }

    setName(firstName, lastName);
}