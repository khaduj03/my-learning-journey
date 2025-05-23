# gamers=[1212,2323,232,3434,4545]
# cheaters=[874,8374,2323]

# for cheater in cheaters:
#     if cheater in gamers:
#         gamers.remove(cheater)

# print(gamers)



# gamers=[123,564,3444,4555,5666,4443]
# cheaters=[9869,123,9843]

# for cheater in cheaters:
#     if cheater in gamers:
#         gamers.remove(cheater)

# print(gamers)


# ip=[
#     3,5,7,11,
#     13,22,33,40,
#     44,55,66,77,
#     85,88,99,100
# ]
# main_mani, main_maxi=10,30
# start,end='-','-'

# ip.pop(-6)
# print(ip)

# del ip[-6]
# print(ip)

# for index,valu in enumerate(ip):
#     if valu>=main_mani:
#         end=index
#         break


# for index,valu in enumerate(ip):
#     if valu<=main_maxi:
#         end=index
#     else:
#         break


# del ip[:end+1]
# print(ip)




ip=[
    3,5,7,11,
    13,22,33,40,
    44,55,66,77,
    85,88,99,100
]



# main_maxi, main_mani=30,10
# start,end='-','-'

# for index, valu in enumerate(ip):
#     if valu>=main_mani:
#         start=index
#         break

# for index , valu in enumerate(ip):
#     if valu<=main_maxi:
#         end=index
#         break

# del ip[:end+1]
# print(ip)

# ip=[
#     3,5,7,11,
#     13,22,33,40,
#     44,55,66,77,
#     85,88,99,100
# ]
# main_mani, main_maxi=10,30
# start,end='-','-'


# for index in range(len(ip)-1,-1,-1):
#     if ip[index]>=main_maxi:
#         start=index
#     else:
#         break

# del ip[start:]
# print(ip)



#exaple new

ip=[
    3,5,7,11,
    13,22,33,40,
    44,55,66,77,
    85,88,99,100
]

main_mani=10
main_maxi=80
# for x in range(len(ip)-1,-1,-1):
#     if (ip[x]<=10) or (ip[x]>=80):
#         del ip[x]

# print(ip)
#like other way sloving exaple
# top=len(ip)-1

# for x,y in  enumerate(reversed(ip)):
#     if (y<main_mani)or (y>main_maxi):
#         del ip[top-x]


# print(ip)





#new exaple 

emails=[
    ['ali', 'alll', 'alll'],
    ['zahra', 'kaveh', 'lalah','moratza'],
    ['alll', 'nilofaar','alll', 'kayvan','alll'],
    ['mehrzad', 'mahdi','erfn','negen','sonia','shahin' ] 
]

# for email_list in emails:
#     if 'alll' not in email_list:
#         print(email_list)
#         for email in email_list:
#             print(email)
#             print()
#     else:
#         print('{}alll scor:{}\n'.format(email_list,email_list.count('alll')))




#from other way

# for email_list in emails:
#     for email in email_list:
#         if email!='alll':
#             print(email,end=' ')
#     print()


#new example



# # cars=["ford", 'ferrari','lamborghini']
# # print('--'.join(cars))

# #excersices

# x='mississipi'
# print(x[5::-2])


# y='bugnama'
# print(y.ljust(10,'x'))
# print(y.rjust(10,'x'))

# q='abcdececed'
# print(q.rfind('c',3,10))

# w='bye bye'
# print(w.strip('b'))


# e=['lg','sony','apple']
# print('----'.join(e))


# r='hello hello'
# print(x.count("h",1,7))


# x="BmW feRRarT"
# print(x.swapcase())

# x="AND"
# print(x.center(9,"*"))


# x="RTX 3070"
# print(x.index("0"))


#example


# my_str="AbC dE fGh Iuo"
# sum=0
# for letter in my_str.lower():
#     if letter not in "aeoiu":
#         sum+=1
# print(sum)





# my_list="   ali bugnamazssaffdh diikala sina   "
# new=my_list.strip()
# new_list=new.split()
# print(new_list)
# lenght=0
# lonhest=''
# for word in new_list:
#     if len(word)>=lenght:
#         lenght=len(word)
#         lonhest=word
# print(lonhest)        




# str1, str2="SELENT","lesent"
# 
# if sorted(str1.lower())==sorted(str2.lower()):
#     print("True")
# else:
#     print("FAlse")




# message="Farda Saat 7 Sobh bia Kooh Navardi"

# character_set="abcdefghijklmnopqrstwxyzABCDEFGHIJKLMNOPQRSTUVWXZ123456789"
# secret_key="Dd18Abz2EqNPW hYojBvtVlpXaH6msFUICg4o0KZwJeryQx3f9kSinRu5L7cGM"

# encryted_message=''

# for char in message:
#     encryted_message+=secret_key[character_set.find(char)]

# print(encryted_message)



#===========================================================================================
# str1, str2="SELENT","smment"
# str1,str2=str1.lower(),str2.lower()
# if str1==str2:
#     print(0)
# elif len(str1)==len(str2):
#     diffrence=0
#     for i in range(len(str1)):
#         if str1[i]!=str2[i]:
#             diffrence+=1
#     if diffrence==1:
#         print(1)
#     else:
#         print(2)
# else:
#     print(2)

#=====================================================================================================
#exampale two1:
# list1 =[1,2,3,"bugnama" , 3, 2, 1]

# #(my slution)

# list2=[list1[i] for i in range(len(list1)-1 , -1 , -1)]
# print(list2)
# if list2==list1:
#     print(True)
# else:
#     print(False)

# #(slution of programmer)
# list3=list1.copy()
# list3.reverse()
# print(list1==list3)

# #slution 2 of programmer
# list4=list1[::-1]
# print(list1==list4)
#====================================================================================================
# list1=[1,2,3,4,5,6]
# list2=[1,2,3,4,5,6,7]

#my slution
# list3=list1+list2
# print(list3)

# #I couldnt to  find sluttion about how I cant sort .........

# #slutions programmer
# temp=list1 +list2
# new_list=[]

# for item in range(len(temp)):
#     new_list.append(max(temp))
#     temp.remove(max(temp))

# print(new_list)
#===========================================================================================================
# list1=[1,2,3]
# list2=[4,5,6]

#my slution

# new_list=[]
# count=0
# list3=list1+list2
# for i in list3:
#     if i%2!=0:
#         i+=1
#         new_list.append(i)
#     else:
#         new_list.append(i)

# print(new_list , count)
#==============================
# slutions programmer
# temp=list1+list2
# new_list , total=[], 0

# for number in temp:
#     if (number%2)==1:
#         total+=number
#         new_list.append(number+1)
#     else:
#         new_list.append(number)


# print(new_list , total)

#==================================================================================================

# list1 =[ 'ali', '     ' , 'niloofar', '     ', 'mortaza']
# list2=[list1[i] for i in range(len(list1)-1, -1, -1)]
#i couldnt to fond slutin

#the slution of programer 
# new_list=[]

# for item in list1[::-1]:
#     if item.isspace():
#         new_list.append("*")
#     else:
#         new_list.append(item)
# print(new_list)

#==========================================================================================
# l='reza dolati 01'.split(" ")
# print(l)


# l='raza dolati 01 '.split('d')
# print(l)


