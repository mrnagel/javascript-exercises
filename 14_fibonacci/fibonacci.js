const fibonacci = function(number) {
    num = parseInt(number);
    if(num < 0){
        return 'OOPS';
    }
    if(num == 0){
        return 0;
    }
    else if(num == 1){
        return 1;
    }
    else if(num == 2){
        return 1;
    }

    dp = [];
    dp[0] = 1;
    dp[1] = 1;

    newNum = 0;

    for(let i = 2; i < num; i++){
        newNum = dp[i - 1] + dp[i - 2];
        dp[i] = newNum;
    }
    return newNum;

    
};
console.log(fibonacci("2"));

// Do not edit below this line
module.exports = fibonacci;
