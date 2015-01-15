# 编写一个十六进制转换为颜色的函数，转换为rgb表示方法

getRGB = (color) ->
    return if Array.prototype.toString.call(color).indexOf('String') is -1
    color = color.replace '#', ''
    if color.length is 3
        # 说明是简写，例如#fff
        colorData = color.split ''
        r = '0x' + colorData[0] + colorData[0]
        r = parseInt r, 16
        g = '0x' + colorData[1] + colorData[1]
        g = parseInt g, 16
        b = '0x' + colorData[2] + colorData[2]
        b = parseInt b, 16
        result = "rgb( #{r}, #{g}, #{b})"
        result
    else 
        # 说明是正常写法,#abcdef
        colorArr = for i in [0..2]
            r = color.substring i * 2, (i + 1) * 2
            r = parseInt r, 16
        result = "rgb( #{colorArr[0]}, #{colorArr[1]}, #{colorArr[2]})"
        result

console.log getRGB('#f00') # rgb( 255, 0, 0)
console.log getRGB('#9f2')
console.log getRGB('#abcdef')
console.log getRGB('#99ff22')
console.log getRGB('#000')
console.log getRGB('#000000')