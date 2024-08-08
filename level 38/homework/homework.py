#1 
def filter_list(l):
    filtered = []
    for i in l:
        if isinstance(i, int) == True : # isinstance() ამოწმებს არის თუ არა მნიშვნელობა რაღაც კონკრეტული ტიპის
            filtered.append(i)        
    return filtered

#2
def sum_two_smallest_numbers(numbers):
    numbers.sort() # sort() ალაგებს რიცხვებს სიაში ზრდადობის მიხედვით
    return numbers[0] + numbers[1]

#3
def solution(string, ending):
    return string.endswith(ending)

#4
def stray(arr):
    for i in arr:
        if arr.count(i) == 1:
            return i