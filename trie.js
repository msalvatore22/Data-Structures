// The trie (pronounced ‘try’), or prefix tree, is a kind of
// search tree. A trie stores data in steps where each step 
// is a node in the trie. Tries are often used to store words
// for quick lookup, such as a word auto-complete feature.

// Each node in a language trie contains one letter of a word.
// You follow the branches of a trie to spell a word, 
// one letter at a time. The steps begin to branch off when
// the order of the letters diverge from the other words in
// the trie, or when a word ends. Each node contains a letter
// (data) and a boolean that indicates whether the node is 
// the last node in a word.

// Look at the image and you can form words. Always start
//  at the root node at the top and work down. The trie shown
//  here contains the word ball, bat, doll, do, dork, dorm,
//  send, sense.

/* Trie Data Structure */

let Node = function() {
  // new map of key value pairs
  // letters are the key for each node
	this.keys = new Map();
  this.end = false;
  // set the end letter of the word
	this.setEnd = function() {
		this.end = true;
  };
  // true or false if its the end of the word
	this.isEnd = function() {
		return this.end;
	};
};

let Trie = function() {

	this.root = new Node();

  // add a word tot he trie
  // recursive
  // input is the entire word
  // if you pass in a node it will use that, otherwise use the root
	this.add = function(input, node = this.root) {
    // if we are at the end of the word we passed in
    if (input.length == 0) {
			node.setEnd();
      return;
      // more letters left in the word we passed in
      // if there isnt a node with the first letter already there
		} else if (!node.keys.has(input[0])) {
      // creat a new node with the first letter
      node.keys.set(input[0], new Node());
      // pass in all the letters after the first letter
      // pass in the new node we created
			return this.add(input.substr(1), node.keys.get(input[0]));
		} else {
			return this.add(input.substr(1), node.keys.get(input[0]));
		};
  };
  
  // this is where a trie is awesome
  // check if a word is in the dictionary
  // very quick because checking one letter at a time
	this.isWord = function(word) {
    // start at the root
    let node = this.root;
    // loop that keeps running until we find the word
		while (word.length > 1) {
      // check the first character of the word
      // if no node with that first letter, word doesnt exist
			if (!node.keys.has(word[0])) {
				return false;
			} else {
        // cut off the first letter
				node = node.keys.get(word[0]);
				word = word.substr(1);
			};
		};
		return (node.keys.has(word) && node.keys.get(word).isEnd()) ? 
      true : false;
	};

	this.print = function() {
		let words = new Array();
		let search = function(node, string) {
      // if there are letters to look through
      if (node.keys.size != 0) {
				for (let letter of node.keys.keys()) {
          // pass in a node at that letter
          // add the letter to the empty string
          // recursive, will add each letter to the string
          // until it forms word
					search(node.keys.get(letter), string.concat(letter));
        };
        // we reached the end of the word
        // push the word into the array
				if (node.isEnd()) {
					words.push(string);
        };
        // if node.keys.size is 0
        // at the last letter of a branch
			} else {
        // push the word if the string is greater than 0
        // or return undefined
				string.length > 0 ? words.push(string) : undefined;
				return;
			};
    };
    // search function called for the first time
    search(this.root, new String());
    // return the words array if the length is greater than one
		return words.length > 0 ? words : null;
	};

};

myTrie = new Trie()
myTrie.add('ball'); 
myTrie.add('bat'); 
myTrie.add('doll'); 
myTrie.add('dork'); 
myTrie.add('do'); 
myTrie.add('dorm')
myTrie.add('send')
myTrie.add('sense')
console.log(myTrie.isWord('doll'))
console.log(myTrie.isWord('dor'))
console.log(myTrie.isWord('dorf'))
console.log(myTrie.print())