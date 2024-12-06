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

#3
