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
}

let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
