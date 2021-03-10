function sayWhat() {
    console.log('Get this...');
}

function sayThis(what) {
    console.log(what);
}

function addThese(first, second) {
    console.log('The total ');
}

// Ewww semi-colons are optional it seems...

// 1.
// sayWhat();

// 2.
// sayThis('Yo Mr Widget');

// 3.
// function buildName(first, last) {
//     junk = 'yellow';  // This one is global
//     return `${first} ${last}`;
// }

// const first = 'Craig';
// const last = 'Richards';
// whole_name = buildName(first, last);
// console.log('Full name is ' + whole_name);
// console.log(junk);

// 4. Scope, Local and global

// 5. Comparison Operators
// Remember === checks value AND type (sim !==)
// Ternary Operator

console.log("1 == '1'", 1=='1');
console.log("1 === '1'", 1==='1');

function isAGoatNecessary(temperature) {
    if (temperature < 18)
        console.log(`It is only ${temperature} degrees, you better get your goat`);
    else {
        console.log(`Wow, ${temperature} degrees today, positively balmy!`);
        console.log("Clearly you are not in England");
    }
}

isAGoatNecessary(10);
isAGoatNecessary(22);

function putOnACoat(temperature) {
    if (temperature >= 50)
        console.log('Pants and Vest are fine');
    else if (temperature >= 30)
        console.log('Put on a Coat');
    else if (temperature >= 0)
        console.log('Put on a Hat and a Coat');
    else
        console.log('Stay Inside');
}

putOnACoat(-1);

console.log(true < 6);
