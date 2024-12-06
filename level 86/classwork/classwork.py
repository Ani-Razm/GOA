#1
def find_it(seq):
    for n in seq:
        if seq.count(n) % 2 != 0:
            return n

#2
def array_diff(a, b):
    diff = []
    for num in a:
        if num not in b:
            diff.append(num)
    return diff