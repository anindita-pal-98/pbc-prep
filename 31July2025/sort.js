function bubbleSort (arr) {
    for( let i = 1; i < arr.length ; i++) {
        for (let j = 0; j < arr.length-i ; j++) {
            if (arr[j] < arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([3,8,5,2,1]));