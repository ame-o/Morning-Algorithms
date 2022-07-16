class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Queue
// FIFO (First in, first out)

// - enqueue
// - dequeue
// - peek
// - isEmpty
// - count

class Queue {
    constructor() {
        this.front = null; // sometimes called head "front of the line"
        this.back = null; // sometimes called rear or tail "back of the line"
    }

    // add nodes to the back of the queue
    enqueue(node) {
        var temp = null;
        if(this.isEmpty()){
            this.front= node;
            this.back=node;
        }else{
            this.back.next = node
            this.back = node;
        }
    }

    // remove from the front
    dequeue() { 
        if (this.isEmpty()){
            return null;
        }else{
            var temp = this.front;
            this.front = temp.next;
            temp.next = null
            return temp;
        }
    }

    // check the front of the queue
    peek() {
        return this.front ? this.front.data : this.front;

        if (this.front) {
            return this.front.data
        } else {
            return this.front
        }
    }

    // return true / false if queue is empty
    isEmpty() {
        return this.front === null
    }

    // // return length
    // count() { }
}

// NINJA BONUS:
// print every value in the queue
// you may only use one queue or stack for additional storage
// return the queue back to it's original order when you are done
// you are not allowed to linearly traverse the queue
// only use public methods enqueue(), dequeue(), peek(), isEmpty(), and count()
function readQueue(queue) {
    if(!queue.isEmpty()){
        return null;
    }
    var tempQueue = new Queue;
    while(queue.isEmpty()){
        console.log(queue.front.data)
        tempQueue.enqueue(queue.dequeue())
    }
    while(tempQueue.isEmpty()){
        queue.enqueue(tempQueue.dequeue())
    }
    return readQueue(queue);
 }