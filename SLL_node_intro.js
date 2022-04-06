class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    isEmpty() { }
        if
    // when a pointer is to the LEFT of an equal sign, we are CHANGING it
    // when a pointer is to the RIGHT of an equal sign, we are READING it

    // add given node to the head, if it exists. return void
    // list is empty?
    // list already has nodes?
    addToFront(node) { }
    if(this.isEmpty()) { 
        this.head=node;
    }
    else {
        node.next = this.head;
        this.head=node;
    }
    // create a new node with given data, add it to the head. return void
    addDataToFront(data) {
        
    }
}

// instantiate the SLL
var myCoolSLL = new SLL();

// creating nodes
// var myNode = new Node(55);

// executing methods:
myCoolSLL.addToFront(new Node(55));
myCoolSLL.addToFront(new Node(100));
console.log(myCoolSLL);


// myCoolSLL.addToFront(new Node(100));
// myCoolSLL.addToFront(new Node(44));
// myCoolSLL.addToFront(new Node(33));
// myCoolSLL.addToFront(new Node(22));

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    isEmpty() { 
    // this is a turnary
    this.head ? false: true;
    }
    // when a pointer is to the LEFT of an equal sign, we are CHANGING it
    // when a pointer is to the RIGHT of an equal sign, we are READING it

    // add given node to the head, if it exists. return void
    // list is empty?
    // list already has nodes?
    addToFront(node) {
        if (this.isEmpty()){
            this.head = node;
        } else {
        var temp = this.head;
        this.head = node;
        node.next = temp;
        }
    }

    // create a new node with given data, add it to the head. return void
    addDataToFront(data) {
        var node = new Node(data);
        this.addToFront(node);
    }
}

// instantiate the SLL
var mySLL = new SLL();

// creating nodes
// var myNode = new Node(55);

// executing methods:
mySLL.addToFront(new Node(55));
mySLL.addToFront(new Node(100));
mySLL.addDataToFront(44);
console.log(mySLL);


// mySLL.addToFront(new Node(100));
// myCoolSLL.addToFront(new Node(44));
// myCoolSLL.addToFront(new Node(33));
// myCoolSLL.addToFront(new Node(22)); (edited)
