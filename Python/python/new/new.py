word = input("what main is country?")
while word:
    if word=="kasgwar":
        print("good job")
    else:
        continue 
        print("wrong")
        
    words = input("what main is moon?")
    if word=="mah":
        print("good job")
    else:
        print("woring")
        continue 



li= [12,2,4,5,6,8]
li2= [33,55,6,7,8,3,12]
count=0
for t in li:
    for j in li2:
        if t==j:
            count+=1
print(count)




num=int(input("inter number:"))
for i in range(1,num+1):
    print("*"*i)
    
for i in range(num-1,0,-1):
    print(i*"*")





count=0
num=0
while True:
    number=float(input("inter:"))
    if number==-1:
        break
    else:
        num+=number
        count+=1
print("avrage",num/number)



for random import randint

javab = range(1,13)
hads= None

print(javab)
print()

while hads!=javab:
    hdas=int(input("inter :"))
    if hads == 0  :
        print("out")
        break
    elif javab == hads:
        print("your answer is currect:)")
        break
    elif javab>hads:
        print("small")
    else:
        print("big")