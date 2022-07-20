// DLLNodes have a .next and .prev
class DLLNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

// DLLists have both a .head and .tail pointer
class DLList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // == Main Methods ==

    // add node before target
    // target is the value of a node in the list
    // consider the edge case where you may have to move the head
    // consider the edge case where you do not find the target
    prepend(target, node) {  
        if(this.isEmpty()){
            return null;
        }
        var runner = this.head;
        if(runner.data === target.data){
            node.next = runner;
            runner.prev= node;
            this.head = node;
            return;
        }
        while(runner.data != null && runner.data != target.data){
            runner = runner.next;
        }
        if(runner = null){
            return null;
        }
        node.prev = runner.prev;
        runner.prev.next=node;
        node.next = runner;
        runner.prev= node;
    }

    // --== BONUS ==--
    append(target, node) {
        if(this.isEmpty()){
            return null;
        }
        var runner = this.tail;
        if(runner.data === target.data){
            node.prev = runner;
            runner.next= node;
            this.tail = node;
            return;
        }
        while(runner.data != null && runner.data != target.data){
            runner = runner.prev;
        }
        if(runner = null){
            return null;
        }
        node.next = runner.next;
        runner.next.prev=node;
        node.prev = runner;
        runner.next= node;
     }

    // push to head
    addHead(node) {
        if (!this.head) { // empty list
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
    }

    // pop from tail
    removeTail() {
        if (this.head == null) return; // empty list
        if (this.head === this.tail) { // one node
            var temp = this.tail; // set a temp
            this.head = null; // disconnect the head
            this.tail = null; // disconnect the tail
            return temp;
        }
        var temp = this.tail; // set a temp
        this.tail = tail.prev; // move the tail back
        this.tail.next = null; // null out the new tail's next
        temp.prev = null; // null out the temp's prev
        return temp;
    }

    // return is empty
    isEmpty() {
        return this.head === null;
    }

    // == Bonus Methods, just inverted versions of the first set ==

    // push to tail
    addTail(node) { }

    // pop from head
    removeHead() { }
}

// instantiate the DLL
var myCoolDLL = new DLList();
// console.log(myCoolDLL);
var n1 = new DLLNode(300);
myCoolDLL.addHead(n1);
myCoolDLL.addHead(new DLLNode(200));
myCoolDLL.addHead(new DLLNode(100));

// console.log(myCoolDLL);

myCoolDLL.prependClean(200, new DLLNode(150));
console.log(myCoolDLL);