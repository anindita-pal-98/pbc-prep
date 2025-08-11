var isPalindrome = function(x) {
   let reverse = 0;
    let num = x;
    if(num < 0) return false;
    while (num > 0) {
        reverse = reverse*10 + num%10;
        num = Math.floor(num/10);
    }

    return reverse === x;
};

console.log(isPalindrome(1219))