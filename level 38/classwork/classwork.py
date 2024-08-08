#1
def is_divisible(n,x,y):
    return n % x == 0 and n % y == 0

#2
def array_plus_array(arr1,arr2):
    return sum(arr1 + arr2)

#3
def feast(beast, dish):
    return beast[0]==dish[0] and dish[-1]==beast[-1]

#4
def say_hello(name, city, state):
    return f"Hello, {' '.join(name)}! Welcome to {city}, {state}!"

#5
def points(games):
    sum = 0
    for a in games:
        if a[0] > a[2]:
            points += 3
        elif a[0] == a[2]:
            points += 1
    return sum
    