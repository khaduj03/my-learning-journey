#map()
# mylist=[1,2,3,4]
# def reduce(num):
#      return num -1 

# my_new_list=list(map(reduce , mylist))
# print(my_new_list)


# my_list=[1,4,3,2,6,5,4,4]


# def sm(m):
#      return m*3


# my_new_list=list(map(sm, my_list))
# print(my_new_list)

# my_new_list=list(map(lambda m:m*4, my_list))
# print(my_new_list)


# a=[1,3,4,5,6]

# def h(m):
#      return m*7



# b=list(map(h,a))
# print(b)
#filter


# my_list=[12,23,45,56,66]

# def nam(n):
#      return n%3==0

# new_list=list(filter(nam, my_list))
# print(new_list)



# list_1=[23,45,67,65,4,3,322,2]

# def nam(a):
#      return a%2==0

# list_2=list(filter(nam, list_1))
# print(list_2)


#reduce
# my=[233,43,3,45,34,3,32]
# from functools import reduce

# def red(n1, n2):
#      return n1+n2

# result=reduce(red,my)
# print(result)