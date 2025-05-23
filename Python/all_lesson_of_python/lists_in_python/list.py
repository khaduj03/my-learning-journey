# my_list=["car", "home", "phon"]
# print()(len(my_list))


# list1 = ["apple", "banana", "cherry"]
# list2 = [1, 5, 7, 9, 3]
# list3 = [True, False, False]

# thislist = ["apple", "banana", "cherry"]
# print()(thislist[1])

# thislist = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
# print()(thislist[::4])

# thislist = ["apple", "banana", "cherry"]
# if "banana" in thislist:
#      print()("yes banana is in this list..")


# my_list=["apple", "banana", "orange", "kiwi"]
# if "app" in my_list:
#      print()("you found your frieut")
# else:
#      print()("sorry i can not find your friut")

# my_list=["apple", "orange", "kiwi"]
# #my_list[2]="banana"
# #my_list[1:2]="aa","bb", "cc"
# print()(my_list)

# thislist = ["apple", "banana", "cherry"]
# thislist[1:2] = ["blackcurrant", "watermelon"]
# print()(thislist)

# thislist = ["apple", "banana", "cherry"]
# thislist.insert(2, "watermelon")
# print()(thislist)


# my_list=["car", "phon", "home"]
# my_list.insert(3,"sleep")
# print()(my_list)


# my_list=["hand", "finger", "food", "body"]
# my_list.insert(3, "head")
# print()(my_list)


# my_list=["khadija", "khaduj",]
# my_list.append("saturn")
# print()(my_list)


# my_box=["bird", "dog", "hen"]
# my_box.append("frog")
# print()(my_box)



# thislist = ["apple", "banana", "cherry"]
# tropical = ["mango", "pineapple", "papaya"]
# thislist.extend(tropical)
# print()(thislist)

# list_1=["one", "two", "three"]
# list_2=["four", "five", "six"]
# list_1.extend(list_2)
# print()(list_1)


# list1=["computer", "phon"]
# list2=["food", "coffee"]
# list1.extend(list2)
# print()(list1)


# my_list=["khadija", "khaduj"]
# my_tuple=("saturn", "saad")
# my_list.extend(my_tuple)
# print()(my_list)

# my_list=["khadija", "khaduj"]
# my_tuple=("saturn", "saad")
# my_list.extend(my_tuple)
# print()(my_list)

# my_list=["khadija", "khaduj", "saturn", "saad"]
# my_list.remove("saad")
# print()(my_list)

# my_box=["a", "b", "c" , "d"]
# my_box.remove("a")
# print()(my_box)

# my_fovrate_friut=["banana", "orange", "apple", "kiwi"]
# my_fovrate_friut.pop(-3)
# print()(my_fovrate_friut)


# my_list=["a", "b", "d", "c"]
# del my_list[2]
# print()(my_list)



# my_bag=["a", "c","v", "m"]
# del my_bag[3]
# print()(my_bag)

# my_bag=["a", "c","v", "m"]
# my_bag.clear()
# print()(my_bag)




#loop in the list

# thislist = ["apple", "banana", "cherry"]
# for x in thislist:
#   print()(x)

# thislist = ["apple", "banana", "cherry"]
# for i in range(len(thislist)):
#   print()(thislist[i])


# thislist = ["apple", "banana", "cherry"]
# i = 0
# while i < len(thislist):
#   print((thislist[i]))
#   i = i + 1


# our_list=["khadija", "khauj", "saturn"]
# i=0
# while i<len(our_list):
#   print((our_list[i]))
#   i=i+1


# thislist = ["apple", "banana", "cherry"]
# [print(x) for x in thislist]


# my_list=["khadija", "khaduj", "khado"]
# [print(x) for x in my_list]

# my_book=["history", "roman", "math"]
# [print(a) for a in my_book]


# my_library=["tarikh", "math", "art"]
# [print(x) for x in my_library]

# box=["phon", "book", "car", 'home']
# [print(x) for x in box]


#Python - List Comprehension

# fruits = ["apple", "banana", "cherry", "kiwi", "mango"]
# newlist = []

