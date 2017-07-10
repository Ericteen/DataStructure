function Node(ele) {
  this.ele = ele;
  this.next = null;
  this.prev = null;
}

function Llist() {
  this.head = new Node('head');
  /**
   * 循环列表
   */
  // this.head.next = this.head;
}

Llist.prototype = {
  findLast: function () {
    var curNode = this.head;
    while (curNode !== null) {
      curNode = curNode.next;
    }
    return curNode;
  },

  dispReverse: function () {
    var curNode = this.head;
    curNode = this.findLast();
    while (curNode.prev !== null) {
      console.log(curNode.ele);
      curNode = curNode.prev;
    }
  },

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
    newNode.prev = current;
    curNode.next = newNode;
  },

  display: function () {
    var curNode = this.head;
    while (curNode.next !== null) {
      console.log(curNode.next.ele);
      curNode = curNode.next;
    }
  },

  // finPrev: function (item) {
  //   var curNode = this.head;
  //   while ((curNode.next !== null) && (curNode.next.ele !== item)) {
  //     curNode = curNode.next;
  //   }
  //   return curNode;
  // },

  remove: function (item) {
    var curNode = this.find('item');
    if (curNoed.next !== null) {
      curNode.prev.next = curNode.next;
      curNode.next.prev = curNode.prev;
      curNode.next = null;
      curNode.prev = null;
    }
  }
}