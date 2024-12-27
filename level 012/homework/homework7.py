# მომხმარებელს input-ის გამოყენებით შემოატანინეთ ორი რიცხვი. 
# შემდეგ შეამოწმეთ რომელია უდიდესი და გამოიყენეთ for ციკლი: უმცირესიდან უდიდესამდე დაპრინტეთ ყველა რიცხვი

num1 = int(input("enter number 1:"))
num2 = int(input("enter number 2:"))

if num1>num2:
    for i in range(num2,num1):
        print(i)
elif num1<num2:
    for i in range(num1,num2):
        print(i)