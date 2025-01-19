def calculator(txt):
    txt = txt.split(" ")
    if "+" in txt:
        return (len(txt[0]) + len(txt[2])) * "."
    elif "-" in txt:
        return (len(txt[0]) - len(txt[2])) * "."
    elif "//" in txt:
        return (len(txt[0]) // len(txt[2])) * "."
    elif "*" in txt:
        return (len(txt[0]) * len(txt[2])) * "."