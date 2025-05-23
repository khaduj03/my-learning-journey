import tkinter as tk
# from tkinter import messegebox

class TicTacToeGUI:
    def __init__(self , board_size=3):
        self.board_size=board_size
        self.window=tk.Tk()
        self.window.title("Tic Tac Teo")
        self.board=[[' ' for _ in range(self.board_size)] for _ in range(self.board_size)]
        self.current_payer="X"
        self.creat_board_button()

    def creat_board_button(self):
        self.buttons=[[tk.Button(self.window , text=" " , font=("Arial" , 24) , width=3 , height=1,
                                command=lambda row=row , col=col : self.make_move(row , col)) for col in range(self.board_size)] for row in range(self.board_size)]

        for row in range(self.board_size):
            for col in range(self.board_size):
                self.buttons[row][col].grid(row=row , column=col)



    def make_move(self , row , col):
        if self.board[row][col]==" ":
            self.board[row][col]==self.current_payer
            self.buttons[row][col].config(text=self.current_payer)


            if self.check_win(self.current_payer):
                pass
            elif self.is_full:
                pass
            else:
                self.current_payer="o" if self.current_payer=="X" else "X"

        else:
            messegebox.showerror("invild ....")
    
    def check_win(self , payer):
        pass

    def is_full(self):
        pass

    def run(self):
        self.window.mainloop()


        


if __name__=="__main__":
    board_size=int(input("Enter "))
    tic_toc_teo=TicTacToeGUI(board_size)
    tic_toc_teo.run()