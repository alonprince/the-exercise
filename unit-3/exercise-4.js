(function() {
  var f;

  f = console.log;

  eval('f("Boo!")');

  e;

  f = console.log;

  eval('e = f')('Boo!');

  (function() {
    return console.log;
  })()('Boo!');

}).call(this);
