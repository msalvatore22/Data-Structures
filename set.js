// The set data structure stores values without any
//  particular order and with no repeated values. Besides being able to add and remove elements to a set, there are a few other important set functions that work with two sets at once.

// Union — This combines all the items from two different sets and returns this as a new set (with no duplicates).
// Intersection — Given two sets, this function returns another set that has all items that are part of both sets.
// Difference — This returns a list of items that are in one set but NOT in a different set.
// Subset — This returns a boolean value that shows if all the elements in one set are included in a different set.

function mySet(){
  var collection = [];

  // this method checks for the presence of an element
  // returns true or false
  this.has = element => {
    return (collection.indexOf(element) !== -1)
  }

  this.values = () => {
    return collection;
  }

  this.add = element => {
    // check if element is in collection
    // if not then add
    if(!this.has(element)){
      collection.push(element)
      return true
    }

    return false
  }

  this.remove = element => {
    // check to see if element in collection
    // if it is then splice at index
    if(this.has(element)){
      var index = collection.indexOf(element)
      collection.splice(index, 1)
      return true
    }

    return false
  }

  this.size = () => {
    return collection.length;
  }

  // return the union of two sets
  // add method only adds uniques
  this.union = otherSet => {
    var unionSet = new mySet();
    var firstSet = this.values();
    var secondSet = otherSet.values();

    firstSet.forEach(e => {
      unionSet.add(e)
    })
    secondSet.forEach(e => {
      unionSet.add(e)
    })

    return unionSet;
  }
  // return the intersection of two sets as a new set
  // items that are in two sets
  this.intersection = otherSet => {
    var intersectionSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach(e => {
      if(otherSet.has(e)){
        intersectionSet.add(e)
      }
    })
    return intersectionSet;
  }

  // returns the difference of two sets as new set
  // items that are in one but not the other
  this.difference = otherSet => {
    var differenceSet = new mySet();
    var firstSet =  this.values()
    firstSet.forEach(e => {
      if(!otherSet.has(e)){
        differenceSet.add(e)
      }
    })

    return differenceSet;
  }
  // test if the set is a subset of a different set
  // if the first set is contained in the second set
  this.subset = otherSet => {
    var firstSet = this.values();
    // does every element in the first set pass the test
    return firstSet.every(value => {
      return otherSet.has(value)
    })
  }
}

var setA = new mySet();  
var setB = new mySet();  
setA.add("a");  
setB.add("b");  
setB.add("c");  
setB.add("a");  
setB.add("d");  
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());

// ES6 tests
var setC = new Set();  
var setD = new Set();  
setC.add("a");  
setD.add("b");  
setD.add("c");  
setD.add("a");  
setD.add("d");  
console.log(setD.values())
setD.delete("a");
console.log(setD.has("a"));
console.log(setD.add("d"));