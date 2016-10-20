var arr2 = [2, 4, 5, 3, 5, 3, 2, 1, 2, 100];
var arr1 = [2, 4, 7];




function twoArrays(arr1, arr2) {
    var newArr = [];
    var longArr = (arr1.length > arr2.length) ? arr1 : arr2;
    var shortArr = (arr2.length < arr1.length) ? arr2 : arr1;

    var j = 0;
    for (var i = 0; i < longArr.length; i++) {
        if(shortArr[j] === undefined) {
            j=0;
        }
        newArr.push(longArr[i]+shortArr[j]);
        j++;
    }
    console.log(newArr);
}

twoArrays(arr1, arr2);







