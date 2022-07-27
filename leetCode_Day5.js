/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const s = "5-2e-ff9h"
const k = 2
function licenseKeyFormatting(s, k) {
    // remove the dashes, make string, make all uppercase
    let allChars = s.split('-').join("").toUpperCase()
    
    const resultArr = []
    allChars = Array.from(allChars)

    while (allChars.length) {
        resultArr.push(allChars.splice(-k).join(""))
    
    }

    return resultArr.reverse().join("-")
    };
console.log(licenseKeyFormatting(s,k));