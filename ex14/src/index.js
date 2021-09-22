function myForLoop1() {
    var evenNumbers = "";

    for (var index = 0; index < 10; index = index + 2) {
        if (i == 8) {
            evenNumbers += index;
        } else {
            evenNumbers += index + ", "
        }
        return evenNumbers;
    }

    function myForLoop2() {
        var evenInverseNumbers = "";
        for (var index = 8; index >= 0; index = index - 2) {
            evenInverseNumbers += index + ", ";
        }
        return evenInverseNumbers;
    }

    console.log(myForLoop1());
    console.log(myForLoop2());

    module.exports = {
        myForLoop1,
        myForLoop2
    };