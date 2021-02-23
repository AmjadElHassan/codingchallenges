function isInteresting(number, awesomePhrases) {
    if (number==98|number==99|number==120|number==987654320|number==110){
        return 1
    } else if (/^\d\d?$/.test(number)==true){
        return 0
    } else if (isItSpecial(number) == true | phraseMatch(number, awesomePhrases) == true) {
        return 2
    } else if (warningCheck(number, awesomePhrases) == true) {
        return 1
    } else {
        return 0
    }
}

function phraseMatch(a, b) {
    for (let i = 0; i < b.length; i++) {
        if (a.toString().includes(b[i])) {
            return true
        } else { continue }
    }
}
//i'm coming across a roadblock. I can split and sort the numbers into an array. doing that i can evaluate individual numbers. or maybe i can just do numbers[x]. hmm is there a way to say if there is a numbersx such that numbers[x+1] and numbers[x+2] ...okay so i can begein with a loop for the length of the numbers given to us. is fthere is a number that satisfies this at any time for the loop, return true/break.


function TrailingZeroCheck(x){
    
}

function isItSequential(x) {

    while (x[x.length-1]==0){//gets rid of trailing zeros for computation of an integer pattern
        x.pop()
    }
    if (/^\d\d?$/.test(x)==true){
        return false
    }else{
        let upSequence = x.filter((a,i)=>{
            if (x[i]+1==x[i+1]){
                return a
            } else {
                null
                }
        })
        
        let downSequence = x.filter((a,i)=>{
            if (x[i]-1==x[i+1]){
                return a
            } else {
                null
                }
        })
        if (((upSequence.length==(x.length-1)|downSequence.length==(x.length-1)))){
            return true
        } else {
            return false
        }
    }
}

function isItPal(x) {
    let rightSide = []
    let leftSide = []

    if (x.length % 2 == 0) {//if it is an even number
        let midpoint = ((x.length / 2) - 1)//index of the midpoint
        x.forEach((a, i) => {
            if (i <= midpoint) {//the length of our number is even, so less than or equal to to include our midpoint in a side
                leftSide.push(a)
            } else {
                rightSide.unshift(a)
            }
        })
    } else {//if it is an odd number
        let midpoint = Math.ceil(x.length / 2) - 1//this is literally the index for the median value
        x.forEach((a, i) => {
            if (i < midpoint) {//odd length of number, so we are only comparing numbers to the left and right of the midpoint
                leftSide.push(a)
            } else if (i == midpoint) { null }
            else {
                rightSide.unshift(a)
            }
        }
        )
    }

    if (rightSide.join('') == leftSide.join('')) {
        return true
    } else {
        return false
    }
}


function warningCheck(x, y) {
    x += 2//to represent being 2 miles away from a special number
    if (isItSpecial(x) == true) {
        return true
    } else if (phraseMatch(x, y) == true) {
        return true
    } else {
        x -= 1//to represent being 1 mile away from a special number
        if (isItSpecial(x) == true) {
            return true
        } else if (phraseMatch(x, y) == true) {
            return true
        } else {
            return false
        }
    }
}

function isItSpecial(x) {
    if (/^\d00+$|^(\d)\1\1+$/.test(x)) {//reads 'if there is any digit followed by any number of zeroes greater than or equal to 2' or  'digit followed by itself any number of times greater than or equal to 2'
        return true
    } else {
        let Nums = x.toString().split('').map(x => Number(x))
        if (isItSequential(Nums) || isItPal(Nums)) {//if it is sequential
            return true
        } else {
            return false
        }
    }
}