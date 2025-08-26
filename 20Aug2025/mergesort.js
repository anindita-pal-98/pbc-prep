function sort(arr){
    if (arr.length <= 1) {
        return arr;
    }

    let mid = Math.floor(arr.length/2);

    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    return mergearray(sort(left), sort(right));
}

function mergearray(left, right) {
    let sortedArray= [];
    let i=0,j=0;

    while(i < left.length && j < right.length) {
        if(left[i]< right[j]) {
            sortedArray.push(left[i]);
            i++;
        }
        else {
            sortedArray.push(right[j]);
            j++;
        }
    }
    
    return sortedArray.concat(left.slice(i).concat(right.slice(j)));
}

console.log(sort([4,2,9,7,1,8]))