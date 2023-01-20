//https://www.codewars.com/kata/525f4206b73515bffb000b21/train/javascript

function add (a, b) {
    let result = ''
    let carry = 0
  a = a.split('')
  b = b.split('')
  while (a.length || b.length || carry) {
    carry += ~~a.pop() + ~~b.pop()
    result = carry % 10 + result
    carry = carry > 9
  }
  return result
}


