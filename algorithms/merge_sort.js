// Two major parts
// Divide the array
// Sort the arrays
// Pick the lowest value of the two split arrays
// Merge back together taking the lowest picked value

const mergeSort = (arr) => {
  // base case to end recursion
  if(arr.length < 2) return
  const middle = arr.length / 2;
  const left = arr.slice(0, middle)
  const right = arr.slice(middle, arr.length)
  
  mergeSort(left)
  mergeSort(right)
  return merge(left, right, arr)
}

const merge = (left, right, arr) => {
  const nL = left.length;
  const rL = right.length;
  let i = 0
  let j = 0
  let k = 0
  
  while(i < nL && j < rL){
    if(left[i] <= right[j]){
      arr[k] = left[i]
      i++
    } else {
      arr[k] = right[j]
      j++
    }
    k++
  }

  // leftovers in left sub array
  while(i < nL){
    arr[k] = left[i]
    i++
    k++
  }

  // leftovers in right sub array
  while(j < rL){
    arr[k] = right[j]
    j++
    k++
  }
  return arr;
}

let answer = mergeSort([2,4,1,6,8,5,3,7])
console.log(answer)