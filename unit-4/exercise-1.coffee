# 描述下面代码中得this指向的对象

F = ->
    C = ->
        console.log this
        this
    C()
o = new F()

# my answer is window
# the answer is window