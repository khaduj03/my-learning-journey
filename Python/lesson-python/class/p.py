# class Person:
#   def __init__(self, name, age):
#     self.name = name
#     self.age = age

# p1 = Person("John", 36)

# print(p1.name)
# print(p1.age)


# class Person:
#     def __init__(self, name , lastname):
#         self.name=name
#         self.lastname=lastname


# person=Person("javed", "wakili")

# print(person.name)
# print(person.lastname)



# class Animal:
#     def __init__(self, name, age):
#         self.name=name
#         self.age=age



# animal=Animal("bord", 23)
# print(animal.age)
# print(animal.name)



# class Room:
#     def __init__(self , door , window):
#         self.door=door
#         self.window=window


# room=Room("red", "blak")
# print(room.door)
# print(room.window)


# class Glass:
#     def __init__(self , color , weight):
#         self.color=color
#         self.weight=weight


# glass=Glass("red", "25kg")
# print(glass.color)
# print(glass.weight)



# class Book:
#     def __init__(self,color,page):
#         self.color=color
#         self.page=page


# book=Book("red", 65)
# print(book.color)
# print(book.page)



# class Cook:
#     def __init__(self, mawwad1, mawad2):
#         self.mawwad1=mawwad1
#         self.mawad2=mawad2


# cook=Cook("rogan","shakar")
# print(cook.mawad2)
# print(cook.mawwad1)

# class Person:
#   def __init__(self, name, age):
#     self.name = name
#     self.age = age

#   def myfunc(self):
#     print("Hello my name is " + self.name)

# p1 = Person("John", 36)
# p1.myfunc()



# class Info:
#     def __init__(self , name, lname):
#         self.name=name
#         self.lname=lname


#     def printinfo(self):
#         print(self.name, self.lname)


# info=Info("khadia", "wakili")
# info.printinfo()

# class Add:
#     def __init__(self ,*mylist):
#         self.mylist=list(mylist)

#     def add(self,*add):
#         self.add=[*add]
#         print(self.add+self.mylist)



# sdd=Add('khadija','mohib', 'ahmad')
# print(sdd.mylist)
# sdd.add('javed','jaba')


# class Person:
#   def __init__(self, fname, lname):
#     self.firstname = fname
#     self.lastname = lname

#   def printname(self):
#     print(self.firstname, self.lastname)

# #Use the Person class to create an object, and then execute the printname method:

# x = Person("John", "Doe")
# x.printname()


# class Person:
#     def __init__(self , name , lname):
#         self.name=name
#         self.lname=lname

#     def printname(self):
#         print(self.name, self.lname)



# person=Person("javed", "wakili")
# person.printname()


# class Person:
#   def __init__(self, fname, lname):
#     self.firstname = fname
#     self.lastname = lname

#   def printname(self):
#     print(self.firstname, self.lastname)

# class Student(Person):
#   pass

# x = Student("Mike", "Olsen")
# x.printname()





# class Book:
#     def __init__(self , color , page):
#         self.color=color
#         self.page=page

#     def posh(self):
#         print("all the cover have to be beautiful")



# class NotBook(Book):
#     pass



# notbook=NotBook("red", 55)
# print(notbook.page)
# print(notbook.color)
# notbook.posh()




# class Person:
#   def __init__(self, fname, lname):
#     self.firstname = fname
#     self.lastname = lname

#   def printname(self):
#     print(self.firstname, self.lastname)

# class Student(Person):
#   def __init__(self, fname, lname):
#     Person.__init__(self, fname, lname)

# x = Student("Mike", "Olsen")
# x.printname()




# class Person:
#   def __init__(self, fname, lname):
#     self.firstname = fname
#     self.lastname = lname

#   def printname(self):
#     print(self.firstname, self.lastname)

# class Student(Person):
#   def __init__(self, fname, lname):
#     super().__init__(fname, lname)

# x = Student("Mike", "Olsen")
# x.printname()


# class Person:
#   def __init__(self, fname, lname):
#     self.firstname = fname
#     self.lastname = lname

#   def printname(self):
#     print(self.firstname, self.lastname)

# class Student(Person):
#   def __init__(self, fname, lname):
#     super().__init__(fname, lname)
#     self.graduationyear = 2019

# x = Student("Mike", "Olsen")
# print(x.graduationyear)



# class Person:
#   def __init__(self, fname, lname):
#     self.firstname = fname
#     self.lastname = lname

#   def printname(self):
#     print(self.firstname, self.lastname)

# class Student(Person):
#   def __init__(self, fname, lname, year):
#     super().__init__(fname, lname)
#     self.graduationyear = year

# x = Student("Mike", "Olsen", 2019)
# print(x.graduationyear)



# class Person:
#   def __init__(self, fname, lname):
#     self.firstname = fname
#     self.lastname = lname

#   def printname(self):
#     print(self.firstname, self.lastname)

# class Student(Person):
#   def __init__(self, fname, lname, year):
#     super().__init__(fname, lname)
#     self.graduationyear = year

#   def welcome(self):
#     print("Welcome", self.firstname, self.lastname, "to the class of", self.graduationyear)

# x = Student("Mike", "Olsen", 2019)
# x.welcome()



























class Animal:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def eat(self):
        print(f"{self.name} is eating.")

class Dog(Animal):
    def __init__(self, name, age, breed):
        super().__init__(name, age)
        self.breed = breed

    def bark(self):
        print(f"{self.name} is barking.")

class Cat(Animal):
    def sleep(self):
        print(f"{self.name} is curled up and sleeping.")

dog = Dog("Buddy", 3, "Labrador")
dog.eat()   # Output: Buddy is eating.
dog.bark()  # Output: Buddy is barking.

cat = Cat("Whiskers", 5)
cat.eat()   # Output: Whiskers is eating.
cat.sleep() # Output: Whiskers is curled up and sleeping.
