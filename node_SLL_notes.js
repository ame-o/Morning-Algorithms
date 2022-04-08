class Node { //Node can be called anything, unicorn etc
    this.data = data; //data is value
    this.next = null;
}

class SLL { //Singly Linked List //I AM THE LIST
    constructor(){
        this.head = null; // by default it is null
    }
    isEmpty(){
        return this.head ==null;
    }

    addtoFront(node){ //adding an instance of Node
        node.next =this.head; //1st. instance:now they are both pointing at null. 2nd addition is now pointing to 1st node
        this.head = node; //list head, assigned to the new instance of the node, points to node. 2nd instance now points at 2nd node and so on
    }
    // or more explicitly shown
    addtoFront(node){
        if (this.head === null){ //from isEmpty if this head is null
            this.head = node; // then now head = new instance of node
        } else {
            node.next = this.head; //value of next now equals/points to the same as the head
            this.head = node; //reassigned head = new instance of node
        }
    }
    
    read(){
        //1. create a temp variable to traverse through list
        var rabbit = this.head; //runner has only one entry point of the SLL, which is the head. head either points at null or node
        console.log(rabbit); //rabbit shows the whole list
        while(rabbit){ // while rabbit is a node = true, keep goiing
            console.log(rabbit.data) // this will only print out data, not the object
            rabbit = rabbit.next; //since rabbit is a node, it has the same attributes as Node
        }
    }
    contains(data){
        var runner = this.head;
        while(runner){
            if(runner.data == data){
                return true;
            }
            runner=runner.next
        }
        return false
    }

    removefromFront(){
        var nodeRemove = this.head; //pulled the first value/data
        this.head = nodeRemove.next; //reassign the head to the next node in line

        nodeRemove.next = null;
        return nodeRemove;
    }


}

//instantiate a new instance of SLL type of list
var myCoolList = new SLL();
myCoolList.addtoFront(33);
myCoolList.addtoFront(11);
console.log(myCoolList);