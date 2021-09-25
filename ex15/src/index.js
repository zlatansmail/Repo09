var myNumbers = "";

function myDoWhile() {
    var i = 0;
    do {
        myNumbers += i;
        i++;
        myNumbers += ", ";
    } while (i < 9);

    myNumbers += i;

    return myNumbers;
}

console.log(myDoWhile());
myDoWhile();

module.exports = myDoWhile;