// A map is a data structure that stores data in 
// key / value pairs where every key is unique. 
// A map is sometimes called an associative array 
// or dictionary. It is often used for fast look-ups 
// of data. Maps allow the following things:

// 1. the addition of a pair to the collection
// 2. the removal of a pair from the collection
// 3. the modification of an existing pair
// 4. the lookup of a value associated with a 
// 5. particular key

let myMap = function() {
  this.collection = {};
  this.count = 0;

  this.size = () => {
    return this.count;
  }

  // insert a key and a value
  this.set = (key, value) => {
    this.collection[key] = value;
    this.count++;
  }

  // true if key is in collection
  this.has = key => {
    return (key in this.collection)
  }

  // if key is in collection, return the key
  // otherwise return null
  this.get = key => {
    return (key in this.collection) ? this.collection[key] : null;
  }

  this.delete = key => {
    if(key in this.collection){
      delete this.collection[key];
      this.count--;
    }
  }

  // return all the values for each key in the form 
  // of an array
  this.values = () => {
    let result = new Array();
    for(let key of Object.keys(this.collection)){
      result.push(this.collection[key])
    }
    return (result.length > 0) ? result : null;
  }

  this.clear = () => {
    this.collection = {};
    this.count = 0;
  }
}

let map = new myMap();

map.set('arms', 2);
map.set('fingers', 10);
map.set('eyes', 2);
map.set('nose', 1)

console.log(map.get('fingers'))
console.log(map.size())
console.log(map.values())

// ES6 Maps

let map2 = new Map();

let keyObj = {},
    keyFunc = function() {};

map2.set('hello', 'string value');
map2.set(keyObj, 'obj value');
map2.set(keyFunc, 'func value');
map2.set(NaN, 'NaN value')

console.log(map2.size);

console.log(map2.get('hello'));
console.log(map2.get(keyObj));
console.log(map2.get(keyFunc));
console.log(map2.get(NaN));

