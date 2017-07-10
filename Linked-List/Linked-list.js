function Node(ele) {
  this.ele = ele;
  this.next = null;
}

function Llist() {
  this.head = new Node('head');
}

Llist.prototype = {
  find: function (item) {
    var curNode = this.head;
    while (curNode !== item) {
      curNode = curNode.next;
    }
    return curNode;
  },

  insert: function (newEle, item) {
    var newNode = new Node(newEle);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
  },

  display: function () {
    var curNode = this.head;
    while (curNode !== null) {
      console.log(curNode.next.ele);
      curNode = curNode.next;
    }
  },

  finPrev: function (item) {
    var curNode = this.head;
    while ((curNode.next !== null) && (curNode.next.ele !== item)) {
      curNode = curNode.next;
    }
    return curNode;
  },

  remove: function (item) {
    var prevNode = this.findPrev('item');
    if (prevNoed.next !== null) {
      prevNode.next = prevNode.next.next;
    }
  },

}