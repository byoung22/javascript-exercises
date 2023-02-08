const repeatString = function(n,k) {
    let a = '';
    (k < 0) ? a = 'ERROR' : a = '';
    for (let i = 0; i < k; i++) {
        a += n;
    }
    return a
};

// Do not edit below this line
module.exports = repeatString;
