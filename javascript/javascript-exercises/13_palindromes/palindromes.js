const palindromes = function (string) {
    clean = string.trim().toLowerCase().replace(/[^a-z0-9]/gi, '');
    reverse = clean.split('').reverse().join('');

    return clean === reverse
}
// Do not edit below this line
module.exports = palindromes;
