const removeFromArray = function(array, r1, r2, r3, r4) {
    removeOneNumber(array,r1);
    removeOneNumber(array,r2);
    removeOneNumber(array,r3);
    removeOneNumber(array,r4);
    return array
};

function removeOneNumber(array, r) {
    for (i = 0; i < array.length; i++) {
        if (r === array[i]) {               // Needs triple = for same type
            array.splice(i, 1);
        }
    }
    return array
}
// Do not edit below this line
module.exports = removeFromArray;
