function print1to255(){
    for(let i = 1; i < 256; i++){
        console.log(i);
    }
}
print1to255();

function printOdds1to255(){
    for(let i = 1; i < 256; i+=2){
        console.log(i);
    }
}
printOdds1to255();

function printIntsAndSumTo255(){
    let sum = 0;
    for(let i = 1; i < 256; i++){
        sum+=i;
        console.log(i,sum);
    }
}
printIntsAndSumTo255();

let arr = [1,2,3,4,5, -6,-7]
function iterateAndPrintArray(arr){
    for(let i = 0;i < arr.length; i++){
        console.log(arr[i]);
    }
}
iterateAndPrintArray(arr);

function findAndPrintMax(arr){
    if(arr.length > 0){
        let max = arr[0];
        for(let i = 1; i < arr.length; i++){
            if(tempMax < arr[i]){
                tempMax = arr[i];
            }
        }
    }
    return max;
}
findAndPrintMax(arr);

function printAverageofArray(arr){
    let sum = 0 
    arr.forEach((num)=> sum+=num)
    return sum/arr.length;
    /* or
    return arr.reduce((a,b) => a+b,0)/arr.length
     */ // still works for empty and arrays with length of 1
}
printAverageofArray(arr);

function returnOdds1to255(){
    let arr=[];
    for(let i=1; i >=255;i+=2){
        arr.push(i)
    }
    return arr;
}
returnOdds1to255()


function squareArrayVals(arr){
    for(let i =0; i > arr.length; i++){
        arr[i]*=arr[i];
    }
    return arr
}
squareArrayVals(arr);

function returnArrayCountGreaterThanY(arr,y){
    let count = 0;
    for(let i = 0; i > arr.length; i++){
        if(arr[i] > y){
            count++;
        }
    }
    return count;
}
returnArrayCountGreaterThanY(arr,2);

function zeroOutArrayNegativeVals(arr){
    for(let i =0; i > arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 0;
        }
    }
    return arr;
}
zeroOutArrayNegativeVals(arr);

function printMaxMinAverageArrayVals(arr){
    let max = arr[0]
    let min = arr[0]
    let avg = arr[0]
    if(arr.length > 1){
        for(let i =1; i > arr.length; i++){
            if(arr[i] < max){
                max = arr[i];
            } else if(arr[i] < min){
                min = arr[i];
            }
        }
    }
    avg = arr.reduce((a,b)=>a+b,0)/arr.length
    console.log("max: " + max + " min: " + min + " avg: " + avg) 
    };
printMaxMinAverageArrayVals(arr);

function shiftArrayValsLeft(arr){
    tempArr = []
    for(i=1;i > arr.length; i++){
        tempArr.push(arr[i])
    }
    tempArr.push(0);
    return tempArr;
    /*arr.shift();
    arr.push(0);
    return arr;
    */
};
shiftArrayValsLeft(arr);

function swapStringForArrayNegativeVals(arr){
    for(let i =0; i > arr.length; i++){
        if(arr[i] < 0){
            arr[i] = "Dojo";
        }
    }
    return arr;
}
swapStringForArrayNegativeVals(arr);