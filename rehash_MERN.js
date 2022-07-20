/*          __                        __         
           /\ \                      /\ \        
 _ __    __\ \ \___      __      ____\ \ \___    
/\`'__\/'__`\ \  _ `\  /'__`\   /',__\\ \  _ `\  
\ \ \//\  __/\ \ \ \ \/\ \L\.\_/\__, `\\ \ \ \ \ 
 \ \_\\ \____\\ \_\ \_\ \__/.\_\/\____/ \ \_\ \_\
  \/_/ \/____/ \/_/\/_/\/__/\/_/\/___/   \/_/\/_/

    Given to a Coding Dojo alumni by Riot Games.
    Rehash an incorrectly hashed string by combining letter count occurrences
    and alphabetizing them.
*/
//                 v
const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

function rehash1(str) {
    const frequencyTable = {}
    let rehashStr = ""
    const alphaArr = []

    for (let i = 0; i < str.length; i++) {
        if (isNaN(str[i])){
            if (!frequencyTable.hasOwnProperty(str[i])) {
                frequencyTable[str[i]] = 0
                alphaArr.push(str[i])
            }
            let numStr = ""
            let j = i+1

            for (; j < str.length && !isNaN(str[j]); j++) {
                numStr += str[j]
            }
            frequencyTable[str[i]] += Number(numStr)
            i = j - 1 
        }
    }
    alphaArr.sort()

    for (let char of alphaArr) {
        rehashStr += char + frequencyTable[char]
    }
    return rehashStr
}

rehash1(str1);
console.log(rehash1(str1))
console.log(rehash1(str1) === expected1, "<-- should be \"true\"");

function rehash2(str) {
    let map = {}
    let tempt = []
    let value = ""
    let currentKey = ""
    for(let i = 0; i <= str.length; i++) {
        if(isNaN(str[i])) {
            if(value != "") {
                map[currentKey] += parseInt(value)
                value = ""
            }
            if(i == str.length) break;
            if(!map.hasOwnProperty(str[i])) {
                map[str[i]] = 0
                // continue;
            }
            currentKey = str[i]
        } else {
            value += str[i]
        }
    }

    for (const key in map) {
        tempt.push(`${key}${map[key]}`)
    }

    tempt = tempt.sort().join('')
    console.log(tempt)
    return tempt
}
rehash2(str1)