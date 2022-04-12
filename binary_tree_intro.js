// --- ~* ~ ----- BINARY SEARCH TREES ------ ~*~ ---
// * not meant to be created, used to 
// factorial - ie. 3! = 3*2*1 (Note it ends at 1)
// recursion - function that calls itself
// === - best to use
//duplicates - BSTs can have duplicates, keep counter
// when creating a function for recursion:
function factorial(num){
    //defaults:(if it applies)
    if (num===undefined){
        num = 4;
    }
    //base case - make a break point 
    if (num===1){
        return 1;
    }
    //logic
    var decrementNum = num -1;

    //recurse
    return num * factorial(decrementNum);
}

// 
class BSTNode { 
    constructor(val){
        this.val = val;
        this.left =null;
        this.right=null;
    }
}

class BST{ //BINARY SEARCH TREE
    constructor(){
        this.root = null;
    }

    isEmpty(){
        return this.root ===null;
    }

    insert(node,current){
        //defaults (if BST was empty or node is first added)
        if(current===undefined){
            current = this.root;
        }
        if(this.root ===null){
            this.root = node;
        }
        if (node > current){
            if(current.left ===null){
                current.left = node;
                return //?
            }
        }else{
            //if node is higher or aqual to current
            // return?
        }
    }
}