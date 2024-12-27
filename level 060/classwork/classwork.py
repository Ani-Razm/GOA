#1
def get_sum(a,b):
    if a > b:
        result = 0
        for num in range(b, a+1):
            result += num
        return result
    elif b > a:
        result = 0
        for num in range(a, b+1):
            result += num
        return result
    elif b == a:
        return b
    
#2
def number(lines):
    lst = []
    num = 0
    for line in lines:
        lst.append(str(num + 1) + ": " + line)
        num += 1
        
    return lst

#3
def is_pangram(st):
    st = st.lower()
    answer = True
    alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    for i in alphabet:
        if i not in st:
            answer = False
    return answer
