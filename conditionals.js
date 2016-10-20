
function monkeyTrouble(aSmile, bSmile) {
    if ((aSmile === true && bSmile === true) || (aSmile === false && bSmile === false)) {
        console.log("We are in trouble");
        return true;
    } 
 
    else {
        console.log("We are not in trouble");
        return false;
    }
}


monkeyTrouble(true, true);
monkeyTrouble(false, false);
monkeyTrouble(true, false);
monkeyTrouble(false, true);


/*trouble (FALSE) 

(aSmile == smile && bSmile == smile
(aSmile != smile && bSmile != smile
*/


function greeting() {
    var d = new Date();
    var hours = d.getHours();
    if (hours < 10) {
        console.log("Buenos dias");
    }
    else if (hours >= 10 && hours < 18) {
        console.log("Buenas tardes");
    }
    else {
        console.log("Good evening");
    }
}
    
greeting();
