// Bubble Sort
// How it works:

// step-1: you compare the first item with the second. 
// If the first item is bigger than the second item. 
// you swap them so that the bigger one stays in the 
// second position.

// step-2:And then compare second with third item. 
// if second item is bigger than the third, we swap them. 
// otherwise, they stayed in their position. Hence, the 
// biggest among first three is in the third position.

// step-3:we keep doing it. until we hit the last element 
// of the array. In that way we bubble up the biggest item 
// of the array to the right most position of the array.

// step-4: Look at the inner loop in the code below.

// step-5: We repeat this process, starting from the last 
// item of the array. look at the outer loop in the code below. We do this way, so that after finishing the first inner loop, the biggest one will be in the last item of the array.

// step-6: and then we move backward inside the outer loop.

// same thing is going on....

function bubbleSort(arr){
  var len = arr.length;
  for (var i = len-1; i>=0; i--){
    for(var j = 1; j<=i; j++){
      if(arr[j-1]>arr[j]){
          [arr[j-1], arr[j]] = [arr[j], arr[j-1]]
       }
    }
  }
  return arr;
}
let answer = bubbleSort([7,5,2,4,3,9]);
console.log(answer)


const bubbleSort2 = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    let change = false;
    for (let j = 0; j < arr.length - (i + 1); j++) {
      if (arr[j] > arr[j + 1]) {
        change = true;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    if (!change) break;
  }
  return arr;
};

answer2 = bubbleSort2([8,5,1,7,2])
console.log(answer2)

function bubbleSort3(arr) {
  let sorted =  false;
  while(!sorted) {
    sorted = true
    for(var i=0; i < arr.length; i++) {
      if(arr[i] < arr[i-1]) {
        [arr[i], arr[i-1]] = [arr[i-1], arr[i]]
        sorted = false;
      }
    }
  }

  return arr;
}

let answer3 = bubbleSort3([4,3,2,1])
console.log(answer3)
