//val - piece of data
//next - pointer to next node

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// var first = new Node("hi");
// first.next = new Node("hi there");
// first.next.next = new Node("third");

// console.log(first);

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    //insert at end
    //accepts val
    //create new node using val passed in
    let currentNode = new Node(val);
    //no head - set head and tail to this val
    if (this.head === null && this.tail === null) {
      this.head = currentNode;
      this.tail = currentNode;
    }
    //otherwise- set the next propert on the tail to be new node,
    else {
      this.tail.next = currentNode;
      this.tail = currentNode;
    }
    //set tail property to newest node
    //increment length by one
    this.length++;
    return this;
  }
  traverse() {
    var current = this.head;
    while (current) {
      console.log(current);
      current = current.next;
    }
  }
  pop() {
    //remove from end
    //if no nodes, return undefined
    if (!this.head) {
      return undefined;
    }
    //loop through list until you rech tail with two pointters
    var current = this.head;
    let left = current;
    while (current.next) {
      left = current;
      current = current.next;
    }
    this.tail = left;
    this.tail.next = null;
    //decrement length by 1
    this.length--;
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }
    //delete head
    //item2==head
    //sever connection
    //return oldHead
    let oldHead = this.head;
    this.head = oldHead.next;
    oldHead.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail === null;
    }
    return oldHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    let oldHead = this.head;
    //no head - set head and tail to this val
    if (this.head === null && this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.head.next = oldHead;
    }
    this.length++;
    return this;
  }
  get(id) {
    if (0 > id || id >= this.length) return null;
    let count = 0;
    let currentNode = this.head;
    while (count <= id) {
      if (count === id) {
        return currentNode;
      }
      currentNode = currentNode.next;
      count++;
    }
  }
  set(id, val) {
    let foundNode = this.get(id);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(id, val) {
    if (id < 0 || id > this.length) return false;
    if (id === this.length) return !!this.push(val); //bang bang gives us true as return
    if (id === 0) !!this.unshift(val);

    let leftNode = this.get(id - 1);
    let rightNode = this.get(id);
    let currNode = new Node(val);
    leftNode.next = currNode;
    currNode.next = rightNode;
    this.length++;
    return true;
  }

  remove(id) {
    if (id < 0 || id > this.length) return undefined;
    if (id === this.length - 1) return this.pop();
    if (id === 0) return this.shift();
    let left = this.get(id - 1);
    let curr = this.get(id);
    let right = curr.next;
    left.next = right;
    curr.next = null;
    this.length--;
    return curr;
  }

  reverse() {
    let currNode = this.head;
    //make head the tail
    this.head = this.tail;
    //set tail to oldHead which is at currNode
    this.tail = currNode;

    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      //saves next in list
      next = currNode.next;
      //points current to previous
      currNode.next = prev;
      //saves curr
      prev = currNode;
      //makes curr next
      currNode = next;
      //increment count
    }
    return this;
  }
}

let list = new SinglyLinkedList();
