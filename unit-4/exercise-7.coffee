# 创建一个MyMath对象，包含rand、min、max方法

MyMath = {}
# 不用Math.random的话，这个随机抛出完全没头绪
# MyMath.rand = (min, max, inclusive) ->
#     inclusive = inclusive or true
#     

MyMath.min = (array) ->
    for num, i in array
        for j in [0..array.length - 2 - i]
            if array[j] > array[j + 1]
                tmp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = tmp
    return array[0]

MyMath.max = (array) ->
    for num, i in array
        for j in [0..array.length - 2 - i]
            if array[j] > array[j + 1]
                tmp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = tmp
    return array[array.length - 1]




console.log MyMath.min [6,8,3,4,6,5,2,9,7]
console.log MyMath.max [12,522,473,3,21,2332,654,23]
