const findTheOldest = function(people) {
    const date = new Date();
    const year = date.getFullYear();

    const sorted = people.sort(function(a, b) {
        // Uses current year if not dead
        (a.yearOfDeath === undefined) ? a.yearOfDeath = year : a.yearOfDeath = a.yearOfDeath;
        (b.yearOfDeath === undefined) ? b.yearOfDeath = year : b.yearOfDeath = b.yearOfDeath;
        
        if ((a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth)){
            return 1;
        } else {
            return -1;
        }
    });
    return sorted[sorted.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
