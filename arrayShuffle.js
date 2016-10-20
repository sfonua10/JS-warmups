
//You may need Math.floor(Math.random() * (maxNum - minNum) + minNum)
//with maxNum being the highest random number you want and minNum being the lowest randon number you want





//function shuffle(array) {
//    for (var i = array.length-1; i > 0; i--) {
//        var j = Math.floor(Math.random() * (i+1));
//        var storage = array[i];
//        array[i] = array[j];
//        array[j] = storage;
//    }
//    
//    console.log(array);
//}
//
//var arr =  ["LG", "Macbook", "CocaCola", 23, "Hello", "Five"];
////["Hello", "Five", "LG,", 23, "CocaCola", "Macbook"];
//shuffle(arr);
//


function shuffle(array) {
    var shuffledArray = [];
    var count = arr.length;
    for(var i = 0; i < arr.length; i++){
        var randomNum = Math.floor(Math.random() * (array.length));
        shuffledArray.push(array[randomNum]);
    }
}






















//function shuffle(Ray) {
//    var newArr = [];
//    for (var i = 0; i < Ray.length; i++) {
//        newArr.push(Ray[Math.floor(Math.random() * (Ray.length))]);
//    }
//    console.log(newArr);
//}
//
//
//var arr =  ["LG", "Macbook", "CocaCola", 23, "Hello", "Five"];
////["Hello", "Five", "LG,", 23, "CocaCola", "Macbook"];
//shuffle(arr);