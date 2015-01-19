(function() {
  var c;

  c = [1, 2, [1, 2]];

  c.sort();

  c.join('--');

  console.log(c);

}).call(this);
