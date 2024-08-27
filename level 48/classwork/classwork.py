def accum(st):
    i = 1
    lst = []
    for l in st:
        lst.append((l * i).capitalize())
        i = i + 1
    return "-".join(lst)