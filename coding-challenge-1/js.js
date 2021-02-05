document.querySelector('button').addEventListener('click', calculate)

function calculate() {
    
    let first = Number(document.querySelector('#first').value)

    let second = Number(document.querySelector('#second').value)

    let answer = document.querySelector('#answer')

    // loop practice
    
    // for (let i = first; i <= 365; i++){
    //     console.log('slap')
    // }
    

    //variable boolean test console: 
    //console.log(!!first, !!second)

    /*reason: if 2 variables are not provided we cannot calculate due to the existence of a null value.
    therefore i am going to require a true boolean value for both input values. this can also be written
    as !!first+!!second!=2 */
    if (!!first != true || !!second != true) {
        answer.innerText = 'please enter both values'
        console.log('please enter both values')
    } else {
        let product = first / second
        answer.innerText = `it is ${Math.floor(product)}`
        console.log(`it is ${Math.floor(product)}`)
    }
}