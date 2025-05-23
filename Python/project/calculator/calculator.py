
import tkinter as tk
from tkinter import Tk, Button, Entry, Frame

class Calculator(Tk):
    def __init__(self):
        Tk.__init__(self)
        self.title("Calculator")
        self.geometry("310x480")
        self.result = Entry(self,font=('Arial' , 16))
        self.result.grid(row=0, column=0, columnspan=4, padx=6, pady=6, ipadx=28, ipady=16, sticky=tk.W+tk.E)
        self.result.config(justify=tk.LEFT)
        self.button_frame = Frame(self)
        self.button_frame.grid()

        self.button_frame_2=Frame(self)
        self.button_frame_2.grid()

        self.create_button("1", self.button_frame, 0, 0, lambda: self.add_number(1))
        self.create_button("2", self.button_frame, 0, 1, lambda: self.add_number(2))
        self.create_button("3", self.button_frame, 0, 2, lambda: self.add_number(3))
        self.create_button("4", self.button_frame, 1, 0, lambda: self.add_number(4))
        self.create_button("5", self.button_frame, 1, 1, lambda: self.add_number(5))
        self.create_button("6", self.button_frame, 1, 2, lambda: self.add_number(6))
        self.create_button("7", self.button_frame, 2, 0, lambda: self.add_number(7))
        self.create_button("8", self.button_frame, 2, 1, lambda: self.add_number(8))
        self.create_button("9", self.button_frame, 2, 2, lambda: self.add_number(9))
        self.create_button("0", self.button_frame, 3, 0, lambda: self.add_number(0))
        self.create_button(".", self.button_frame, 3, 1, lambda: self.add_number("."))
        
        self.create_button("delete", self.button_frame, 3, 2, lambda: self.delete_number(), font=("Arial", 10), width=6, height=4)
        self.create_button("+", self.button_frame, 0, 3, lambda: self.add_number("+"))
        self.create_button("-", self.button_frame, 1, 3, lambda: self.add_number("-"))
        self.create_button("x", self.button_frame, 2, 3, lambda: self.add_number("*"))
        self.create_button("/", self.button_frame, 3, 3, lambda: self.add_number("/"))
        self.create_button("=", self.button_frame_2, 4, 3, lambda: self.calculate(), "green" , width=6 , height=1)
        self.create_button("c", self.button_frame_2, 4, 2, lambda: self.clear_number(), "red", width=13 , height=1)
        

    def create_button(self, text, frame, row, column, command, bg="white", font=("Arial", 18), width=4, height=2):
        button = Button(frame, text=text, command=command, width=width, height=height, font=font)
        button.config(bg=bg)
        button.grid(row=row, column=column, padx=5, pady=5)

    def add_number(self, number):
        current = self.result.get()
        current += str(number)
        self.result.delete(0, 'end')
        self.result.insert(0, current)

    def clear_number(self):
        self.result.delete(0, 'end')

    def delete_number(self):
        box_number = self.result.get()
        if len(box_number) > 0:
            self.result.delete(len(box_number) - 1, 'end')

    def calculate(self):
        current = self.result.get()
        self.result.delete(0, 'end')
        self.result.insert(0, eval(current))

if __name__ == "__main__":
    calculator = Calculator()
    calculator.mainloop()
