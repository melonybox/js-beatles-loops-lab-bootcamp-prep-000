// add solution here

function theBeatlesPlay (musicians, instruments) {
  var array = []
  for (let i = musicians.length - musicians.length; i < musicians.length; i++ ) {
    var counter = i
    array.push(musicians[counter] + " plays " + instruments[counter])
  }
  return array
}