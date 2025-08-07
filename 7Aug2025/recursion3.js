let arr1 = [11, 12, 13, 14, 15, 16];

function reverse(arr, newArr) {

    if (arr.length == 0) return newArr;

    newArr.push(arr[arr.length - 1]);
    arr.pop();
    return reverse(arr, newArr);
}

console.log(reverse(arr1, []));