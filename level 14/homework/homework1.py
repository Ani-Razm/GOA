# გაიარეთ while ციკლები და გააკეთეთ 5 მაგალითი while ციკლზე (თქვენ მოიფიქრეთ)


# countdown program
num = int(input("enter number: "))

while num >= 0:
    print(num)
    num -= 1


# socks shop program
socks = 100
wallet = int(input("enter how much money you have: "))
counter = 0 

while socks > 0 and wallet > 0:
    wallet -= 1
    socks -= 1
    counter += 1
print("you can buy",counter,"socks")
print("remaining socks in shop",socks)
print("remaining money:",wallet)


# password program
password = "an12"
registered = False

while registered == False:
    guess = input("enter your password: ")
    if guess == password:
        registered = True
        print("wellcome, ani")
    else:
        print("wrong, try again")


# Guess game(modified)
number = 10
guess = 0

while guess != number:

    guess = int(input("guees number from 1 to 100: "))

    if guess > number:
        print("it's too high")
    elif guess < number:
        print("it's too low")
    else:
        print("you won!")
        break

# Counting to 12
number = 0

while number < 13:
    print(number)
    number += 1
print("number is no longer less than 13")














