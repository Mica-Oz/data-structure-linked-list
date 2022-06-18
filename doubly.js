class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
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
      let oldTail = this.tail;
      this.tail.next = currentNode;
      currentNode.prev = oldTail;
      this.tail = currentNode;
    }
    //set tail property to newest node
    //increment length by one
    this.length++;
    return this;
  }

  pop() {
    if (!this.tail) return undefined;
    let oldTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }
    this.length--;
    return oldTail;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      oldHead.next = null;
      this.head.prev = null;
    }
    this.length--;
    return oldHead;
  }
  unshift(val) {
    let newNode = new Node(val);
    let oldHead = this.head;
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      oldHead.prev = newNode;
      this.head = newNode;
      this.head.next = oldHead;
    }
    this.length++;
    return this;
  }
  get(id) {
    if (id >= this.length || id < 0) return null;
    if (id <= this.length / 2) {
      let currentNode = this.head;
      let count = 0;
      while (count <= id) {
        if (count === id) {
          return currentNode;
        }
        currentNode = currentNode.next;
        count++;
      }
    } else {
      let currentNode = this.tail;
      let count = this.length - 1;
      while (count >= id) {
        if (count === id) {
          return currentNode;
        }
        currentNode = currentNode.prev;
        count--;
      }
    }
  }
  set(n, val) {
    let node = this.get(n);
    if (node) {
      node.val = val;
      return true;
    } else {
      return false;
    }
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
    rightNode.prev = currNode;
    currNode.prev = leftNode;
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
    right.prev = left;
    curr.prev = null;
    curr.next = null;
    this.length--;
    return curr;
  }
}

let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);
