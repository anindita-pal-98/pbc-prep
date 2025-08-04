let arr = [14,9,15,12,6,8,13];

for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j > 0; j--) {
        if(arr[j] < arr[j-1]) {
            let temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
        }
    }
}

console.log("arr :: ", arr)