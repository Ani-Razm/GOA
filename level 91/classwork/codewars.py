def get_matrix(n):
    result = []
    
    for i in range(n):
        inner_lst = []
        for j in range(n - 1):
            inner_lst.append(0)
        inner_lst.insert(i, 1)
        result.append(inner_lst)
    return result