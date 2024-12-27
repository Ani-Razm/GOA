# Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
def digitize(n):
    reversed_nums = []
    i = -1
    while i >= -len(str(n)):
                reversed_nums.append(int(str(n)[i]))
                i -= 1
    return reversed_nums


# Create a function which answers the question "Are you playing banjo?".
# If your name starts with the letter "R" or lower case "r", you are playing banjo!
# The function takes a name as its only argument, and returns one of the following strings:
def are_you_playing_banjo(name):
    if name.startswith("r") or name.startswith("R"):
        return(name + " plays banjo")
    else:
        return(name + " does not play banjo")

    
# Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
# Use conditionals to return the proper message:
# case	return
# name equals owner	'Hello boss'
# otherwise	'Hello guest'
def greet(name, owner):
    if name == owner:
        return('Hello boss')
    else:
        return('Hello guest')
    

# After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
# You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
# Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
# Write a code that gives out the total amount for different days(d).
def rental_car_cost(d):
    if d < 3:
        return(d * 40)
    elif d >= 7:
        return(d * 40 - 50)
    elif d >= 3:
        return(d * 40 - 20)


# Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
def remove_exclamation_marks(s):
    lst = []
    for i in s:
        if i == "!":
            continue
        else:
            lst.append(i)
    return "".join(lst)


# Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
def count_sheep(n):
    lst = []
    for i in range(1,n + 1):
        lst.append(str(i) + " sheep...")
    return "".join(lst)


# #Rock Paper Scissors
# Let's play! You have to return which player won! In case of a draw return Draw!.
# Examples(Input1, Input2 --> Output):
# "scissors", "paper" --> "Player 1 won!"
# "scissors", "rock" --> "Player 2 won!"
# "paper", "paper" --> "Draw!"
def rps(p1, p2):
    if p1 == p2:
        return("Draw!")
    elif p1 == "scrissors" and p2 == "paper":
        return("Player 1 won!")
    elif p1 == "rock" and p2 == "scissors":
        return("Player 1 won!")
    elif p1 == "paper" and p2 == "rock":
        return("Player 1 won!")
    else:
        return("Player 2 won!")
    

# Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
# For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
# Constraint:
# 1 <= month <= 12   
def quarter_of(month):
    if month in range(1,4):
        return 1
    elif month in range(4,7):
        return 2
    elif month in range(7,10):
        return 3
    else:
        return 4    