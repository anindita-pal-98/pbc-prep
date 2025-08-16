function pattern(arr) {
let max = -Infinity;
for(let i = 0; i< arr.length;i++) {
    if(arr[i]> max){
        max = arr[i];
    }
}
for(let i = 0; i < max; i++) {
arr.forEach((element) => {
  if((max-i)-element <= 0) {
    process.stdout.write(" * ");
  }  
  else {
    process.stdout.write("   ")
  }
});
console.log();
}
}
pattern([3,5,6,1,7,2,4]);