# for x in fruits:
#   if "a" in x:
#     newlist.append(x)

# print(newlist)


# my_book=["art", "math", "history"]
# my_new_list=[]
# for x in my_book:
#   if "a" in x:
#     my_new_list.append(x)

# print(my_new_list)



# my_box=["banana", "apple", "orange", "kiwi", "jdjud", "susdiu"]
# my_new_box=[]

# for x in my_box:
#      if "s" in x:
#           my_new_box.append(x)

# print(my_new_box)



# my_list=["phon", "photo", "computer", "kiwiw", "banana"]
# my_new_list=[]
# for x in my_list:
#      if "o" in x:
#           my_new_list.append(x)
# print(my_new_list)


# my_phon=["galliry", "call", "message", "telegram"]
# my_new_phon=[]
# for x in my_phon:
#      if "a" in x:
#           my_new_phon.append(x)

# print(my_new_phon)

# fruits = ["apple", "banana", "cherry", "kiwi", "mango"]

# newlist = [x for x in fruits if "a" in x]

# print(newlist)


# my_phon=["galliry", "call", "message", "telegram"]
# my_new_phon=[x for x in my_phon if "a" in x]
# print(my_new_phon)



# family=["mother", "father", "brother", "sister"]
# family_2=[a for a in family if "s" in a]
# print(family_2)


# my_friends=["good", "pacient","beauteful"]
# my_best_friend=[x for x in my_friends if "p" in x]
# print(my_best_friend)

# list_1=["apple", "banana", "orange"]
# newlist = [x if x != "banana" else "orange" for x in list_1]
# print(newlist)

# my_name=["khadija", "wakili","ahmad", "mohib"]
# new_list=[a if a!= "ahmad" else "jan" for a in my_name]
# print(new_list)


# name=["khadija", "javed", "mohib", "aaaa"]
# name=[ nam if nam!="aaaa" else "ahmad" for nam in name]
# print(name )


# my_brother =["javed", "mohib", "sebgat", "mojib"]
# my_brother = [brother if brother!="mojib" else "javed " for brother in my_brother]
# print(my_brother)

# my_brother[-1]="ahmad"
# print(my_brother)


# Condition
# my_list=["apple", "kwiw", "orange", "banana"]
# newlist = [x for x in my_list if x != "apple"]
# print(newlist)

# my_list=["apple", "kwiw", "orange", "banana"]
# my_new_list=[]
# for x in my_list:
#      if x!="apple":
#           my_new_list.append(x)

# print(my_new_list)



# my_names=["khadija", "khaduj", "saturn","khado", "ahmad" ]
# my_names=[x for x in my_names if x!="ahmad"]
# print(my_names)

# my_names=["khadija", "khaduj", "saturn","khado", "ahmad" ]
# my_names.remove("ahmad")
# print(my_names)

# my_names=["khadija", "khaduj", "saturn","khado", "ahmad" ]
# del my_names[-1]
# print(my_names)


# my_names=["khadija", "khaduj", "saturn","khado", "ahmad" ]
# my_names.pop(0)
# print(my_names)


#Iterable

# newlist = [x for x in range(10) if x < 5]
# print(newlist)



# my_list=[a for a in range(12) if a<5]
# print(my_list)


# our_number=[num for num in range(15) if num<10]
# print(our_number)


# phon_number=[ a for a in range(20) if a%3==0]
# print(phon_number)

#Python - Sort Lists

# thislist = ["orange", "mango", "kiwi", "pineapple", "banana"]
# thislist.sort()
# print(thislist)


# name=["ahmad", "javed", "sabor", "mahdi"]
# name.sort(reverse=True)
# print(name)

# thislist = [100, 50, 65, 82, 23]
# thislist.sort()
# print(thislist)

# number=[3,1,23,5,8,5,3,21,]
# number.sort()
# print(number)


#Customize Sort Function

def myfunc(n):
  return abs(n - 50)

thislist = [100, 50, 65, 82, 23]
thislist.sort(key = myfunc)
print(thislist)

def sort_list(a):
  return 