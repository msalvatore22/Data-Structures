// Stack time complexity
// ╔═══════════╦═════════╦════════════╗
// ║ Algorithm ║ Average ║ Worst Case ║
// ╠═══════════╬═════════╬════════════╣
// ║ Space     ║ O(n)    ║ O(n)       ║
// ║ Search    ║ O(n)    ║ O(n)       ║
// ║ Insert    ║ O(1)    ║ O(1)       ║
// ║ Delete    ║ O(1)    ║ O(1)       ║
// ╚═══════════╩═════════╩════════════╝

// First in first out
// functions: push, pop, peak, length

var letters = [];  //thats a stack

var word = 'racecar';

var rword = '';

// put the letters of the work into the stack
for(var i = 0; i < word.length; i++){
  letters.push(word[i])
}

//pop off the stack in reverse order

for(var i=0; i< word.length; i++){
  rword += letters.pop()
}

if(word === rword){
  console.log(word + " is a palindrome")
} else {
  console.log(word + " is not a palindrome")
}


