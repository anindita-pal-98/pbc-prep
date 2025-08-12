
function freq(arr) {
    let count = 1;
    let obj = {};
    for(let i = 0; i <arr.length; i++) {
    if(obj[arr[i]]) {
    obj[arr[i]] = obj[arr[i]] +1;
    }
    else {
    obj[arr[i]] = count;
    }
    }
    return obj;
}

console.log(freq([10,5,10,15,10,5]))