# 1)------------------------------------------------------------------------------
# Write an algorithm that stores three numbers (2, 3, 5) in A, B, and C,
# then calculates the average of them.
# 1 start 
# 2 get A,B,C number 
# 3 total_sum ← A + B + C
# 4 mid ← total_sum/3
# 5 print avarge is  mid


##dry run(2,3,5):
#-----------------------------------------
# | A | B | C | total_sum | mid          |
# | - | - | - | --------- | ------------ |
# | 2 | 3 | 5 | 10        | 10 / 3 =3.33 |
#-----------------------------------------


a, b, c = 2, 3, 5
def average(a, b, c):
    total_sum = a + b + c
    mid = len([a, b, c])
    result = total_sum / mid
    return result

final = average(a, b, c)
# print(final) #3.3333333333333335

# 3)------------------------------------------------------------------------------
# The salary of an employee is A riyals.
# Every month, 10% of the salary is deducted for insurance (bema)
# and 5% is deducted for the cost of the place where he lives or daily expenses.
# Write an algorithm that receives the salary (A) and calculates the exact salary after deductions.

# 1 - Start
# 2 - Input A(salary)
# 3 - B ← 10 * A / 100   (insurance)
# 4 - M ← 5 * A / 100    (living/daily cost)
# 5 - S ← B + M(total deductions)
# 6 - H ← A - S(final salary)
# 7 - Write H
# 8 - End


## dry run(A=10000):
#-----------------------------------------------------------------
# | A    | B (10% of A)  | M (5% of A) | S (B + M)  | H (A - S)  |
# | ---- | ------------- | ------------| ---------- | ---------- |
# | 10000| 1000          | 500         | 1500       | 8500       |
#-----------------------------------------------------------------
# the exact salary after deductions is 8500

def exact_salary(salary):
    insurance=10*salary/100
    cost=5*salary/100
    s = insurance+cost
    # print(s)
    exact_s = salary-s
    return exact_s

final=exact_salary(10000)
# print("exact salary",final)

# 4)------------------------------------------------------------------------------
# Write an algorithm that receives time T in seconds
# and determines how many hours, minutes, and seconds it equals
# assuming 1 hour = 60 minutes and 1 minute = 60 seconds.

# 1. start
# 2. get the T time
# 3. hourse ← T // 3600
# 4. remain_of_hr ← T % 3600
# 5. minute ← remain_of_hr // 60
# 6. second ← remain_of_hr % 60
# 7. print hourse , minute , second


##dry run(T=4210):
#--------------------------------------------------
# | T    | hours | remain_of_hr | minute | second |
# | ---- | ----- | -------------| ------ | ------ |
# | 4210 | 1     | 610          | 10     | 10     |
#--------------------------------------------------
# 4210 seconds is equal to 1 hours, 10 minutes, and 10 seconds.

def find_t_time(t):
    hr = t // 3600                # calculate hours
    remain_of_hr = t % 3600       # remaining seconds after hours
    minute = remain_of_hr // 60   # calculate minutes
    second = remain_of_hr % 60    # remaining seconds
    return hr, minute, second


# print(find_t_time(4210))


# 5)------------------------------------------------------------------------------
# Write an algorithm that calculates all even and two-digit numbers
# Start
# I ← 10
# Print I
# I ← I + 2
# If I <= 98 then go to line 3
# End

##dry run (10,1000):
#------------------------------------------
# | plus_a | result (plus_a mod 2) | total |
# | ------ | --------------------- | ----- |
# | 10     | 0                     | 10    |
# | 11     | 1                     | 10    |
# | 12     | 0                     | 22    |
# | 13     | 1                     | 22    |
# | 14     | 0                     | 36    |
# | 15     | 1                     | 36    |
# | 16     | 0                     | 52    |
# | 17     | 1                     | 52    |
# | ...    | ...                   | ...   |
# | 99     | 0                     | 2430  |
#-------------------------------------------
# the caculate of even tow-digit numbers between 10,1000 is:2430

def even_two_digit_numbers(a, b):
    total = 0
    for num in range(a, b + 1):
        if num % 2 == 0 and 10 <= num <= 99:
            print(num)
            total += num
    return total


