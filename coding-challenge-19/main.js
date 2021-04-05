function mergeArrays(a, b) {
  //parameters: we will be given 2 different arrays, one completely of digits, the other completely of characters
  //Return: return an array composed of sequentially alternating values between the 2 arrays
  //Exmaple: mergeArrays([1,2,3],[a,b,c])=> [1,a,2,b,3,c]
  //i'm going to first try creating an empty array, and then using a for-loop to map each value into the new arry
  //first thing I need to consider is different array lengths. I will use math.max() method to determine the extent of the for-loop
  let answer = []
  let range = Math.max(a.length,b.length)
  for (let i=0; i<range; i++){
    if (a[i]){//if a of index i exists...
      answer.push(a[i])//push the value to answer array
    }
    if (b[i]){//if b of index i exists...
      answer.push(b[i])//push the value to the answer array
    }
  }
  return answer
}
  //we can make this code a lot shorter, but I believe this has incredible readablilty
  //I think a great way to improve upon this code would be to create a function, to dump the remaining values of an array,
  //the moment that a shorter array has been exhauseted
