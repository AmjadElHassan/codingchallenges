function twoSum(nums, target) {
    //i need a way to store the index of each x. indexOf cannot be used because it will iterally just repeat an index if it is of the same value of a different element in the array
    let index = []
    for (let i = 0; i<nums.length;i++){
        index.push(i)
    }
    
    let answer = []

    //now i have an index of all the individual nums to test

    for (let i = 0; i<index.length; i++){
        let current = nums[index[i]]
        for (let j = 0; j<nums.length;j++){
            if (index[i]===j){//if thet have the same index
                null
            } else if(current+nums[j]==target){
                answer.push(i)
            }
        }
    }
    return answer
}