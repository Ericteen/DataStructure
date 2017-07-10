/**
 * Node
 * @Author Cheng_Guanghui
 * @Date   2017-06-24T17:17:28+0800
 * @param {prop} data 存储数据
 * @param {prop} parent 指向 node 的父级
 * @param {prop} children  指向 list 中的下一个 node
 */
function Node(data) {
  this.data = data;
  this.parent = null;
  this.children = [];
}

function Tree(data) {
  var node = new Node(data);
  this._root = node;
}

Tree.prototype = {
  /**
   * traverseDF depth-first search
   * @Author Cheng_Guanghui
   * @Date   2017-06-24T17:25:49+0800
   * @param  {Function}               cb [description]
   * @return {[type]}                    [description]
   */
  traverseDF: function (cb) {
    (function recurse(currentNode) {
      for (var i = 0, len = currentNode.children.length; i < len; i++) {
        recurse(currentNode.children[i]);
      }

      cb(currentNode);
    })(this._root);
  },

  traverseBF: function (cb) {
    var queue = new Queue();

    queue.enqueue(this._root);

    currentTree = queue.dequeue();

    while(currentTree) {
      for (var i = 0, len = currentTree.children.length; i < len; i++) {
        queue.enqueue(currentTree.children[i]);
      }

      cb(currentTree);
      currentTree = queue.dequeue();
    }
  },

  contains: function (cb, traversal) {
    traversal.call(this, cb);
  },

  add: function(data, toData, traversal) {
    var child = new Node(data),
        parent = null,
        callback = function(node) {
            if (node.data === toData) {
                parent = node;
            }
        };
 
    this.contains(callback, traversal);
 
    if (parent) {
        parent.children.push(child);
        child.parent = parent;
    } else {
        throw new Error('Cannot add node to a non-existent parent.');
    }
  },

  remove: function(data, fromData, traversal) {
    var tree = this,
        parent = null,
        childToRemove = null,
        index;
 
    var callback = function(node) {
        if (node.data === fromData) {
            parent = node;
        }
    };
 
    this.contains(callback, traversal);
 
    if (parent) {
        index = findIndex(parent.children, data);
 
        if (index === undefined) {
            throw new Error('Node to remove does not exist.');
        } else {
            childToRemove = parent.children.splice(index, 1);
        }
    } else {
        throw new Error('Parent does not exist.');
    }
 
    return childToRemove;
  },
};

function findIndex(arr, data) {
    var index;
 
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].data === data) {
            index = i;
        }
    }
 
    return index;
}