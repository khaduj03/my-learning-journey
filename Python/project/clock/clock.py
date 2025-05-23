from tkinter import *
import time

window=Tk()
window.title("Digital Clock")
window.geometry("250x90")

def mytime():
    hour=time.strftime('%I')
    minute=time.strftime('%M')
    second=time.strftime('%S')
    am_pm=time.strftime("%p")
    day=time.strftime("%A")
    zone=time.strftime("%Z")


    mytext=hour + ":" +minute+":"+second +am_pm
    mytext2=day +" , "+zone 
    mylabel.config(text=mytext) 
    mylabel2.config(text=mytext2)
    mylabel.after(1000 , mytime)
    


mylabel=Label(window , text="" , font=("Arial" ,30) , fg='white' , bg="pink" )
mylabel.pack()
mylabel2=Label(window , text="" , font=("Arial" ,10) )
mylabel2.pack()
mytime()


window.mainloop()
