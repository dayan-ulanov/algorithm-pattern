const target = -121;

const isPalindrome = (x: number) => {
  const str = x.toString();
  return str === str.split('').reverse().join('')
};

console.log(isPalindrome(target));
