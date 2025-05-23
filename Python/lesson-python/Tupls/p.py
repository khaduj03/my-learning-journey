#(37)
#tupls
#+====================================
# t= 1,2,3,(3,4,5), -7
# print(t)
#===============================================
# mytuple=("khadija", "javed", "mohib", "khadija")
# print(mytuple.count("khadija"))
# print(mytuple.index("mohib"))
# print("---".join(mytuple))
#===============================================
#(38)

# my_tuple=(True , False , 85)
# temp=list(my_tuple)
# temp[1]="hello"
# temp.remove(85)
# temp.append(999)
# my_tuple=tuple(temp)
# print(my_tuple)
#_-----------------------------


# x=("apple", "kiwi")
# y=("samsung", "lg")
# print(id(x))
# x=x+y
# print(id(x))
# print(x)


#----------------------------


# my_info=("khadija" , "21", "lastname", "lomborzgini")
# fname , age, lastname ,*othrers=my_info
# print(fname, age, lastname)

#====================================
# x=("A", "b")
# y=2*x
# print(y)
#====================================================
# my_tuple=(85,89,85)

# are_the_same=True
# for item in my_tuple:
#     if my_tuple[0]==item:
#         continue
#     else:
#         are_the_same=False

# print(are_the_same)

#=============================================================================================================
#(38)
#my slution

# my_list=[['d', 'k', 'a'], ['y', 'x', 'z'], ['m', 'n', 'p']]


# list1, list2, list3=my_list
# list1=tuple(list1[::-1])
# list2=tuple(list2[::-1])
# list3=tuple(list3[::-1])
# new_list=(list1, list2 , list3)
# print(new_list)

# print("*"*20)


# #programmer
# my_tuple=[]
# for item in my_list:
#     my_tuple.append(tuple(item[::-1]))

# my_tuple=tuple(my_tuple)
# print(my_tuple)

# #programmer slution 2

# my_tuple=[]
# temp=my_list.copy()

# for item in temp:
#     item.reverse()
#     my_tuple.append(tuple(item))

# my_tuple=tuple(my_tuple)
# print(my_tuple)

#+===============================================================================================
student=(("A",7,10,13), ("C",20, 20, 20), ("B", 6,11,14), ("D", 20, 20 ,20))

#my slution which i couldnt
# name=[]
# numbers=[]

# middle=0
# for item in student:
#     stu=[]
#     number=[]
#     stu, *number=list(item)
#     for i in number:
#         middle+=i
#     numbers.append(middle)
#     name.append(stu)  
# print(numbers)
# print(name)


#+==========================================================================================
#programmer

# student=(("A",7,10,13), ("c",20, 20, 20), ("B", 6,11,14), ("d", 20, 20 ,20))
# my_tuple=[]

  
# for name, *marks in student:
#     average=sum(marks)/len(marks)
#     my_tuple.append((name , average))


# my_tuple=sorted(my_tuple, reverse=True)
# my_tuple=tuple(my_tuple)

# print(my_tuple)
#=======================================================================================================
rankings=(("oxford", 2), ("stanford", 3), ("mit", 1), ("cambridge", 4))

#icouldn tto solve 
# rank=list(ramkings)
# new=[]
# for i in rank:
#     new.append(list(i))

# # print(new)

# for i in new:
#     print(i)
#-------------------------

# temp=list(rankings)
# ranks, my_tuple=[], []

# for uni_name , uni_rnk in rankings:
#     ranks.append(uni_rnk)


# ranks.sort(reverse=False)

# for rank in ranks:
#     for university in temp:
#         uni_name , uni_rnk=university

#         if rank == uni_rnk:
#             my_tuple.append(university)
#             temp.remove(university)

# print(rankings)
# print(my_tuple)
#+=============================================================================================
#(39)

# from albums_file import albums_list

# SONG_LIST=3
# SONG_TITLE=1

# while True:
#     print("albums list (invalid chice axite):\n")
#     for index, (album_title , artist , year , songs)in enumerate(albums_list):
#         print("{}. {}by {}({})".format(index+1, album_title , artist , year))
    
#     choice = int(input("\n please choose an albims:"))
#     if 1<=choice<=len(albums_list):
#         songs_list=albums_list[choice-1][SONG_LIST]
#     else:
#         break

#     for song  in songs_list:
#         song_number, song_title=song
#         print("{}.{}".format(song_number, song_title))

#     choice = int(input("\n please choose  asong:"))
#     if choice in range(1, len(songs_list)+1):
#         print("="*len("{}is now playing".format(songs_list[choice-1][SONG_TITLE])))
#         print("{}is now playing".format(songs_list[choice-1][SONG_TITLE]))
#         print("="*len("{}is now playing".format(songs_list[choice-1][SONG_TITLE])))

#     else:
#         print("nothing to play!!!!")

#==============================================================================================================
# (40)
#(41)
from food import foods , repcipes
from fridge import *



while True:
    print("please choose your food (0 to exit)")
    print("-"*len("please choose your food (0 to exit)"))
    for index, foodm in enumerate(repcipes):
        print("{}) {}".format(index+1 , foodm))

    
    for inde in enumerate(repcipes):
        print("mavad lazem baray{}".format(index+1))
        choice=int(input())
        if 1<=choice<=(len(repcipes)):
            mlist=repcipes[choice-1][3]
            print(mlist)
        else:
            break


    

    







