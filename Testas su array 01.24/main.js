// Tasks:
// 1. Write a function that will count vowels (balsė) in a given word. Vowels: a, e, i, o, u.
function countVowel(str) { 

    // find the count of vowels
    const count = str.match(/[aeiou]/gi).length;

    // return number of vowels
    return count;
}
console.log(countVowel("nose"));
console.log(countVowel("september"));
// program to count the number of vowels in a string

// defining vowels

// 2. Write a function that will return you boolean value based on if given word is palindrome or not. A word is considered to be palindrome only if it retains same if reversed, for example racecar, bannana.

function checkPalindrome(string) {

    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return false;
        }
    }
    return true;
} 
console.log(checkPalindrome("man"))
console.log(checkPalindrome("eye"))
// 3. Write a function to find letter occurences in a word. For example: letterCount('Connect', 'c') -> 2, because letter c occures two times.
function countString(str, letter) {
    let count = 0;

    // looping through the items
    for (let i = 0; i < str.length; i++) {

        // check if the character is at that position
        if (str.charAt(i) == letter) {
            count += 1;
        }
    }
    return count;
}
console.log(countString("bannana", "n"))
// 4. Write a function to compute a union of two arrays, and removes all duplicates. For example: union([1, 2, 3], [1, 10, 2, 100]) -> [1, 2, 3, 10, 100]

function getUniqueAfterMerge(arr1, arr2){

    // merge two arrays
    const arr = arr1.concat(arr2);
    const uniqueArr = [];

    // loop through array
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}

const array1 = [1, 2, 3];
const array2 = [2, 3, 5]

// calling the function
// passing array argument
getUniqueAfterMerge(array1, array2);

// --4 task 2 ex-- ///
const myArray1 = [1, 2, 3];
const myArray2 = [2, 3, 5];
//after concatenating two arrays, add the merged array to the set
const myFinalArray = Array.from(new Set(myArray1.concat(myArray2))); 
console.log(myFinalArray);


// 5. Write a function to find a pair of elements from an given array whose sum equals a specific target number. Return an array with those two elements indexes.
// For example: findNumberPairs([10, 20, 10, 40, 50, 60, 70], 50) -> [2, 3]
function twoSum(nums, target_num) {
    const map = [];
    const indexnum = [];
    
    for (let x = 0; x < nums.length; x++)
    {
    if (map[nums[x]] != null)
    {
    index = map[nums[x]];
    indexnum[0] = index;
    indexnum[1] = x;
    break;
    }
    else
    {
    map[target_num - nums[x]] = x;
    }
    }
    return indexnum;
    }
  
  console.log(twoSum([10,20,10,40,50,60,70],50));
// 6. Write a function to filter false, null, undefined, 0 and empty string values from an array. It should return a new array.
function filter_array_values(arr) {
    arr = arr.filter(isEligible);
    return arr;
  }
  
  function isEligible(value) {
    if(value !== false || value !== null || value !== 0 || value !== "") {
      return value;
    }
  }
  
console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
// For next two tasks we will be working with this data: const birds = [ "Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets" ];
// 7. Write a function to find index of the 'Eagles' item, and use that to remove the 'Eagles' item. Return the end result which should be [ "Parrots", "Falcons", "Emus", "Caracaras", "Egrets" ]
// Find the index of the "Eagles" item.

// 8. Make a new array from the above array, called eBirds, that contains only birds from the original array whose names begin with the letter "E".