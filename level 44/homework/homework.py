#1
def duplicate_count(text):
    text = text.lower()
    dub = []
    for letter in text:
        if text.count(letter) > 1 and letter not in dub:
            dub.append(letter)
    return len(dub)

#2
def pig_it(text):
    result = []
    for word in text.split():
        if word.isalpha():
            result.append(word[1:] + word[0] + "ay")
        else:
             result.append(word)          
    return " ".join(result)