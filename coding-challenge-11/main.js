function tickets(peopleInLine) {
    console.log(peopleInLine)
      //so what are we trying to slove here? if $-initial = 0, can a particular order of customers each with either 100,25,or 50 dollar bill, be given change if each ticket is $25?
      //okay so i'm thinking we're going to have to create a loop, and create a variable to represent the cashier's ticket, and then evaluate what it ends up being in the end
      //i should set the loop to break the moment the cashier doesn't have money left
      //so the above is the more mechanical way of doing this, is there a more straight forward intuitive way?
      //there is no overall sum of numbers that would automatically be possible, because of how uniformally each customer could pay
      //new realization that will add complexity is that we are not simply adding and subtracting values. we have certain billss with explicit value and we cannot always break them down
      //so instead of setting cashier to 0, we'll set it to an array and simply add and remove items to represent the cash machine
      //the best implementation of a code like this would be to make something that could hand all currencies. if this were a serious project, this would seem like an eventual thing that wouldneed ot happen. best to figure it out early on unless other constraints r in play
      let cashier = []
      let i
      while (peopleInLine.length != 0) {//as long as there are people in line
          let change = peopleInLine[0] - 25//how much in total we owe the person after they pay the attendant
          cashier.push(peopleInLine[0])
          cashier.sort((a,b)=>(a>b)?-1:1)
          if (change != 0) {
            console.log(`this is my change ${change}`)
              if (cashier.includes(change)) {//if there is a bill amount in the exact value as change, we will remove that from cashier
                  cashier.splice(cashier.indexOf(change), 1)
  //                 console.log('removed!')
              } else {//in the case that i have change and the change i owe does not match a particular bill i have
  //                 console.log('i dont got it')
                  let totalCashier = cashier.reduce((a, b) => a + b);
                  if (totalCashier>=change) {////if the total sum value of the money i have is more than the money i owe
                    console.log('just makin sure')  
                    for (i=0;i<cashier.length;i++){//can't use while because i need it to cycle thru each number
                          if (cashier[i]<=change){//If the particular bill the loop is on is less than or equal to the change owed. the only reason something like this could work is because i will only every owe back, 25,50, or 75 dollars. and i will only ever receive 25,50,100. i will never owe $100. 
                            change-=cashier[i]
                              cashier.splice(i,1)
                              i=0//take into account new cashier length 
                          } else {//in the case that the particular bill is worth more than the change being owed, move on to the next bill
                              continue
                          }
                      }
  
                      if (change!=0){ //if the above loop fails to account for all of what we owe, break the top while loop
                          break
                      } 
                  }else{//if i owe more change than total value in the cashier, automatically can't process
                          break
                      }
              }
          }
          peopleInLine.shift()//remove the front person in line
  //         console.log(peopleInLine)
          console.log(`this is the cashier: ${cashier}`)
      }
      console.log(`this is the people In Line left: ${peopleInLine.length}`)
      if (peopleInLine.length==0){ return "YES";} else {return "NO"}
  }

  //best practice: the best practice takes advantage of object oriented programming to tally the different bills we receive and dole out
  function Clerk(name) {
    this.name = name;
    
    this.money = {
      25 : 0,
      50 : 0,
      100: 0 
    };
    
    this.sell = function(element, index, array) {
      this.money[element]++;//this adds a taly for the element it finds in the array we provide
  
      switch (element) {
        case 25:
          return true;//esentially cease function for specific element
        case 50:
          this.money[25]--;
          break;
        case 100:
          this.money[50] ? this.money[50]-- : this.money[25] -= 2;
          this.money[25]--;
          break;
      }
      return this.money[25] >= 0;
    };
  }
  function tickets(peopleInLine){
    var vasya = new Clerk("Vasya");
    return peopleInLine.every(vasya.sell.bind(vasya)) ? "YES" : "NO";
  }
  
  //another terribly clever bit of programming uses OF, but they explicitally program all the calculations that need to be made between multiples of 25,50, and 75

  function tickets(peopleInLine){
    let [c25,c50,c100] = [0,0,0];
    for(let v of peopleInLine) {
      if(v===25) c25++;
      if(v===50) {c50++; c25--;}
      if(v===100) {c25--; c50>0?c50--:c25-=2;}
      if(c25<0||c50<0) return 'NO'
    }
    return 'YES'
  }