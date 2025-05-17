const palindromes = function (string) {
    justLetters = '';
    badChars = [".", "!", " ", ","];
    for(let i = 0; i < string.length; i++){
        if(!badChars.includes(string[i])){
            justLetters += string[i];
        }
    }

    justLetters = justLetters.toLowerCase();

    for(let j = justLetters.length; j > 0; j--){
        if(justLetters[j - 1] != justLetters[justLetters.length - j]){
            return false;
        }
    }
    return true;

};

console.log(palindromes("race car"));

// Do not edit below this line
module.exports = palindromes;
