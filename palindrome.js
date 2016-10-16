

function isPalin(string) {
    var alphabet = 'qweruipoadasfj';
    var stringStripped = '';
    for(var i = 0; i < string.length; i++) {
        for(var j = 0; j < alphabet.length; j++) {
            if(string[i] === alphabet[j]) {
                stringStripped += string[i];
            }
        }
    }
    if (stringStripped === stringStripped.split("").reverse().join("")) {
        console.log("is a palindrome");
    } else {
        console.log(" False");
    }
}

isPalin("racecar!#4");
isPalin("hello");

//strip out punc, cap, spaces

