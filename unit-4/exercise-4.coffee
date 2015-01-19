# 自己构造一个String对象的函数构造器，并通过固定的检验

class MyString
    constructor: (value) ->
        @_value = value
        for i of value
            this[i] = value[i]
        @length = parseInt(i) + 1

    toString: ->
        return @_value + ''
    @::valueOf = @::toString
    concat: (str) ->
        @_value + '' + str
    charAt: (index) ->
        index = parseInt index
        if isNaN index then @_value[0] else @_value[index]
    slice: (n1, n2) ->
        n1 = n1 + @length if n1 < 0
        n2 = n2 + @length if n2 < 0
        arr = for i of @_value
            if i >= n1 and i < n2
                @_value[i]
        return arr.join('')
    split: (str) ->
        s = ''
        arr = []
        for i of @_value
            if @_value[i] is str
                arr.push(s)
                s = ''
            else 
                s += @_value[i]
        arr.push(s)
        return arr
    reverse: ->
        arr = []
        for i of @_value
            arr.unshift(@_value[i])
        return arr.join('')

s = new MyString 'hello'
console.log s.length
console.log s[0]
console.log s.toString()
console.log s.valueOf()
console.log s.concat(' world')
console.log s.charAt 1
console.log s.charAt '2'
console.log s.charAt 'e'
console.log s.slice 1, 3
console.log s.slice 0, -1
console.log s.split 'e'
console.log s.split 'l'
console.log s.reverse()
