// A linked list is one of the most basic data structures. 
// It is often compared to an array since many other 
// data structures can be implemented with either an array 
// or a linked list. They each have advantages and disadvantages.
// 
// A linked list consists of a group of nodes which
//  together represent a sequence. Each node contains 
// two things: the actual data being stored 
// (which can be basically any type of data) and
//  a pointer (or link) to the next node in the sequence. 
// There are also doubly linked lists where each node 
// has a pointer to both the next item and the previous 
// item in the list.

// The most basic operations in a linked list are 
// adding an item to the list, deleting an item from 
// the list, and searching the list for an item.

// Linked list time complexity
// ╔═══════════╦═════════╦════════════╗
// ║ Algorithm ║ Average ║ Worst Case ║
// ╠═══════════╬═════════╬════════════╣
// ║ Space     ║ O(n)    ║ O(n)       ║
// ║ Search    ║ O(n)    ║ O(n)       ║
// ║ Insert    ║ O(1)    ║ O(1)       ║
// ║ Devare    ║ O(1)    ║ O(1)       ║
// ╚═══════════╩═════════╩════════════╝

function LinkedList(){
  var length = 0;
  var head = null;

  // create a new node
  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  // get the size of the linked list
  this.size = function(){
    return length;
  };

  // get the head of the linked list
  this.head = function(){
    return head;
  }

  // add new nodes to the linked list
  this.add = function(element){
    var node = new Node(element)

    // check if theres a head yet
    if(head === null){
      head = node;
    } else {
      // vars add the node to the end of the linked list
      var currentNode = head;

      // hop from node to node on the list
      while(currentNode.next){
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  }

  // remove nodes from the list
  this.remove = function(element){
    var currentNode = head;
    var previousNode;

    // head node is the element we want to remove 
    // pointer will now look to the second node
    if(currentNode.element === element){
      head = currentNode.next;
    } else {
      // while the node we are on does not equal
      // the node we are searching for
      while(currentNode.element !== element){
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      // pointet will now skip over the currentnode
      // that we want to delete
      previousNode.next = currentNode.next;
    }

    length--;
  }

  // check if linkedList is empty
  this.isEmpty = function(){
    return length === 0;
  }
  
  // find the index of and element
  this.indexOf = function(element){
    var currentNode = head;
    var index = -1

    // look for the node equal to the element
    while(currentNode){
      index++;
      if(currentNode.element === element){
        return index;
      }
      currentNode = currentNode.next;
    }

    // if we go through and dont find anything returh -1

    return -1
  }

  // find an element at and index
  this.elementAt = function(index){
    var currentNode = head;
    var count = 0;

    // go through list until we reach the index
    while(count < index){
      count++;
      currentNode = currentNode.next;
    }

    return currentNode.element
  }

  this.addAt = function(index, element){
    var node = new Node(element);

    var currentNode = head;
    var previousNode;
    var currentIndex = 0;

    // passed in an index that is longer than the list
    if(index > length){
      return false;
    }

    if(index === 0){
      node.next = currentNode;
      head = node;
    } else {
      while(currentIndex < index){
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      node.next = currentNode;
      previousNode.next = node;
    }

    length++;
  }

  this.removeAt = function(index){
    var currentNode = head;
    var previousNode;
    var currentIndex = 0;

    if(index < 0 || index >= length){
      return null;
    }

    if(index === 0){
      head = currentNode.next;
    } else {
      while(currentIndex < index){
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next
    }

    length--;
    return currentNode.element;
  }

}

var conga = new LinkedList();
conga.add('Kitten')
conga.add('Puppy')
conga.add('Cat')
conga.add('Dog')
conga.add('Fish')
console.log(conga.size())
conga.add("Bear")
console.log(conga.removeAt(3))
console.log(conga.elementAt(3))
conga.addAt(4, 'Dolphin')
console.log(conga.elementAt(4))
console.log(conga.indexOf('Cat'))
console.log(conga.size())