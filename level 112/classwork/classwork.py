def greet(name):
    if name == "Johnny":
        return "Hello, my love!"
    return f"Hello, {name}!"

def reverse_words(s):
    reverse = []
    for word in s.split(" "):
        reverse.insert(0, word)
    
    return " ".join(reverse)