# Example usage
total_sum = even_two_digit_numbers(10, 1000)
print("Total sum of even two-digit numbers:", total_sum)

# 6)------------------------------------------------------------------------------
# Write an algorithm that receives a natural number n
# and calculates and prints all odd numbers smaller than or equal to it.

#1 start
#2 get the N
#3 I ← 0
#4 R ← I mod 2
#5 if R!=0 then print I
#6 I ← I+1
#7 if I<=N then go to line 4
#8 end

##dry run(N=8):
#---------------------------------
# | I | R (I mod 2) | Action      |
# | - | ----------- | ----------- |
# | 0 | 0           | not print   |
# | 1 | 1           | print 1     |
# | 2 | 0           | not print   |
# | 3 | 1           | print 3     |
# | 4 | 0           | not print   |
# | 5 | 1           | print 5     |
# | 6 | 0           | not print   |
# | 7 | 1           | print 7     |
# | 8 | 0           | not print   |
#---------------------------------
# odd numbers smaller than or equal to 8 are: 1, 3, 5, 7


def calculate(n):
    num_list = []
    for num in range(n + 1):
        if num % 2 != 0:
            num_list.append(num)
    return num_list


# print(calculate(8)) #[1, 3, 5, 7]

# 7)------------------------------------------------------------------------------
# Write an Algorithm that returns all even numbers between 1000 and 2000,
# prints each one, and also prints the total sum of them.

#1 start
# 2 start←1000 , end ← 2000
#3 total ← 0
#4 R ← start mode 2
#5 if R=0 print even number start , total ← total+start
#6 start ← start+2
#7 if start <= end then go to line 4
#8 print total
#9 end  

#------------------------------------------------
# | start | R = start mod 2 | Action     | total|
# | ----- | --------------- | ---------- | -----|
# | 1000  | 0               | print 1000 | 1000 |
# | 1001  | 1               | not print  | 1000 |
# | 1002  | 0               | print 1002 | 2002 |
# | 1003  | 1               | not print  | 2002 |
# | 1004  | 0               | print 1004 | 3006 |
# | 1005  | 1               | not print  | 3006 |
# | 1006  | 0               | print 1006 | 4012 |
# | 1007  | 1               | not print  | 4012 |
# | 1008  | 0               | print 1008 | 5020 |
# | 1009  | 1               | not print  | 5020 |
# | 1010  | 0               | print 1010 | 6030 |
# | ...   | ...             | ...        | ...  |
#-----------------------------------------------

def calculator():
    start = 1000
    end = 2000
    total = 0

    for num in range(start, end + 1):
        if num % 2 == 0:
            print(num)
            total += num

    print("Total sum:", total)


# calculator() #answer:751500

# 8)------------------------------------------------------------------------------
# Write an algorithm that:
# Gets a natural number N (like 5, 7, or 10) from the user,
# Then calculates the sum of this series:
#S=1/2+1/3+/4+...+1/N

# 1. start
# 2. get N
# 3. S ← 0
# 4. I ← 2
# 5. S ← S + 1/I
# 6. I ← I + 1
# 7. if I <= N then go to line 5
# 8. print S
# 9. end


### dry run(N=7):
#-----------------------------
# | I | S (after adding 1/I) |
# | - | -------------------- |
# | 2 | 0 + 1/2 = 0.5        |
# | 3 | 0.5 + 1/3 = 0.8333   |
# | 4 | 0.8333 + 1/4 = 1.0833|
# | 5 | 1.0833 + 1/5 = 1.2833|
# | 6 | 1.2833 + 1/6 = 1.45  |
# | 7 | 1.45 + 1/7 = 1.5929  |
#-----------------------------
# The sum of the series up to 1/7 is 1.59

def sum_num(n):
    s=0
    for num in range(1,n+1):
        s+=1/num
    print(s)
    
# sum_num(7)  #2.59!

# 9)------------------------------------------------------------------------------
#Write an algorithm that takes a natural number n and calculates and prints the following sum:
#S=1/2+1/4+1/6+..+1/N (only even numbers)

