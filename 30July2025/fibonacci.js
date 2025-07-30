// let start = 0;
// let next = 1;
// let arr =[];
// let input = 13;
// for (let i = 0; i = start <= input ; i++) {
//     arr.push(start);
//     let temp = start + next;
//     start = next;
//     next = temp;
// }

// console.log("arr::", arr);


//using recursion


function fib(start = 0, next = 1, input = 13, array = []) {
    let temp = start + next;
    if (start <= input) {
        array.push(start);
        start = next;
        next = temp;
        fib(start, next, input, array)
    }
    return array;
}

console.log(fib(0 ,1 ,21))