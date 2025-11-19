# 1.)---------------------------------------------------------------------------------------
# Write an algorithm that receives four numbers a, b, c, and d as input.
# If a > c + d, calculate and print a × c.
# Otherwise, calculate and print b × d.

# 1- start
# 2- get a , b , c
# 3- if a > c + d then  print a × c otherwise print b × d 
# 4- end 

## Dry run (2,4,5,4)

# | a | b | c | d |a > c + d     | output    |
# |---|---|---|---|--------------|-----------|
# | 2 | 4 | 5 | 4 |2> 5+4 (false)| 4 × 4 (16)|


def calculator(a,b,c,d):
    if a > c + d :
        print (a * c)
    else:
        print(b * d)
# 2.)---------------------------------------------------------------------------------------
# Write an algorithm that generates and prints all multiples of 2 up to 1000.

# 1- start
# 2- I ← 1 , S ← 0
# 3- S ← I × 2
# 4- if S <= 1000 print S otherwise go to line 7
# 5- I ← I + 1
# 6- go to line 3
# 7- end


# dry run
# | Iteration | I   | S = I × 2 | Printed? |
# | --------- | --- | --------- | -------- |
# | 1         | 1   | 2         | Yes      |
# | 2         | 2   | 4         | Yes      |
# | 3         | 3   | 6         | Yes      |
# | 4         | 4   | 8         | Yes      |
# | ...       | ... | ...       | ...      |
# | 500       | 500 | 1000      | Yes      |
# | 501       | 501 | 1002      | No → End |


def generator():
    i = 1
    while True:
        s = i * 2
        if s > 1000: 
            break
        print(s)
        i += 1

# 3.)---------------------------------------------------------------------------------------
# Write an algorithm that generates and prints all multiples of 9 up to 900, and also calculates and prints their sum.


# 1- start
# 2- I ← 1 , S ← 0 , total ← 0
# 3- S ← I × 9
# 4- if S <= 900  otherwise go to line 9
# 5- print S
# 6- total ← total + S
# 7- I ← I + 1
# 8- go to line 3
# 9- print total , end


#dry run 
# | I   | S = I×9 | Printed? | Total   |
# | --- | ------- | -------- | ------  |
# | 1   | 9       | Yes      | 9       |
# | 2   | 18      | Yes      | 27      |
# | 3   | 27      | Yes      | 54      |
# | 4   | 36      | Yes      | 90      |
# | …   | …       | …        | …       |
# | 100 | 900     | Yes      | 45, 450 |
# | 101 | 909     | No       | 45, 450 |

def generator():
    i = 1
    total = 0
    while True:
        s = i * 9
        if s > 900:        
            break
        print(s)
        total += s         
        i += 1
    print("Total =", total)


# 4.)---------------------------------------------------------------------------------------
#  Write an algorithm that asks for a natural number N and a real number X,
# and calculates the following values:

# a) P = 1/3 + 1/6 + 1/9 + ... + 1/N
#    sum of reciprocals of multiples of 3 up to N

# b) S = 1 + X + X^2 + ... + X^N
#    sum of powers of X from 0 to N

# c) sin(X) = X - X^3/3! + X^5/5! + ... + X^(2N-1)/(2N-1)!
#    approximation of sin(X) using the first N terms of the Taylor series

# d) T = 1×2 + 2×3 + 3×4 + ... + N×(N-1)
#    sum of products of consecutive integers from 1 to N


# a) P = 1/3 + 1/6 + 1/9 + ... + 1/N
# 1- start
# 2- get N number
# 3- I ← 3 , P ← 0
# 4- if I <= N go to line 5 otherwise go to line  8
# 5- P ← P + 1/I
# 6- I ← I + 3
# 7- go to line 4
# 8- print P
# 9- end

# b) S = 1 + X + X^2 + ... + X^N
# 1- start
# 2- get N , X
# 3- S ← 1 , I ← 2
# 4- if I<= N go to line 5  otherwise go to line 8
# 5- S ← S + X^I
# 6- I ← I+1
# 7- go to line 5
# 8- print S
# 9- end


# c) sin(X) = X - X^3/3! + X^5/5! +                                                                                                                                                                                                                                                                                                     65 ... + X^(2N-1)/(2N-1)!