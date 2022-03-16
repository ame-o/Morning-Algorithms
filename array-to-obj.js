const keys1 = ["abc", 3, "yo"];
const vals1 = [42, "wassup", true];
const expected1 = {
    abc: 42,
    3: "wassup",
    yo: true,
};

/**
 * Converts the given arrays of keys and values into an object.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} keys
 * @param {Array<any>} values
 * @returns {Object} The object with the given keys and values.
 */

function zipArraysIntoMap(keys, values) {
    var map = {};
    for (var i = 0; i < keys.length; i++) {
        map[keys[i]] = values[i];
    }
    console.log(map);
}

zipArraysIntoMap(keys1, vals1);

const obj1 = { name: "Zaphod", charm: "high", morals: "dicey" }

//create a func that takes in a dict
const testDict = {
    "name": "Zaphod",
    "charm": "high",
    "morals": "dicey"
}

function invertMap(map) {
    const newObj = {}
    for (const [key, val] of Object.entries(testDict)) {
        newObj[val] = key
    }
    return newObj
}
console.log(invertMap(testDict))

function invertMap2(map) {
    const newObj = {}
    for (const key in testDict) {
        newObj[testDict[key]] = key
    }
    return newObj
}
console.log(invertMap2(testDict))