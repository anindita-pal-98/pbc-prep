// let str = "aaabbcccdeffghij";
// let result = "";
// let obj = {};
// for (let i = 0; i < str.length; i++) {
//     if (obj.hasOwnProperty(str[i])) {
//         obj[str[i]] = obj[str[i]] + 1;  
//     }
//     else {
//         obj[str[i]] = 1;
//     }
// }

// for (let i in obj) {
//     if(obj[i] > 1) {
//         result = result + obj[i] + i;
//     }
//     else {
//         result = result + i;
//     }
// }
// console.log(result);



let str = "aaabb";

let count = 1;
let result = "";


for (let i = 0; i < str.length-1; i++) {
    console.log(str[i + 1])
    if (str[i] === str[i + 1]) {
        count += 1;
    } else {
        if (count > 1) {
            result += count + str[i];
        } else {
            result += str[i];
        }
        count = 1;
    }
}
 if (count > 1) {                               // to print the last element
            result += count + str[str.length - 1];
        } else {
            result += str[str.length - 1];
        }

console.log("result", result);