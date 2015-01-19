(function() {
  var MyMath;

  MyMath = {};

  MyMath.min = function(array) {
    var i, j, num, tmp, _i, _j, _len, _ref;
    for (i = _i = 0, _len = array.length; _i < _len; i = ++_i) {
      num = array[i];
      for (j = _j = 0, _ref = array.length - 2 - i; 0 <= _ref ? _j <= _ref : _j >= _ref; j = 0 <= _ref ? ++_j : --_j) {
        if (array[j] > array[j + 1]) {
          tmp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = tmp;
        }
      }
    }
    return array[0];
  };

  MyMath.max = function(array) {
    var i, j, num, tmp, _i, _j, _len, _ref;
    for (i = _i = 0, _len = array.length; _i < _len; i = ++_i) {
      num = array[i];
      for (j = _j = 0, _ref = array.length - 2 - i; 0 <= _ref ? _j <= _ref : _j >= _ref; j = 0 <= _ref ? ++_j : --_j) {
        if (array[j] > array[j + 1]) {
          tmp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = tmp;
        }
      }
    }
    return array[array.length - 1];
  };

  console.log(MyMath.min([6, 8, 3, 4, 6, 5, 2, 9, 7]));

  console.log(MyMath.max([12, 522, 473, 3, 21, 2332, 654, 23]));

}).call(this);
