// implement a STACK data structure in Javascript. First implement with built in array methods. Second, implement with custom mySet constructor.

// STACKS are described as a FIRST IN LAST OUT data strucutre. A good analogy/example of a stack is a pile(stack) of books. Imagine you are holding 3 books in your arms.
// Now place the 1st book down on the table. 
// This is your FIRST IN,
// now place the 2nd book on top of the 1st, and the 3rd on top of the second. Your 3rd is the first book that will be taken off the pile. then your second, then your 1st. 
// This is why it is called FIRST IN LAST OUT, because the 1st book you put down is the last book you pick up.
// A common STACK you come across in the digital world is your internet browsing history.
// Imagine you open your browser and you search for "best brewery near me", then you click on the top result, and then you click a link within the site you were brought to. 
// your browsing history "STACK" would look something like this, ['www.google.com','google.com/searchresultsforbrewerybearme','www.greatdivide.com','www.greatdivide.com/beerlist']


// functions: push, pop, peek, length

var letters = []; // this is our stack

var word = "testing"

var rword = "";

// put letters of word into stack
for (var i = 0; i < word.length; i++) {
   letters.push(word[i]);
}

// pop off the stack in reverse order
for (var i = 0; i < word.length; i++) {
   rword += letters.pop(); 
}

if (rword === word) {
   console.log(word + " is a palindrome.");
}
else {
   console.log(word + " is not a palindrome.");
}



// Creates a stack
var Stack = function() {
    this.count = 0;
    this.storage = {};
  
    // Adds a value onto the end of the stack
    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
    }
    
    // Removes and returns the value at the end of the stack
    this.pop = function() {
        if (this.count === 0) {
            return undefined;
        }

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }
    
    this.size = function() {
        return this.count;
    }
    
    // Returns the value at the end of the stack
    this.peek = function() {
        return this.storage[this.count-1];
    }
}

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("testing");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
