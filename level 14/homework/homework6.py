# გააკეთეთ 5 მაგალითი if-else

# if/else 1
age = int(input("enter your age: "))

if age >= 18:
    print("you can vote")
else:
    print("you can't vote yet")


# if/else 2
num1 = int(input("enter number 1: "))
num2 = int(input("enter number 2: "))

print(num1) if num1 > num2 else print(num2)


# if/else 3
age = int(input("enter your age: "))

if age > 10:
    print("your age is above 10")
    if age > 30:
        print("and also it above 30")
    else:
        print("but not above 30")
else:
    print("your age is below 10")


# if/else 4
a = int(input("enter number 1: "))
b = int(input("enter number 2: "))

if a > b:
    pass
elif b > a:
    print(b,"is greater than",a)
else:
    pass


# if/else 5
a = int(input("enter number 1: "))
b = int(input("enter number 2: "))

if not a > b:
    print(a,"is less than",b)


