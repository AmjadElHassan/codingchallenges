//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
let url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date="
document.querySelector('button').addEventListener('click', birthday)
let headline = document.querySelector('h2')
let watchIt = document.querySelector('iframe')
let display = document.querySelector('img')
let description = document.querySelector('h3')
function birthday(){
    let answer = document.querySelector('input').value
    let pieces = answer.trim().split('/')
    let month = pieces[0]
    let day = pieces[1]
    let year = pieces[2]
    fetch(url+year+'-'+month+'-'+day).then(x=>x.json()).then(x=>{
        console.log(x)
        headline.innerText = x.title
        description.innerText = x.explanation
        if (x.hdurl){
            display.src = x.hdurl
        }
        if (x.media_type=="video"){
            watchIt.src = x.url
            watchIt.style.display = "block"
        } else {
            watchIt.src = ""
            watchIt.style.display = "none"
        }
    }).catch(err=>alert(`error ${err}`))
    // fetch(url).then(x=>x.json()).then(x=>console.log(x)).catch(err=>alert(`error ${err}`))
    
}
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY').then(x=>x.json()).then(x=>console.log(x)).catch(err=>alert(`error ${err}`))
