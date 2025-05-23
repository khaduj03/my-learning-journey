# class MyClass:
#   x = 5

# print(MyClass)

# class MyClass:
#      x=4

# p1 = MyClass()
# print(p1.x)


# class MyCar:
#      color="red"
#      wieght=250


# car=MyCar()
# print(car.color)
# print(car.wieght)


# class Grlass:
#      count=20
#      color=30

# gelass=Grlass()
# print(gelass.color)
# print(gelass.count)


# class Person:
#   def __init__(self, name, age):
#     self.name = name
#     self.age = age

# p1 = Person("John", 36)

# print(p1.name)
# print(p1.age)

# class Family:
#      def __init__(self,name, father , mother):
#           self.father=father
#           self.mother=mother
#           self.name=name

# family=Family("ahmad", "mahmaod", "alia")
# print(family.father)
# print(family.mother)
# print(family.name)


# class School:
#      def __init__(self, name , grad , Class):
#           self.name=name
#           self.Calss=Class
#           self.grad=grad


# my_class=School("khadija", 12,8 )
# print(my_class.Calss)
# print(my_class.grad)
# print(my_class.name)

# class Person:
#   def __init__(self,name , age):
#     self.name = name
#     self.age = age    
#   def myfunc(self):
#     print("Hello my name is " + self.name)

# p1 = Person("John", 36)
# p1.myfunc()

# class Name:
#      def __init__(self, name, age, grad):
#           self.name=name
#           self.grad=grad
#           self.age=age
#      def greeting(self):
#           print(f"hello welcome {self.name} to our schoole nad you are{self.age} and you can go to {self.grad}")

# school=Name("frida" , 20, 12)
# school.greeting()


# class Person:
#   def __init__(mysillyobject, name, age):
#     mysillyobject.name = name
#     mysillyobject.age = age

#   def myfunc(abc):
#     print("Hello my name is " + abc.name)

# p1 = Person("John", 36)
# p1.myfunc()

# class Person:
#      def __init__(mss, name, age):
#           mss.name=name
#           mss.age=age


# person=Person(10, 10)
# person.age=40
# print(person.age)



# class Animal:
#      def __init__ (self, color, age):
#           self.color=color
#           self.age=age

#      def paa(self):
#           print("animal has paa")

# class Bird(Animal):
#      def __init__(self):
#           pass
#      def ball(self):
#           print("they are flying")



# bird=Bird()
# bird.color="red"
# print(bird.color)
# bird.age=29
# print(bird.age)
# bird.ball()
# bird.paa()


# class Person:
#   def __init__(self, fname, lname):
#     self.firstname = fname
#     self.lastname = lname

#   def printname(self):
#     print(self.firstname, self.lastname)


# x = Person("John", "Doe")
# x.printname()

# del x
# x.printname()

# class Person:
#      def __init__(self, fname , lname):
#           self.fname=fname
#           self.lname =lname
     
#      def name(self):
#           print(self.fname, self.lname)

# x=Person("khadija", "wakili")
# x.name()

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


# class Info:
#      def __init__ (self, name, lname):
#         self.name=name
#         self.lname=lname

#      def info(self):
#         print(f"Name:{self.name}and lname:{self.lname}")


# class Student(Info):
#    def __init__(self, name, lname):
#       Info.__init__(self, name, lname)



# p=Student("khadija", "wakili")
# p.info()



# class Name:
#      def __init__(self, name , lname):
#           self.name=name
#           self.lname=lname

#      def person(self):
#           print(self.name, self.lname)

# class Student(Name):
#      def __init__(self, name , lname):
#           Name.__init__(self, name, lname)


# p=Student("khadija" , "wakili")
# p.person()



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
# x.printname()


# class A:
#      def __init__(self, name , lname):
#           self.name=name
#           self.lname=lname

#      def Name(self):
#           print(self.name, self.lname)

# class B(A):
#      def __init__(self, name , lname):
#           super().__init__(name, lname)
#           self.date=1212


# p=B("khadija", "wakili")
# p.Name()
# print(p.date)
