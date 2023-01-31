class Queue {
  constructor() {
    this.collection = [];
  }
  print() {
    console.log(this.collection);
  }
  enqueue(element) {
    this.collection.push(element); // add to the beginning of array
  }
  dequeue() {
    return this.collection.shift(); // add to the end of the array
  }
  front() {
    return this.collection[0]; // peek first element
  }
  size() {
    return this.collection.length; // length of queue
  }
  isEmpty() {
    return this.collection.length === 0; // check if no queue
  }
}

// arranged based on priority values
// if priorities as equal, then arranges as normal queue
class PriorityQueue {
  constructor() {
    this.collection = [];
  }
  print() {
    console.log(this.collection);
  }
  enqueue(element) {
    if (this.isEmpty()) {
      this.collection.push(element);
    } else {
      let added = false;
      for (let i = 0; i < this.collection.length; i++) {
        if (element[1] < this.collection[i][1]) {
          this.collection.splice(1, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        this.collection.push(element);
      }
    }
  }
  dequeue() {
    return this.collection.shift()[0]; // add to the end of the array
  }
  front() {
    return this.collection[0][0]; // peek first element
  }
  size() {
    return this.collection.length; // length of queue
  }
  isEmpty() {
    return this.collection.length === 0; // check if no queue
  }
}
const q = new PriorityQueue();
q.enqueue(["b", 2]);
q.enqueue(["c", 3]);
q.enqueue(["a", 1]);
q.enqueue(["d", 0]);
console.log(q.front());
q.print();
q.dequeue();
console.log(q.front());
q.print();
