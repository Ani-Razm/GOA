def unique_in_order(sequence):
    # if sequence length is 0, it will return empty list
    if len(sequence) == 0:
        return  []
  
    result = []
    # else, we will go through every index in the list(except the last one, because we dont want to go out of the range)
    for i in range(len(sequence) - 1):
        # if character at current index is not equal to next index character, append it to result list
        if sequence[i] != sequence[i+1]:
            result.append(sequence[i])
    # append last character to the list
    result.append(sequence[-1])
    
    return result