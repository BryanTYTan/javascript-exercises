const findTheOldest = function (array) {

    let sortByAge = array.sort(function (p1, p2) {

        if (!("yearOfDeath" in p1)) {
            p1_deathyear = new Date().getFullYear();
        } else {
            p1_deathyear = p1.yearOfDeath;
        }

        if (!("yearOfDeath" in p2)) {
            p2_deathyear = new Date().getFullYear();
        } else {
            p2_deathyear = p2.yearOfDeath;
        }

        let age_1 = p1_deathyear - p1.yearOfBirth;
        let age_2 = p2_deathyear - p2.yearOfBirth;
        return age_1 - age_2;
    });

    return sortByAge[array.length - 1];

};

// Do not edit below this line
module.exports = findTheOldest;
