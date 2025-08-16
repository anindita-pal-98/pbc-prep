

function permutation (ptr, str) {
    if(ptr == str.length-1) return [str[ptr]];

    let list = permutation( ptr+1, str);
    //console.log("ptr",ptr)
   //console.log("list",list)
    let arr = []
     for(let i = 0; i < list.length; i++) {
        let target = list[i];
        for (let j = 0; j <= target.length ; j++) {
            let prestr = target.substring(0,j);
            let poststr = target.substring(j);
            let value = prestr + str[ptr] + poststr;
            arr.push(value);
        }
     }
//console.log("arr", arr)
    return arr;

}
console.log(permutation(0,'abcd'));