#1 start
#2 get the N
#3 I ← 2,S ← 0
#4 S ← S+1/I
#5 I ← I+2
#6 if I<=N go to line 4 otherwise print S
#7 end

##Dry run(8)
#------------
#|I |s      |
#|--|-------|
#|2 |0      |
#|4 |0.25   |
#|6 |0.41666|
#|8 |1.04166|
#------------
# The sum of the series up to 1/8 (even numbers) is 1.04166
def sum_even(n):
    s=0
    for num in range(1,n+1):
        if num%2==0:
            s+=1/num
    print(s)
    
# sum_even(8) #1.0416666666666665
# 10)------------------------------------------------------------------------------
# Write an algorithm that takes a natural number n and calculates and prints the following sum:
#s=1/3**1+2/3**2+3/3**3+..+n/3**n

#1. start
#2. get the N
#3. I ← 1 S ← 0
# 4. S ← S+I/(3 ** I)
#5. I ← I+1
#6. if I<=N go to line 4 otherwise print S
#7. end 


##Dry run(N=4):
#------------------------------------
# | I | S (after adding I/3**I)      |
# | - | ---------------------------  |
# | 1 | 0 + 1/3**1 = 0.3333          |
# | 2 | 0.3333 + 2/3**2 = 0.5555     |
# | 3 | 0.5555 + 3/3**3 = 0.6666     |
# | 4 | 0.6666 + 4/3**4 = 0.7160     |
#------------------------------------
# The sum of the series up to 4/3**4 is 0.7160

def calculator(n):
    s=0
    for num in range(1,n+1):
        s+=num/3**num
    print(s)

# calculator(4) #0.7160493827160495

# 11)------------------------------------------------------------------------------
#Write an algorithm that takes 3 numbers a, b, and c, and checks if you can make a triangle with these numbers or not.
# first of all we need to understand what is the formula ! lol lemme think and back in school in my imagananition!
#ohhh the book a bit remindered me lol!

#1. start
#2. get a,b,c
#3. if (a+b>c ) go to line 4 else line 6
#4. if (b+c>a) go to line 5 else line 6
#5. if (a+c>b) print yes it can end else line 6
#6. print no it can't end
#7. end

##dry run(a=3,b=4,c=5):
#------------------------------------------------------
# | a | b | c | a+b>c  | b+c>a  | a+c>b  |    Action  |
# | - | - | - | ------ | ------ | ------ | ---------- |
# | 3 | 4 | 5 | True   | True   | True   | print yes  |
#------------------------------------------------------


def is_triangle(a,b,c):
    if (a+b>c and b+c>a and a+c>b):
        print("yes it can")
    else:
        print("no it can't")
        
# 12)------------------------------------------------------------------------------
# Write an algorithm that takes 3 numbers a, b, and c (the sides of a triangle) and checks if the triangle is a right-angled triangle or not.

#1. start
#2. get a,b,c
#3. if (a**2)+(b**2)==c**2 go to line 6 else line 4
#4. if (b**2)+(c**2)==a**2 go to line 6 else line 5
#5. if (a**2)+(c**2)==b**2 print yes it can end else line 7
#6. print yes it can end

#dry run(a=3,b=4,c=5):
#------------------------------------------------------------------------------------------------
# | a | b | c | (a**2)+(b**2)==c**2  | (b**2)+(c**2)==a**2  | (a**2)+(c**2)==b**2  |    Action  |
# | - | - | - | -------------------- | -------------------- | -------------------- | ---------- |
# | 3 | 4 | 5 | True                 | False                | False                | print yes  |
#------------------------------------------------------------------------------------------------
# The triangle with sides 3, 4, and 5 is a right-angled triangle.

def right_angled_triangle(a, b, c):
    if ((a**2)+(b**2) == c**2 or (b**2)+(c**2) == (a**2) or (a**2)+(c**2) == (b**2)):
        print("yes it can")
    else:
        print("no it can't")
        
# 13)------------------------------------------------------------------------------
# Write an algorithm that takes 100 numbers one by one, prints each number, and at the end, prints the sum of all the numbers.
## my brain didn't get this :/ that's why dear AI helped me ! it was too simple damn how I couldn't get it!

