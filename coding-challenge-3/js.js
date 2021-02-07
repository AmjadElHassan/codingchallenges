document.querySelector('#run').addEventListener('click', 
Calculate = () =>{
let fahr = document.querySelector('#fahr')
let kelvin = document.querySelector('#kelvin')
let celsius = document.querySelector('#celsius')
let results = document.querySelector('#results')

let check = () => (!!fahr.value+!!celsius.value+!!kelvin.value != 1) ?
results.innerText = 'please enter only 1 value':
workit();

let workit = () =>{
    if (!!fahr.value==1){
        kelvin.value = ((Number(fahr.value)-32)*(5/9)+273).toFixed(2)
        celsius.value = ((Number(fahr.value)-32)*(5/9)).toFixed(2)
        results.innerText = ''
    } else if (!!kelvin.value==1){
        fahr.value = ((9/5)*(Number(kelvin.value)-273)+32).toFixed(2)
        celsius.value = (Number(kelvin.value)-273).toFixed(2)
        results.innerText = ''
    } else {
        fahr.value = ((Number(celsius.value)*(9/5))+32).toFixed(2)
        kelvin.value = (Number(celsius.value) + 273).toFixed(2)
        results.innerText = ''

    }
}

check()

}
)