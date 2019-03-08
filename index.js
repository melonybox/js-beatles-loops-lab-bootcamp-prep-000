// add solution here

function theBeatlesPlay (musicians, instruments) {
  var array = []
  for (let i = 0; i < musicians.length; i++ ) {
    var counter = i
    array.push(musicians[counter] + " plays " + instruments[counter])
  }
  return array
}

function johnLennonFacts (array) {
  var i = 0
  while (i < array.length) {
    var counter = i
    array[i] = array[i] + "!!!"
    i++
  }
  return array
}

function iLoveTheBeatles () {
  var array = []
  var i = 0
  do {
    array.push("I love the Beatles!")
    i++
  }
  while ( i < 15 )
  return array
}