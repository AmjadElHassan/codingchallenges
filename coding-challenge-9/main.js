function validBraces(braces) {
    //TODO 1.) we need to sort this mess of braces. I need to know which 1's i have, before i can begin asking if they are valid or not
    //okay, so this will not be as simple as checking for the existence of the closing bracket after checking for all opening braces. this is more complicated because, there are rules we need to follow here for a string to be valied
    //RULES: 1.) opening brace must have a closing brace (we can have multiple opening braces in any order as long as they dont break any of the other following rules)
    //2.) an opening brace MUST be followed by either its closing brace or another opening brace
    //3.) an opening brace must always be the beginning of the string input

    //ideas: okay so i can just make a very literal string of if statements after breaking apart the input into its individual braces.
    //more interestingly, I want to do a solution where i can harness javascript's ability to detect such types of syntax error when its in the javascript itself
    //haha the difficult in such a method is that it will interefe with the entire javascript file itself. if I really wanted to go this route i would have to create the function in another js file. overall its less code, but it would require 2 files, which i think is better for run time, especially if we run both scripts simultaneously on the page than evaluating if statements
    //so first thing  i have to do is to interpret the user input...i could use the include property...but the issue with that is it can't parse position related issues blargh...
    //KEY! the philosophical sort of design question to be asked here is to realize what we really want. we want to determine if a brace string is valid or not. so don't have to prove if its valid or invalid. i'm just creating rules to check if its invalid. if it is, i don't need to be able to document where the issue is, just stop the whole function and return invalid. really the trick here is to create simple functions that inherently accounts for multiple rules
    let openers = ["(", "[", "{"]
    let closers = [")", "]", "}"]
    let holder = braces.trim().split("")
    //array.filter isn't preferrable here because it does not take into account positions and multiple instances of the same value having different circumstances
    //now the tricky part. i need to make a systemic way to solve this with varying amounts of elements in an input
    if ((holder.length)%2!=0){return false} else{//if there is an odd number of units
    for (let i = 0; i < holder.length; i++) {
        if (openers.includes(holder[0])) { //if the first value isn't an opening brace, automatically false //this is working.    
            if (openers.includes(holder[i])) {//if the current digit is the index of an opening brace?
                if (openers.includes(holder[(i+1)])) {//if the next value is another opener, then null out and move on to the next i
                    continue
                } else if (closers.indexOf(holder[(i+1)]) == openers.indexOf(holder[i])) {//if a subsequent value is the valid closer of its previous value
                    holder.splice(i, 2);//this will remove the 2 matching pairs
                    i = 0 //this will reset the loop with the new spliced array
                    if (holder.length==0){
                        return true
                    }
                } else {//if holder[i+1] is a closer but does not match the previous term.
                    return false
                }
            }
        } else { //if the opening element is NOT an opening brace 
            return false
        }
    }
}
if (holder.length==2){
    if (closers.indexOf(holder[0]) == openers.indexOf(holder[1])){
        return true
    }
}
}

//best practice

function bestPractice(braces){
    while (braces.includes('()')||braces.includes('{}')||braces.includes('[]')){
        braces = braces.replace('()', '').replace('{}','').replace('[]','')//if i do NOT includes the braces =, the code will just run perpertually because it will never update the braces value
    }
    return braces.length===0//this is so clever. simply asking if there are no charactters left in the brace after all pairs have been removed. if there is we know we have an odd number
}