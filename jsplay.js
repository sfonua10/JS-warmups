//function dateNtime() {
//    var d = new Date();
//    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//    console.log("Today: " + days[d.getDay()]);
//    console.log("Time: " + d.toLocaleTimeString());
//}
//
//dateNtime();



//function firstRepeat(str) {
//    var hasDuplicates = (/([a-zA-Z]).*?\1/).test(str)
//    console.log("repeating string " + hasDuplicates);
//}
//
//
//
//firstRepeat("stevensston");



function firstRepeat(str) {
  for (var i = 0; i < str.length; i++) {
    var c = str.charAt(i); //returns the character at the specified index in a string.
    if (str.indexOf(c) == i && str.indexOf(c, i + 1) == -1) { //returns the position of a specified value in a string
      return c;
    }
  }
  return null;
}


console.log(firstRepeat("stevensson"));
//
//
//
//
//function uniqueLetter(str) {
//    for(var i = 0; I <str.length; i++) {
//        var repeat = false;
//        for(var j = i+1; j<str.length; j++) {
//    
//            if(str[i] === str[j]) {
//                repeat = true;
//            }
//        }
//        if(!repeat) {
//            console.log(str[i]);
//            break;
//        }
//    }
//}
//
//uniqueLetter("stevenson");
//















//function fixTeen(n) {
//    if(n>12 && n<15 || n>16&&n<20) {
//        n=0;
//    }
//    return n;
//}
//
//function noTeenSum(a, b, c) {
//    var sum = fixTeen(a) + fixTeen(b) + fixTeen(c);
//    console.log(sum);
//}
//
//
//
//noTeenSum(1, 2, 3); //6
//noTeenSum(13, 2, 1) //3 
//noTeenSum(2, 1, 14) //→ 3 
//noTeenSum(2, 15, 14) //→ 17








//function findLongestWord(str) {
//  var strSplit = str.split(" ");
//  var longestWord = 0;
//  console.log(strSplit.length);
//  for(var i = 0; i < strSplit.length; i++) {
//    if(strSplit[i].length > longestWord) {
//      longestWord = strSplit[i].length
//      
//    }
//  } 
//  console.log(longestWord);
//  
//}
//
//findLongestWord("The quick brown fox jumpedasdfas over the lazy dog");
//



//1-800-contacts -> 1-800-266-8228 7

//write a function that takes an array of numbers and finds the missing numbers between the highest and lowest numbers in the array
//ex [14,6,4,16,8] --> [5,7,9,10,11,12,13,15]


//Write a function that takes an integer as an argument and formats it to look like a currency amount, including a dollar sign, commas, and a decimal. E.g.:
//formatMoney(123456789)  // returns $1,234,567.89 



//count code return number of times string "code" appears except "d" can be replaced with any character and still count

//countCode("copexxcode"); -> 2

//Today is: Friday
//Current Time is: 04: 52: 50 pm

//function dayNTime() {
//    var d = new Date();
//    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//    console.log(days[d.getDay()]);
//}
//dayNTime();

//function dec_to_bho(num, type) {
//    return (num >>> 0).toString(2);
//}

//function dec_to_bho(num, type) {
//    return num.toString(16);
//}

//function dec_to_bho(num, str) {
//    if(str === "B") {
//        return num.toString(2);
//    } else if(str === "H") {
//        return num.toString(16);
//    } else {
//        return num.toString(8);
//    }
//}



//console.log(dec_to_bho(654321,'B'));  //"10011111101111110001"
//console.log(dec_to_bho(654321,'H'));  //"9fbf1" 
//console.log(dec_to_bho(654321,'O'));  //"2375761"









//function rot13(str) {
//    var newArr = [];
//    for(var i = 0; i < str.length; i++) {
//        newArr.push(str.charCodeAt(i));
//        
//    }
//    for(var j = 0; j < newArr.length; j++) {
//        if(newArr[j] > 64 || newArr[j] < 91) {
//            console.log("helo");
//            newArr[j] = newArr[j] + 13;
//            if(newArr[j] > 90) {
//                newArr[j] = newArr[j] - 26;
//            }
//            
//        }
//        newArr[j] = String.fromCharCode(newArr[j]);
//    }
//    console.log(newArr);
//}
//rot13("PBQR PNZC"); //code camp
////65-90

//The first function will take this array, and print it to the console. Make sure to add spaces in-between each word so it looks nice on the console
//The second function will do the same thing, but print the song backwards (starting with the word "pretty": "pretty so I'm myself kiss Gotta", etc.).
//The third function will print every other word to the console, i.e. "this that cold Pfeiffer", etc.




