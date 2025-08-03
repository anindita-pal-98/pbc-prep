// function bubbleSort (arr) {
//     for( let i = 1; i < arr.length ; i++) {
//         for (let j = 0; j < arr.length-i ; j++) {
//             if (arr[j] < arr[j+1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// console.log(bubbleSort([3,8,5,2,1]));


function selectionSort (arr) {
    let min ;
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = i; j < arr.length - 1; j++) {
            if (arr[j] < arr[j+1]) {
                min = j;
            }
            else {
                min = j+1
            }
        }
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr;
}

console.log(selectionSort([13,46,24,52,20,9]))