count = int(input("how many numbers you want to enter? "))
list = []

for i in range(count):
    num = (int(input("enter number " + str(i + 1) + ": ")))
    list.append(num)

print(list)
print(sum(list))
    
