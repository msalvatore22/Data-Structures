// A tree is a data structure composed of nodes 
// It has the following characteristics:

// Each tree has a root node (at the top).
// The root node has zero or more child nodes.
// Each child node has zero or more child nodes, 
// and so on.

// A binary search tree adds these two characteristics:

// Each node has up to two children.
// For each node, its left descendents are less than
// the current node, which is less than the right descendents.
// Binary search trees allow fast lookup, addition and removal 
// of items. The way that they are set up means that, on 
// average, each comparison allows the operations to skip 
// about half of the tree, so that each lookup, insertion or 
// deletion takes time proportional to the logarithm of the 
// number of items stored in the tree.

// Binary search time complexity
// ╔═══════════╦══════════╦════════════╗
// ║ Algorithm ║ Average  ║ Worst Case ║
// ╠═══════════╬══════════╬════════════╣
// ║ Space     ║ O(n)     ║ O(n)       ║
// ║ Search    ║ O(log n) ║ O(n)       ║
// ║ Insert    ║ O(log n) ║ O(n)       ║
// ║ Delete    ║ O(log n) ║ O(n)       ║
// ╚═══════════╩══════════╩════════════╝

/* Binary Search Tree */

// each node of the tree
class Node {
  constructor(data, left = null, right = null) {
    // data we want to store
    this.data = data;
    // points to left and right nodes
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    // create the root node
    this.root = null;
  }
  add(data) {
    const node = this.root;
    // if first node is null then create the root node
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      // figure out where to put the node into the tree with
      // a recursive function searchTree
      const searchTree = function(node) {
        if (data < node.data) {
          // place node on the left side if there is no left null
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            // continue searching untill theres a null node
            // pass in the node.left to searchTree
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          // return null if the node is equal
          return null;
        }
      };
      return searchTree(node);
    }
  }
  findMin() {
    let current = this.root;
    // loop through until the left side equals null
    // to the leftmost node
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }
  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }
  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
  remove(data) {
    const removeNode = function(node, data) {
      if (node == null) {
        return null;
      }
      if (data == node.data) {
        // node has no children 
        if (node.left == null && node.right == null) {
          return null;
        }
        // node has no left child 
        if (node.left == null) {
          return node.right;
        }
        // node has no right child 
        if (node.right == null) {
          return node.left;
        }
        // node has two children 
        var tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
    this.root = removeNode(this.root, data);
  }
  isBalanced() {
    return (this.findMinHeight() >= this.findMaxHeight() - 1)
  }
  findMinHeight(node = this.root) {
      if (node == null) {
          return -1;
      };
      let left = this.findMinHeight(node.left);
      let right = this.findMinHeight(node.right);
      if (left < right) {
          return left + 1;
      } else {
          return right + 1;
      };
  }
  findMaxHeight(node = this.root) {
      if (node == null) {
          return -1;
      };
      let left = this.findMaxHeight(node.left);
      let right = this.findMaxHeight(node.right);
      if (left > right) {
          return left + 1;
      } else {
          return right + 1;
      };
  }
  inOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traverseInOrder(node) {       
        node.left && traverseInOrder(node.left);
        result.push(node.data);
        node.right && traverseInOrder(node.right);
      }
      traverseInOrder(this.root);
      return result;
    };
  }
  preOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traversePreOrder(node) {
        result.push(node.data);
        node.left && traversePreOrder(node.left);
        node.right && traversePreOrder(node.right);
      };
      traversePreOrder(this.root);
      return result;
    };
  }
  postOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traversePostOrder(node) {
        node.left && traversePostOrder(node.left);
        node.right && traversePostOrder(node.right);
        result.push(node.data);
      };
      traversePostOrder(this.root);
      return result;
    }
  }

  // breadth first search
  // return each level in order
  levelOrder() {
      let result = [];
      let Q = []; 
      if (this.root != null) {
          Q.push(this.root);
          while(Q.length > 0) {
              let node = Q.shift();
              result.push(node.data);
              if (node.left != null) {
                  Q.push(node.left);
              };
              if (node.right != null) {
                  Q.push(node.right);
              };
          };
          return result;
      } else {
          return null;
      };
  };
}



const bst = new BST();

bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);

console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());
bst.add(10);
console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());
console.log('inOrder: ' + bst.inOrder());
console.log('preOrder: ' + bst.preOrder());
console.log('postOrder: ' + bst.postOrder());

console.log('levelOrder: ' + bst.levelOrder());
