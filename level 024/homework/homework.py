# Write a function which converts the input string to uppercase.
def make_upper_case(s):
    return s.upper()

# A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?Return true if yes, false otherwise :)
def hero(bullets, dragons):
    return bullets >= dragons * 2

# Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.You can assume that all values are integers. Do not mutate the input array.
def invert(lst):
    new_lst = []
    for i in lst:
        i = i * -1
        new_lst.append(i)
    return new_lst

# At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].
def difference_in_ages(ages):

    min_age = min(ages)

    max_age = max(ages)

    difference = max_age - min_age

    return min_age, max_age, difference

#Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.
def sum_mix(arr):
    mix_sum = 0
    for i in arr:
        mix_sum += int(i)
    return mix_sum