/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

let s= ""
let t= "a"
var isOneEditDistance = function(s, t) {
    if(s==t){
        return false;
    }
    if(s == "" && t.length ==1){
        return true
    }
    if(t =="" && s.length ==1 ){
        return true
    }
    if(Math.abs(s.length - t.length) > 1){
        return false;
    }
    let count = 0
    let sIndex = 0
    let tIndex = 0

    while(sIndex < s.length && tIndex < t.length){
        if(s[sIndex]==t[tIndex]){
            console.log("match "+ s[sIndex])
            if(sIndex < s.length){
                sIndex++;
            }
            if(tIndex < t.length){
                tIndex++;
            }
        }
        if(s[sIndex] != t[tIndex]){
            console.log(" no match "+ s[sIndex] + " "+ t[tIndex])
            if(s.length > t.length){
                sIndex++;
            }else if(s.length < t.length){
                tIndex++;
            }else{
                sIndex++;
                tIndex++;
            }
            count++;
        }
        console.log("sIndex:"+sIndex + " tIndex:"+ tIndex)
        console.log("count: "+ count)
        if(count > 1){
            return false
        };
    };
    if(count == 1){
        return true;
    };
    
};
console.log(isOneEditDistance(s,t));