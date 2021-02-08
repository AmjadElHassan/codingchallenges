let list = []
let addMe = (name) => list.push(name.toLowerCase())
let whatsMyNumber = (name) => {
    let yo = name.toLowerCase()
    console.log(1+(list.indexOf(yo)))
} 

function oddsko(arr){
    return arr.filter(x=>x%2==1)
}

let remix = (num) => {
    for (let i = 0; i<=num;i++){
    if ((i*3)%2!=0){
        console.log(i)
    }
    }
}