#1. start
#2. count ← 0,S ← 0
#3. get a number
#4. print a
#5. S ← S+a
#6. count ← count+1
#7. if count<100 go to line 3 otherwise line 8
#8. print S
#9. end

#dry run(2,3,5 ):
#-----------------------------------
# | count | a | S (after adding a) |
# | ----- | - | -------------------|
# | 0     | 2 | 0 + 2 = 2          |
# | 1     | 3 | 2 + 3 = 5          |
# | 2     | 5 | 5 + 5 = 10         |
#-----------------------------------
# The sum of the 3 numbers is 10


S = 0  # متغیر جمع اعداد
I = 1  # شمارنده حلقه

while I <= 100:  # حلقه برای 100 
    a = float(input(f" give me your number! {I}   : "))  # گرفتن  از کاربر
    print("the entered number :", a)  # چاپ 
    S = S + a  # جمع  با جمع قبلی
    I = I + 1  # افزایش شمارنده

# print("total:", S)


# 14)------------------------------------------------------------------------------
# In the following algorithm, determine which variable is the loop counter, and what its final value is inside the loop and outside the loop.
# 1- Start
# 2- N ← 2
# 3- get I, J, and K
# 4- t ← I + J + K
# 5- Print t
# 6- N ← N + 2
# 7- If N <= 6 then go to line 3
# 8- End

##Dry run(I=1,J=2,K=3):
#------------------------------------------
# | N | I | J | K | t (I+J+K) | Action     |
# | - | - | - | - | --------- | ---------- |
# | 2 | 1 | 2 | 3 | 6         | print 6    |
# | 4 | 1 | 2 | 3 | 6         | print 6    |
# | 6 | 1 | 2 | 3 | 6         | print 6    |
#-------------------------------------------

# 15)------------------------------------------------------------------------------
# Write an algorithm that takes two numbers, A and B, as input. Find and print the biggest number and the smallest number.
# (If A and B are equal, ask for two new numbers.)

# 1. Start
# 2. Get A, B
# 3. If A == B then go to step 2  
# 4. If A > B then print "A is bigger, B is smaller" and go to step 6
# 5. Else print "B is bigger, A is smaller"
# 6. End

##dry run(A=5,B=3):
#---------------------------------
# | A | B | Action               |
# | - | - | -------------------- |
# | 5 | 3 | print A is bigger    |
#---------------------------------
def calculate(a, b):
    if a != b:
        if a > b:
            print(f"A ({a}) is bigger and B ({b}) is smaller")
        else:
            print(f"B ({b}) is bigger and A ({a}) is smaller")
    else:
        print("A and B are equal, please enter two new numbers.")
        a = float(input("Enter A again: "))
        b = float(input("Enter B again: "))
        calculate(a, b)
        

# 16)------------------------------------------------------------------------------
# Write the algorithm of Example 15 for three numbers, but this time only print the biggest number.
# (Assume that the three numbers are not all equal.)

# 1. Start
# 2. Get A, B, C
# 3. If A > B and A > C then print "A is the biggest" and go to step 6
# 4. If B > A and B > C then print "B is the biggest" and go to step 6
# 5. If C > A and C > B then print "C is the biggest"
# 6. End


##dry run(5,3,4)
#------------------------------------------------------------------------------
# | A | B | C | A>B and A>C | B>A and B>C | C>A and C>B | Action               |
# | - | - | - | ----------- | ----------- | ----------- | -------------------- |
# | 5 | 3 | 4 | True        | False       | False       | Print “A is biggest” |
#-------------------------------------------------------------------------------

a = float(input("Enter A : "))
b = float(input("Enter B : "))
c = float(input("Enter C : "))


def compare_function(a, b, c):
    if (a != b and b != c and c != a):
        print(max(a, b, c))
    else:
        a = float(input("Enter A again: "))
        b = float(input("Enter B again: "))
        c = float(input("Enter C again: "))
        compare_function(a, b, c)


# compare_function(a, b, c)

