const palindromes = function (text) {
    // Remove all non alphanumeric charcter and make it lower case
    text = text.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    // Compare original text with a reversed text
    return text == text.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
