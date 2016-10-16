

function camelCase(string) {
    var newSent = '';
    for(var i = 0; i < string.length; i++) {
        if(/[^a-z]/gi.test(string[i-1])) {
            newSent += string[i].toUpperCase()
        } else if(/[a-z]/gi.test(string[i])) {
            newSent += string[i];
        }
    }
    console.log(newSent);
}

camelCase("Are you3crazy=not32me");