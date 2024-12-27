def reverse_words(text):
    words = text.split(" ")
    reversed_txt = []
    for word in words:
        reversed_txt.append(word[::-1])
        
        
    return " ".join(reversed_txt)