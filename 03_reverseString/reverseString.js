const reverseString = function(string) {
    var length = string.length;
    var stringy = ""


    while (length--) {
        stringy += string.charAt(length);
    }

    return stringy

};

// Do not edit below this line
module.exports = reverseString;
