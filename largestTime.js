/*
Given an array of 4 digits, return the largest 24 hour time that can be made.

The smallest 24 hour time is 00:00, and the largest is 23:59.  Starting from 00:00, a time is larger if more time has elapsed since midnight.

Return the answer as a string of length 5.  If no valid time can be made, return an empty string.

Example 1:

Input: [1,2,3,4]
Output: "23:41"
Example 2:

Input: [5,5,5,5]
Output: ""

O:  string of numbers representing the largest 24-hour time
I:  array of 4 integers
C:  return in a 24-hour format
E:

[1,3,5,7]   [9,7,5,3]   [0,5,3,2]   [0,9,4,6]   [0,9,8,6]
"17:53"         ""       "23:50"     "09:46"       ""

valid hours: 00-23
max hour: 23
valid mins: 00-59
max minutes: 59

0) (copy, sort array)
1) find a 2 or 1 for first digit
2a)  if 2, next number must be highest of 0-3
2b)  if 1, next number must be highest of 0-9
2c)  if neither 2 or 1, 1st element must be 0
2d)  if 0, 2nd element must be highest of 0-9
2d)  if no 0, return empty string
3) 3rd element should be highest of 0-5
3b) else return empty string
4) 4th element is the remaining number, but should not be higher than 5
4b) else return empty string


*/

function largestTime(array) {
  var input = array.slice();
  var time = [];

  // find a 2
  if (input.includes(2)) {
    time.push(input.splice(input.indexOf(2), 1))
  } else if (input.includes(2)) {

  }


  return time;
}