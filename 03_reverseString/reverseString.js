const reverseString = function(string) {
    let splitstring = string.split('')
    let reversesplit = splitstring.reverse()
    let joinreversestring = reversesplit.join('')
    return joinreversestring
};
// Do not edit below this line
module.exports = reverseString;
