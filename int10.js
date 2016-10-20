//Given 2 numbers, return whichever value is nearest to the value 10, or return 0 in the event of a tie. Note that Math.abs(n) returns the absolute value of a number. 

//function closestNum(a, b) {
//    if(a > b) {
//        return a;
//    } else if(b > a) {
//        return b;
//    } else {
//        return "it's a tie";
//    }
//}
//
//console.log(closestNum(3, 8));


function int10(num1, num2) {
    var first = Math.abs(num1-10);
    var second = Math.abs(num2-10);
    console.log(first);
    console.log(second);
    
    if (first < second) {
        console.log(num1 + " it was the furst num");
    } else if (second < first) {
        console.log(num2 + " it was the SECOND num");
    } else {
        console.log("Tie " + 0);
    }
}

int10(3, 12);














//function return2(a, b) {
//    if(a > b) {
//        return a;
//    } else if (b > a) {
//        return b;
//    } else {
//        return "it is a tie";
//    }
//}
//
//console.log(return2(10, 10));


