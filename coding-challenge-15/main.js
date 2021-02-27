function chuckPushUps(s) {
  if (!s || typeof(s)!='string') return 'FAIL!!';
  if (!s.includes('0')&&!s.includes('1')) return 'CHUCK SMASH!!';
  r = s.split('').filter(e=>(e=='0')||(e=='1')||(e==' ')).join('').split(' ').map(e=>parseInt(e, 2)).filter(e=>!isNaN(e));
  return Math.max(...r);                     
}