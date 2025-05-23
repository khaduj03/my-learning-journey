import itertools
# count=0
# for i in itertools.count(1,2):
#      if count==10:
#           break
#      print(i)
#      count+=1


# for i in itertools.count(1,2):
#      if i ==15:
#           break
#      else:
#           print(i)


# conter=0
# for i in itertools.cycle("abc"):
#      if conter==10:
#           break
#      else:
#           print(i)
#           conter+=1

# for i in itertools.repeat("ab", 4):
#      print(i)


# print(list(itertools.repeat("aaa", 4)))


from itertools import product

# print(list(product([1,2], [3,4])))
# print(list(product([1,2], "ab")))
from itertools import permutations

# print(list(permutations("acd")))

from itertools import combinations
# print(list(combinations("avd",2))
from itertools import accumulate
import operator
# my_list=[1,3,5]
# x=accumulate(my_list, operator.mul)
# print(list(x))

# my_list=[1,3,5]
# print(list(itertools.filterfalse(lambda x:x%2==0 ,my_list)))