arr= ['a','b','c','d','e']
function reverse(arr){
    for(left = 0;left<arr.length; left++) {
        var right = arr.length-1-left;
        var temp = arr[right]
        arr[right] = arr[left]
        arr[left] = temp
        if(arr[left]==arr[right]){
            console.log(arr);
            return arr;
        }
    }   
}
//reverse(arr);

var sheep = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]

function countingSheep(sheep){
    count=0
    for(i = 0;i<sheep.length; i++) {
        if(sheep[i] === true){
            count++;
        }
    }
    console.log(count); 
}
countingSheep(sheep);
