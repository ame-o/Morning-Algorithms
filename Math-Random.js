function d6(){
var roll = Math.random();
roll=Math.floor(roll*5) + 1;
return roll;
}
var playerRoll = d6();
//console.log("The player rolled: " + playerRoll);

var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];
function answer(){
    var result = lifesAnswers[Math.floor(Math.random()*lifesAnswers.length)]
    return result
}
//console.log(answer());

//or simpler terms,
function randomLifeAnswer(arr){
    var x = Math.floor(Math.random()*arr.length);
    return arr[x];
}
//console.log(randomLifeAnswer(lifesAnswers));

function randomHexa(){
    var characters = ["a","b", "c", "d", "e", "f", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var hexa = [0, 0, 0, 0, 0, 0];
    
    for(i=0; i<6; i++){
      var random = Math.floor(Math.random() *characters.length);
    hexa[i] = characters[random]
    }
    return hexa;
}
var hexadecimal = randomHexa();
//console.log("#" + hexadecimal);

//where was I going with this??
var abc= ["a","b","c","d","e","f"]
var num = [0,1,2,3,4,5,6,7,8,9]
function hexaWhat(){
    var random1 = Math.ceil(Math.random() * 2));
    var random2 = 
    abc[Math.ceil(Math.random()*6)] && num[Math.floor(Math.random()*10)]
    var color = []
    color.push(random);
    if(color.length == 6){
    return color;
    }
}
//console.log(hexaWhat());


var dna = ["G","C","A","T"]
function transcription(dna){
    for(i=0; i<5; i++){
        if(dna[i]=="T"){
            dna[i]="U"
        }
    var rna = Math.floor(Math.random()*dna.length);
    rna.push=[]
}
return rna;
}
console.log(transcription(dna));