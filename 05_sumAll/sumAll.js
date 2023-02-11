const sumAll = function(first, last) {
    let sum = 0;
    if(first < last && typeof(first) == typeof(last) && first > 0 && last > 0){
        for (i = first; i < last + 1; i++) {
            sum += i;
        }
    } else if (last < first && typeof(first) == typeof(last) && first > 0 && last > 0) {
        for (i = last; i < first + 1; i++) {
            sum += i;
        }
    } else {
        return 'ERROR'
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
