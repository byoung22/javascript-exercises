const reverseString = function(s) {
    let split = s.split('');
    split = split.reverse('');
    split = split.join('')
    return split;
};

// Do not edit below this line
module.exports = reverseString;
