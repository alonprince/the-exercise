(function() {
  var F, o;

  F = function() {
    var C;
    C = function() {
      console.log(this);
      return this;
    };
    return C();
  };

  o = new F();

}).call(this);