# 17)------------------------------------------------------------------------------
# Write an algorithm that takes a positive whole number as input and checks if the number is even or odd.

#1. start
#2. get the number
#3. R ← N mod 2
#4. if R==0 print this is even number end
#5. this is not even number end

##dry run(N=3):
#-----------------------------
# | N | R = N mod 2 | Action           |
# | - | ----------- | ---------------  |
# | 3 | 1           | print odd number |
#---------------------------------------
def number_odd_or_even(n):
    if (n % 2 == 0):
        print("the number is even")
    else:
        print("the number is odd")


# number_odd_or_even(3)
# number_odd_or_even(4)

# 18)------------------------------------------------------------------------------
# Write an algorithm that takes a natural number N as input and :
# Finds all the divisors of N.
# Counts how many divisors there are.
# Calculates the sum of all divisors.
# Prints the results.


# 1. start
# 2. get N
# 3. I ← 0, total ← 0, count ← 0
# 4. I ← I + 1
# 5. R ← N mod I
# 6. if R = 0 then:
#        print I is divisor of N
#        total ← total + I
#        count ← count + 1
# 7. if I < N then go to step 4
# 8. print "Sum of divisors =", total
# 9. print "Count of divisors =", count
# 10. end
#--------------------------------------------------------------------------
# | I | N mod I     | Action                              | total | count |
# | - | ----------- | ----------------------------------- | ----- | ----- |
# | 1 | 6 mod 1 = 0 | 1 is divisor → total = 1, count = 1 | 1     | 1     |
# | 2 | 6 mod 2 = 0 | 2 is divisor → total = 3, count = 2 | 3     | 2     |
# | 3 | 6 mod 3 = 0 | 3 is divisor → total = 6, count = 3 | 6     | 3     |
# | 4 | 6 mod 4 = 2 | not divisor → total unchanged       | 6     | 3     |
# | 5 | 6 mod 5 = 1 | not divisor → total unchanged       | 6     | 3     |
#--------------------------------------------------------------------------
# Loop ends → total = 6, count = 3 → yes, 6 is a perfect number

n = int(input("give me the number:"))
print(n)


def find_divisor(n):
    total = 0
    divisors = []
    for num in range(1, n+1):
        if n % num == 0:
            total += num
            divisors.append(num)
    print("total:", total, "divisors:", divisors)


# find_divisor(n)
# 19)------------------------------------------------------------------------------
# Write an algorithm that takes a natural number N as input and checks if it is a perfect number or not .
# Explanation:
# A natural number N is called perfect if the sum of its divisors smaller than N is equal to N itself.

#1. start
#2. get the N
#3. I ← 0, total ← 0
#4. I ← I+1 
#5. R ← N mod I
#6. if R=0 total=total+I
#7. if I<N-1 go to line 4 otherwise line  8
#8. if total=N print yes this is perfect number end 
#9  print no this is not perfect number end 

#Dry run(N=6):
#------------------------------------------------------------
# | I | N mod I     | Action                        | total |
# | - | ----------- | ----------------------------- | ----- |
# | 1 | 6 mod 1 = 0 | 1 is divisor → total = 1      | 1     |
# | 2 | 6 mod 2 = 0 | 2 is divisor → total = 3      | 3     |
# | 3 | 6 mod 3 = 0 | 3 is divisor → total = 6      | 6     |
# | 4 | 6 mod 4 = 2 | not divisor → total unchanged | 6     |
# | 5 | 6 mod 5 = 1 | not divisor → total unchanged | 6     |
#------------------------------------------------------------
# Loop ends → total = 6 → yes, this is a perfect number

n = int(input("enter the number:"))

def is_perfect(num):
    total = 0
    for n in range(1, num):
        if num % n == 0:
            total += n
    if total == num:
        print("yes this is a perfect number")
    else:
        print("no it is not")


# is_perfect(n)
# 20)------------------------------------------------------------------------------
# Write an algorithm that takes a natural number N as input and checks if it is a prime number or not .
# Definition of a prime number:
# A natural number N is called prime if it has no divisors other than 1 and itself.

