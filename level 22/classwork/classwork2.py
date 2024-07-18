# შექმენით ფუნქცია  print_even_numbers რომელიც მიიღებს ერთ პარამეტრს n შემდეგ გამოიტანს 2 დან ამ რიცხვამდე ყველა ლუწ რიცხვს გამოიყენეთ for loop
def print_even_numbers(n):
    for i in range(2,n,2):
        print(i)

print_even_numbers(9)

# შექმენით ფუნქცია რომელსაც დაარქმევთ sum(ჯამი) ეგ ფუნქცია მიიღებს ორ რიცხვს პარამეტრებს გაუწერეთ num1 და num2 თქვენი დავალებაა ამ ორი რიცხვის ჯამი დაბეჭდეთ
def sum(num1,num2):
    print(num1+num2)


# შექმენით ფუნქცია რომელსაც დაარქმევთ sum(ჯამი) ეგ ფუნქცია მიიღებს ორ რიცხვს პარაამეტრებს გაუწერეთ num1 და num2 თქვენი დავალებაა ამ ორი რიცხვის ჯამი დააბრუნოთ
def sum(num1,num2):
    return(num1+num2)

# შექმენით ფუნქცია რომელიც დაბეჭდავს ორი სტრინგის გაერთიანებას მაგალითად str1  და str2 და დაბეჭდეთ მათი შეერთება ფუნქციას დაარქვით joined_string
def joined_string(str1, str2):
    print(str1 + str2)

# შექმენით ფუნქცია find_maximum რომელსაც გადაასცემთ ორ მნიშვნელობას მაგალითად num1 და num2 შემდეგ დააბრუნეთ აქედან რომელიც უფრო მეტია
def find_maximum(num1,num2):
    if num1 > num2:
        return num1
    elif num1 < num2:
        return num2

# შექმენით ფუნქცია reverse_string და მიიღებს ერთ მნიშვნელობას str მაგალითად შემდეგ დააბრუნეთ ეს სტრინგი შებრუნებულად
def reverse_string(str):
    reverse = ""
    for i in str:
        reverse = i + reverse
    return(reverse)

print(reverse_string("sjhbaj"))

# დაწერეთ პითონის ფუნქცია, რომელიც ითვლის მართკუთხედის ფართობს მისი სიგრძისა და სიგანის პარამეტრების მიხედვით.
def rectangle_area(lenght, width):
    return lenght * width

print(rectangle_area(20, 30))

#  შექმენით ფუნქცია, რომელიც ამოწმებს არის თუ არა მოცემული რიცხვი მარტივი.
def prime_number(number):

    counter = 0

    for i in range(1,number+1):
        if number % i == 0:
          counter += 1

    if counter == 2:
        return "prime"
    else:
        return "not prime"

print(prime_number(3))
    

# დაწერეთ ფუნქცია, რომელიც იღებს სტრიქონს და ითვლის ხმოვანთა რაოდენობას (a, e, i, o, u) სტრიქონში.

def count_vowels(str):
    counter = 0
    for i in str:
          if i in "aeiou":
             counter += 1
    return counter

print(count_vowels("ani"))

#  განსაზღვრეთ ფუნქცია, რომელიც იღებს სტრიქონების ჩამონათვალს და აბრუნებს ახალ სიას ყველა სტრიქონის დიდი ასოებით.

def upper_case(list):
    upper_case_list = []
    for i in list:
      i = i.upper()
      upper_case_list.append(i)
    return upper_case_list

print(upper_case(["pottato","banana","apple"]))
      
    






   






    

 