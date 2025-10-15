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
# print(final)

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
        if (num % 2 == 0)& (10<=num<=99):
            list_zouj.append(num)
    return list_zouj

# print(zouj(10, 1000))

