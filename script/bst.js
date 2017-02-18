function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function(value) {
  if (value < this.value) { // left
    if(!this.left) this.left = new BST(value);
    else this.left.insert(value);
  }
  else if (value >= this.value) { // right
    if(!this.right) this.right = new BST(value);
    else this.right.insert(value);
  }
}

BST.prototype.contains = function(value) {
  if (value === this.value) {
    return true;
  }
  else if (value < this.value) {
    if (!this.left) {
      return false
    } else {
      return this.left.contains(value);
    }
  }
  else if (value > this.value) {
    if (!this.right) {
      return false
    } else {
      return this.right.contains(value)
    }
  }
}

BST.prototype.depthFirst = function(order){
  if (order === 'pre-order') console.log(this.value);
  if (this.left) {
    this.left.depthFirst(order);
  }
  if (order === 'in-order')  console.log(this.value);
  if (this.right) {
    this.right.depthFirst(order);
  }
  if (order === 'post-order')  console.log(this.value);
}

BST.prototype.breathFirst = function() {
  var queue = [this];
  
  while (queue.length) {
    var node = queue.shift();
    console.log(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
}

BST.prototype.minVal = function() {
  if (this.left) this.left.minVal();
  else console.log(this.value);
}

BST.prototype.maxVal = function() {
  if (this.right) this.right.maxVal();
  else console.log(this.value);  
}

BST.prototype.isBalanced = function() {
  if (!this.left && !this.right) return true;
  
  if (this.left && this.right) {
    return this.left.isBalanced() && this.right.isBalanced();
  }
  
  return false;
}

var bst = new BST(50);
bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
// bst.insert(59);
bst.insert(20);
// bst.insert(45);
bst.insert(35);
// bst.insert(85);
// console.log(bst);
// console.log(bst.contains(84));
// bst.breathFirst('post-order');
// bst.minVal();
// bst.maxVal();
console.log(bst.isBalanced());
