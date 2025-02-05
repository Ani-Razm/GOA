def sum_array(arr):
    try:
        return sum(sorted(arr)[1:-1])
    except:
        return 0