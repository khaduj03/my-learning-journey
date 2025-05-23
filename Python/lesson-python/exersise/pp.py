dictnum={
    '1':"one",
    '2':"tow",
    '3':"three",
    '4':"four",
    '5':"five",
    '6':"six",
    '7':"seven",
    '8':"eghit",
    '9':"nine",

}


number=input()
listme=[]

for num in number:
    if (len(number))==1:
        listme.append(dictnum[number])

    elif (len(number))==2:
        listme.append(dictnum[number])
        listme=(f"{listme}y {listme}")

print(listme)