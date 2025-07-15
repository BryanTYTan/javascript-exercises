const palindromes = function (text) {
    let first_letter = text[0];
    let last_letter = text.slice(-1);

    if (text == "" || text.length == 1) {
        return true;
    }
    else if (first_letter == last_letter) {
        return palindromes(text.substring(1, text.length-1));
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
