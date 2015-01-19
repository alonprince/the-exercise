# 下面的执行结果是

C = ->
    @a = 1
    return false
console.log typeof new C()

# my answer is Boolen
# the answer is object

# question
# 为什么这里返回了false,new出来的C不是false?如果我把这里的false替换成了{}，new出来的就是{}啊
# 同理，如果返回字符串和数字也不行

# answer
# 如果构造函数返回的是基本类型，不用new来构造对象就等于该构造函数的返回值，如果用new的话，构建的对象就是构造函数的prototype
