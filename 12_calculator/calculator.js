const add = function(num1, num2) {
	const sum = num1 + num2;
  return sum;
};

const subtract = function(num1, num2) {
  const diff = num1 - num2;
  return diff;
	
};

const sum = function(array) {
  totalNum = 0;
	for(let i = 0; i < array.length; i++){
    totalNum += array[i];
  }
  const total = totalNum;
  return total;
};

const multiply = function(array) {
  product = 1;

  if (array.length == 0){
    const num = 0;
    return num;
  }else{
    for(let i = 0; i < array.length; i++){
    product *= array[i];
    }
    const num = product;
    return num;
  }
};

const power = function(base, exponent) {
	const power = Math.pow(base, exponent);
  return power;
};

const factorial = function(num) {
  if(num == 0){
    const factorial = 1
    return factorial;
  }else{
    newFactorial = 1;
    while(num != 1){
      newFactorial *= num;
      num--
    } 
    const result = newFactorial;
    return result;
  }
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
