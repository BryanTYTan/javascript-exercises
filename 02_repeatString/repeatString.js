const repeatString = function (string, num) {
    stringy = ""

    if (parseInt(num) < 0) {
        stringy = "ERROR"
    } else {
        for (let i = 0; i < num; i++) {
            stringy += string;
        }
    }

    return stringy
};

// Do not edit below this line
module.exports = repeatString;
