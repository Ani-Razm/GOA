# 1) შექმენით ფუნქცია რომელსაც მატრიცა (2დ მასივი) X-ების O-ების და ცარიელი სტრინგების. ფუნქციამ უნდა გამოთვალოს ფრეა, თუ რომელამა მოთამაშემ მოიგო თამაში. ( ინფუთი ყოველთვის ვალიდური იქნება )
# მაგ ინფუთის:
# [ [ 'X', "O", ""], ["X", "X", "O"], ["', "", ""] ]

def tic_tac_toe(arr):
    for i in range(3):
        # checking horizontally
        if arr[i][0] == arr[i][1] == arr[i][2] and arr[i][0] != "":
            return arr[i][0]
        # checking vertically
        elif arr[0][i] == arr[1][i] == arr[2][i] and arr[0][i] != "":
            return arr[0][i]
    # checking diagonally
    if arr[0][0] == arr[1][1] == arr[2][2]:
        return arr[0][0]
    elif arr[2][2] == arr[1][1] == arr[0][0]:
        return arr[0][0]
    return "draw"

# test cases
print(tic_tac_toe([[ 'X', "O", ""], 
                   ["X", "X", "O"], 
                   ["", "", ""] ])) # draw

print(tic_tac_toe([[ 'X', "O", ""], 
                   ["X", "X", "O"], 
                   ["", "", "X"] ])) # X

print(tic_tac_toe([[ 'O', "O", "O"], 
                   ["X", "X", "O"], 
                   ["", "", ""] ])) # O

print(tic_tac_toe([[ 'O', "", "X"], 
                   ["O", "X", "O"], 
                   ["O", "X", ""] ])) # O

# 2) შექმენით ფუნქცია რომელსაც მატრიცა (2დ მასივი) X-ების O-ების და ცარიელი სტრინგების. ფუნქციამ უნდა დაადგინოს რომელი მოთამაშე მოიგებდა "Connrect 4'-ის თამაშში, სიმარტივითვის თქვენ არ გიწევთ დიაგონალურად შემოწმება. ( თუ თამაში არ იცით რესურსებში აღწერას ჩავაგდებ ) ( სირთულე 8/10 ) 

def connrect(arr):
    for i in range(4):
        # chenking rows
        if arr[i][0] == arr[i][1] == arr[i][2] == arr[i][3]:
            return arr[i][0]
        # cheking columns
        elif arr[0][i] == arr[1][i] == arr[2][i] == arr[3][i]:
             return arr[0][i]
    return "Draw"

# test cases
print(connrect([["X", "X", "X", "X"],
                ["O", "X", "O", "X"],
                ["X", "O", "X", "O"],
                ["O", "X", "O", "X"]])) # X

print(connrect([["X", "O", "X", "O"],   
                ["O", "O", "O", "O"],
                ["X", "O", "X", "O"],
                ["O", "X", "O", "O"]])) # O 
    
print(connrect([["X", "O", "X", "O"],
                ["O", "X", "O", "X"],
                ["X", "O", "X", "O"],
                ["O", "X", "O", "X"]])) # draw

# 3) შექმენით ფუნქცია რომელიც ამოწმებს თუ ორი გადაცემული არგუმენტის  ნამრავლს იგივე რიცხვები აქვს რაც თვითონ ორ არგუმენტს. ( სირთულე 6/10 )
# მაგ: 6 * 21 = 126 --> true
# მაგ: 10 * 11 = 110

def is_same(num1, num2):
    # converting product to string, so it could be iterable
    result = str(num1 * num2)
    # same with num1 and num2
    nums = str(num1) + str(num2)
    # going over digits in nums
    for digit in nums:
        # if some digit is not in the product, it will return False
        if digit not in result:
            return False
    # else, it will return True
    return True

# test cases
print(is_same(6, 21)) # true
print(is_same(10, 110)) # true
print(is_same(2,6)) # false

# 4) შექმენით ფუნქცია რომელსაც გადაეცემა სტრინგი და აბრუნებს ბულეანს იმის მიხედვით თუ ამ სტრინგში მხოლოდ უნიკალური ასოებია. ( სირთულე 3/10 )

def has_unic_chars(s):
    for char in s:
        if s.count(char) > 1:
            return False
    return True

def has_unic_chars(s):
    return len(set(s)) == len(s)

# test cases
print(has_unic_chars("ani")) # true
print(has_unic_chars("anii")) # false
print(has_unic_chars("anio")) # true

# 5) შევქმნათ ფუნქცია რომელიც დააბრუნებს პირველ არა-განმეორებად ასოს რომელიც შეხვდება. ( სირთულე 4/10 )

def first_non_repeating(s):
    for l in s:
        if s.count(l) == 1:
            return l
    return None

# test cases
print(first_non_repeating("ani")) # a
print(first_non_repeating("aani")) # n
print(first_non_repeating("aanni")) # i