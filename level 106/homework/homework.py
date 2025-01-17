def to_underscore(st):
    if type(st) == int:
        return str(st)
    result = ""
    for i in range(len(st)):
        if (i == 0 and st[i].isupper) or st[i].islower() or st[i].isdigit():
            result += st[i].lower()
        else:
            result += "_" + st[i].lower() 
    return result

def is_sorted_and_how(arr):
    if arr == sorted(arr):
        return "yes, ascending"
    elif arr == sorted(arr)[::-1]:
        return "yes, descending"
    else:
        return 'no'