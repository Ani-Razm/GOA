#1
def sum_str(a, b):
    if len(a) == 0 and len(b) == 0:
        return "0"
    elif len(a) > 0 and len(b) == 0:
        return a
    elif len(a) == 0 and len(b) > 0:
        return b
    else:
        return str(int(a) + int(b))
    
#2
def flick_switch(lst):
    mylist = []
    for_flick = True
    for i in lst:
        if i == 'flick': 
            for_flick = not for_flick
        mylist.append(for_flick)
    return mylist

#3
def open_or_senior(data):
    lst = []
    age = 55
    handicap = 7
    for i in data:
        if i[0] >= age and i[1] > handicap:
            lst.append('Senior')
        else:
            lst.append('Open')
    return lst

#4
def is_anagram(test, original):
    return sorted(test.lower()) == sorted(original.lower())

#5
def get_middle(s):
    if len(s) % 2 == 0:
        return s[len(s) // 2 - 1] + s[len(s) // 2]
    else:
        return s[int(len(s) / 2)]
    
#6
def xo(s):
    return s.lower().count("o") == s.lower().count("x")

#7
def is_isogram(string):
    string = string.lower()
    for i in string:
        if string.count(i) > 1:
            return False
    return True