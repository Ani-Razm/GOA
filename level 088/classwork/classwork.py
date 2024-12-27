#1
def validate_pin(pin):  
    return (len(pin) == 4 or len(pin) == 6) and pin.isdigit()

#2
def solution(number):
    sum = 0
    for num in range(1, number):
        if num % 3 == 0 or num % 5 == 0:
            sum += num            
    return sum

#3 Highest Rank Number in an Array
def highest_rank(arr):
    max_count_num = None
    count = 0
    for num in arr:
        if arr.count(num) > count:
            count = arr.count(num)
            max_count_num = num
        elif arr.count(num) == count:
            if max_count_num < num:
                max_count_num = num
            else:
                continue
        else:
            continue
    return max_count_num

#4 IP Validation
def is_valid_IP(strng):
    splited_arr = strng.split('.')
    if len(splited_arr) != 4:
        return False
    for i in splited_arr:
        if i.isdigit() == False or int(i) < 0 or int(i) > 255 or (len(i) > 1 and i.startswith("0")):
            return False
    return True

#5
def high_and_low(numbers):
    lst = []
    for num in numbers.split(" "):
        lst.append(int(num))
    return str(max(lst)) + " " + str(min(lst))

#6
def spin_words(sentence):
    sentence = sentence.split(" ")
    result = []
    for word in sentence:
        if len(word) >= 5:
            result.append(word[::-1])
        else:
            result.append(word)
    return " ".join(result)