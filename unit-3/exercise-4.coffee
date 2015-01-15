# 以下所有示例都会弹出“Boo!”警告，解释其中的原因

# 1
f = console.log 
eval 'f("Boo!")'

# eval解析了字符串并执行，相当于执行了f("Boo!")

# 2
e
f = console.log 
eval('e = f')('Boo!')

# eval中的字符串解析后，原语句等价于(e = f)('Boo!'),e = f返回值为e，然后通过e('Boo!')调用

# 3
(
    ->
        console.log
)()('Boo!')

# return 出了log 函数并执行