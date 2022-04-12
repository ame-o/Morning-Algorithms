// https://www.cs.usfca.edu/~galles/visualization/BST.html
// http://btv.melezinek.cz/binary-search-tree.html
/*
          this.root
              |
             (10)
   node.left /   \ node.right
          (5)     (15)
         /  \     /   \ 
               (12)   (20)
               /  \   /  \
*/

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

    // recursive insert
    //    the new node we want to insert
    //      |
    //      |     pass a changed current as we call the function again
    //      |       |
    //      v       v
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
                // return xyz.join(", ");
                return this.insert(node, current.left); // <-- move current to current.left
            }
        } else if (current.val < node.val) { // go right
            // check if null and insert
            if (current.right === null) { // <-- base case for inserting right
                current.right = node;
                return;
            } else {
                // otherwise recurse right
                return this.insert(node, current.right);
            }
        }
    };

    // recursive: calls on its own method
    getLargestFromSubtree(current) { 
// this checks for empty trees/undefined
        if(this.root == null){
            return false;
        }
        if (current ==undefined){
            current = this.root;
        }
// checks if there is a current right
        if (current.right) {
// reassign the current to the right to keep checking for largest
            current = current.right;
//recurse 
// call the function again to check the right of the current
            this.getLargestFromSubtree(current);
        }
//break out of function if there is nothing to the right, meaning you foung the largest value
        else if (!current.right){
            console.log(current.val);
        }
    }

    // iterative: using a while loop
    getSmallestFromSubtree(current) { 
        current = this.root
        while(this.left!=null){
        }
    }

    // return true or false is val exists within the current tree
    // if current is undefined, current = this.root
    find(val, current) {
        // defaults
        if (current ===undefined){
            current = this.root;
        }
        if (current ===null){
            return false; // if BST is empty, then we cannot 
        }
        //
        if (current.val>val){
            current = current.left;
            return this.find(val,current);
        }
        else if (current.val < val){
            current = current.right;
            return this.find(val,current);
        }
        else if (current.val ===val){
            return true;
        } else {
            return false;
        }
     }

};

// Recursion is:
// - function that calls itself
// - and modifies the inputs
// - so that the inputs lead to a 'base case' and end the recursive call


// var myBST = new BST();
// myBST.insert(new BSTNode(10));
// myBST.insert(new BSTNode(15));
// myBST.insert(new BSTNode(5));
// myBST.insert(new BSTNode(20));
// myBST.insert(new BSTNode(12));
// console.log(myBST);
// call other methods here and test!v

// recursive
getLargestFromSubtree(current){

}

// iterative with while loop
//keep moving left until this.left = null
// return the last node.val
getSmallestfromSubTree(){

}

//return true or false is val exists ithin the current tree
// if current is undefined, current = this.root
find(val,current){

}