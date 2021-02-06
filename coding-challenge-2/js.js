document.querySelector('h1').addEventListener('click', calculate)

function calculate() {
    
    let x = [34,23,1,2,3,4,131,534,53,634,6234,26,6,3462,46,26]


    document.querySelector('h2').innerText = `the answer is ${(x[0]+x[(x.length-1)])}`
}
