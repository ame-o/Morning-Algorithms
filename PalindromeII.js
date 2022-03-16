/* 
  String: Is Palindrome
  Create a function that returns a boolean whether the string is a strict palindrome. 
    - palindrome = string that is same forwards and backwards
  
  Do not ignore spaces, punctuation and capitalization
 */

  const str1 = "a x a";
  const expected1 = true;
    
  const str2 = "racecar";
  const expected2 = true;
    
  const str3 = "Dud";
  const expected3 = false;
   
  const str4 = "oho!";
  const expected4 = false;
    
  /**
   * Determines if the given str is a palindrome (same forwards and backwards).
   * - Time: O(?).
   * - Space: O(?).
   * @param {string} str
   * @returns {boolean} Whether the given str is a palindrome or not.
  */
  function isPalindrome(str) {
    //   loop index from left
      for(var left = 0; left < str.length/2; left++){
        //   right index
        var right = str.length - 1 - left
        if(str[left] != str[right]){
            console.log("Not a palindrome")
            return false
        }
      }
      console.log("Is a palindrome")
      return true
  }

  
  
  // ----------------------------------------------------------------------------
  
  
  
  /* 
    Longest Palindrome
    For this challenge, we will look not only at the entire string provided, but also at the substrings within it. Return the longest palindromic substring. 
    Strings longer or shorter than complete words are OK.
    All the substrings of "abc" are:
    a, ab, abc, b, bc, c
  */
  
  const { isPalindrome } = require("./isPalindrome");
  const str5 = "what up, daddy-o?";
  const expected5 = "dad";
  
  const str6 = "uh, not much";
  const expected6 = "u";
  
  const str7 = "Yikes! my favorite racecar erupted!";
  const expected7 = "e racecar e";
  
  const str8 = "a1001x20002y5677765z";
  const expected8 = "5677765";
  
  const str9 = "a1001x20002y567765z";
  const expected9 = "567765";
  
  /**
   * Finds the longest palindromic substring in the given string.
   * - Time: O(?).
   * - Space: O(?).
   * @param {string} str
   * @returns {string} The longest palindromic substring from the given string.
   */
  //   compare str[x] with left and right 
//      if matches counter ++
// var topPalin= ""
// var counter =0
// for x loop  starting left
//         for i(len - 1) starting right
//          if (str[x] === str[i])
//          counter ++ //adds counter if both match
// 

var right = str.length - 1 - left 

//answer:
/**
 * - Time: O(n^2 * 2k). The n^2 part comes from the j loop.
 *    2k is from the iterations of getPalindrome & slice.
 * - Space: O(n) linear.
 */
 function longestPalindromicSubstring(str) {
  let longestPalindrome = str[0];

  // generate every sub string 1 at a time and check
  // if it is a palindrome and if it is longer than
  // the current longest
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      let subStr = str.slice(i, j);

      if (subStr.length > longestPalindrome.length && isPalindrome(subStr)) {
        longestPalindrome = subStr;
      }
    }
  }
  return longestPalindrome;
}