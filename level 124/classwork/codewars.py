def set_alarm(employed, vacation): return employed and not vacation

def comp(array1, array2): return False if array1 == None or array2 == None else sorted(map(lambda x: x ** 2, array1)) == sorted(array2) 

def update_light(c): return 'yellow' if c == 'green' else 'red' if c == 'yellow' else 'green'