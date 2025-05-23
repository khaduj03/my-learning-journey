# tuple1 = ("apple", "banana", "cherry")
# tuple2 = (1, 5, 7, 9, 3)
# tuple3 = (True, False, False)

# thistuple = ("apple", "banana", "cherry")
# print(thistuple[1])

# thistuple = ("apple", "banana", "cherry", "orange", "kiwi", "melon", "mango")
# print(thistuple[2:5])


# thistuple = ("apple", "banana", "cherry", "orange", "kiwi", "melon", "mango")
# print(thistuple[-4:-1])


# thistuple = ("apple", "banana", "cherry")
# if "apple" in thistuple:
#   print("Yes, 'apple' is in the fruits tuple")


# x = ("apple", "banana", "cherry")
# y = list(x)
# y[1] = "kiwi"
# x = tuple(y)

# print(x)


# my_tuple=("khadija", "wakili" , "javed", "jan")
# your_list=list(my_tuple)
# your_list[3]="mohib"
# new_tuple=tuple(your_list)
# print(new_tuple)



# thistuple = ("apple", "banana", "cherry")
# y = list(thistuple)
# y.append("orange")
# thistuple = tuple(y)


# one=("apple", "orange", "banana", "kiwi")
# tow=list(one)
# tow.append("apple")
# three=tuple(tow)
# print(three)


# thistuple = ("apple", "banana", "cherry")
# y = ("orange",)
# thistuple += y

# print(thistuple)


# one=("khadija", "javed", "mohib")
# two=("orange", "apple", "banana")
# one+=two
# print(one)


# thistuple = ("apple", "banana", "cherry")
# y = list(thistuple)
# y.remove("apple")
# thistuple = tuple(y)
# print(thistuple)


# one=("khadija", "wakili","khadoj")
# two=list(one)
# two.remove("khadija")
# three=tuple(two)
# print(three)

# thistuple = ("apple", "banana", "cherry")
# del thistuple
# print(thistuple)

#unpacking

# fruits = ("apple", "banana", "cherry")

# (green, yellow, red) = fruits

# print(green)
# print(yellow)
# print(red)

# name=("khadija", "javed", "mohib")
# (one, two, three)=name
# print(one)
# print(two)
# print(three)


# fruits = ("apple", "banana", "cherry", "strawberry", "raspberry")

# (green, yellow, *red) = fruits

# print(green)
# print(yellow)
# print(red)


#loop


# thistuple = ("apple", "banana", "cherry")
# for x in thistuple:
#   print(x)


# thistuple = ("apple", "banana", "cherry")
# for i in range(len(thistuple)):
#   print(thistuple[i])

# thistuple = ("apple", "banana", "cherry")
# i = 0
# while i < len(thistuple):
#   print(thistuple[i])
#   i = i + 1

 #Join Tuples

# tuple1 = ("a", "b" , "c")
# tuple2 = (1, 2, 3)

# tuple3 = tuple1 + tuple2
# print(tuple3)


# one=("khadija", "programing", "developer")
# two=("one","two", "three")
# three=one+two
# print(three)


# fruits = ("apple", "banana", "cherry")
# mytuple = fruits * 2

# print(mytuple)



# one=("one", "two", "three", "four")
# two=one*3
# print(two)



# Tuple Methods


# thistuple = (1, 3, 7, 8, 7, 5, 4, 6, 8, 5)

# x = thistuple.count(5)

# print(x)


# thistuple = (1, 3, 7, 8, 7, 5, 4, 6, 8, 5)

# x = thistuple.index(8)

# print(x)