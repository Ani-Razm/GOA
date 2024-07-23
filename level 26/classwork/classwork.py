# მომხმარებელს შემოატანინეთ თავისი სახელი და პირველი ასო გარდაქმენით დიდ ასოდ

name = input("enter your name: ")

print(name.capitalize())

# მომხმარებელს შემოატანინეთ თავისი სახელი და ყველა ასო გარდაქმენით დიდ ასოდ

name = input("enter your name: ")

print(name.upper())

# capitalaze არის მეთოდი, რომლის საშუალებითაც ჩვენ გავრდაქმნით სტრინგის პირველ ასოს დიდ ასოდ
# upper არის მეთოდი, რომლის საშუალებითაც ჩვენ გავრდაქმნით სტრინგის ყველა ასოს დიდად
# მეთოდი არის ფუნქცია რომელიც ასრულებს მოქმედებას მხოლოდ კონკრეტულ ინფორმაციის ტიპზე

word =  input("enter word: ")

print(word.lower())

# count მეთოდი ითვლის კონკრეტულ ელემენტს ან ელემენტებს სიაში
# lower მეთოდი აპატარავებს სტრინგის ყველა ასოს
# სტრინგი არის ტექსტური სახის ინფორმაცია


"ani".index("ni")

# find და index მეთოდები გამოიყენება იმისთვის, რომ ვიპოვოთ კონკრეტული ელემენტის ინდექსი სტრინგში,
# მათ შორის განსხვავება ისაა რომ find მეთოდი ერორს არ გვაძლევს ელემენტის არ პოვნის შემთვევაში(უბრალოდ -1-ს გვიბრუნებს), 
# index კი გვაძლევს

email_list = []
  
emails_num = int(input("enter how much emails you want to enter: "))
for i in range(emails_num):
    email = input("enter email " + str(i + 1) + ":")
    if email.endswith("@gmail.com"):
        email_list.append(email)

print(email_list)





