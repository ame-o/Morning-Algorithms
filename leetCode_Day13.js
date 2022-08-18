var minWindow = function(s, t) {
    //edge case
    if (t.length == 0 || s.length == 0 ) {
        return '';
    }

    //two pointers for a sliding window
    let left = 0; 
    let right = 0;

    //function to create map from string t
    const wordMap = (str) => {
        const map = {}
        for (let c of str) {
            //if character(key) from string already exists in map, add count only 
            if (map[c]) {
                map[c] += 1
            }
            //if character(key) from string not already existing, add key value pair
            else{
                map[c] = 1
            }
        }
        return map
    }

    //initializing map for t
    const tMap = wordMap(t);

    //making copy of map to be able to change values of character count
    let tMapCopy = Object.assign({}, tMap)
    //count for characters in t
    let keysCount = 0
    //default is null if t is not found in s
    let min = null

    //both pointers start at 0, cannot go past s length
    while (left < s.length && right < s.length) {
      // if s[right] is found in tMap
        if (s[right] in tMap) {
            //move the right pointer left?
            tMapCopy[s[right]] -= 1
            if (tMapCopy[s[right]] == 0) {
                //add to count
                keysCount += 1
            }
        }
      //if all char in t found, count will match or be higher
        if (keysCount >= Object.keys(tMap).length) {
            //
            while (left < right) {
                // temp variable to hold s[left]
                let key = s[left]
                //if s[left] exists and has been found by right
                if (tMapCopy[key] == 0) {
                    //exit out of while loop, with no additional changes
                    break
                } else {
                    // if duplicates of character in t is found,
                    tMapCopy[key] += 1
                }
                //move left/start over to the right to minimize window
                left += 1
            }
            //if min is empty or current window is smaller than min
            if(min == null || min[1] - min[0] > right - left) {
                //reassign min
                min = [left, right]
            }
        }
        //move right pointer
        right += 1
    }

    //if t was found in s, it will not be null
    if (min !== null){
        //min[0] is the min left, min [1] is min right, + 1 makes 2nd param inclusive ins substr
        return s.substr(min[0], min[1] - min[0] + 1)
        //built in for string, .substr(), creates new substring
    }
    //if t was not found in s, return empty string
    return ""
    };