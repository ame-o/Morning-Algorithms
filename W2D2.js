//ITERATE THROUGH THE ARRAY
var arr = [2,4,6,8,10];
function arrIteration(arr){
    for(var i=0; i< arr.length; i++){
        console.log(arr[i])
    }
}
arrIteration(arr);


// Values Greater Than Second
var arr = [2,4,6,8,10];
function greaterThan2nd(arr){
    var count = 0               // we use zero because we don't know how many values in  array are greater than the value at index 1
        for(var i=0; i< arr.length; i++){
        if(arr[i] > arr[1]){
            count++    
        }
    }
    return count;
}
console.log(greaterThan2nd(arr));

// BONUS

var arr = [2,4,6,8,10];
function greaterThan2nd(arr){// sends the array to greatherThan
    var count = 0       
    if(largeEnough(arr)){
        return null      //sends the array to the largeEnough to return "true or false"
    }
    for(var i=0; i< arr.length; i++){
        if(arr[i] > arr[1]){
            count++    
        }
    }
    return count;
}

function largeEnough(arr){ // function is asking if array length is less than 1.
    if(arr.length <= 1){
        return true
    }
    else{
        return false
    }   
}
function largeEnough()

