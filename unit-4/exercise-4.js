(function() {
  var MyString, s;

  MyString = (function() {
    function MyString(value) {
      var i;
      this._value = value;
      for (i in value) {
        this[i] = value[i];
      }
      this.length = parseInt(i) + 1;
    }

    MyString.prototype.toString = function() {
      return this._value + '';
    };

    MyString.prototype.valueOf = MyString.prototype.toString;

    MyString.prototype.concat = function(str) {
      return this._value + '' + str;
    };

    MyString.prototype.charAt = function(index) {
      index = parseInt(index);
      if (isNaN(index)) {
        return this._value[0];
      } else {
        return this._value[index];
      }
    };

    MyString.prototype.slice = function(n1, n2) {
      var arr, i;
      if (n1 < 0) {
        n1 = n1 + this.length;
      }
      if (n2 < 0) {
        n2 = n2 + this.length;
      }
      arr = (function() {
        var _results;
        _results = [];
        for (i in this._value) {
          if (i >= n1 && i < n2) {
            _results.push(this._value[i]);
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      }).call(this);
      return arr.join('');
    };

    MyString.prototype.split = function(str) {
      var arr, i, s;
      s = '';
      arr = [];
      for (i in this._value) {
        if (this._value[i] === str) {
          arr.push(s);
          s = '';
        } else {
          s += this._value[i];
        }
      }
      arr.push(s);
      return arr;
    };

    MyString.prototype.reverse = function() {
      var arr, i;
      arr = [];
      for (i in this._value) {
        arr.unshift(this._value[i]);
      }
      return arr.join('');
    };

    return MyString;

  })();

  s = new MyString('hello');

  console.log(s.length);

  console.log(s[0]);

  console.log(s.toString());

  console.log(s.valueOf());

  console.log(s.concat(' world'));

  console.log(s.charAt(1));

  console.log(s.charAt('2'));

  console.log(s.charAt('e'));

  console.log(s.slice(1, 3));

  console.log(s.slice(0, -1));

  console.log(s.split('e'));

  console.log(s.split('l'));

  console.log(s.reverse());

}).call(this);
