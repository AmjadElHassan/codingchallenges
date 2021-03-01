function chuckPushUps(s) {
  if (!s || typeof(s)!='string') return 'FAIL!!';//if there is no parameter or if the type of parameter is not a string
  if (!s.includes('0')&&!s.includes('1')) return 'CHUCK SMASH!!';//if the string does not contain the binary characters, 0 and 1
  r = s.split('').filter(e=>(e=='0')||(e=='1')||(e==' ')).join('').split(' ').map(e=>parseInt(e, 2)).filter(e=>!isNaN(e));//this reads: r is equal to the filtered binary chararcteres. those characters are parsed with parseInt() which returns an integer with the base of the following number. perfect for binary. then it is filtered for not a number responses
  return Math.max(...r); //using Math.max(), always returns the highest result                     
}


