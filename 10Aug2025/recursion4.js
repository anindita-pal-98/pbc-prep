// function palindrome( i , str) {    
//     if (str.length/2 <= i) return true;    

//     if (str[i].tolower() === str[str.length -i-1].tolower()) {
//     return palindrome (i+1, str)
//     } 
//     else{
//     return false;
//     }
// }


// console.log(palindrome(0,''))


function palindrome( start, end , str) {
     if (start >= end) return true;
     let startToLower = str[start];
     let endToLower = str[end];
     if (str[start] >= 'A' && str[start] <= 'Z')   startToLower = str[start].toLowerCase();
    if (str[end] >= 'A' && str[end] <= 'Z')  endToLower = str[end].toLowerCase();
    
     if ((startToLower < 'a' || startToLower >'z') && !(startToLower >= '0' && startToLower <= '9' )) {
        start = start+1;
        return palindrome( start, end , str);
     } 
     if ((endToLower < 'a' || endToLower > 'z') && !(endToLower >= '0' && endToLower <= '9' )) {
        end = end -1;
        return palindrome( start, end , str);
     }
     if (startToLower != endToLower) return false;
     return palindrome(start +1, end - 1, str);
};
let s = 'adrito is not nice'
console.log(palindrome(0, s.length -1, s));