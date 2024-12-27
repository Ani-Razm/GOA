# შექმენი ფუნქცია რომელიც გადაცემული მასივიდან ამოიღებს ყველაზე გრძელ იმ ნაწილს სადაც რიცხვები ზრდის მიხედვითაა დალაგებული, მაგ მასივში [1,2,3,1,2,3,4] ზრდის მიხედვით ყველაზე გრძელი ნაწილი არის [1,2,3,4] ( მასივის ბოლო 4 ელემენტი). მეორე მაგ: [1,2,1,3,16,21,11], ყველაზე გრძელი მასივის ნაწილი არის [16,21,11] რომელიც ზრდის მიხედვით იზდება. 

def longest_sequence(arr):
    # variables for storing the longest and current sequences
    longest_sequence, current_sequence = [], []
    
    # going through every index in the array
    for i in range(len(arr)):
        # checking if the index is 0 or element at the i-th index is greater than the previous one
        if i == 0 or arr[i] > arr[i - 1]:
            # if so, the element at the index, will be added in the current sequence
            current_sequence.append(arr[i])
        else:
            # otherwise, the current sequence will be refreshed
            current_sequence = [arr[i]]
        # checking on every iteration, if the current sequence length is greather than the longest sequence length
        if len(current_sequence) > len(longest_sequence):
            # if so, the longest sequence will become the current sequnece
            longest_sequence = current_sequence
    return longest_sequence

# test cases
print(longest_sequence([1,2,3,1,2,3,4])) # [1,2,3,4]
print(longest_sequence([1,2,1,3,16,21,11])) # [1,3,16,21,11]
    