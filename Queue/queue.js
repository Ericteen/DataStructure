function Queue() {
  this.dataStore = [];
}

Queue.prototype = {
  enqueue: function (ele) {
    this.dataStore.push(ele);
  },

  dequeue: function () {
    return this.dataStore.shift();
  },

  front: function () {
    return this.dataStore[0];
  },

  back: function () {
    return this.dataStore[this.dataStore.length - 1];
  },

  toString: function () {
    var retStr = '';
    for (var i = 0, len = this.dataStore.length; i < len; i++) {
      retStr += this.dataStore[i] + 'n';
    }
    return retStr;
  },

  empty: function () {
    if (this.dataStore.length === 0) {
      return true;
    } else {
      return false;
    }
  }
};