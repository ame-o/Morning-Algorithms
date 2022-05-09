/* 
  Efficiently combine two already sorted multiset arrays 
  into an array containing the sorted set intersection of the two.
  Output: only the shared values between the two arrays (deduped).
  Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/
// set

const numsA1 = [0, 1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7]; // [2, 2, 7]
const expected1 = [2, 7];
 
const numsA2 = [0, 1, 2, 2, 2, 7];
const numsB2 = [2, 2];  
const expected2 = [2];

const numsA3 = [0, 1, 2, 2, 2, 7];
const numsB3 = [10];
const expected3 = [];

/**
 * Efficiently combine the two sorted arrays into a new array that is the a
 * sorted set intersection.
 * Venn Diagram Visualization (bottom):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */
function orderedIntersection(sortedA, sortedB) {
  //create new array to store duplicate values
  let newArr = []
  //create runners (fast bois)
  let i = 0
  let j = 0
  //while runners are not over their arrays lengths
  while( i < sortedA.length && j < sortedB.length){
    //if arr1 at index i = arr2 at index j push into our new array to store the duplicate number
    if(sortedA[i] == sortedB[j]){
      newArr.push(sortedA[i])
      i++
      j++
    }
    //if index i is lower than index j then increment i and vice versa
    if(sortedA[i] < sortedB[j]) {
      i++
    } else {
      j++
    }
  }
  return newArr //we return the new arr we made
}

console.log(orderedIntersection(numsA1, numsB1))
console.log(orderedIntersection(numsA2, numsB2))
console.log(orderedIntersection(numsA3, numsB3))