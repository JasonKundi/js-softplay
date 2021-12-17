// do not change these lines

function reset () {
  adults = 0
  children = 0
}

let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
const softPlayCenter = {
  children: 0,
  adults: 0
}

function enter(numAdults, numChildren) {
if (numChildren > numAdults ) {
return false 
}
else {
  softPlayCenter.children += numChildren
  softPlayCenter.adults += numAdults
  return true
}
}



function leave(numAdults, numChildren) {
  if (numChildren > 0 && numAdults < 0) { //children leaving must be <= adult leaving
    return false
  } else if 
    (numAdults > softPlayCenter.children) { // adults leaving must be <= the children present at center
    return false
  } else if 
    (numAdults > softPlayCenter.children - softPlayCenter.adults) {
      return false
    }
  else if (numchildren > softPlayCenter.children || numAdults > softPlayCenter.adults){
    return false
  }
  softPlayCenter.children -= numChildren
  softPlayCenter.adults -= numAdults
  return true
  
}

function occupancy() {
  return softPlayCenter.children, softPlayCenter.adults
  
}

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  reset: reset
}
