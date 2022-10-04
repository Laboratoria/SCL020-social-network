console.log('Hi there!');

function intMax(a, b, c) {
  if (a > b && a > c) {
    return a;
  } if (b > c) {
    return b;
  }
  return c;
}
// console.log(intMax(1,2,3));

/* Given an array of ints, return true if 6 appears as either the first or last element in the array. The array will be length 1 or more.

Examples
firstLast6([1, 2, 6]) → true
firstLast6([6, 1, 2, 3]) → true
firstLast6([13, 6, 1, 2, 3]) → false */

function firstLast6(nums) {
  if (nums[0] === 6 || nums[nums.length - 1] === 6) {
    return true;
  }
  return false;
}
// console.log(firstLast6((1,2,6)))

/* String-1 -- comboString
Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty (length 0).

Examples
comboString('Hello', 'hi') → hiHellohi
comboString('Hi', 'Hello') → HiHelloHi
comboString('aaa', 'b') → baaab */
function comboString(a, b) {
  if (a.length > b.length) {
    return b + a + b;
  }
  return a + b + a;
}

/* Start with 2 int arrays, a and b, each length 2. Consider the sum of the values in each array. Return the array which has the largest sum. In event of a tie, return a.
Examples
biggerTwo([1, 2], [3, 4]) → 3,4
biggerTwo([3, 4], [1, 2]) → 3,4
biggerTwo([1, 1], [1, 2]) → 1,2 */

function biggerTwo(a, b) {
  if (a[0] + a[1] >= b[0] + b[1]) {
    return a;
  }
  return b;
}

/* societyName(["Adam", "Sarah", "Malcolm"]) ➞ "AMS"
societyName(["Harry", "Newt", "Luna", "Cho"]) ➞ "CHLN"
societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]) ➞ "CJMPRR" */
function societyName(friends) {
  const result = [];
  for (let i = 0; i < friends.length; i++) {
    const names = friends[i][0];
    result.push(names);
  }
  return result.join('');
}

function societyName2(friends) {
  const result = [];
  friends.map((item) => {
    const initial = item[0];
    result.push(initial);
  });
  return result.join('');
}
// console.log(societyName2(['Adam', 'Sarah', 'Malcolm']));

function removeChar(str) {
  return str.slice(1, -1);
}
// console.log(removeChar('eloquent')); // "loquen"

function countSameEnds(str) {
    let myStr = str.toLowerCase();
    let myArr = myStr.split(" ");

  let count = 0;
  // eslint-disable-next-line no-unreachable-loop
  for (let i = 0; i < myArr.length; i++) {
    if (myArr[i].charAt(0) === myArr[i].charAt([myArr[i].length - 1])) {
      count++
      return count
    } 
    
  }
  
}  
/* 
function countSameEnds(str) {
 let myString = str.toLowerCase()
 let myArr = myString.split(" ");
    let count = 0;
 myArr.map((item) => {
    if(item[0] === item[item.length - 1]){
        count++
        
    }
   
 })
 return count;
}  */
//console.log(countSameEnds("And the crowd goes wild"));

function askForMissingDetails(list) {
    // thank you for checking out the Coding Meetup kata :)
  }
