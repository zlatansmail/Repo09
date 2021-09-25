var evenNumbers = "";
var evenInverseNumbers = "";

function myForLoop1() {
    for (var index = 0; index < 9; index = index + 2) {
        evenNumbers += index;
        if (index <= 6) {
            evenNumbers += ", "
        }
    }
    return evenNumbers;
}

function myForLoop2() {
    for (var index = 8; index >= 0; index = index - 2) {
        if (index > 0) {
            evenInverseNumbers += index;
            evenInverseNumbers += ", "
        } else if (index === 0) {
            evenInverseNumbers += index;
        }
    }
    return evenInverseNumbers;
}


console.log(myForLoop1());
console.log(myForLoop2());

module.exports = {
    myForLoop1,
    myForLoop2
};