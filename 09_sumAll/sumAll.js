const sumAll = function(int1, int2) {
    total = 0;

    if(int1 < 0 || int2 < 0 || Math.floor(int1) != int1 || Math.floor(int2 != int2 || typeof int1 != "number" || typeof int2 != "number")){
        return 'ERROR';
    }

    if(int1 > int2){
        temp = int2;
        int2 = int1;
        int1 = temp;
    }

    while(int1 <= int2){
        total += int1;
        int1++;
    }

    return total;

};

// Do not edit below this line
module.exports = sumAll;
