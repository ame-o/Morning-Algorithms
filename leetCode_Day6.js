var totalFruit = function (tree) {
    if (tree.length <= 2) return tree.length;
    let window = []; 
    let set = new Set();
    let maxLen = 0;
    for (let i = 0; i < tree.length; i++) {
        console.log("set.add: "+ tree[i])
        set.add(tree[i]); 
        console.log("set "+ JSON.stringify(set))
        window.push(tree[i])
        console.log("window: "+ window)
        while (set.size > 2) {
            let tmp = window.shift(); //slide window, remove first one
            set = new Set(window);
        }
        maxLen = Math.max(maxLen, window.length);
    }
    return maxLen;
};
// console.log(totalFruit([1,2,1,2,3]))

/**
 * @param {string} s
 * @return {number}
 */
let s = "anviaj"
 var lengthOfLongestSubstring = function(s) {
    let newSet = new Set();
    let window = []
    let maxSub = 0
    for(i=0;i<s.length;i++){
        if(newSet.has(s[i])){
            console.log(newSet.delete(window[0]));
            newSet = new Set(window)
            console.log("window after if: " + JSON.stringify(set))
        };
        window.shift();
        newSet.add(s[i]);
        if(!window.includes(s[i])){
            window.push(s[i]);
        }
        maxSub = Math.max(maxSub,newSet.size);
    };
    return maxSub;
};

console.log(lengthOfLongestSubstring(s));