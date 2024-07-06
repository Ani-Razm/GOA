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
