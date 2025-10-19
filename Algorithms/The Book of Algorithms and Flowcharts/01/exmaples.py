# 1)------------------------------------------------------------------------------
# Write an algorithm that stores three numbers (2, 3, 5) in A, B, and C,
# then calculates the average of them.

a, b, c = 2, 3, 5
def average(a, b, c):
    total_sum = a + b + c
    mid = len([a, b, c])
    result = total_sum / mid
    return result

final = average(a, b, c)
# print(final) #3.3333333333333335

# 2)------------------------------------------------------------------------------
# The salary of an employee is A riyals.
# Every month, 10% of the salary is deducted for insurance (bema)
# and 5% is deducted for the cost of the place where he lives or daily expenses.
# Write an algorithm that receives the salary (A) and calculates the exact salary after deductions.

# 1 - Start
# 2 - Input A(salary)
# 3 - B < -- 10 * A / 100   (insurance)
# 4 - M < -- 5 * A / 100    (living/daily cost)
# 5 - S < -- B + M(total deductions)
# 6 - H < -- A - S(final salary)
# 7 - Write H
# 8 - End


def exact_salary(salary):
    insurance=10*salary/100
    cost=5*salary/100
    s = insurance+cost
    # print(s)
    exact_s = salary-s
    return exact_s

final=exact_salary(10000)
# print("exact salary",final)

# 3)------------------------------------------------------------------------------
# Write an algorithm that receives time T in seconds
# and determines how many hours, minutes, and seconds it equals
# assuming 1 hour = 60 minutes and 1 minute = 60 seconds.

# 1 - T = total seconds
# 2 - H = 60 minutes
# 3 - M = 60 seconds


def find_t_time(t):
    hr = t // 3600                # calculate hours
    remain_of_hr = t % 3600       # remaining seconds after hours
    minute = remain_of_hr // 60   # calculate minutes
    second = remain_of_hr % 60    # remaining seconds
    return hr, minute, second


# print(find_t_time(4210))


# 4)------------------------------------------------------------------------------
# Write an algorithm that calculates all even and two-digit numbers
def zouj(a, b): 
    list_zouj = []
    for num in range(a, b + 1):
        if (num % 2 == 0) and(10<=num<=99):
            list_zouj.append(num)
    return list_zouj

# print(zouj(10, 1000))


# 5)------------------------------------------------------------------------------
# Write an algorithm that receives a natural number n
# and calculates and prints all odd numbers smaller than or equal to it.

def calculate(n):
    num_list = []
    for num in range(n + 1):
        if num % 2 != 0:
            num_list.append(num)
    return num_list


# print(calculate(8)) #[1, 3, 5, 7]

# 6)------------------------------------------------------------------------------
# Write an Algorithm that returns all even numbers between 1000 and 2000,
# prints each one, and also prints the total sum of them.

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

# 7)------------------------------------------------------------------------------
# Write an algorithm that:
# Gets a natural number N (like 5, 7, or 10) from the user,
# Then calculates the sum of this series:
#S=1/2+1/3+/4+...+1/N


def sum_num(n):
    s=0
    for num in range(1,n+1):
        s+=1/num
    print(s)
    
# sum_num(7)  #2.59!

# 8)------------------------------------------------------------------------------
#Write an algorithm that takes a natural number n and calculates and prints the following sum:
def sum_even(n):
    s=0
    for num in range(1,n+1):
        if num%2==0:
            s+=1/num
    print(s)
    
# sum_even(8) #1.0416666666666665
# 9)------------------------------------------------------------------------------
# Write an algorithm that takes a natural number n and calculates and prints the following sum:
#s=1/3**1+2/3**2+3/3**3+..+n/3**n
def calculator(n):
    s=0
    for num in range(1,n+1):
        s+=num/3**num
    print(s)

# calculator(4) #0.7160493827160495

# 10)------------------------------------------------------------------------------
#Write an algorithm that takes 3 numbers a, b, and c, and checks if you can make a triangle with these numbers or not.
# first of all we need to understand what is the formula ! lol lemme think and back in school in my imagananition!
#ohhh the book a bit remindered me lol!

#shart:
#a+b=>c
#b+c=>a
#a+c=>b