# 1. start
# 2. get the N number
# 3. if N=1 print no this is not prime number end
# 4. I ← 2
# 5. if I<N then
# 6.     R ←  N mod I
# 7.     if R=0 print no this is not prime number end
# 8.     I ← I + 1
# 9.     go to line 5
# 10. yes this is prime number end


# Dry run(N=7):
#---------------------------------------------
# | I | N mod I     | Action                 |
# | - | ----------- | ---------------------- |
# | 2 | 7 mod 2 = 1 | not divisor → continue |
# | 3 | 7 mod 3 = 1 | not divisor → continue |
# | 4 | 7 mod 4 = 3 | not divisor → continue |
# | 5 | 7 mod 5 = 2 | not divisor → continue |
# | 6 | 7 mod 6 = 1 | not divisor → continue |
#---------------------------------------------
# Loop ends (I = 7) → print yes, this is a prime number

n=int(input("Enter the number:"))

def prime_number(n):
    if n<=1:
        print("no it is not")
        return
    for i in range(2,n):
        if n % i == 0:
            print("no it is not")
            return
    print("yes it is")

# prime_number(n)


# 21)------------------------------------------------------------------------------
# Write an algorithm that takes a natural number N as input and calculates its factorial.
# Assume that N is a natural number.
# The factorial of N is written as N! and its value is found like this:

# If N = 0 → N! = 1
# If N = 1 → N! = 1
# If N ≠ 0, 1 → N! = N × (N – 1) × (N – 2) × ... × 3 × 2 × 1


#1. start
#2. get the N number
#3. I ← 1 , factorial ← 1
#4. if N=1 or N=0 print 1 factorial == 1 end
#5. factorial= factorial × I
#6. if I<N  I ← I+1 go to line 5 otherwise line 7
#7. print factorial end 


## dry run(N=5):
#--------------------------------------
# | I | factorial (after multiplying) |
# | - | ----------------------------- |
# | 1 | 1 × 1 = 1                     |
# | 2 | 1 × 2 = 2                     |
# | 3 | 2 × 3 = 6                     |
# | 4 | 6 × 4 = 24                    |
# | 5 | 24 × 5 = 120                  |
#--------------------------------------
#  The factorial of 5 (5!) is 120

n = int(input("Enter the number:"))


def factorial(n):
    fact = 1
    if n == 1 or n == 0:
        print("1 factorial ==", 1)
        return
    for i in range(1, n+1):
        fact *= i
    print(f"{n}! == {fact}")


factorial(n)

# 22)------------------------------------------------------------------------------
# Example 21:
# Write an algorithm that takes a natural number N as input and calculates and prints the following sum:
# S = 1! + 2! + 3! + ... + N!

#1. start
#2. get the N number
#3. num ← 1 , total ← 0
#4. if num <= N then:
        # 4-1  I ← 1 , fact ← 1
        # 4-2  if num = 0 or num = 1 then fact ← 1 else:
        # 4-3      fact ← fact × I
        # 4-4      I ← I + 1
        # 4-5      if I <= num then go to line 1-3
        # 4-6  total ← total + fact
        # 4-7  num ← num + 1
        # 4-8  if num <= N then go to line 4
#5. print total
#6. end

# Dry run(N=4):
#-------------------------------------------
# | num | num! | total (after adding num!) |
# | --- | ---- | ------------------------- |
# | 1   | 1    | 0 + 1 = 1                 |
# | 2   | 2    | 1 + 2 = 3                 |
# | 3   | 6    | 3 + 6 = 9                 |
# | 4   | 24   | 9 + 24 = 33               |
#-------------------------------------------
# The sum of factorials from 1! to 4! is: 33

n = int(input("Enter the number: "))


def factorial(n):
    fact = 1
    for i in range(1, n + 1):
        fact *= i
    return fact


def sum_factorial(n):
    total = 0
    for i in range(1, n + 1):
        total += factorial(i)
    print(f"The sum of factorials from 1! to {n}! is: {total}")


# sum_factorial(n)

# 23)------------------------------------------------------------------------------
# Write an algorithm that shows(prints) all divisors of every number between 2 and 500, separately for each number.

