function forEach(callback, theArray) {
  /*
  This is a little hint to get you started ;)
  
  for (... theArray.length ...) {
    ...
    callback(...)
    ...
  }
  */
  // theArray.forEach(callback(element));
  
  for(i=0; i<theArray.length; i++){
    callback(theArray[i]);
  }
}

function map(mappingFunction, theArray) {
  var newArray = [];
  for(i=0; i<theArray.length; i++){
    newArray.push(mappingFunction(theArray[i]));
  }
  return newArray;
}

function filter(predicate, theArray) {
  var newArray = [];
  var trash = [];
  for(i=0; i<theArray.length; i++){
    predicate(theArray[i])?newArray.push(theArray[i]):trash.push(theArray[i]);
  }
  return newArray;
}

function every(predicate, theArray) {
  for (i=0; i<theArray.length; i++){
    if (!predicate(theArray[i])){
      return false;
    }
  }
  return (true);
}

function some(predicate, theArray) {
  for (i=0; i<theArray.length; i++){
    if (predicate(theArray[i])){
      return true;
    }
  }
  return (false);
}

function indexOf(item, theArray) {
  for (i=0; i<theArray.length; i++){
    if (item === theArray[i]){
      return i;
    }
  }
  return -1;
}

function findIndex(predicate, theArray) {
    for (i=0; i<theArray.length; i++){
    if (predicate( theArray[i])){
      return i;
    }
  }
  return -1;
}

function first(n, theArray) {
  newArray = [];
  number = 0;
  theArray == undefined ? newArray = n[0] : number=n;
  for (i=0; i<number; i++){
    i<theArray.length? newArray.push(theArray[i]) : number=0; 
  }
  return(newArray);
}


function last(n, theArray) {
  newArray = [];
  newNewArray = [];
  number = 0;
  theArray == undefined ? newArray = n[n.length-1] : number=n;
  for (i=0; i<number; i++){
    i<theArray.length? newArray.push(theArray[theArray.length - 1 - i]) : number=0; 
  }
  if (newArray.length > 1) {
    for (i=0; i<newArray.length; i++){
      newNewArray.push(newArray[newArray.length-1-i]);
    }
    newArray = newNewArray;
  }
  return(newArray);
}

function pluck(property, arrayOfObjects) { // working on this
  var myArray = [];
  
  forEach(function(amongObjects){
    myArray.push(amongObjects.property)
  }, arrayOfObjects)
  
  return(myArray); // length of arrayOfObjects is undefined in forEach, which I use here. ???
}


console.log(pluck('id'), {id: "pet"});

function flatten(theArray) {

}

function negate1(predicate) {

}

function negate2(predicate) {

}

function compose1(fun1, fun2) {

}

function compose2(arrOfFuncs) {

}

/***** DO NOT EDIT AFTER THIS LINE *****/
module.exports = {
    forEach: forEach,
    map: map,
    filter: filter,
    every: every,
    some: some,
    indexOf: indexOf,
    findIndex: findIndex,
    first: first,
    last: last,
    pluck: pluck,
    flatten: flatten,
    negate1: negate1,
    negate2: negate2,
    compose1: compose1,
    compose2: compose2
};
