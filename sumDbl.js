// sumDouble
// Given two int values, return their sum. 
// Unless the two values are the same, then return double their sum. 


function two(num1, num2) {
    var sum = num1 + num2;
    if(num1 === num2) {
        sum = num1 + num1 + num2 + num2;
        return sum;
    } else {
        return sum;
    }
}

console.log(two(10, 11));