/**
 * map
 * @Author Cheng_Guanghui
 * @Date   2017-07-10T16:07:16+0800
 * @description ES6内置 Map
 */
var myMap = function() {
  this.collection = {};
  this.count = 0;
  this.size = function() {
    return this.count;
  };
  this.set = function(key, value) {
    this.collection[key] = value;
    this.count++;
  };
  this.has = function(key) {
    return (key in this.collection);
  };
  this.get = function(key) {
    return (key in this.collection) ? this.collection[key] : null;
  };
  this.delete = function(key) {
    if (key in this.collection) {
      delete this.collection[key];
      this.count--;
    }
  };
  this.values = function() {
    var result = new Array();
    for (var key of Object.keys(this.collection)) {
      result.push(this.collection[key]);
    };
    return (result.length > 0) ? result : null;
  };
  this.clear = function() {
    this.collection = {};
    this.count = 0;
  };
};