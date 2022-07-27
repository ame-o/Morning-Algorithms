/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
let num1= "222"
let num2= "555"
var multiply = function(num1, num2) {
    let temp1 = 0
    let zero = []
    let output = String(0).padStart(num1.length+1, '0')
    console.log(output)
    let counter = 2
    //222
    //555 x
    //----------
    //2 * 5 if (temp > 10)
    //output[output.length-counter] +=temp
    //0000000010

    //converts from string to array to string
    console.log("num1: "+num1.split().join())
    console.log("num1: "+num2.split().join())

    //long multiplication and digit carry over
    for(var i = num2.length-1; i >= 0; i--) {
        temp1 = parseInt(num1[i]) * parseInt(num2[i])
        
        //carry over check
        if(temp1 > 9){
            let carryOver =  temp1/10  
            temp1.toString
            carryOver.toString
            console.log("temp1 in if: " + temp1)
            zero = output.split("")
            zero[output.length-counter] = carryOver
            console.log(zero)
            carryOver = 0
        }
        counter ++
    }
    return false
};
console.log(multiply(num1,num2))