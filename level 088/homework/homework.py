# Count characters in your string
def count(s):
    dict = {} 
    for l in s:
        if l not in dict:
            dict[l] = s.count(l)
    return dict


# Your order, please
def order(s):
    ord = []
    for i in range (1, 10):
        for j in s.split():
            if str(i) in j:
                ord.append(j)
    return " ".join(ord)


# Reverse words
def reverse_words(text):
    return " ".join([word[::-1] for word in text.split(" ")])


# Split Strings
def solution(s):
    result = []
    for i in range(0, len(s) - 1, 2):
        result.append(s[i: i + 2])
    if len(s) % 2 != 0:
        result.append(s[-1] + "_")
    return result