class _QNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(data) {
    let node = new _QNode(data);

    if (!this.head) {
      this.head = node;
    } else if (this.length === 1) {
      this.head.next = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
  }

  dequeue() {
    if (!this.head) return null;

    const deq = this.head.data;

    this.head = this.head.next;
    this.length--;

    return deq;
  }

  show() {
    if (!this.head) return null;
    return this.head.data;
  }

  all() {
    if (!this.head) return null;

    let queue = [this.head.data];
    let curr = this.head.next;
    while (curr) {
      queue.push(curr.data);
      curr = curr.next;
    }

    return queue;
  }
}

module.exports = Queue;
