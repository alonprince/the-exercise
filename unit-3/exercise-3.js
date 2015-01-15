(function() {
  var a, f;

  a = 1;

  f = function() {
    var n;
    a = 2;
    n = function() {
      return console.log(a);
    };
    return n();
  };

  f();

}).call(this);
