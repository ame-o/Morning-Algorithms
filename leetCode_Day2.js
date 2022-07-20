var s = "egg"
var t = "add"

const map = new Map();
const set = new Set();

for (let i=0; i<s.length; i++) {
    let sChar = s.charAt(i);
    let tChar = t.charAt(i);
    if (map.has(sChar)) {
        if (map.get(sChar) !== tChar) {
            return false;
        }
    } else {
        if (set.has(tChar)) {
            return false;
        }
        
        map.set(sChar, tChar);
        set.add(tChar);
    } 
}
return true;