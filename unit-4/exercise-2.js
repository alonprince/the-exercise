(function() {
  var C;

  C = function() {
    this.a = 1;
    return false;
  };

  console.log(typeof new C());

}).call(this);
