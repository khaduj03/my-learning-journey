# # def my_function(fname):
# #   print(fname + " Refsnes")

# # my_function("Emil")
# # my_function("Tobias")
# # my_function("Linus")



# # def function(name):
# #     print(f"this is my name {name}")


# # function("khadija")

# # def student(*name):
# #     print(f"they are our student school{name}")



# # student("khadija", "javed", "mohib")



# # def my_function(**kid):
# #   print("His last name is " + kid["lname"])

# # my_function(fname = "Tobias", lname = "Refsnes")



# # def sisters(**sister):
# #     print(f"the las name of "+sister["lname"])


# # sisters(name="khadija", lname="wakili")


# # def brothers(**names):
# #     print(f"the frisname is"+names["fname"])


# # brothers(fname="javed", lname="wakili")

# # def friut(food):
# #     for x in food:
# #         print(x)


# # mylist=["kiwi","orange","apple"]
# # friut(mylist)



# # def my_function(x):
# #   return 5 * x

# # print(my_function(3))
# # print(my_function(5))
# # print(my_function(9))


# # def tri_recursion(k):
# #   if(k > 0):
# #     result = k + tri_recursion(k - 1)
# #     print(result)
# #   else:
# #     result = 0
# #   return result

# # print("\n\nRecursion Example Results")
# # tri_recursion(6)



# # def myfunc(n):
# #   return lambda a : a * n

# # mydoubler = myfunc(2)
# # mytripler = myfunc(3)

# # print(mydoubler(11))
# # print(mytripler(11))

# #---------------------------------------------------------------------------
# #poling room 

# # def is_palindrome(world):
# #     if world==world[::-1]:
# #         print("yes")
# #     else:
# #         print("no")


# # is_palindrome("khadija")
# # is_palindrome("level")

# #beter code

# # def is_palindrome(world):
# #     return world.casefold()==world[::-1].lower()


# # print(is_palindrome("level"))
# #---------------------------------------

# # def is_palindrome_sentence(sentence):
# #     string=""


# #     for char in sentence:
# #         if char.isalnum():
# #             string+=char
        
# #     print(string)
# #     return string.casefold()==string[::-1].casefold()

# # user_input=input(">>")
# # if is_palindrome_sentence(user_input):
# #     print(f"{user_input} is palindrome")
# # else:
# #     print(f"{user_input} is not")
# #-------------------------------------------------------------
# # def  is_intenger():
# #     while True:
# #         temp=input(">")

# #         if temp.isnumeric():
# #             break
# #         else:
# #             print("Invalid input!!!!")
        
# #     return int(temp)


# # print(is_intenger())

# #or we can solve this puzzal from a easy way
# # def is_intenger():
# #     while True:
# #         temp=input(">")

# #         if temp.isnumeric():
# #             break
# #         print("Inviled input!!!")

# # x=is_intenger()
# # print(x)
# #-------------------------------------------
# # def multipy(a , b):
# #     return a*b


# # for i in range(1 , 10):
# #     for j in range(1,10):

# #         result=multipy(i , j)
# #         print(f"{i:2} x {j:2}={result:2}")

# #     print()

# #-------------------------------------------------
# #( 54)

# # def mult(a, b ):
# #     print(a*b)

# # result=mult(2,3)
# # print(result)




# # def say_hello(name , message="hi"):
# #     return f"{message} {name}"

# # print(say_hello("khadija"))
# # print(say_hello("khadija","hello"))



# # def get_net_price(price , discount):
# #     return price*(1-discount / 100)


# # print(get_net_price(100 , 10))
# # print(get_net_price(100 , 15))


# #---------------------------------56--------------------
#document

# def get_net_price(price:int|float , discount:float  , tax:int = 13):

#     """ a function to caculate the net price of a discounted product.

#     this function recevies the original price of the product and this is discounted
#     percentage , and then caculate the net price if the product.

#     pramas :
#     price original price 
#     Returns :
#     the net price of a discounted product.
#     Tax:value added tax
#     """
#     return price *((txa /100)+ 1-discount/100)

# #-----------------------------------------------
# # print(get_net_price(100 , 10))
# # print(help(get_net_price))
# # print(dir(get_net_price))
# # print(get_net_price.__annotations__)

# #the fuction which doesnt return any amount

# # def say_hello(name :str|int|float = "world " , message:str="hello")-> None:
# #     print(name , message )

# # say_hello()
# #-------------------------------------------------packing ---unpackig 
# # add_number=(1,3,2)
# # even_Number=[1,2,3]
# # print(*add_number)
# # print(*even_Number)
# # print(*(1,2,3))


# add_number=(1,2,3)
# even_Number=(1,2,3)
# letters={'a': 'b', 'c': 'd', 'g': 'f', 'h':'i ', 'j':'h'}
# # my_set={even_Number , add_number }
# # my_set={*even_Number , *add_number , *letters}
# # print(my_set, '\n')



# # my_set={*even_Number, *add_number, *letters.values()}
# # print(my_set)


# x=[1]
# print(*x)

#-------------------------------58-----------function
# def test(x, y,*z):
#     print(type(x))
#     print(y)
#     print(z)

# test(1,2,3,4,5,6,7)



# def calculate(oprater: str, *args: int|float)->int|float|str|None:
# def calculate(oprater , *args):
#     total=0
#     if args:
#         if oprater=="+":

#             for number in args:
#                 total+=number

#         elif oprater=="_":

#             total=args[0]
#             for number in args[1:]:
#                 total-=number
                
#         else:
#             return"wrong"
#         return total
#     return None

# x=[1,2,3,4]
# result=calculate("+", *x)
# print(result)



