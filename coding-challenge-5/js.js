let url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
let obj        //this is where the extracted api data will be stored as an array of objects
let counter = 0 // universal enumerator
document.querySelector('#run').addEventListener('click',produce)
document.querySelector('#next').addEventListener('click',upMe)
document.querySelector('#previous').addEventListener('click',downMe)

//this first function will simply update the webpage with drink, image, and instructions. it should run everytime a button on the page is pushed
function update(){
    document.querySelector('h1').innerText = obj[counter].strDrink
    document.querySelector('img').src = obj[counter].strDrinkThumb
    document.querySelector('p').innerText = obj[counter].strInstructions
}
//this code will search the api for the drink and update the page with the first item in the index
function produce(){
    let yum = document.querySelector('input').value
    fetch(url+yum)
    .then(data => data.json()) //turn into readable objects
    .then(x=>{
        console.log(x)
        obj = x.drinks
        counter = 0
        return update()
    })
    .catch(err => alert(`err ${err}`))
}
//this will update the page with the next item in the array by simply adding 1 to the index of the previous item
function upMe(){
    (counter == (obj.length-1)) ? counter = 0: counter++;
    console.log(counter)
    update()
}
//this will update the page with the previous item in the array by simply subtracting 1 from the index of the previous item
function downMe(){
    (counter==0) ? counter = (obj.length-1):counter--;
    console.log(counter)
    update()
}
// }

// document.querySelector('button').addEventListener('click', info)

// function info(){
//     let drink = document.querySelector('input').value
//     fetch(url + drink).then(data => data.json()).then(info =>{
//         document.querySelector('h1').innerText = info.drinks[0].strDrink
//         document.querySelector('img').src = info.drinks[0].strDrinkThumb
//         document.querySelector('p').innerText = info.drinks[0].strInstructions
//     })
// }
// fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
// .then(data=>data.json()) //transform data into json object
// .then(info=>console.log(info)) //show me that data
// .catch(err=>console.log(`err ${err}`)) //display err