function secondlarge (arr) {
    let max = 0;
    let second = 0;
    let min = Infinity;
    let secondmin = Infinity;

    for(let i = 0; i< arr.length; i++) {
        if(arr[i] > max) {
        second = max;
        max = arr[i];
        }
        else if(arr[i] > second) {
            second = arr[i];
        }
    }

    for(let i = 0; i< arr.length; i++) {
        if(arr[i] < min) {
        secondmin = min;
        min = arr[i];
        }
        else if(arr[i] < secondmin) {
            second = arr[i];
        }
    }

    return {second, secondmin};
}
let array = [2,5,1,3];
console.log(secondlarge(array));


