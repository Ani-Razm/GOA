# 1. Print numbers from 1 to 5 using a for loop.
for i in range(1,5):
    print(i)

# 2. Print numbers from 1 to 5 using a while loop.
i = 1
while i < 5:
    print(i)
    i += 1

# 3. Print each character in the string "hello" using a for loop.
for i in "hello":
    print(i)

# 4. Print each character in the string "hello" using a while loop.
i = 0
while i < len("hello"):
    print("hello"[i])
    i += 1

# 5. Print the numbers 1, 2, 3 using a for loop.
for i in range(1,4):
    print(i)

# 6. Print the numbers 1, 2, 3 using a while loop.
i = 1
while i < 4:
    print(i)
    i += 1

# 7. Print "Python is fun" 3 times using a for loop.
for i in range(3):
    print("Python is fun")

# 8. Print "Python is fun" 3 times using a while loop.
i = 0
while i < 3:
    print("Python is fun")
    i += 1

# 9. Print the elements of a list [1, 2, 3] using a for loop.
lst = [1, 2, 3]

for i in lst:
    print(i)

# 10. Print the elements of a list [1, 2, 3] using a while loop.
lst = [1, 2, 3]
i = 0

while i < len(lst):
    print(lst[i])
    i += 1

# 11. Print "hi" for each element in a list [1, 2, 3] using a for loop.
lst = [1, 2, 3]

for i in lst:
    print(str(i) + " hi")

# 12. Print "hi" for each element in a list [1, 2, 3] using a while loop.
lst = [1, 2, 3]
i = 0

while i < len(lst):
    print(str(lst[i]) + " hi")
    i += 1

# 13. Print the first 3 positive integers using a for loop.
for i in range(1,4):
    print(i)

# 14. Print the first 3 positive integers using a while loop.
i = 1
while i < 4:
    print(i)
    i += 1

# 15. Print the numbers from 1 to 3 in reverse using a for loop.
reverse = ""
for i in range(1,4):
    reverse = str(i) + reverse
print(reverse)

# 16. Print the numbers from 1 to 3 in reverse using a while loop.
num = 3
while num != 0:
    print(num)
    num = num - 1

# 17. Print the first 4 letters of the alphabet using a for loop.
letters = ["a", "b", "c", "d"]
for i in letters:
    print(i)

# 18. Print the first 4 letters of the alphabet using a while loop.
letters = ["a", "b", "c", "d"]
i = 0
while i < len(letters):
    print(letters[i])
    i += 1

# 19. Print the message "looping" 4 times using a for loop.
for i in range(4):
    print("looping")

# 20. Print the message "looping" 4 times using a while loop.
i = 0
while i < 4:
    print("looping")
    i += 1

# 21. Print the elements of a tuple (1, 2, 3) using a for loop.
tp = (1, 2, 3)
for i in tp:
    print(i)

# 22. Print the elements of a tuple (1, 2, 3) using a while loop.
tp = (1, 2, 3)
i = 0

while i < len(tp):
    print(tp[i])
    i += 1

# 23. Print the numbers 5, 4, 3, 2, 1 using a for loop.
lst = [5, 4, 3, 2, 1]
for i in lst:
    print(i)

# 24. Print the numbers 5, 4, 3, 2, 1 using a while loop.
lst = [5, 4, 3, 2, 1]
i = 0

while i < len(lst):
    print(lst[i])
    i += 1

# 25. Print the elements of the list ["apple", "banana", "cherry"] using a for loop.
lst = ["apple", "banana", "cherry"]

for i in lst:
     print(i)

# 26. Print the elements of the list ["apple", "banana", "cherry"] using a while loop.
lst = ["apple", "banana", "cherry"]
i = 0

while i < len(lst):
    print(lst[i])
    i += 1

# 27. Print the first 3 numbers starting from 0 using a for loop.
for i in range(3):
    print(i)

# 28. Print the first 3 numbers starting from 0 using a while loop.
i = 0
while i != 3:
    print(i)
    i += 1

# 29. Print the word "loop" for each number in a list [1, 2, 3, 4] using a for loop.
lst = [1, 2, 3, 4] 

for i in lst:
    print("loop" + str(i))

# 30. Print the word "loop" for each number in a list [1, 2, 3, 4] using a while loop.
lst = [1, 2, 3, 4]
i = 0

while i < len(lst):
    print("loop" + str(lst[i]))
    i += 1

# 31. Print the characters of the string "abc" using a for loop.
for i in "abc":
    print(i)

# 32. Print the characters of the string "abc" using a while loop.
i = 0

while i < len("abc"):
    print("abc"[i])
    i += 1

# 33. Print the first 2 elements of a list ["x", "y", "z"] using a for loop.
lst =  ["x", "y", "z"]
for i in lst:
    if i == lst[2]:
        break
    else:
      print(i)

# 34. Print the first 2 elements of a list ["x", "y", "z"] using a while loop.
lst =  ["x", "y", "z"]
i = 0

while i < 2:
    print(lst[i])
    i += 1

# 35. Print the message "Hello World" 2 times using a for loop.
for i in range(2):
    print("Hello World")

# 36. Print the message "Hello World" 2 times using a while loop.
i = 0

while i < 2:
    print("Hello World")
    i += 1

# 37. Print the elements of a set {1, 2, 3} using a for loop.
dct = {1, 2, 3}
for i in dct:
    print(i)

# 38. Print the elements of a set {1, 2, 3} using a while loop.
lst = {1, 2, 3}
i = 0
lst = list(lst) 
while i < len(lst):
    print(lst[i]) 
    i += 1

# 39. Print the elements of the dictionary {"a": 1, "b": 2} using a for loop.
dct = {"a": 1, "b": 2}
for x, y in dct.items():
    print(x, y)


# 40. Print the elements of the dictionary {"a": 1, "b": 2} using a while loop.
dct = {"a": 1, "b": 2}

i = 0
while i < len(dct):
    print(dct.items())

# 41. Print the numbers 10, 20, 30 using a for loop.
for i in range(10,40,10):
    print(i)

# 42. Print the numbers 10, 20, 30 using a while loop.
i = 0
while i < 30:
    i += 10
    print(i)

# 43. Print "Done" after completing a for loop.
for i in range(10):
    print(i)
print("done")

# 44. Print "Done" after completing a while loop.
i = 0
while i < 10:
    print(i)
    i += 1
print("done")

# 45. Print the elements of a nested list [[1, 2], [3, 4]] using a for loop.
lst = [[1, 2], [3, 4]]
for i in lst:
    for j in i:
        print(j)

# 46. Print the elements of a nested list [[1, 2], [3, 4]] using a while loop.
lst = [[1, 2], [3, 4]]

outer_index = 0

while outer_index < len(lst):
    inner_index = 0
    while inner_index < len(lst[outer_index]):
        print(lst[outer_index][inner_index])
        inner_index += 1
    outer_index += 1


# 47. Print the first 5 positive integers using a for loop.
for i in range(1,6):
    print(i)

# 48. Print the first 5 positive integers using a while loop.
i = 1

while i < 6:
    print(i)
    i += 1

# 49. Print each character of the string "loop" using a for loop.
for i in "loop":
    print(i)

# 50. Print each character of the string "loop" using a while loop.
i = 0

while i < len("loop"):
    print("loop"[i])
    i += 1