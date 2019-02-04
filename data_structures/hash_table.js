// A hash table is a map data structure that contains 
// key / value pairs. It uses a hash function to 
// compute an index into an array of buckets or slots, 
// from which the desired value can be found.

// The hash function usually takes a string as input 
// and it outputs an numerical value. The hash function 
// should always give the same output number for the 
// same input. When two inputs hash to the same numerical
// output, this is called a collision. The goal is to 
// have few collisions.

// So when you input a key / value pair into a hash 
// table, the key is run through the hash function and 
// turned into a number. This numerical value is then 
// used as the actual key that the value is stored by. 
// When you try to access the same key again, the hashing
// function will process the key and return the same 
// numerical result. The number will then be used to 
// look up the associated value. This provides very 
// efficient O(1) lookup time on average.

// Hash table time complexity
// ╔═══════════╦═════════╦════════════╗
// ║ Algorithm ║ Average ║ Worst Case ║
// ╠═══════════╬═════════╬════════════╣
// ║ Space     ║ O(n)    ║ O(n)       ║
// ║ Search    ║ O(1)    ║ O(n)       ║
// ║ Insert    ║ O(1)    ║ O(n)       ║
// ║ Delete    ║ O(1)    ║ O(n)       ║
// ╚═══════════╩═════════╩════════════╝

// hash function
// pass in string
// max is # of buckets in hash table to store values
var hash = (string, max) => {
  var hash = 0;
  for(var i = 0; i < string.length; i++){
    hash += string.charCodeAt(i)
  }
  return hash % max;
}

let HashTable = function(){
  let storage = [];
  const storageLimit = 10;

  this.print = () => {
    console.log(storage);
  }

  this.add = (key, value) => {
    var index = hash(key, storageLimit);
    // if there is nothing in that index, set key value
    if(storage[index] === undefined){
      storage[index] = [
        [key, value]
      ];
    } else {
      // something already in that bucket
      var inserted = false;
      for(var i = 0; i < storage[index].length; i++){
        // if the key already exists, insert it there
        if(storage[index][i][0] === key){
          storage[index][i][1] = value;
          inserted = true;
        }
      }
      if(inserted === false){
        // multiple entries into one bucket
        storage[index].push([key,value])
      }
    }
  }

  this.remove = function(key) {
    // lookup index
    var index = hash(key, storageLimit);
    // only one item in the bucket
    // and item in that bucket equals the key passed in
    if (storage[index].length === 1 && storage[index][0][0] === key) {
      delete storage[index];
    } else {
      // several items in that index
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          delete storage[index][i];
        }
      }
    }
  };

  this.lookup = function(key) {
    var index = hash(key, storageLimit);
    // item is not in the hash table
    if (storage[index] === undefined) {
      return undefined;
    } else {
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          return storage[index][i][1];
        }
      }
    }
  };

};


console.log(hash('quincy', 10))

let ht = new HashTable();
ht.add('beau', 'person');
ht.add('fido', 'dog');
ht.add('rex', 'dinosour');
ht.add('tux', 'penguin')
console.log(ht.lookup('tux'))
ht.print();
