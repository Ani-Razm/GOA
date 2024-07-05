# შემოატანინეთ მომხმარებელს რიცხვი და დაადგინეთ არის თუ არა დადებითი უარყოფითი ან ნულის ტოლი 

num = int(input("enter number: "))

if num < 0:
    print("number is negative")
elif num > 0:
    print("number is positive")
else:
    print("number is 0")