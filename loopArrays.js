//this creates an array with even numbers up to the number we pass in, in this case it is the number 10

function createEvenArray(highestNum) {
    var ray = [];
    for (var i = 1; i <= highestNum; i++) {
        if(i%2 == 0) {
            ray.push(i);
        }
        
    }
    return ray;
}
//we create an odds array
function addOdds(evensOnlyArray){
    var oddsArr = [];
    for (var i = 0; i < evensOnlyArray.length; i++){
        oddsArr.push(evensOnlyArray[i] + 1);
    }
    return evensOnlyArray.concat(oddsArr);
    
}


//we want to sort the numbers so it starts from 1 going up to 10
function sortThem(ourArray){
    console.log(ourArray.sort(function(a, b) {
        return a-b
    }));
}

sortThem(addOdds(createEvenArray(10)));
