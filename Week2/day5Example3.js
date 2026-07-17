/* Example 3:
Write a function to check if two strings are anagrams.
Input: isAnagram('listen', 'silent')
Output: true
Input: isAnagram('hello', 'world')
Output: false
Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters. */

function isAnagram(str1, str2) {
    let word1 = str1.toLowerCase().split("").sort().join("");
    let word2 = str2.toLowerCase().split("").sort().join("");

    return word1 === word2;
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false


//TRY OUT

function isAnagram(str1, str2) {
    // Step 1: Remove spaces and convert to lowercase
    str1 = str1.replace(/\s/g, "").toLowerCase();
    str2 = str2.replace(/\s/g, "").toLowerCase();

    // Step 2: Sort the characters
    let word1 = str1.split("").sort().join("");
    let word2 = str2.split("").sort().join("");

    // Step 3 & 4: Compare and return the result
    return word1 === word2;
}

console.log(isAnagram("listen", "silent"));      // true
console.log(isAnagram("hello", "world"));        // false
  