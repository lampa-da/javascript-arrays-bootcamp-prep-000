var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray(array, element){
  return [element, ...array];
}
// function destructivelyAddElementToBeginningOfArray(array, y){
// array.unshift(element);
// return array;
// }
