const reverseString = function(string) {

    reversedString = '';

    for(let i = string.length; i > 0; i--){
        reversedString += string[i - 1];

    }
    return reversedString;

};

console.log(reverseString("hello"));

// Do not edit below this line
module.exports = reverseString;
