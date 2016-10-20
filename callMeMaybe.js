//purpose is to create a callback

var names = ["Anna", "Bill", "Charlay", "Dexter", "Emily", "Frank", "George", "Hal", "Isaac", "Jill"];

for (var i = 0; i < names.length; i++) {
    attemptCall(names[i], dontCallback, doCallback, sendAText);
}


function attemptCall(americanName, dontCall, call, sendText) {

    var aCount = 0;
    var lcName = americanName.toLowerCase();


    for (var i = 0; i < lcName.length; i++) {
        if (lcName[i] == "a") {
            aCount++;
        }
    }
    if (lcName.length % 2 === 0) { //if the name has an odd length of characters, invoke the dontCall callback function
        call(americanName);
    } else {
        dontCall(americanName);
    }
    if (aCount > 1) {
        sendText(americanName);
    }
}



function sendAText(name) {
    console.log("sending a text message to " + name);
}

function doCallback(name) {
    console.log("You are calling " + name);
}

function dontCallback(name) {
    console.log("Do not call " + name);
}
//loop through a name and count the number of 'a's in it. Then when done looping, check and see if the aCount is greater than one, if true, the sendText()
//

//setTimeout(attemptCall, 5000);
//console.log("Calling Jennifer")



