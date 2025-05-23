import random 



# javab=random.randint(1 , 13)
# hads=None

# print(javab)
# print()

# while hads!= javab:
#     hads=int(input("inter:"))

#     if hads==0:
#         print("out")
#         print()
#     elif javab==hads:
#         print('won')
#         print()
#         break
#     elif hads < javab:
#         print("bigger")
#         print()
#     else:
#         print("smaller")



# random.seed(10)
# print(random.random())


# random_number= random.random()
# print(random_number)

#chioce
# my_list=[1,2,4,5,8,4,5,8]
# random_element=random.choice(my_list)
# print(random_element)


#shuffle
# my_list=[39 , 4, 5,  8, 2, 2, 2, 24, 4, 5,53 ,43 ]
# random.shuffle(my_list)
# print(my_list)



#randrange
# random_number=random.randrange(1, 10)
# print(random_number)



#choices

# my_list=[1,2,3,4]
# weights=[0.1 , 0.2 , 0.3 , 0.4 ]
# random_element=random.choices(my_list , weights , k=4)
# print(random_element)

#-------------------------------------------
#seed
# random.seed(123)
# random_1=random.random()
# random_2=random.random()
# print(random_1)
# print(random_2)

# random.seed(10)
# print(random.random())

# random.seed(10)
# print(random.random())
#---------------------------------------------------------------------------
# print(random.getstate())

# #print a random number:
# print(random.random())

# #capture the state:
# state = random.getstate()

# #print another random number:
# print(random.random())

# #restore the state:
# random.setstate(state)

# #and the next random number should be the same as when you captured the state:
# print(random.random())

#---------------------------------------------------------

# print(random.getrandbits(10))
#----------------------------------------------------
# print(random.randrange(3, 9))