function arrayDiff(a, b) {
  let pool = a
  let target = b
  for (let i=0;i<pool.length;i++){//for loop to cycle thru all elements in pool
    for (let j=0; j<target.length; j++){//for loop to cycle akk element in target against each element in pool
      if (pool[i]===target[j]){//if 1 element from pool and 1 element from target have the same value
            pool.splice(i,1) //remove that 1 element from pool at it's index, i
            i--//the previous line will cause a shift in the pool array since it is now 1 element shorter. we account for this by subtracting 1 from i, which is the variable cycling our pool elements by index number 
        }
    }
  }
  return pool
}

//best practice
function bestPractice(a,b){
    return a.filter(x=>!b.includes(x))
}