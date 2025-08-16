
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

    let max = -Infinity;
    let min = Infinity;
    let maxKey = '';
    let minKey = '';

    for(let j in obj) {
        console.log(obj[j],obj[j+1])
        if(obj[j] > max) {
            max = obj[j]
            maxKey = j;

        }
        if(obj[j] < min) {
            min = obj[j]
            minKey = j;
        }
    }
    return {max, min, maxKey, minKey};
}

console.log(freq([10,5,10,15,10,5]))