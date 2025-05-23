
# x=[1,2,3,4,45]
# print(len(x))

# print(dir(x))
# print(x.__len__())

# print(x[2])
# print(x.__getitem__(2))


# class Order:
#      def __init__(self, *carts, costumer):
#           self.carts=list(carts)
#           self.costumer=costumer
#      def __len__(self):
#           return len(self.carts)
#      def __str__(self):
#           return f"costumer is : {self.costumer}"
#      def __bool__(self):
#           return len(self.carts)>0
#      def __add__(self , other):
#           new_carts=self.carts.copy()
#           new_carts.append(other)
#           return new_carts
#      def __getitem__(self, key):
#           return self.carts[key]


# order=Order("orange", "apple","kiwi",costumer="ali")
# print(order.costumer)
# print(order.carts)
# print(len(order))
# print(order+"apple tow")
