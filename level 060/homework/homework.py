#1
def camel_case(s):
    return "".join([word.capitalize() for word in s.split(" ")])

#2
def to_weird_case(words):
    words = words.split()
    result = []
    
    for word in words:
        new_word = ""
        for i in range(len(word)):
            if i % 2 == 0:
                new_word += word[i].upper()
            else:
                new_word += word[i].lower()
        result.append(new_word)
        
    return " ".join(result)

#3
def clean_string(s):
    result = []
    
    for i in range(len(s)):
        if s[i] != "#":
            result.append(s[i])
        elif s[i] == "#" and len(result) > 0:
            result.pop()
    
    return "".join(result)