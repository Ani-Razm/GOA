#1
def alphabet_position(text):
    result = []
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    
    for l in text.lower(): 
        for l2 in alphabet:
            if l == l2:
                result.append(str(alphabet.find(l2) + 1))
    
    return " ".join(result)

#2
def to_camel_case(text):
    text = text.replace("_", "-")
    result = []
    
    for word in text.split("-"):
        if text.index(word) == 0:
            result.append(word)
        else:
            result.append(word.capitalize())
    
    return "".join(result)

#3
def order(sentence):
    
    result = []
    
    for i in range(1, 10):
        for word in sentence.split():
            if str(i) in word:
                result.append(word)
    
    return " ".join(result)

print("".join(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']))