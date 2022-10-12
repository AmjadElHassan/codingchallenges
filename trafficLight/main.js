//top down no memo
//time complexity: (O^2n)

//Top Down memo
//
function knapSackHelper(values, weights, maxWeight, totalItems){

}
function main(values, weights, maxWeight){
    return knapSackHelper(values, weights, maxWeight, values.length)
}
//Bottom Up
//Time complexity O(kn)
// function knapSackHelper(values, weights, maxWeight, totalItems){
//     //take care of the situation of 0 weight or no items
//     if (totalItems === 0 || maxWeight ===0) return 0

//     //startItem comparison at the last Item of values
//     let currentItemIndex = totalItems-1
//     //if our last Item is greater than our weightconstraint, lets rerun this program at a smaller index
//     if (weights[currentItemIndex] > maxWeight){
//         return knapSackHelper(values, weights, maxWeight, totalItems-1)
//     }
//     //calculate the value with the current item
//     const withItem = values[currentItemIndex] + 
//     knapSackHelper(values, weights,maxWeight-weights[currentItemIndex],totalItems-1)
//     //calculate the value without the currentItem
//     const withoutItem = knapSackHelper(values, weights,maxWeight,totalItems-1)
//     //return whichever is larger
//     return Math.max(withItem, withoutItem)
// }   


// function main(values, weights, maxWeight){
//     return console.log(knapSackHelper(values,weights,maxWeight, values.length)) 
// }

main([60, 50, 70, 30],[5, 3, 4, 2],8)
let example = [4,5,3,2,5,2]
let answer = []

 const dragonArmy = {
    [Symbol.iterator]: () => {
        return {
            next: () => {
                let enough = Math.random()>0.90
                if (!enough) {
                    return {
                        value: Math.random(),
                        done: false
                    }
                }
                return {
                    value: Math.random(),
                    done: true
                }
            }
        }
    }
 }

 for (const dragon of dragonArmy){
    console.log(dragon) //?
 }
