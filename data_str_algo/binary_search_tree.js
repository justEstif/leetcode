// can node only has 0-2 branches
// each branch is also a binary search tree
// each right node is larger than the parent
// each left node is less than the parent

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      return this.#search_tree(node, data);
    }
  }
  #search_tree(node, data) {
    if (data < node.data) {
      if (node.left === null) {
        node.left = new Node(data);
        return;
      } else if (node.left !== null) {
        return this.#search_tree(node.left, data);
      }
    } else if (data > node.data) {
      if (node.right === null) {
        node.right = new Node(data);
        return;
      } else if (node.right !== null) {
        return this.#search_tree(node.right, data);
      }
    } else {
      return null;
    }
  }
  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left; // get the left most node
    }
    return current.data;
  }
  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right; // get the right most node
    }
    return current.data;
  }
  find(data) {
    // return the data
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) current = current.left;
      else current = current.right;
      if (current === null) return null;
    }
    return current;
  }
  isPresent(data) {
    // return true or false
    let current = this.root;
    while (current) {
      if (data === current.data) return true;
      if (data < current.data) current = current.left;
      else current = current.right;
    }
    return false;
  }
  remove(data) {
    this.root = this.#remove_node(this.root, data);
  }
  #remove_node(node, data) {
    if (node === null) return null;
    if (data === node.data) {
      if (node.left === null && node.right === null) return null;
      if (node.left === null) return node.right;
      if (node.right === null) return node.left;

      // has both children
      let temp_node = node.right;
      while (temp_node.left !== null) temp_node = temp_node.left;
      node.data = temp_node.data;
      node.right = this.#remove_node(node.left, temp_node.data);
      return node;
    } else if (data < node.data) {
      node.left = this.#remove_node(node.left, data);
      return node;
    } else {
      node.right = this.#remove_node(node.right, data);
      return node;
    }
  }
  isBalanced() {
    return this.findMinHeight() >= this.findMaxHeight() - 1;
  }
  findMinHeight(node = this.root) {
    if (node === null) {
      return -1;
    }
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }
  findMaxHeight(node = this.root) {
    if (node === null) {
      return -1;
    }
    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);
    if (left > right) return left + 1;
    else return right + 1;
  }
  inOrder() {
    if (this.root === null) {
      return null;
    } else {
      const result = new Array();
      this.#traverse_in_order(this.root, result);
      return result;
    }
  }
  #traverse_in_order(node, result) {
    node.left && this.#traverse_in_order(node.left, result);
    result.push(node.data);
    node.right && this.#traverse_in_order(node.right, result);
  }
  preOrder() {
    if (this.root === null) {
      return null;
    } else {
      const result = new Array();
      this.#traversePreOrder(this.root, result);
      return result;
    }
  }
  #traversePreOrder(node, result) {
    result.push(node.data);
    node.left && this.#traversePreOrder(node.left, result);
    node.right && this.#traversePreOrder(node.right, result);
  }
  postOrder() {
    if (this.root === null) {
      return null;
    } else {
      const result = new Array();
      this.#traversePostOrder(this.root, result);
      return result;
    }
  }
  #traversePostOrder(node, result) {
    node.left && this.#traversePostOrder(node.left, result);
    node.right && this.#traversePostOrder(node.right, result);
    result.push(node.data);
  }
  levelOrder() {
    let result = [];
    let Q = [];
    if (this.root !== null) {
      Q.push(this.root);
      if (this.root !== null) {
        Q.push(this.root);
        while (Q.length > 0) {
          let node = Q.shift();
          result.push(node.data);
          if (node.left !== null) {
            Q.push(node.left);
          }
          if (node.right !== null) {
            Q.push(node.right);
          }
        }
        return result;
      } else {
        return null;
      }
    }
  }
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
console.log("inOrder: " + bst.inOrder());
console.log("preOrder: " + bst.preOrder());
console.log("postOrder: " + bst.postOrder());
console.log("levelOrder: " + bst.levelOrder());