#-------------------------------------------
# def test(x, y ,**z):
#     print(x)
#     print(y)
#     print(z)
#     print(type(z))


# test(1,2,one=1 ,two=12 , three=23)


# def test(**kwargs):
#     print(kwargs)

#     for item in kwargs.items():
#         print(item)


# test(fname="ali" , lname="karirmi" , age=12)

#--------------------------------

# def student(*marks:int|float , **information:int|str) ->None:

# def student(*marks , **information) ->None:
#     avg=sum(marks)/len(marks)
#     print('information')

#     for info in information:
#         print(f'\n{info.capitalize():10}:{information[info]}')
    
#     print(f'\n avrage :{avg}')
#     print(f'marks :', end='')

#     for mark in marks:
#         print(mark , end='\t')


# student(10,15,20 , name="ali" , adress="tehran" , age=13)

#----------------------------------------------------------------
# print(*[1,2,3])
# print(1,2,3)

# print(**{'end':'ali' , 'age':12})
# print(end='ali', age=12)


# print(*[1,2,3], **{'end':'', "sep":','})
# print()
# print(1,2,3 , end='', sep=',')

#------------------------------60-------------------------
#tawaba is pesh sakhtashuda

#abs abistance between tho number...
#all
#any
#callebal
#dic
#dir
#divmod
#enumarate
#float
#help
#id
#input
#int()
#len
#list()
#max
#min
#pop

#pow
# x=pow(2,4,3)
# print(x)

# x=pow(2,5)
# print(x)

#reverse
#set
#sortdet
#str
#sum
#tuple
#type

#----------------------------------62---------------------------------
#map

# def add(number):
#      number+100



# acount_balancec=[20 , 85, 5000, 1024, 666]
# new_balance=list(map(add , acount_balancec))

# # for balance in acount_balancec:
# #     new_balance.append(add(balance))

# print(acount_balancec)
# print(type(new_balance))



# names=['ali' , 'ngin', 'aria', 'zahra']
# result=map(len , names)
# print(list(result))

# for name in names:
#     result.append(len(name))

# print(result)



# numbers=('10', '13.3', '20', '33.33')
# number=list(map(float, numbers))
# print(number)



# def pam(func , iterable):
#     ml=[]

#     for item in iterable:
#         ml.append(func(item))


#     return ml

# def add(num):
#     return num+10

# x=pam(add , [10 , 20 , 30])
# print(x)

# x=pam(len , ('ali', 'aria'))
# print(x)



# def merge(first_name , last_name):
#     return first_name +' ' +last_name



# fname = ('ali', 'zahra', 'halim')
# lname = ('karimi', 'amiri', 'abedi')

# fullname=tuple(map(merge , fname , lname))
# print(fullname)




# x=(2,3,4)
# y=[5,6,7]


# pow(2,5)
# result=tuple(map(pow , x, y))
# print(result)

#-----------------------------------------63
# ml=[1,2,3]
# x=range(*ml)
# print(x)



#filter(function , iterable)


# def above_poverty_line(salary):
#     return salary>=15


# def undeer_poverty_line(salary):
#     return salary<15
# salary_list=[5. , 15  , 17, 7, 4, 18, 8.5, 5.5]

# apl , upl=[], []
# apl=list(filter(above_poverty_line, salary_list))
# upl=list(filter(undeer_poverty_line , salary_list))
# print(apl)
# print(upl)
#----other way

# for salary in salary_list:
#     if salary>=15:
#         apl.append(salary)
#     else:
#         upl.append(salary)

# print(apl)
# print(upl)
#---------------------------64-----------------------
# def philter(function , iteration):
#     ml=[]
#     for item in iteration:
#         if function(item):
#             ml.append(item)
        
#     return ml

# def is_even(num):
#     return num%2==0

# def is_positive(num):
#     return num>=0


# numbers=(-3,-2,-1,0,1,2,3)
# print(philter(is_even , numbers))
# print(philter(is_positive , numbers))

# def power():
#     return num**2

# result=filter(callable, [13, max , 'ali' , is_even , set() , power])
# print(list(result))

#filter 


# result=filter(None , [1 , 0 , True , False , 'a' , '', None , ()])
# print(result)
# print(list(result))


#-------------------------------------------------------------------------------------------
#zip

# age=[20, 22, 24]
# name=('ali', 'negin', 'ariea')
# avg={1, 18 , 19}


# info=zip(age , name , avg)

# print(list(info))

# for i in info:
#     print(i)

# print(type (info))






# x= set(zip())
# print(x)



# x= zip(range(5) , range(10))

# print(list(x))








# letters=['a', 'b', 'c']
# numbers=(1,2,3)

# for item in zip(letters , numbers):
#     print(item)

# for i , a in zip(letters , numbers):
#     print(i , a)








# employes=(
#     ('ali' , 'karimi', 20),
#     ('zahra' , 'abidi' , 22),
#     ('nigin', 'abbdi', 24)
# )


# x=zip(*employes)
# print(list(x))

# fname , lname , age=zip(*employes)
# print(fname)
# print(lname)
# print(age)








# def xip(*iterables):
#     ml=[]
#     min_lenght=min(map(len , iterables))
#     print(min_lenght)

#     for index in range(min_lenght):
#         temp=[]

#         for item in iterables:
#             temp.append(item[index])


#         ml.append(tuple(temp))

#     return ml



# print(xip(range(10) , range(7) , range(20)))
# name=['ali' , 'aria' , 'negin']
# age=[13 , 15]
# y=xip(name , age)
# print(y)

#-----------------------------------------------------------