//Write a function that returns the number of times that the string "code" appears anywhere in the given string, except we'll accept any letter for the "d", so "cope" and "cooe" would also count.

//function timeConversion(min) {
//    
//    var h = Math.floor(min / 60);
//    var m = min % 60;
//    console.log(h + ":" + m);
//}
//
////timeConversion(126);
//var arr1=[2,7,19,5,2,8,4];
////var arr2=[4,7];
//
//function findMiss(array) {
//    array.sort(function(a,b) {return a-b});
//    console.log(array);
//  
//}
//
//
//findMiss(arr1);








//function camelCase(str) {
//    var newStr = '';
//    for(var i = 0; i < str.length; i++) {
//        if(str[i-1] === " ") {
//            newStr += str[i].toUpperCase();
//        }
//        else if(str[i] !== " ") {
//            newStr += str[i];
//        }
//    }
//    console.log(newStr);
//}
//
//camelCase("How are you?");

//var arr = ["LG", "MacBook", "CocaCola", 23, "Hello", "Five"];
//function shuffleDis(arr) {
//    var shuffle = arr.sort(function(a, b) {return 0.5 - Math.random()});
//    return shuffle;
//}
//
//console.log(shuffleDis(arr));


//
//var i;
//var fib = []; // Initialize array!
//
//fib[0] = 0;
//fib[1] = 1;
//for(i=2; i<=10; i++)
//{
//    // Next fibonacci number = previous + one before previous
//    // Translated to JavaScript:
//    fib[i] = fib[i-2] + fib[i-1];
//    console.log(fib[i]);
//}





//var lyrics = ["This", "hit", "that", "ice", "cold",  
//              "Michelle", "Pfeiffer", "that", "white", 
//              "gold", "This", "one", "for", "them", 
//              "hood", "girls", "Them", "good", "girls", 
//              "straight", "masterpieces", "Stylin'", 
//              "whilen'", "livin'", "it", "up", "in", 
//              "the", "city", "Got", "Chucks", "on", 
//              "with", "Saint", "Laurent", "Gotta", "kiss", 
//              "myself", "I'm", "so", "pretty"];
//
//
////function one(lyrics) {
////    console.log(lyrics.join(" "));
////}
////one(lyrics);
//
////function two(lyrics) {
////    console.log(lyrics.reverse().join(" "));
////}
////two(lyrics);
//
//function three(lyrics) {
//    var newLyrics = [];
//    for(var i = 0; i < lyrics.length; i++) {
//        if(i % 2 === 0) {
//            newLyrics.push(lyrics[i]);
//        }
//    } console.log(newLyrics.join(" "));
//}
//
//
//three(lyrics);






//function remove(str) {
//    var newStr = str.replace(/[^aeiou]/gi, "");
//    console.log(newStr);
//}
//
//remove("Hello World");



//function formatMoney(num) {
//    var numArr = num.toString().split("");
//    for(var i = numArr.length - 1; i >= 0; i--) {
//        if(i === numArr.length - 2) {
//            numArr.splice(i, 0, ".");
//        } else if(numArr[i - 1] !== undefined && numArr[i - 3] === "." || num[i + 3] === ",") {
//            numArr.splice(i, 0, ",");
//        }
//    }
//    numArr.splice(0,0,"$");
//    console.log(numArr.join(""));
//    
//}
//
//formatMoney(12342354325);









//function primeNums(num) {
//    var primes = [];
//    for(var i = 1; i <= num; i++) { //i want to go through all the numbers and check for primes
//        var isPrime = false;
//        for(var j = 2; j < i; j++) { //check to see if i is divisible by any other number other than 1 and itself. Because if it is divisible by another number we know it's NOT prime
//            if(i%j === 0) { //if the remainder of i divided by j is 0 then we know that there are more numbers that i can be divisible by other than itself and 1. 
//                isPrime = true; //if that condition is true, we'll set the boolean variable isPrime to true
//            }
//        } if(isPrime === false) {
//            primes.push(i);
//        }
//    } console.log(primes);
//}
//
//primeNums(50);





//function find(arr) {
//    var lowestN = [];
//    
//    for(var i = 0; i < arr.length; i++) {
//        lowestN.push(Math.min(arr[i]));
//    }
//    console.log(lowestN);
//    
//}
//
//var array = [14,6,4,16,8];
//find(array);









