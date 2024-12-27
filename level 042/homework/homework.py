#1
def to_jaden_case(string):
    return " ".join(word.capitalize() for word in string.split())

#2
def stray(arr):
    for i in arr:
        if arr.count(i) == 1:
            return i
        
#3
def dup(arry):
    arry = " ".join(arry)
    new = ""
    for i in range(len(arry) - 1):
        if arry[i] != arry[i + 1]:
            new += arry[i]    
    return (new + arry[-1]).split()