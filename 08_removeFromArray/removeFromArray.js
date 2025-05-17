const removeFromArray = function(array, ...extras) {

    filteredArray = [];

    for(i = 0; i < array.length; i++){
        if (extras.includes(array[i])){
            continue;
        }
        else{
            filteredArray.push(array[i]);
        }
    }

    return filteredArray;

    
};

// Do not edit below this line
module.exports = removeFromArray;
