def multi_table(number):
    return "\n".join([f'{num} * {number} = {num * number}' for num in range(1, 11)])

def is_flush(cards):
    return len(set([num[-1] for num in cards])) == 1

def wave(people):
    result = []
    for i in range(len(people)):
        if people[i] == " ":
            continue
        result.append(people[:i] + people[i].upper() + people[i + 1:])
    return result