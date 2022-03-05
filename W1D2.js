// #1
// var a = 25;
// a = a - 13;
// console.log(a/2);
    
// a = "hello";
// console.log(a + " hello");

// #2
// for(var i=0; i < 10; i++){
//    console.log(i);
//    i= i + 3;
// }
// console.log("outside of the loop "+ i);

//#3
function getTotal(arrayOfNumbers) {
    
    var sum = arrayOfNumbers[0];
      
    for(var i=0; i<arrayOfNumbers.length; i++) {
      sum += arrayOfNumbers[i];
      console.log("the current sum is: " + sum); 
    }
      
    console.log("the total is: " + sum);
      
  }
      
//getTotal([1, 3, 5]);

///////////////////////////////////////////////////////////////
var isSunny = true;
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";
    
if(isSunny) {
  whatToBring += "sunglasses, ";
}
if(temperature < 50) {
  whatToBring += "a coat, ";
}
if(isRaining) {
  whatToBring += "an umbrella, ";
}
whatToBring += "and a smile!";
    
//console.log(whatToBring);

for(var i=10; i>0; i--) {
    if(i != 2) {
      console.log(i);
    } else {
      console.log("ignition!");
    }
  }
      
//console.log("liftoff!");

var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];
for(var i = 0;i <numbers.length; i++) {
    if(numbers[i] > 0){
        countPositives++;
}
}   
//console.log("there are " + countPositives + " positive values");

var x = 5;
    
function setX(newValue) {
    x = newValue; 
}

console.log(x);
setX(15);
console.log(x);
/////////

var x = 5;
    
function addToX(amount) {
    return x + amount;
    console.log("hello there");
}
    
console.log(x);
var result = addToX(-10);
console.log(result);
console.log(x);
//////////////////////////////////////////////////

function isPal(arr) {
    for(var left=0; left<arr.length/2; left++) {
        //0<5/2 = 0< 2.5
        //1<2.5
        var right = arr.length-1-left;
        //5- 1 - 0 = 4
        //5-1
        if(arr[left] != arr[right]) {
            //arr[0] != 1
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
}
    
var result1 = isPal( [1, 1, 2, 2, 1] );
console.log(result1);
    
var result2 = isPal( [3, 2, 1, 1, 2, 3] );
console.log(result2);
