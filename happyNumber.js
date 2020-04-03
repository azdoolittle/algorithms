/*
Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process:
Starting with any positive integer, replace the number by the sum of the squares of its digits,
and repeat the process until the number equals 1 (where it will stay),
or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy numbers.

Example:

Input: 19
Output: true
Explanation:
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1
*/

/*
O   true
I   any positive integer
C
E

12
1^2 + 2^2 = 5
5^2 = 25
2^2 + 5^2 = 27
2^2 + 7^2 = 51
5^2 + 1^2 = 26
2^2 + 6^2 = 40
4^2 + 0^2 = 16
1^2 + 6^2 = 37
3^2 + 7^2 = 58
5^2 + 8^2 = 89

21
2^2 + 1^2 = 5

valid numbers
[1, powers of 1, powers of 1 + 9]
*/

function happyNumber(num) {
  var isHappy = false;
  var split = num.split('');


  return isHappy;
}