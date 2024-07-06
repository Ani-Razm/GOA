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