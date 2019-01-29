// elements with a higher priorty will be sent to the
// beginning of the queue

function PriorityQueue(){
  var collection = [];

  this.print = () => {
     console.log(collection);
  };

  this.enqueue = element => {
    if(this.isEmpty()){
      collection.push(element)
    } else {
      var added = false;
      for(var i=0; i<collection.length; i++){
        // if the priority of the element is less than
        // the priority of the element in the collection
        if(element[1] < collection[i][1]){
          collection.splice(i,0,element);
          added = true;
          break
        }
      }
      // add element if its priority is higher than
      // all the elements in the collection
      if(!added){
        collection.push(element)
      }
    }
  };

  this.dequeue = () => {
    var value = collection.shift();
    return value[0]
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

var pq = new PriorityQueue(); 
pq.enqueue(['Beau Carnes', 2]); 
pq.enqueue(['Quincy Larson', 3]);
pq.enqueue(['Ewa Mitulska-Wójcik', 1])
pq.enqueue(['Briana Swift', 2])
pq.print();
pq.dequeue();
console.log(pq.front());
pq.print();