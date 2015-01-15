(function() {
  var getRGB;

  getRGB = function(color) {
    var b, colorArr, colorData, g, i, r, result;
    if (Array.prototype.toString.call(color).indexOf('String') === -1) {
      return;
    }
    color = color.replace('#', '');
    if (color.length === 3) {
      colorData = color.split('');
      r = '0x' + colorData[0] + colorData[0];
      r = parseInt(r, 16);
      g = '0x' + colorData[1] + colorData[1];
      g = parseInt(g, 16);
      b = '0x' + colorData[2] + colorData[2];
      b = parseInt(b, 16);
      result = "rgb( " + r + ", " + g + ", " + b + ")";
      return result;
    } else {
      colorArr = (function() {
        var _i, _results;
        _results = [];
        for (i = _i = 0; _i <= 2; i = ++_i) {
          r = color.substring(i * 2, (i + 1) * 2);
          _results.push(r = parseInt(r, 16));
        }
        return _results;
      })();
      result = "rgb( " + colorArr[0] + ", " + colorArr[1] + ", " + colorArr[2] + ")";
      return result;
    }
  };

  console.log(getRGB('#f00'));

  console.log(getRGB('#9f2'));

  console.log(getRGB('#abcdef'));

  console.log(getRGB('#99ff22'));

  console.log(getRGB('#000'));

  console.log(getRGB('#000000'));

}).call(this);
