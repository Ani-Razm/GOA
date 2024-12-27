#1
def bumps(road):
    return "Woohoo!" if road.count("n") <= 15 else "Car Dead" 

#2
def greet(name): 
    return f"Hello {name.capitalize()}!"

#3
def sum_even_numbers(seq): 
    even_sum = 0
    for num in seq:
        if num % 2 == 0:
            even_sum += num
    return even_sum

#4
def reverse(lst):
    empty_list = list(lst) 
    for value in lst:
        empty_list.insert(0, value)
        empty_list.pop(-1)
    return empty_list

#5
def averages(arr):
    if not isinstance(arr, list) or len(arr) < 2:
        return []
    
    i1 = 0
    i2 = 1
    result = []
    for i in range(len(arr)-1):
        av = (arr[i1] + arr[i2]) / 2
        result.append(av)
        i1 += 1
        i2 += 1
    return result

#6
def add(num1, num2):
    num1 = str(num1)
    num2 = str(num2)
    
    longest_len = max(len(num1), len(num2))
    
    num1 = num1.rjust(longest_len, "0")
    num2 = num2.rjust(longest_len, "0")
    
    totals = [int(d1) + int(d2) for d1,d2 in zip(num1, num2)]
    
    return int("".join([str(total) for total in totals]))

#7
def last_survivor(letters, coords): 
    letters = list(letters)
    for coord in coords:
        del letters[coord]
    return "".join(letters)

#8
def initialize_names(name):
    if len(name) < 3:
        return name
    name = name.split(" ")
    for i in range(1 , len(name) - 1):
        name[i] = name[i][0] + "."
    return " ".join(name)

#9
def get_issuer(number):
    number = str(number)
    if (number.startswith("34") or number.startswith("37")) and len(number) == 15:
        return "AMEX"
    elif number.startswith("6011") and len(number) == 16:
        return "Discover"
    elif (number.startswith("51") or number.startswith("52") or number.startswith("53") or number.startswith("54") or number.startswith("55")) and len(number) == 16:
        return "Mastercard"
    elif number.startswith("4") and (len(number) == 16 or len(number) == 13):
        return "VISA"
    else:
        return "Unknown"
    
#10
def even_or_odd(s):
    odd = []
    even = []
    for num in s:
        if int(num) % 2 == 0:
            even.append(int(num))
        else:
            odd.append(int(num))
    if sum(odd) < sum(even):
         return 'Even is greater than Odd'
    elif sum(odd) > sum(even):
         return 'Odd is greater than Even' 
    return 'Even and Odd are the same'
