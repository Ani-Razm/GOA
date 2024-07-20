# შექმენით ფუნქცია, რომელიც იღებს რაიმე რიცხვს და აბრუნებს მასზე 5'ით მეტს.
def plus_five(number):
    return number + 5

print(plus_five(5))


# შექმენით ფუნქცია, რომელიც იღებს ორ integer'ს და აბრუნებს მათ ნამრავლს
def Multiplie(int1,int2):
    return int1 * int2

print(Multiplie(2,3))


# შექმენით ფუნქცია, რომელიც იღებს string'ს ამ string'ის სიგრძეს (გამოიყენეთ ფუნქცია len())

def len_str(string):
    return len(string)

print(len_str("jasdj"))


# შექმენით ფუნქცია, რომელიც იღებს string'ების list'ს და აბრუნებს ამ string'ების სიგრძეების list'ს (გამოიყენეთ ფუნქცია len()).
def string_len_list(list):
    len_list = []
    for i in list:
        len_list.append(len(i))
    return len_list

print(string_len_list(["adad","ajvgda"]))

        
# შექმენით ფუნქცია, რომელიც იღებს string'ს და აბრუნებს True-ს თუ ის არის Palindrome
# (ანუ იგივენაირად იკითხება მარცნიდანაც და მარჯვნიდანაც მაგალითად: "wow") და სხვა შემთხვევაში False-ს.
def palindrome(string):
    reversed = ""
    for letter in string:
        reversed = letter + reversed
    pal = (reversed == string)
    return pal

print(palindrome("ani"))
print(palindrome("wow"))

# შექმენით ფუნქცია, რომელიც პოულობს ყველაზე გრძელ string'ს string'ების სიაში.
def longest_str(list):
    longest = ""
    for item in list:
        if len(item) > len(longest):
            longest = item
    return longest

print(longest_str(["asjd","ajsda"]))


# შექმენით ფუნქცია, რომელიც იღებს რიცხვს და აბრუნებს მის factorial'ს
def factorial(number):
    f = 1
    for i in range(2,number+1):
        f = f * i
    return f

print(factorial(3))

# შექმენით ფუნქცია, რომელიც იღებს 2 integer'ების list'ს და აბრუნებს ორივე list'იდან მაქსიმალური რიცხვების ჯამს.
def max_numbers_sum(list1,list2):
    list_sum = max(list1) + max(list2)
    return list_sum

print(max_numbers_sum([2,3],[4,5]))

# შექმენით ფუნქცია, რომელიც იღებს 2 integer'ების list'ს და აბრუნებს ორივე list'იდან მინიმალური რიცხვების სხვაობას.
def min_numbers_sum(list1,list2):
    list_sum = min(list1) + min(list2)
    return list_sum

print(min_numbers_sum([2,3],[4,5]))

# შექმენით ფუნქცია, რომელიც იღებს integer'ების list'ს და აბრუნებს ამ სიაში მაქსიმალური და მინიმალური რიცხვების სხვაობას.
def max_min_sum(list):
    subtraction = max(list) - min(list)
    return subtraction

print(max_min_sum([2,3]))

# შექმენით ფუნქცია, რომელიც იღებს integer'ების list'ს და აბრუნებს ყველა ელემენტის ჯამს.
def list_num_sum(list):
    return sum(list)

print(list_num_sum([2,4,3]))

# შექმენით ფუნქცია, რომელიც იღებს string'ს და აბრუნებს ხმოვანი ასოების რაოდენობას string'ში.
def count_vowels(string):
    vowels = ["a","e","i","o","u","A","E","I","O","U"]
    counter = 0

    for letter in string:
        for vowel in vowels:
            if letter == vowel:
                counter += 1
    return counter

print(count_vowels("GOA"))

# შექმენით ფუნქცია, რომელიც იღებს integer'ების list'ს და აბრუნებს ახალ list'ს თითოეული integer'ის კვადრატით. 
# (მაგალითად: input: [2, 4]. output: [4, 16])
def nums_square(list):
    list2 = []
    for number in list:
        square = number ** 2
        list2.append(square)
    return(list2)

print(nums_square([2,3,4]))

# შექმენით ფუნქცია, რომელიც იღებს string's და აბრუნებს მის შებრუნებულს.
def reverse(s):
    reversed_word = ""
    for letter in s:
        reversed_word = letter + reversed_word
    return reversed_word

print(reverse("ani"))

#15. შექმენით ფუნქცია, რომელიც იღებს რაიმე integer'ს და თუ ლუწია აბრუნებს True'ს, თუ კენტი False'ს.
def even_or_odd(integer):
    return integer % 2 == 0

print(even_or_odd(10))
print(even_or_odd(11))

#16. შექმენით ფუნქცია, რომელიც იღებს string'ების სიას და აბრუნებს ყველაზე გრძელ string'ს.
def longest_str(list):
    longest = ""
    for item in list:
        if len(item) > len(longest):
            longest = item
    return longest

print(longest_str(["asjd","ajsda"]))

#17. შექმენით ფუნქცია, რომელიც იღებს მთელი რიცხვების სიას და აბრუნებს სიაში ყველაზე მცირე რიცხვს.
def min_num(list):
    return min(list)

print(min_num([2,4]))

#18. შექმენით ფუნქცია, რომელიც იღებს ორ integer'ს და აბრუნებს მათ უდიდეს საერთო გამყოფს (GCD-Greatest common divisor).
def GCD(a,b):
    while b != 0:
        c = a % b
        a = b
        b = c
    return a

print(GCD(48,18))


#19. შექმენით ფუნქცია, რომელიც იღებს string'ს და აბრუნებს იმავე string'ს uppercase'ში. 
# (მაგალითად: input: "Hello World". output: "HELLO WORLD".
def upper_case(s): 
    return s.upper()

print(upper_case("asdhad"))

#20. შექმენით ფუნქცია, რომელიც იღებს integer'ების სიას და აბრუნებს მათ საშუალო არითმეტიკულს.
# (მაგალითად: input: [1, 5, 12]. output: (1 + 5 + 12)/3, ანუ 6.) (ელემენტების დასათვლელად გამოიყენეთ ფუნქცია len).
def average(list):
    return sum(list) // len(list)

print(average([2,3,4]))
