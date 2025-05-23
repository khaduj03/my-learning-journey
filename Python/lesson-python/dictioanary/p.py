# car={"brand":"ford", "model":"mastung","year":2018 , "color":"black"}
# print(car)
# print(car["brand"])


# car["color"]="red"
# print(car["color"])


# car["doors"]=3
# print(car)

# del car["color"]
# print(car)



# car.clear()
# print(car)


# for item in car:
#     print(item)

# for item in car:
#     print(item ,":", car[item])


# print(list(car))
# print(tuple(car))


# print(car.keys())
# print(car.values())


# print(car.items())

# for key in car.items():
#     print(key)

# keys=list(car.keys())
# print(keys[-1])



# keys=list(car.keys())
# values=tuple(car.values())
# item=set(car.items())


# print(keys)
# print(values)
# print(item)

#=========================================================================================
#(42)
car={"brand":"ford", "model":"mastung","year":2018 , "color":"black"}
# car2=car.copy()
# print(car2)

# x= (("brand","ford"),("model", "mastung"),("year",2018))
# print(dict(x))


#__hash__()    baraye ramz guzary estafada mekunem

# password="123asd"
# a=password.__hash__()
# print(a)

#========================================================================
#(43)


# x=("key1", "key2", "key3")
# y=0

# thisdict=dict.fromkeys(x, y)
# print(thisdict)


# car={
#     "brand":"musting",
#     "model":"ptide",
#     "year":1889
# }

# x=car.pop("model")
# print(x)

# x= car.popitem()
# print(x)

# x=car.setdefault("color" , "withe")
# print(x)
# print(car)


# car.update({"color": "blue"})
# print(car)
#==================================================================================================
#(43)

car={"brand":"ford", "model":"musting", "year":2018}
# print("ford" in car)
# print("model" in car)
# print("color" in car.keys())
# print(2018 in car.keys())

# print(["brand", "ford"]in car.items())
# print(("model", "musting")in car.items())
# print(car.items())
#========================

# numbers = {"one":1, "two":[4,6,3], "three":3}
# x=(numbers["two"])
# x.sort()
# print(x)
#------------------------------

# dict1={"numbers":("my_list", [11,13,22])}
# print(dict1["numbers"][0][-1])
# print(dict1["numbers"][1][1])
#--------------------------------
# dict2={"class":{"student":{"name":"Mike", "marks":{"pyisic":1, "history":20}}}}
# print(dict2["class"]["student"]["marks"]["history"])
#========================================
car={"brand":"ford", "model":"musting", "year":"2018"}


#   my slution

# new_list=[]
# for item in car:
#     print([item , car[item]])


#result i couldnt understand the question

#programmer slution

# keys=sorted(car.keys())
# values=sorted(car.values())
# print(keys)
# print(values)

#==================================


student={
    "aria":[14, 17, 20],
    "shima":[16, 16, 16],
    "morteza":[18, 19, 20]
}
# for person in student:
#     mark1, mark2 , mark3=student[person]

#     if (mark1>=16) and (mark2>=16) and (mark3>=16):
#         print(person)


#====================================
# for person in student:
#     # mark1, mark2 , mark3=student[person]

#     # if (mark1>=16) and (mark2>=16) and (mark3>=16):
#     #     print(person)
#      for num in student[person]:
#         if num==14:
#             print(person)

#programmer slution
# mark=14
# for person in student:
#     if mark in student[person]:
#         print(person)

#+=======================================

# string="Aabcd efgh Ijkl oo mkx"
# vowels=["a", "e", "o", "i", "u"]


# my_string=string.lower().replace(" ", "")
# mydict={}

# for char in string:
#     if char in vowels and char not in mydict:
#         mydict[char]=my_string.count(char)

# print(mydict)



# name="khadija wakili"
# name=name.lower()
# name2=list(name)

# dictname={}

# for char in name2:
#     if char in name2 and char not in dictname:
#         dictname[char]=name.count(char)


# for keys in dictname:
#     print(keys, dictname[keys])

# my_dict={}
# my_string=string.lower().replace(" ", "")


# for char in my_string:
#     if (char in vowels) and (char not in my_dict):
#         my_dict[char]=my_string.count(char)

# print(my_dict)


#=============================================

names=["negin", "shirin", "aria", "farhad"]
ages=[22,26,24,28]
scores=[25,85,59,60]

#icoudnt to find slution
# for name in jam:
#     one.append(name[0])
#     two.append(name[1])
#     three.append(name[2])
#     four.append(name[3])

# new_list=[]
# kays={}
# values={}
# for num in mylist:
#     if num[2]>=60:
#         new_list.append(num)

# print(new_list)
#----------------------------
#------------------
# my_dict={}


# for i in range(len(names)):
#     if scores[i]>=60:
#         my_dict[names[i]]=[ages[i], scores[i], "passed"]
#     else:
#         my_dict[names[i]]=[ages[i], scores[i], "falied"]

# print(my_dict)

#+===============================================================================
info={'name':'morteza', 'age':23, 'salary':1300, 'city':'new uork'}
keys=['name', 'salary']

# new_dict={}
# for key in keys:
#     new_dict[key]=info[key]

# info["location"]=info.pop('city')
# print(info)
# print(new_dict)
# #===========================================
scores={
    'physices':17,
    'math':15,
    'history':20
}
# my slution

# maxi=20
# mani=15
# for scor in scores:
#     if scores[scor]<=mani:
#         print(scor)


#programmer slution

# values=list(scores.values())
# keys=list(scores.keys())

# index=values.index(min(values))
# lessons=keys[index]

# print(lessons)


# 2
# values=list(scores.values())
# minimum=min(values)

# for lessons in scores:
#     if scores[lessons]==minimum:
#         print(lessons)

#============================================================
# number= (input("inter your number: "))
# my_dict={
#     '0':'zero',
#     '1':'one',
#     '2':'two',
#     '3':'three',
#     '4':'four',
#     '5':'five',
#     '6':'six',
#     '7':'seven',
#     '8':'eight',
    

# }

# words_list=[]

# for digit in number:
#     words_list.append(my_dict[digit])

# print('  '.join(words_list))

#===================================================================================================================================

numbers=[
    [3,5,2,7],
    [33, 11, 22, 13], 
    [-15 , -3, -17 , -7],
    [12.5, 19.98 , 17.73, 15.22]

]

# my  second slution 
dictm={}
# for key , value in enumerate(numbers):
#     dictm[" row {} ".format(key)]=max(value)

# print(dictm)
    
# print("___________________________________")
# #my slution

# my_dict={}
# listme=[]
# x=[]
# for index in numbers:
#     x.append(numbers.index(index))
# for num in numbers:
#     listme.append(max(num))


# my_dict={
#     'row 0 max':listme[0],
#     'row 1 max':listme[1],
#     'row 2 max':listme[2],
#     'row 3 max':listme[3],

# }
# print(my_dict)


# #programmer slution
# my_dict={}
# for row in numbers:
#     index=numbers.index(row)
#     key="row{}max".format(index)
#     my_dict[key]=max(row)

# print(my_dict)

#==============================================================



