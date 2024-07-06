# countdown program
num = int(input("enter number: "))

while num >= 0:
    print(num)
    num -= 1


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


# 

socks = 10
wallet = 20
purchased_socks = 0 

while socks > 0 and wallet > 20:
    socks -= 1
    wallet -= 1
    purchased_socks += 1
print("now i have",purchased_socks,"socks")










