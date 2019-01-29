

function mySet(){
  var collection = [];

  // this method checks for the presence of an element
  // returns true or false
  this.has = element => {
    return (collection.indexOf(element) !== -1)
  }


}