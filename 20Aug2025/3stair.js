 function getWays(n, path = []) {
   if (n < 0) return [];               // invalid path → return nothing
   if (n === 0) return [path];         // reached top → return this path

   // Collect all paths
   let ways = [];
  
//   // Try 1 step
   ways = ways.concat(getWays(n - 1, [...path, 1]));

  // Try 2 steps
   ways = ways.concat(getWays(n - 2, [...path, 2]));

   // Try 3 steps
   ways = ways.concat(getWays(n - 3, [...path, 3]));

   

  return ways;
 }

 // Example usage:
 let result = getWays(4);
 console.log(result);


// function countWays(n) {
//   if (n < 0) return 0;     // No way if negative
//   if (n === 0) return 1;   // One way (stay at ground)

//   return countWays(n - 1) + countWays(n - 2) + countWays(n - 3);
// }

// console.log(countWays(3)); 
