function printerError(s) {
  let num = 0
  for (let i=0; i<s.length;i++){
    if (`${s[i]}`.toString().match(/[n-z]/)){
      num++
    }
  }
  return `${num}/${s.length}`
}

function bestPractice(s) {
    return s.match(/[^a-m]/g).length + "/" + s.length;
}
