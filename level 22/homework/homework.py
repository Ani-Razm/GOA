def odd_index_sum(list):
    total = 0
    for i in range(len(list)):
        if i % 2 != 0:
            total += list[i]
    return(total)

print(odd_index_sum([2,4,5,2,1,3]))