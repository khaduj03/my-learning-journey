# def my_dec(func):
#      def warpar():
#           print("srarting")
#           func()
#           print("finnishing")
#      return warpar

# def test():
#      print("from finc")


# m=my_dec(test)
# m()


def sumNumbers(list):
    result=0
    for i in list:
        if i>0:
            result +=i
    return result



num=sumNumbers([1,-4,7,12])
print(num)
        
        



# def me(fn):
#      def she():
#           print("srart")
#           fn()
#           print("finish")
#      return she

# def it():
#      print("it is apple")


# objct=me(it)
# objct()



# from datetime import datetime

# def time(func):
#      def my_time():
#           start=datetime.now()
#           func()
#           finish=datetime.now()
#           timing=finish-start
#           print(f" function runing :{timing}")
#      return my_time

# @time
# def tets():
#      sum=0
#      for i in range(100000000):
#           sum+=i
#      return sum

# tets()

# from datetime import datetime
# def my_time(func):
#      def time():
#           start=datetime.now()
#           print(f"you strated in this time:{start}")
#           func()
#           finish=datetime.now()
#           print(f"you finishied in this time:{finish}")
#           during_time=finish-start
#           print(f"runed during this time:{during_time}")
#      return time

# @my_time
# def timing():
#      sum=10
#      for i in range(10000000):
#           sum*=i
#      return sum

# timing()