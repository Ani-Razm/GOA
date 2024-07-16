list = ["banana", "apple", "grape", "juice", "orange"]

new_list1 = list[:3]
new_list2 = list[3:]

print(new_list1)
print(new_list2)

print(list[-3], list[-4])

for i in list:
    if i == "grape":
        print(i)