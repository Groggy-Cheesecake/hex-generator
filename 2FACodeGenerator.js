const oddLooking = require('./oddLooking')

let buf = []
const limit = 4294967296 // 2^32
function genHexDecimal () {
  let number = parseInt(Math.random() * limit) //4294967296
  let newLimit = limit - oddLooking.length
  if (buf.length < newLimit) {
    while (buf.includes(number) || oddLooking.includes(number)) {
      console.log('repeating detected. generating again')
      number = parseInt(Math.random() * limit)
    }
  }
  if (buf.length === newLimit) {
    buf = []
    console.log('clearing buff')
  }
  buf.push(number)
  return number.toString(16).padStart(8, '0')
}
for (let i = 0; i < 4294967296; i++) {
  console.log(genHexDecimal())
}