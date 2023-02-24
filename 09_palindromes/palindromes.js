const palindromes = function (word) {
    // Make caps for case sensitivity
    word = word.toUpperCase()
    // Make the word into an array of letters
    let array = [];
    for (let i = 0; i < word.length; i++) {
        array[i] = word.slice(i, i + 1);
    }
    // Make the array filter out non letters
    let newArray = array.filter((letter) => (letter == 'A' || letter == 'B' || letter == 'C' || letter == 'D' || letter == 'E' || letter == 'F' || 
    letter == 'G' || letter == 'H' || letter == 'I' || letter == 'J' || letter == 'K' || letter == 'L' || letter == 'M' || 
    letter == 'N' || letter == 'O' || letter == 'P' || letter == 'Q' || letter == 'R' || letter == 'S' || letter == 'T' || 
    letter == 'U' || letter == 'V' || letter == 'W' || letter == 'X' || letter == 'Y' || letter == 'Z'));
    // Reverse and check
    backwardsArray = [...newArray].reverse();
    newArray = newArray.join('');
    backwardsArray = backwardsArray.join('')
    console.log (backwardsArray);
    console.log (newArray);
    if (newArray === backwardsArray) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
