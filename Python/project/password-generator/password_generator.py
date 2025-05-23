
# import random
# from tkinter import Tk, Label, Entry, Button, Listbox, BooleanVar, Checkbutton,messagebox, END

# class GeneratePassword(Tk):
#     def __init__(self):
#         Tk.__init__(self)
#         self.title("Password Generator")
#         self.geometry("240x400")
#         self.password = ""

#         self.length = Label(self, text="Enter the length of the password:)")
#         self.length.grid(ipadx=20 , ipady=20)

#         self.entry = Entry(self)
#         self.entry.grid()

#         self.upper_case = BooleanVar()
#         self.lower_case = BooleanVar()
#         self.numbers = BooleanVar()

#         self.check1 = Checkbutton(self, text="Include uppercase", variable=self.upper_case, command=self.generate_password)
#         self.check1.grid()

#         self.check2 = Checkbutton(self, text="Include lowercase", variable=self.lower_case, command=self.generate_password)
#         self.check2.grid()

#         self.check3 = Checkbutton(self, text="Include numbers", variable=self.numbers, command=self.generate_password)
#         self.check3.grid()

#         self.btn_create = Button(self, text="Create", command=self.click_create)
#         self.btn_create.grid()

#         self.list_box = Listbox(self)
#         self.list_box.grid()

#         self.button_clear = Button(self, text="Clear", command=self.clear_password)
#         self.button_clear.grid()

#     def generate_password(self):
#         characters = ""
#         if self.upper_case.get():
#             characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
#         if self.lower_case.get():
#             characters += "abcdefghijklmnopqrstuvwxyz"
#         if self.numbers.get():
#             characters += "0123456789"
            
#         self.password = ""
#         for _ in range(int(self.entry.get())):
#             self.password += random.choice(characters)

#     def click_create(self):
#         if not any([self.upper_case.get(),self.lower_case.get(),self.numbers.get() ]):
#             messagebox.showerror("Error :please select at least one option")
#         else:
#             self.generate_password()
#             print(self.password)
#             self.list_box.insert(END, self.password)

#     def clear_password(self):
#         self.list_box.delete(0, END)

# if __name__ == "__main__":
#     generate_password = GeneratePassword()
#     generate_password.mainloop()




import random
import string
from tkinter import Tk, Label, Entry, Button, Listbox, BooleanVar, Checkbutton, messagebox, END

class GeneratePassword(Tk):
    def __init__(self):
        Tk.__init__(self)
        self.title("Password Generator")
        self.geometry("240x400")
        self.password = ""

        self.length = Label(self, text="Enter the length of the password:)")
        self.length.grid(ipadx=20 , ipady=20)

        self.entry = Entry(self)
        self.entry.grid()

        self.upper_case = BooleanVar()
        self.lower_case = BooleanVar()
        self.numbers = BooleanVar()
        self.symbols = BooleanVar()  # Add variable for symbols

        self.check1 = Checkbutton(self, text="Include uppercase", variable=self.upper_case, command=self.generate_password)
        self.check1.grid()

        self.check2 = Checkbutton(self, text="Include lowercase", variable=self.lower_case, command=self.generate_password)
        self.check2.grid()

        self.check3 = Checkbutton(self, text="Include numbers", variable=self.numbers, command=self.generate_password)
        self.check3.grid()

        self.check4 = Checkbutton(self, text="Include symbols", variable=self.symbols, command=self.generate_password)  # Add checkbox for symbols
        self.check4.grid()

        self.btn_create = Button(self, text="Create", command=self.click_create)
        self.btn_create.grid()

        self.list_box = Listbox(self)
        self.list_box.grid()

        self.button_clear = Button(self, text="Clear", command=self.clear_password)
        self.button_clear.grid()

    def generate_password(self):
        characters = ""
        if self.upper_case.get():
            characters += string.ascii_uppercase
        if self.lower_case.get():
            characters += string.ascii_lowercase
        if self.numbers.get():
            characters += string.digits
        if self.symbols.get():  # Include symbols in characters string
            characters += string.punctuation

        self.password = ""
        for _ in range(int(self.entry.get())):
            self.password += random.choice(characters)

    def click_create(self):
        if not any([self.upper_case.get(),self.lower_case.get(),self.numbers.get(), self.symbols.get() ]):  # Check all variables
            messagebox.showerror("Error :please select at least one option")
        else:
            self.generate_password()
            print(self.password)
            self.list_box.insert(END, self.password)

    def clear_password(self):
        self.list_box.delete(0, END)

if __name__ == "__main__":
    generate_password = GeneratePassword()
    generate_password.mainloop()