#1. start
#2. num ← 2 , 
      #2-1. I ← 1 
      #2-2. if num mod I = 0 then print I is divisor of num
      #2-3. I ← I + 1
      #2-4. if I <= num then go to line 2-2
#3. num ← num + 1
#4. if num <= 500 then go to line 2
#5. end


# num = 2
#     I = 1 → 2 mod 1 = 0 → print "1 is divisor of 2"
#     I = 2 → 2 mod 2 = 0 → print "2 is divisor of 2"

# num = 3
#     I = 1 → 3 mod 1 = 0 → print "1 is divisor of 3"
#     I = 2 → 3 mod 2 = 1 → not divisor
#     I = 3 → 3 mod 3 = 0 → print "3 is divisor of 3"
#....
def divisors(n):
    divis = []
    for i in range(1, n+1):
        if n % i == 0:
            divis.append(i)
    print(f"{n} = {divis}")


def all_divisors():
    for i in range(2, 500+1):
        divisors(i)


# all_divisors()
# 24)------------------------------------------------------------------------------
# Suppose today is day R of month number M.
# Write an algorithm that asks for R and M and then finds out what day number of the year it is .
# (R and M are whole numbers.)
# 1. Start
# 2. get M (month number)
# 3. ge R (day of month)
# 4. S ← 0
# 5. if M > 1 then S ← S + 31
# 6. if M > 2 then S ← S + 28
# 7. if M > 3 then S ← S + 31
# 8. if M > 4 then S ← S + 30
# 9. if M > 5 then S ← S + 31
# 10. if M > 6 then S ← S + 30
# 11. if M > 7 then S ← S + 31
# 12. if M > 8 then S ← S + 31
# 13. if M > 9 then S ← S + 30
# 14. if M > 10 then S ← S + 31
# 15. if M > 11 then S ← S + 30
# 16. N ← S + R
# 17. Print N
# 18. End


## dry run(R=15,M=3):
#-----------------------------------------
# | M | S (after adding days) | N = S + R |
# | - | --------------------- | ---------- |
# | 3 | 31 + 28 = 59         | 59 + 15 =74 |
#-----------------------------------------
# The 15th day of the 3rd month is the 74th day of the year.
which_day = int(input("Enter the day:"))
which_month = int(input("Enter the month count number:"))


def determine_the_day(d, m):
    months_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    total_days = 0
    for i in months_days[:m-1]:
        total_days += i
    print(total_days+d)


# determine_the_day(which_day, which_month)

# 25)------------------------------------------------------------------------------
# Write an algorithm that takes a positive even number N as input and calculates the following sum:
# S = 1/2 - 2/3 + 3/4 - 4/5 + ... + (N-1)/N

# 1. start
# 2. get the N number
# 3. I ← 2 , S ← 0 , K ← 1 
# 4. if I<=N go to line 5 otherwise line 9
# 5. S ←  S + K × ((I-1)/I)
# 6. I ← I + 1
# 7. K ← -K
# 8. go to line 4
# 9. print S end 


##dry run(5):
#------------
#| K | I | S    |
#| 1 | 2 | 0.5  |
#|-1 | 3 | -0.16|
#| 1 | 4 | 0.59 |
#|-1 | 5 | -0.21|
#------------
# the total is -0.21

# i got a bit confustion about it 🙄
n = int(input("Enter an even number: "))


def even_number_sum(n):
    total = 0
    for i in range(1, n):
        if i % 2 == 1:
            total += i / (i + 1)
        else:
            total -= i / (i + 1)
    print(total)


# even_number_sum(n)

# 26)------------------------------------------------------------------------------
# Write an algorithm that takes two positive integers M and N,
# and then finds and prints:
# Their Greatest Common Divisor(GCD) — the biggest number that divides both numbers.
# Their Least Common Multiple(LCM) — the smallest number that both can divide exactly.

# To find the GCD, we use the Euclidean method:
# Divide the bigger number by the smaller number.
# If the remainder is 0, the smaller number is the GCD.
# If not, take:
# the smaller number → as the new bigger number,
# the remainder → as the new smaller number,
# and repeat the process.
# Continue until the remainder becomes 0.
# The last divisor that made remainder 0 is the GCD.
# To find the LCM, we use this formula:

