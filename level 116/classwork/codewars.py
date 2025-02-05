def series_sum(n):
    result = 0
    for i in range(1, n * 3, 3):
        result += 1 / i
        
    return str(round(result, 2)).ljust(4, '0') if result > 0 else "0.00"