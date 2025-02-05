from itertools import combinations
def two_sum(numbers, target):
    for a, b in list(combinations(numbers, 2)):
        if sum([a, b]) == target:
            a_i = numbers.index(a)
            b_i = numbers.index(b, 1)
            return (a_i, b_i)