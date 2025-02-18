def min_max(lst):
    return [min(lst), max(lst)]

def number(lines):
    result = []
    for i in range(len(lines)):
        result.append(f'{i + 1}: {lines[i]}')
    return result

def bonus_time(salary, bonus):
    return f"${salary * 10}" if bonus == True else f"${salary}"

def maskify(cc):
    return (len(cc) - 4) * "#" + cc[-4:]

def double_char(s):
    result = []
    for l in s:
        result.append(l*2)
    return "".join(result)