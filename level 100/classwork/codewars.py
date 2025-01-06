# split strings
def solution(s):
    result = []
    for i in range(0, len(s) - 1, 2):
        result.append(s[i: i + 2])
    if len(s) % 2 != 0:
        result.append(s[-1] + "_")
    return result
            
# who likes it?
def likes(name):
    if len(name) == 0:
        return "no one likes this"
    elif len(name) == 1:
        return f"{name[0]} likes this"
    elif len(name) == 2:
        return f"{name[0]} and {name[1]} like this"
    elif len(name) == 3:
        return f"{name[0]}, {name[1]} and {name[2]} like this"
    else:
        return f"{name[0]}, {name[1]} and {len(name) - 2} others like this"

# persistent burgger
def persistence(n):
  counter = 0
  while n >= 10:
        result = 1
        for num in str(n):
            result *= int(num)
        n = result
        counter += 1
  return counter

# sum of digits / digital root
def digital_root(n):
    while len(str(n)) > 1:
        sum = 0
        for num in str(n):
            sum += int(num)
        n = sum
    return n