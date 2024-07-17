import openpyxl

book = openpyxl.open("input.xlsx", read_only=True)
sheet = book.active

book_second = openpyxl.open("input_second.xlsx", read_only=True) 
sheetInfo = book_second.active

book_third = openpyxl.open("DB/МИ3280-2010.xlsx", read_only=False)
sheet1 = book_third.active

book_fourth = openpyxl.open("DB/Р 1323565.2.001-2018.xlsx", read_only=False)
sheet2 = book_fourth.active

book_5 = openpyxl.open("DB/Р 50.2.032-2004.xlsx", read_only=False)
sheet3 = book_5.active

book_6 = openpyxl.open("DB/Термометры ИК.xlsx", read_only=False)
sheet4 = book_6.active

book_7 = openpyxl.open("DB/Термометры медицинские.xlsx", read_only=False)
sheet5 = book_7.active