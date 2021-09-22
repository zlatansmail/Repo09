function compareDifferentValues(m, n) {
    if (typeof m === typeof n) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(compareDifferentValues(8, "8"));
console.log(compareDifferentValues("8", 8));
console.log(compareDifferentValues('8', 8));
console.log(compareDifferentValues("8", "8"));
console.log(compareDifferentValues(8, 8));

module.exports = compareDifferentValues;