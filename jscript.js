/*var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thursday", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];
var time = now.toLocaleTimeString();

console.log("Today is: " + nameOfToday);
console.log("Current time is: " + time);*/

/*function getDaynTime() {
    var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thursday", "Fri", "Sat"];
    var now = new Date();
    var theDay = now.getDay();
    var nameOfToday = dayNames[theDay];
    var time = now.toLocaleTimeString();
    
    console.log("Today is: " + nameOfToday);
    console.log("Current time is: " + time);
}

getDaynTime();*/

//Function 1 accepts two numbers as parameters
function getSum(num1, num2) {
    return num1 + num2;
}

console.log(getSum(5, 2));






//Function 2 returns largest number passed in 


function getLargest(num1, num2, num3) {
    var numbers = [num1, num2, num3];
    numbers.sort(function(a, b){return a-b});
    return(numbers[2]);
}

console.log(getLargest(4, 8, 10));





//Function 3
function evenOrOdd(someNum){
    if (someNum % 2 === 0) {
        console.log(someNum + " This number is even");
    } else {
        console.log(someNum + " This number is odd");
    }
}
evenOrOdd(55);








//Function 4
function estring(sentence) {
    if (sentence.length <= 20) {
        return sentence + sentence;
    } else{
        return sentence.substr(0,(sentence.length/2));
    }
}
var ok = estring("My name is Saia. I need to get married! Yeah, to a girl named...");
console.log(ok);



