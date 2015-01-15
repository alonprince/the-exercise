# 下面的log的是什么内容

a = 1
f = ->
    a = 2
    n = ->
        console.log  a
    n()
f()

# my answer is 2
# the answer is 2