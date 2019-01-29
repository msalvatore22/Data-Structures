// Queue time complexity
// ╔═══════════╦═════════╦════════════╗
// ║ Algorithm ║ Average ║ Worst Case ║
// ╠═══════════╬═════════╬════════════╣
// ║ Space     ║ O(n)    ║ O(n)       ║
// ║ Search    ║ O(n)    ║ O(n)       ║
// ║ Insert    ║ O(1)    ║ O(1)       ║
// ║ Delete    ║ O(1)    ║ O(1)       ║
// ╚═══════════╩═════════╩════════════╝

function Queue() {
  var collection = [];

  this.print = () => {
     console.log(collection);
  };

  this.enqueue = element => {
    collection.push(element);
  };

  this.dequeue = () => {
    return collection.shift();
  };

  this.front = () => {
    return collection[0];
  };

  this.size = () => {
    return collection.length;
  };

  this.isEmpty = () => {
    return (collection.length === 0);
  };

}

var q = new Queue(); 
q.enqueue('a'); 
q.enqueue('b');
q.enqueue('c');
q.print();
q.dequeue();
console.log(q.front());
q.print();

