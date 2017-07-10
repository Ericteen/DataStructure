function Stack() {
  this.dataStore = [];
  this.top = 0;
}

Stack.prototype = {
  push: function (ele) {
    this.dataStore[this.top++] = ele;
  },

  pop: function () {
    if (this.top === 0) {
      return undefined;
    }

    this.top--;
    var result = this.dataStore[this.top];
    delete this.dataStore[this.top];
    return result;
  },

  length: function () {
    return this.top;
  },

  peek: function () {
    return this.dataStore[this.top - 1];
  },

  clear: function() {
    this.top = 0;
  }
}