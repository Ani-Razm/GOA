# 2) გააკეთეთ 'manual' join (py)
def manual_join(lst, sep):
    result = ""
    for i in range(len(lst)):
        if i != len(lst) - 1:
            result += lst[i] + sep
        else:
            result += lst[i]
    return result

print(manual_join(['a', 'n', 'i'], "--"))

# 3)
def number(bus_stops):
    people_on = 0
    people_off = 0
    for stop in bus_stops:
        people_on += stop[0]
        people_off += stop[1]
    return people_on - people_off

# 4)
def get_average(marks):
    return sum(marks) // len(marks)

# 5)
def remove_exclamation_marks(s):
    return s.replace("!", "")

# 6)
def rental_car_cost(d):
    if d >= 7:
        return d * 40 - 50
    elif d >= 3:
        return d * 40 - 20
    else:
        return d * 40