//function converter(str) {
//    var newStr = '';
//    for (var i = 0; i < str.length - 1; i++) {
//        
//        
//
//        switch (str[i]) {
//        case '1':
//            newStr += "1";
//            break;
//        case '8':
//            newStr += "8";
//            break;
//        case '0':
//            newStr += "0";
//            break;
//        case '-':
//            newStr += "-";
//            break;
//
//        case 'a':
//        case 'b':
//        case 'c':
//            newStr += "2";
//            break;
//        case 'd':
//        case 'e':
//        case 'f':
//            newStr += "3";
//            break;
//        case 'g':
//        case 'h':
//        case 'i':
//            newStr += "4";
//            break;
//        case 'j':
//        case 'k':
//        case 'l':
//            newStr += "5";
//            break;
//        case 'm':
//        case 'n':
//        case 'o':
//            newStr += "6";
//            break;
//        case 'p':
//        case 'q':
//        case 'r':
//        case 's':
//            newStr += "7";
//            break;
//        case 't':
//        case 'u':
//        case 'v':
//            newStr += "8";
//            break;
//        case 'w':
//        case 'x':
//        case 'y':
//        case 'z':
//            newStr += "9";
//            break;
//        }
//
//    }
//    console.log(newStr);
//}
//
//converter("1-800-conTacts");









//(function () {
//    var a=b=3; //
//    console.log(typeof a);
//    
//})();
//
//console.log(typeof a);
//console.log(typeof b);
//
////var a = b;
////b  = 3;
//// scope
//
//function whatever() {
//    newStr = '';
//}

//A PRIME NUMBER IS A NUMBER THAT CAN ONLY BE DIVISIBLE BY 1 AND ITSELF.  
// DIVISIBLE = capable of being divided by another number without a remainder: 24 is divisible by 4.

//primeNums(50); [1, 2, 3, 5, 7, 11, 13, etc]


//function primeNums(num) {
//    var primeNumbers = [];
//    for(var i = 1; i <= num; i++) {
//        var prime = true;
//        for(var j = 2; j < i; j++) {
//            if(i % j === 0) {
//                prime = false;
//            }
//        } if(prime === true) {
//            primeNumbers.push(i);
//        }
//    } console.log(primeNumbers);
//}
//
//primeNums(20);
//









//function primeNums(num) {
//    var primes = [];
//    for(var i = 1; i <= num; i++) { //i want to go through all the numbers and check for primes
//        var isPrime = false;
//        for(var j = 2; j < i; j++) { //check to see if i is divisible by any other number other than 1 and itself. Because if it is divisible by another number we know it's NOT prime
//            if(i%j === 0) { //if the remainder of i divided by j is 0 then we know that there are more numbers that i can be divisible by other than itself and 1. 
//                isPrime = true; //if that condition is true, we'll set the boolean variable isPrime to true
//            }
//        } if(isPrime === false) {
//            primes.push(i);
//        }
//    } console.log(primes);
//}
//
//primeNums(50);







//function frontTimes(str, num) {
//    var front = '';
//    for(var i = 0; i < num; i++) {
//        front += str.substr(0, num);
//    }
//    console.log(front);
//}
//
//
//frontTimes("Chocolate", 3); //"ChoChoCho"






//function int10(num1, num2) {
//    var first = Math.abs(num1-10);
//    var second = Math.abs(num2-10);
//    
//    
//    console.log(first);
//    console.log(second);
//    if(first < second) {
//        console.log(num1 + "is the closest to 10");
//    } else if (second < first) {
//        console.log(num2 + "is the closest to 10");
//    } else {
//        console.log("Tie " + 0);
//    }
//}
//
//
//
//int10(3, 34);

//function countCode(str) {
//    console.log(str.match(/[c][o][a-z][e]/gi).length);
//}
//
//
//
//
//countCode("cozexxcope");
//








//function antiCaps(str) {
//    var lowerCase = '';
//    for (var i = 0; i < str.length; i++) {
//        if (str[i] === str[i].toUpperCase()) {
//            lowerCase += str[i].toLowerCase();
//        } else {
//            lowerCase += str[i].toUpperCase();
//        }
//        
//        
//    }
//
//    console.log(lowerCase);
//}
//
//
//
//
//antiCaps('Hello'); // hELLO  
//antiCaps('racEcar'); // RACeCAR  
//antiCaps('bAnAnA'); // BaNaNa  

//
//function space(song) {
//    console.log(song.join(" "));
//}
//
//space(lyrics);
//
//function reverse(song) {
//    song.reverse();
//    console.log(song.join(" "));
//    
//}
//
//reverse(lyrics);

