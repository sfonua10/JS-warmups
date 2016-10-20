//This function or algorithm finds the first non-repeating character in the string that is being passed in. 


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