#LCM * GCD = M*N
#LCM=(M*N)/GCD


# My approach 🤕 vs AI's approach 
m = int(input("enter the number m:"))
n = int(input("enter the number n:"))


def divisors(n):
    list_divis = []
    for i in range(1, n+1):
        if n % i == 0:
            list_divis.append(i)
    return list_divis


def GCD_LCM(n, m):
    gn = divisors(n)
    gm = divisors(m)
    same = []
    for a in gn:
        for b in gm:
            if a == b:
                same.append(a)
    gcd = max(same)
    lcd = (n*m)//gcd

    print(F"GCD:{gcd} LCM: {lcd}")



# GCD_LCM(n, m)

#Ai:
def gcd(a, b):
    while b != 0:
        a, b = b, a % b
    return a

def lcm(a, b):
    return (a * b) // gcd(a, b)


m = int(input("Enter M: "))
n = int(input("Enter N: "))

print(f"GCD: {gcd(m, n)} | LCM: {lcm(m, n)}")

# 27)------------------------------------------------------------------------------
# Write an algorithm that takes a natural number(N) as input and then finds and prints:
# 1 The number of digits in N
# 2 The sum of all its digits

n = input("Enter number:")


def digits(n):
    ln = 0
    total = 0
    for a in str(n):
        ln += 1
        total += int(a)

    print(ln)
    print(total)


# digits(n)

# 28)------------------------------------------------------------------------------
# Write an algorithm that takes a number in base 2 (binary) and converts it to its base 10 (decimal) equivalent.
# Explanation:
# Because the digits of a binary number are only 0 and 1,
# we need to take each digit, multiply it by powers of 2,
# and then add them all together to get the decimal number.
# To get each digit of the binary number,
# you can use the same method as in Example 26 (dividing by 10 and taking remainders).
binary = input("Enter the number:")


def decimal_converter(n):
    number = 0
    for idx, a in enumerate(reversed(n)):
        number += int(a)*(2**idx)
    print(number)


# decimal_converter(binary)

# 29)------------------------------------------------------------------------------
# Write an algorithm that reads N numbers one by one and finds and prints the largest number among them.
num = ""
nums = []

while num != "end":
    num = input("Enter a number (type 'end' when finished): ")

    if num != "end":
        nums.append(int(num))


def big_number(numbers):
    print("The biggest number is:", max(numbers))


# big_number(nums)
# 30)------------------------------------------------------------------------------
# Write an algorithm that takes the name, work hours, and hourly wage of employees as input and calculates and prints their salary.

# If the number of work hours is more than 50, the extra hours should be calculated as overtime.
# Variables:
# M: number of employees
# N: employee name
# H: work hours
# HS: hourly wage
# S: total salary

name = input("Enter your name: ")
hrs = int(input("Enter the hours you worked: "))
salary = int(input("Enter your salary per hour: "))


def the_salary(name, hrs, salary):
    if hrs <= 50:
        s = hrs * salary
    else:
        s = 50 * salary + (hrs - 50) * salary * 1.5
    print(f"{name}: {s}")


# the_salary(name, hrs, salary)

# 31)-----------------------------------------------------------------------------
# An office has 500 employees and wants to increase their salaries.
# Write an algorithm that:
# If the employee’s salary is less than or equal to 25,000, increase it by 5%.
# If the salary is between 25,000 and 35,000, increase it by 7%.
# If the salary is more than 35,000, increase it by 10%.
# The program should calculate and print for each employee:
# The old salary
# The amount of increase
# The new salary
s = int(input("Enter your current salary: "))

def increase_salary(s):
    increase = 0
    
    if s <= 25000:
        increase = s * 5 / 100
    elif s <= 35000:
        increase = s * 7 / 100
    else:
        increase = s * 10 / 100
    
    new_salary = s + increase
    print(f"Old salary: {s}")
    print(f"Increase: {increase}")
    print(f"New salary: {new_salary}")

# increase_salary(s)
