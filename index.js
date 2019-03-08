// add solution here

function theBeatlesPlay (musicians, instruments) {
  var array = []
  for (i = musicians.length - musicians.length; i < musicians.length; i++ ) {
    array.push(musicians + " plays " + instruments)
  }
  return array
}