//function everyEven(array) {
//    var song = [];
//    for(var i = 0; i < array.length; i++) {
//        if(i % 2 === 0) {
//            song.push(array[i]);
//        }
//    }
//    console.log(song.join(" "));
//}
//
//everyEven(lyrics);



//fizzBuzz. multiples of 3 print fizz and multiples of 5 print buzz and both = fizzBuzz





//Count the number of "xx" in the given string. We'll say that overlapping is allowed, so "xxx" contains 2 "xx".
//
//countXX("abcxx") → 1
//countXX("xxx") → 2
//countXX("xxxx") → 3





//given an array with numbers, count and return the number of 9's in the array

//var int = [1, 2, 3, 9, 4, 3, 9, 2, 9, 10];
//
//function nine() {
//    var nines = [];
//    for(var i = 0; i < int.length; i++) {
//        if(int[i] === 9) {
//            nines.push(9);
//        }
//        
//    }
//    console.log(nines.length);
//}
//
//nine();



//function antiCaps(str) {
//    var newString = '';
//    for(var i = 0; i < str.length; i++)
//        if(str.charAt(i) === str.charAt(i).toUpperCase()) {
//            newString += str.charAt(i).toLowerCase();
//        } else {
//            newString += str.charAt(i).toUpperCase();
//        }
//    console.log(newString);
//}
//
//
//
//
//antiCaps('Hello') // hELLO  
//antiCaps('racEcar') // RACeCAR  
//antiCaps('bAnAnA') // BaNaNa









//function antiCaps(str) {
//    var caseChange = '';
//    for(var i = 0; i < str.length; i++) {
//        if(str[i] === str[i].toUpperCase()) {
//            caseChange += str[i].toLowerCase();
//        }
//        else if (str[i] === str[i].toLowerCase()) {
//            caseChange += str[i].toUpperCase();
//        }
//        
//    }
//    return caseChange;
//}
//
//console.log(antiCaps('Hello')); // hELLO  
//console.log(antiCaps('racEcar')); // RACeCAR  
//console.log(antiCaps('bAnAnA')); // BaNaNa  



//Write a function that takes a string input (which contains either spaces, underscores, or hyphens/dashes between words, but no combination of the two) and turn it into the camelCase version of that string.

//function camelCase(str) {
//    var newStr = '';
//    for(var i = 0; i < str.length; i++) {
//        if(str[i - 1] === " ") {
//            newStr += str[i].toUpperCase();
//        } else if (str[i] !== " ") {
//            newStr += str[i];
//        }
//    }
//    console.log(newStr);
//}
//
//
//camelCase("hello how are you"); //helloHowAreYou









//function camelCase(str) {
//    var newString = '';
//    for(var i = 0; i < str.length; i++) {
//        if(str[i] === str[0]) {
//            newString += str[0].toUpperCase();
//        }
//        
//        else if(str[i - 1] === ' ') {
//            newString += str[i].toUpperCase();
//            
//        } else if (str[i] !== " ") {
//            newString += str[i];
//        }
//    }
//    console.log(newString);
//    
//}
//
//camelCase("hi how are you");





//function primeNums(num) {
//    var array = [];
//    for(var i = 1; i <= num; i++) {
//        var isPrime = false;
//        for(var j = 2; j < i; j++) {
//            if(i % j === 0) {
//               isPrime = true; 
//            }
//        } if (isPrime === false) {
//            array.push(i);
//        }
//    }
//    console.log(array);
//}
//
//primeNums(20);


//write a function that takes an array of numbers and finds the missing numbers in between the highest and lowest numbers in the array



//function findMissing(num) {
//    for (var i = 0; i < num.length; i++) {
//        if (Math.min(num)) {
//            console.log(num);
//        }
//    }
//
//}




//
//var numbers = [14, 6, 4, 16, 8];
//
//console.log(Math.min(numbers));



//function getDaynTime() {
//    var d = new Date();
//    console.log(d);
//    
//}
//
//getDaynTime();





//var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];  
//var alphabet = "abcdefghijklmnopqrstuvwxyz"; 
//
//function forception() {
//    var jnames = [];
//    for(var i = 0; i < people.length; i++) {
//        jnames.push(people[i]);
//        for(var j = 0; j < alphabet.length; j++) {
//            jnames.push(alphabet[j]);
//            
//        }
//        
//    }
//    console.log(jnames);
//}
//
//forception();
//









//function frontTimes(str, n) {
//    var first3 = "";
//    for (var i = 0; i < n; i++) {
//        first3 += str.substr(0, 3);
//    }
//    return first3;
//}
//
//console.log(frontTimes("Chocolate", 2));