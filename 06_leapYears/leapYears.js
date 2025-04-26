const leapYears = function(year) {
    answer = false;
    if (year % 4 === 0 ) {
        if (year % 100 === 0 ) {
            if (year % 400 === 0) {
                answer = true;
            }
        } else {
            answer = true;
        }
    }


    return answer
};

// Do not edit below this line
module.exports = leapYears;