def is_triangle(a,b,c):
    if (a+b>c and b+c>a and a+c>b):
        print("yes it can")
    else:
        print("no it can't")
        
# 11)------------------------------------------------------------------------------
# Write an algorithm that takes 3 numbers a, b, and c (the sides of a triangle) and checks if the triangle is a right-angled triangle or not.

def right_angled_triangle(a, b, c):
    if ((a**2)+(b**2) == c**2 or (b**2)+(c**2) == (a**2) or (a**2)+(c**2) == (b**2)):
        print("yes it can")
    else:
        print("no it can't")
        
# 12)------------------------------------------------------------------------------
# Write an algorithm that takes 100 numbers one by one, prints each number, and at the end, prints the sum of all the numbers.
## my brain didn't get this :/ that's why dear AI helped me ! it was too simple damn how I couldn't get it!


S = 0  # متغیر جمع اعداد
I = 1  # شمارنده حلقه

while I <= 100:  # حلقه برای 100 
    a = float(input(f" give me your number! {I}   : "))  # گرفتن  از کاربر
    print("the entered number :", a)  # چاپ 
    S = S + a  # جمع  با جمع قبلی
    I = I + 1  # افزایش شمارنده

# print("total:", S)

# 13)------------------------------------------------------------------------------
# Write an algorithm that takes two numbers, A and B, as input. Find and print the biggest number and the smallest number.
# (If A and B are equal, ask for two new numbers.)
# We will solve this problem in two different ways.

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
        

# 14)------------------------------------------------------------------------------
# Write the algorithm of Example 13 for three numbers, but this time only print the biggest number.
# (Assume that the three numbers are not all equal.)

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

# 15)------------------------------------------------------------------------------
# Write an algorithm that takes a positive whole number as input and checks if the number is even or odd.

def number_odd_or_even(n):
    if (n % 2 == 0):
        print("the number is even")
    else:
        print("the number is odd")


# number_odd_or_even(3)
# number_odd_or_even(4)

# 16)------------------------------------------------------------------------------
# Write an algorithm that takes a natural number N as input and :
# Finds all the divisors of N.
# Counts how many divisors there are.
# Calculates the sum of all divisors.
# Prints the results.
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
# 17)------------------------------------------------------------------------------
# Write an algorithm that takes a natural number N as input and checks if it is a perfect number or not .
# Explanation:
# A natural number N is called perfect if the sum of its divisors smaller than N is equal to N itself.
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
# 18)------------------------------------------------------------------------------
# Write an algorithm that takes a natural number N as input and checks if it is a prime number or not .
# Definition of a prime number:
# A natural number N is called prime if it has no divisors other than 1 and itself.
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


# 19)------------------------------------------------------------------------------
# Write an algorithm that takes a natural number N as input and calculates its factorial.
# Assume that N is a natural number.
# The factorial of N is written as N! and its value is found like this:

# If N = 0 → N! = 1
# If N = 1 → N! = 1
# If N ≠ 0, 1 → N! = N × (N – 1) × (N – 2) × ... × 3 × 2 × 1

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

# 20)------------------------------------------------------------------------------
# Example 21:
# Write an algorithm that takes a natural number N as input and calculates and prints the following sum:
# S = 1! + 2! + 3! + ... + N!
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

# 21)------------------------------------------------------------------------------
# Write an algorithm that shows(prints) all divisors of every number between 2 and 500, separately for each number.
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
# 22)------------------------------------------------------------------------------
# Suppose today is day R of month number M.
# Write an algorithm that asks for R and M and then finds out what day number of the year it is .
# (R and M are whole numbers.)
which_day = int(input("Enter the day:"))
which_month = int(input("Enter the month count number:"))


def determine_the_day(d, m):
    months_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    total_days = 0
    for i in months_days[:m-1]:
        total_days += i
    print(total_days+d)


# determine_the_day(which_day, which_month)

# 23)------------------------------------------------------------------------------
# Write an algorithm that takes a positive even number N as input and calculates the following sum:
# S = 1/2 - 2/3 + 3/4 - 4/5 + ... + (N-1)/N


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

# 24)------------------------------------------------------------------------------
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

# 25)------------------------------------------------------------------------------
# Write an algorithm that takes a natural number(N) as input and then finds and prints:
# 1 The number of digits in N
# 2 The sum of all its digits
