// https://www.cs.usfca.edu/~galles/visualization/BST.html
// http://btv.melezinek.cz/binary-search-tree.html
class BSTNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
};

class BST {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    };

    insert(node, current) {
        // default current to root if no current exists
        if (current === undefined) {
            current = this.root;
        };

        // if empty tree, new node becomes root
        if (current === null) {
            this.root = node;
            return;
        };

        if (current.val > node.val) { // go left
            // check if null and insert
            if (current.left === null) { // <-- base case for inserting left
                current.left = node;
                return;
            } else {
                // otherwise recurse left
                return this.insert(node, current.left); // <-- move current to current.left
            }
        } else if (current.val < node.val) { // go right
            // check if null and insert
            if (current.right === null) { // <-- base case for inserting left
                current.right = node;
                return;
            } else {
                // otherwise recurse right
                return this.insert(node, current.right);
            }
        }
    };

    // recursive
    getLargestFromSubtree(current) {
        // if no tree, tree is root
        if (current === undefined) {
            current = this.root;
        }

        // if tree becomes null, return null
        if (current === null) {
            return null;
        }

        // if there is no further nodes, return tree
        if (current.right === null) {
            return current.val;
        }

        // else recurse to the right and try again
        return this.getLargestFromSubtree(current.right);
    }

    // iterative
    getSmallestFromSubtree() {
        // create runner
        var runner = this.root;

        // return if root is null
        if (!runner) return;

        // loop to the left if it exists
        while (runner.left) {
            runner = runner.left;
        }
        // when the while ends, return runner.val
        return runner.val;
    }

    // return true or false is val exists within the current tree
    // if current is undefined, current = this.root
    find(val, current) {
        if (current === undefined) {
            current = this.root;
        }

        // base cases

        // if current is null, return false up the call stack
        if (current == null) {
            return false;
        }

        // because current is certain to be not null, check val vs val
        // if equal, return true up the call stack
        if (current.val === val) {
            return true;
        }

        // otherwise we need to recurse

        // decide on which direction
        if (current.val > val) {
            current = current.left;
        } else {
            current = current.right;
        }

        // recurse now that current is moved, return the result
        return this.find(val, current); // true / false up the call stack
    }

    // -------------- WEDNESDAY 🐸 -----------------  
    removeSmallest(current  =  this.root) { 
        if(current == null){
            return false;
        }
        let previous = this.root;
        while(current.left){ // while there is still a number to the left aka larger #
            previous = current; //previous is trailing behind our first runner
            current = current.left; //re-assign the first runner to move forward/ to the left
        if(current.left==null){ //once first runner reaches the end aka null
            if(current.left){
                previous.left = current.left; //reassign if there is a last left
            } else{
                previous.left = null;//re-assigning 2nd runner's left to null?
                return current;
            }
        }
        }
        }
    }

    removeLargest(current = this.root) { 
    if(current == null){
        return false;
    }
    let previous = this.root;
    while(current.right){ // while there is still a number to the right aka larger #
        previous = current; //previous is trailing behind our first runner
        current = current.right; //re-assign the first runner to move forward/ to the right
    if(current.right==null){ //once first runner reaches the end aka null
        if(current.left){
            previous.right = current.left; //reassign if there is a last left
        } else{
            previous.right = null;//re-assigning 2nd runner's right to null?
            return current;
        }
    }
    }
    }

    // ---RECURSIVE OPTIONS---
    removeSmallestR(current = this.root, prev = null) {
        if (current.left != null){
            console.log("moving markers");
            prev = current;
            current = current.left;
            return this.removeSmallest(current, prev);
        }
        else if (prev != null){
            console.log(current, prev);
            if (current.right != null){
                prev.left = current.right;
                current.right = null;
                
            }
            else {
                console.log(current, prev);
                prev.left = null;
            }
        
        }
        return current; 
    }

// ---------------------
    removeLargestR(current = this.root, prev = null) { 
        if (current.right != null){
            prev = current;
            current = current.right;
            return this.removeLargest(current,  prev);
        }
        else if (prev != null){
            if (current.left != null){
                prev.right = current.left;
                current.left = null;
            }
            else {
                prev.right = null;
            }
        }
        return current;
    }

    // --- HELPER METHOD for printing the BST ---
    // Logs this tree horizontally with the root on the left.
    print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
        if (!node) {
            return;
        }
    
        spaceCnt += spaceIncr;
        this.print(node.right, spaceCnt);
    
        console.log(
            " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) + `${node.val}`
        );
    
        this.print(node.left, spaceCnt);
        }
};

// Recursion is:
// - function that calls itself
// - and modifies the inputs
// - so that the inputs lead to a 'base case' and end the recursive call

// instantiate the BST class
var myBST = new BST();

// add nodes to it...
myBST.insert(new BSTNode(25));
myBST.insert(new BSTNode(15));
myBST.insert(new BSTNode(50));
myBST.insert(new BSTNode(10));
myBST.insert(new BSTNode(22));
myBST.insert(new BSTNode(35));
myBST.insert(new BSTNode(70));
myBST.insert(new BSTNode(12));
// console.log(myBST);
// myBST.print();

// ...resulting in the following tree
/*
                BST
                root
             <-- 25 -->
            /          \
          15           50
        /    \       /    \
      10     22     35     70
     /  \   /  \   /  \   /  \
        12        
  */

// console.log(myBST.removeSmallest());
// console.log(myBST);
console.log("LARGEST ==>", myBST.removeLargest());
myBST.print();