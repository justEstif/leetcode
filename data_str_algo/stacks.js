/**
 * stacks
 ** push for adding a top element
 ** pop for removing top element
 ** peek for displaying
 ** length
 */

let letters = [];
let word = "racecar";
let reverse_word = "";

// put letters of word into stack
for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

// pop off the stack in reverse order
for (let i = 0; i < word.length; i++) {
  reverse_word += letters.pop();
}

if (reverse_word === word) {
  // console.log(word + " is a palindrome");
} else {
  // console.log(word + " is not a palindrome");
}

class Stack {
  constructor() {
    this.items = [];
  }
  pop() {
    return !this.isEmpty() ? this.items.pop() : "underflow";
  }
  push(item) {
    return this.items.push(item);
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  printStack() {
    return this.items.join(" ");
  }
}

let stack = new Stack();
stack.push("1");
stack.push("2");
stack.push("3");
stack.push("4");

console.log(stack.isEmpty());
console.log(stack.peek());
console.log(stack.printStack());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.printStack());
