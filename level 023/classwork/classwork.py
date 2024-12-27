#შექმენით ფუნქცია სახელად add რომელსაც ექნება ორი პარამეტრი, სახელად num1 num2, ამ პარამეტრებმ,ა უნდა მიიღოს რიცხვები და ფუნქციამ უნდა დაბეჭდოს ამ ორი რიცხვის ჯამი

def add(num1,num2):
    print(num1 + num2)

add(2,3)

#შექმენით ფუნქცია calculate, რომელსაც გადაეცემა ორი რიცხვი, შემდეგ დაუპრინტეთ მომხმარებელს არითმეტიკული ოპერაციების ვარიანტები და რომელსაც აირჩევს , ეგ კონკრეტული ოპერაცია ჩაატარეთ პარამეტრში ჩაწერილ რიცხვებს შორის
def print_arithmetic_operations():
    list = ["+", "-", "/", "*", "**"]
    count = 1
    for i in list:
        print(str(count) + ".",i)
        count += 1

def calculate(num1,num2):
    print_arithmetic_operations()
    choice = input("choose operation: ")
    if choice == "1":
        result = num1 + num2
    elif choice == "2":
        result = num1 - num2
    elif choice == "3":
        result = num1 / num2
    elif choice == "4":
        result = num1 * num2
    elif choice == "5":
        result = num1 ** num2
    return result

print(calculate(2,4))

#შექმენით ფუნქცია რომელსაც გადაეცემა რამოდენიმე სტრინგი, თქვენი დავალებაა მომხმარებელს შემოატანინოთ ეს სტრინგები და შემდეგ დაპრინტოთ ლისტის სახით

def make_a_list():
    s1 = input("enter a sting 1: ")
    s2 = input("enter a sting 2: ")
    s3 = input("enter a sting 3: ")

    print(list((s1, s2, s3)))    

make_a_list()


