/* Stacks
A stack is a LIFO data structure
LAST IN, FIRST OUT
LIFO / FILO
push - add to top
pop - remove from top
peek - check the top
isEmpty - check if the stack is empty, true/false
length - return size of stack
*/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class slStack {
    constructor() {
        this.top = null; // this.head, this.end
    }

    // add to top
    push(newNode) { 
        newNode.next=this.top
        this.top=newNode
    }

    // remove from top
    pop() { 
        if(this.isEmpty()){
            return null;
        }
        var temp = this.top;
        this.top = temp.next;
        temp.next = null;
        return temp;
    }

    // aka check top
    peek() {
        return this.top;
    }

    // check if empty
    isEmpty() {
        return this.top === null;
    }

    // "1" == 1 true
    // "1" === 1 false

    // length getter
    getLength() {
        var tempStack = new slStack();
        var size=0;
        while(!this.isEmpty()){
            tempStack.push(this.pop());
            size++;
        }
        while(!tempStack.isEmpty()){
            this.push(tempStack.pop());
        }
        return size;
     }
}

// don't forget to instantiate the slStack!
// add a few nodes first