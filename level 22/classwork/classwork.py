# შექმენით ფუნქცია რომელსაც დაარქმევთ Calculate_average სადაც იქნება ერთი სია შექმნილი სახელად numbers
# თქვენი დავალება არის გამოთვალოთ ამ რიცხვების საშუალო არითმეტიკული გამოიყენეთ  sum და len ფუნქციები
def calculate_average():
    list=[2,3,1,4,5]
    total=sum(list)
    lenght=len(list)
    print(total/lenght)

calculate_average()

# შექმენით  მისალმების ფუნქცია სახელად greet რომელიც მიესალმება მომხმარებელს და default მნიშვნელობად იქნება hello guest
def greet(name = "guest"):
    print("Hello " + name)

greet()

# შექმენით ფუნქცია manual_sum ჩვენი ფუნქცია მიიღებს ერთ მნიშვნელბას სიას.
# თქვენი დავალება არის გაიგოთ ამ სიის რიცხვთა ჯამი გაიგოთ for ციკლის მეშვეობით
def manual_sum(list):
    total = 0
    for i in list:
        total = total + i
    print(total)

manual_sum([2,3,4,5])

# შექმენით ფუნქცია რომელსაც გადაეცემა ორი მნიშვნელობა firstnum და secondnum და თქვენი დავალებაა იპოვოთ ამ რიცხვებს შორის ყველა რიცხვის ჯამი
def total(num1,num2):
    total = 0
    for i in range(num1+1,num2):
        total = total + i
    print(total)

total(2,5)

# შექმენით ფუნქცია რომელსაც გადაეცემა ლისტი. თქვენი დავალებაა ამ ლისტიდან ამოიღიოთ ყველა ციფრი და დაახარისხოთ ისინი კენტებად და ლუწებად
def even_odd(list):
    even = []
    odd = []
    for i in list:
        if i % 2 == 0:
            even.append(i)
        else:
            odd.append(i)
    print("even numbers",even)
    print("odd numbers",odd)

even_odd([2,3,8])

# შექმენით ფუნქცია print_numbers რომელიც მიიღებს n მნიშვნელობას და გამოიტანს 1 დან ამ n რიცხვამდე ყველა რიცხვს for loop ის გამოყენებით 
def sequence_of_numbers(n):
    for i in range(1,n):
        print(i)

sequence_of_numbers(4)

        

            



