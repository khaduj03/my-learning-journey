# x=set()
# print(x)


# x={"ali" , 30 , 120}
# print(type(x))


# x.add("khadija")
# print(x)

# x.remove("ali")
# print(x)


# x={3,3,3,3,3,4,4,4,4,5,5,5,5}
# print(x)
# print(len(x))

# x={1,3,5,2,1}
# for i in x:
#     print(i)

# print(22 in x)
# print(44 in x)


# del x 
# print(x)

# x.clear()
# print(x)


# brands=["mobile", "apple", "spny" , "apple", "orange", "orange"]

# result=[]

# for brand in brands:
#     if brand not in  result:
#         result.append(brand)

# print(result)

#============================================================================================
#48

# cat1={"rose" , "gulab", "lale" , "shaqaq"}
# cat2={"gul", "shqaq" , "lale"}
# cat3={"qul", "shqaq" , "lale"}


# print(cat1.union(list(cat2) , tuple(cat3)))


# print(cat1|cat2|cat3)

#intersection shows for us which character is incloding all of our set
# print(cat1.intersection(cat2 , cat3))


#some work like insterction
# print(cat1 & cat2 & cat3)


# method intersection_update 
#i didnt understand

# cat1.intersection_update(cat2, cat3)
# print(cat1)
# print(cat2)
# print(cat3)



#tafazul th echaracters which dont are the all of our set
# print(cat1.difference(cat2 , cat3))

#or we can also use from -
# print(cat1-cat2)


# we can also update from difference 
# which i didnt understant good so i have to search and try to understand it
# print(cat1.difference_update(cat2 , cat3))
#===================================================================================================================
#49

#tafazul mataqarun the wich caracter are not mushtarac to both of set
# print(cat2.union(cat3)- cat2.intersection(cat3))
#or we can use from method


cat1={ "flower" , "pin" , "pincil" , "chier"}
cat2= { "door" , "dress" , "pin" }
cat3= { "flower" , "dress" , "chier"}
#-------------------------------------------
#اجتماع آن

# print(cat2.union(cat3) - cat2.intersection(cat3))

                            #اشزاک آن
#----------------------------------------

#برای آسان کردن آن می توانیم ار میتود استفاده کنیم
# print(cat2.symmetric_difference(cat3))

#-----------------------------------------
#به جای میتود ها میتوانیم از عمل گرا ها هم استفاده کنیم که از عمل گر کرت(^)استفاده میتوانیم
# print(cat2^cat3)

#we can update our set in tafazul mataqaren with

# cat2.symmetric_difference_update(cat3)
# print(cat2)
# print(cat1)
# print(cat3)

#or we can use from amalqarahaa
# cat2^=cat3
# print(cat2)
#or
# cat2=cat2^cat3
# print(cat2)

#-------------------------------

# print(cat1^cat2^cat3)
#--------------------------------

#abar majmaoaah
animals={"dog" , "cat" , "chicken" , "pik" , "cow"}
pit_animals={"cow" , "chicken" , "cat"}


#zer majmaoaah

# print(pit_animals.issubset(animals))

# print(animals.issubset(animals))

# print(animals.issubset(pit_animals))

#----------------------------------
# print(animals>=pit_animals)
# print(animals==animals)
# print(pit_animals>=animals)
# print(pit_animals<=animals)
#-----------------------------
#abar majmoaaah

# print(animals.issuperset(pit_animals))
# print(pit_animals.issuperset(animals))
# print(animals.issuperset(animals))
#--------------------------------------

#copy
# fruits={"appls", "orange" , "kiwi"}
# x=fruits.copy()
# print(x)

#----------------------------------
#discard
#method dicard difference between discard and remove: remove show for as error when the caracter we want to delet it is not being the set but discart dosent show us any error even that carachter is not being in the set

# x={"one" , "two" , "three"}
# x.discard("four")
# print(x)

#---------------------------------
#isdisjoint
#two sets which doesnt has any ishtarak whit toghater

# a={"apple" , "orange"}
# b={"kiwi" , "noq"}
# c=a.isdisjoint(b)
# print(c)

#----------------------------------

# required_skills=["python" , "linux" , "github"]
# candicates={
#     "ali":{"linux" , "windows", "python" , "github" , "c++"},
#     "negin":{"javascript" , "linux" , "python", "c++", "github","css"},
#     "poure":{"linux" , "github" , "python " , "git"},
#     "zahara":{"html", "git" , "python"},
#     "mohammad":{"linux" , "github" , "python"},
#     "ayada":{"github" , "git", "linux"}
# }
# persons=set()
# listm=[]
# for name , skills in candicates.items():
#     if skills >= set(required_skills):
#         persons.add(name)

# print(persons)

#------------------------------------------------------
# marning={"python", "sql" , "c++" , "javascript" , "linux"}
# afternoon={"c++", "mongob" , "javascript" , "python", "ruby"}

# print(marning.intersection(afternoon))

#------------------------------------------------
# x={1,2,3}
# x.remove(3)
# x.add(5)
# print(x)

#freezing set in sets

#==============================
# x=frozenset({1,2,3})
# x.add(7)
# we can giv for frozenset iterable things
ml="khadija"
x=frozenset(ml)


#copy frozenset
# f1=frozenset({1,2,3})
# f2=f1.copy()
# print(id(f1))
# print(id(f2))
# print(f1 is f2)
# print(f1 == f2)
# #---------------------------