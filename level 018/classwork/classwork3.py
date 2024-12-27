num1 = int(input("enter start number: "))
num2 = int(input("enter end number: "))

list = []

for i in range(num1+1, num2):
    list.append(i)

print(list)
print(min(list))
print((max(list)))
print(sum(list))