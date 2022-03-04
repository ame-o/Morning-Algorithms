let troll = "This website is for losers LOL!"

function disemvowel(str) {
    let arr = str.split("");
    let x = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != "a" && arr[i] != "e" && arr[i] != "i" && arr[i] != "o" && arr[i] != "u" && arr[i] != "A" && arr[i] != "E" && arr[i] != "I" && arr[i] != "O" && arr[i] != "U") { 
            x.push(arr[i])
        }
        if (arr[i] == ' ') {
            x.push(' ')
        }
    }
    let newArr = x.toString();
    console.log(newArr);
}
disemvowel(troll);