# 1) შექმენით ფუნქცია რომელსაც გადაეცემა 2 რიცხვი. ფუნქციამ უნდა ჩაატაროს ყველა არითმეტიკული მოქმედება ამ ორ რიცხვს შორის.

def calculator(num1,num2):
    add = num1 + num2
    multiple = num1 * num2
    divide = num1 / num2
    subtract = num1 - num2
    return add, multiple, divide, subtract

print(calculator(2,4))


# 2) შექმენით ფუნქცია რომელსაც გადაეცემა ორი რიცხვი. ამ ფუნქციამ პირველ რიცხვს მანამ უნდა დაუმატოს მეორე რიცხვი სანამ ჯამი არ გახდება 100ის ტოლი ან 100ზე მეტი.

def to_100(num1,num2):
    addition = 0 
    while addition < 100:
        addition = num1 + num2
        num1 = addition
        print(addition)

print(to_100(10,3))

# 3) შექმენით ფუნქცია რომელიც ამოწმებს რიცხვი კენტია თუ ლუწი.

def even_or_odd(num):
    if num % 2 == 0:
        return "even"
    else:
        return "odd"
    
print(even_or_odd(3))

# 4) შექმენით ფუნქცია რომელსაც გადაეცემა ლისტი. ფუნქციამ უნდა იპოვოს ლისტში უდიდესი რიცხვი.

def greatest(list):
    biggest = list[0]
    for i in list:
        if i > biggest:
            biggest = i
    return biggest

print(greatest([-2,-9,-3,-4,-6]))

# 5) შექმენით ფუნქცია რომელსაც გადაეცემა ლისტი. ფუნქციამ უნდა იპოვოს ამ ლისტში შემავალი რიცხვების ჯამი

def summ(nums):
    return sum(nums)

print(summ([2,3]))

# 6) შექმენით ფუნქცია რომელსაც გადაეცემა სტრინგები და ინტეჯერები რაღაც თანმიმდევრობით. ფუნქციამ უნდა შეძლოს და ეს სტრინგების და ინტეჯერების თანმიმდევრობა უნდა გამოიტანოს შებრუნებულად.

def reverse_items(int_str):
   reverse = ""
   for i in int_str:
       reverse = str(i) + reverse
   return reverse

print(reverse_items(["ada", 2, 0]))
       
   
# 7) შექმენით ფუნქცია რომელსაც გადაეცემა სტრინგების ლისტი. ამ ფუნქციამ უნდა იპოვოს ყველაზე გრძელი და ყველაზე მოკლე სტრინგები ამ ლისტში.
def longest_shortest(nums):
    shortest = nums[0]
    longest = nums[0]
    for i in nums:
        if len(i) > len(longest):
            longest = i
        elif len(i) < len(shortest):
            shortest = i
    return longest, shortest

print(longest_shortest(["saad","asd","w"]))

# 8) შექმენით ფუნქცია რომელსაც გადაეცემა რაიმე სტრინგი. ამ ფუნქციამ უნდა შეძლოს და თითოეული ასო შეცვალოს (პატარა ასო დიდი ასოთ a-A ხოლო დიდი ასო პატარათი A-a).

def swipe_cases(s):
    swiped = []
    for l in s:
        if l.isupper():
            swiped.append(l.lower())
        else:
             swiped.append(l.upper())
            
    return "".join(swiped)

print(swipe_cases("Ani"))
       


# 9) შექმენით ფუნქცია რომელსაც გადაეცემა სტრინგი. ამ ფუნქციის მეშვეობით უნდა დაითვალოთ თანხმოვნების რაოდენობა ამ სტრინგში.
def consonants(s):
    count = 0
    vowels = ["A","O","I","E","U","a","o","i","e","u"]
    for l in s:
        if l not in vowels:
                count += 1
    return count
print(consonants("asda"))


# 10) შექმენით ფუნქცია რომელსაც გადაეცემა ინტეჯერი და თუ ლუწია აბრუნებს True-ს ხოლო თუ კი კენტია აბრუნებს False
def even_or_odd(integer):
    return integer % 2 == 0

print(even_or_odd(3))

# 11)შექმენით ფუნქცია, რომელსაც გადაეცემა მთელი რიცხვების სია. თქვენი დავალებაა, რომ ამ სიის ლუწ ინდექსებზე მყოფი რიცხვების ჯამი დააბრუნოთ. აუცილებლად გამოიყენეთ return ამ და ასევე შემდეგ დავალებებში.
def even_indx_sum(nums):
    list1 = []
    for i in range(len(nums)):
        if i % 2 == 0:
            list1.append(nums[i])
    return sum(list1)

print(even_indx_sum([2,3,4]))

# 12)შექმენით ფუნქცია, რომელსაც გადაეცემა მთელი რიცხვი. თქვენი დავალებაა, რომ დააბრუნოთ ლუწია თუ კენტი ის.

def even_or_odd(integer):
    return integer % 2 == 0

print(even_or_odd(3))


# 13)შექმენით ფუნქცია, რომელიც დააბრუნებს მარტივია თუ არა რიცხვი (მარტივია რიცხვი, თუ მას მარტო ორი გამყოფი აქვს).

def prime(num):
    count = 0
    for i in range(1,num + 1):
        if num % i == 0:
            count += 1
    if count > 2:
        return "number is not prime"
    else:
        return "number is prime"
    
print(prime(4))

# 14)შექმენით ფუნქცია, რომელსაც გადაეცემა სახელების სია. თქვენი დავალებაა, რომ დააბრუნოთ ამ სიის განახლებული ვერსია, სადაც ყველა სახელი დიდი ასოთი დაიწყება.

def cap(names):
    new_names = []
    for i in names:
        new_names.append(i.capitalize())
    return new_names

print(cap(["dsdc","adad"]))

# 15)შექმენით ფუნქცია, რომელსაც გადაეცემა მთელი რიცხვების სია. შემდეგ გამოიყენეთ ციკლი, რათა განიხილოთ ამ სიის ყველა რიცხვი - თუ რიცხვი ლუწია, ახალ სიაში დაამატეთ მისი განაყოფი ორზე, ხოლო თუ კენტია, მაშინ რიცხვის ნამრავლი ორზე. საბოლოოდ დააბრუნეთ განახლებული სია/ 

def e_sub_o_mult(ints):
    new_list = []
    for i in ints:
        if i % 2 == 0:
            sub = i // 2
            new_list.append(sub)
        else:
            mult = i * 2
            new_list.append(mult)
    return new_list

print(e_sub_o_mult([5,42,3]))

# 16)შექმენით ფუნქცია, რომელსაც გადაეცემა სტრინგი და დააბრუნეთ ეს სტრინგდი შებრუნებულ + დიდი ასოებით (reversed / upper). 

def rev_upp(s):
    reverse = ""
    for i in s:
        reverse = i.upper() + reverse
    return(reverse)

print(rev_upp("adaads"))

# 17)შექმენით ფუნქცია რომელსაც გადაეცემა სია შემდგარი სტრინგებისგან ---> (["dato" , "nika" , "polieqtori" , "zaza"....)], დამატებით შექმენით ორი სია odd = [] და even = [], გადაუარეთ ორიგინალ სიას for ციკლით და გაიგეთ რომელი ელემენტი შედგება კენტი ასოებისგან და რომელი ლუწი, საბოლოოდ ჩაამატეთ შესაბამისი სტრინგები შესაბამის სიებში (odd / even) დიდ ასოებათ (upper) და ბოლოს დაბეჭდეთ. 

def even_odd_letters(strings):
    odd = []
    even = []
    for i in strings:
        if len(i) % 2 == 0:
            even.append(i.upper())
        else:
            odd.append(i.upper())
    return even, odd

print(even_odd_letters(["ada","adada","as"]))

# 18) შექმენით ფუნქცია რომელსაც გადაეცემა სია შემდგარი სტრინგებისგან, გადაუარეთ ამ სიას და შეამოწმეთ თუ მისი characterების რაოდენობა არის ლუწი, ჩაამატეთ ეს კონკრეტული სიის ელემენტი ახალ ცარიელ სიაში და გადააკეთეთ იგი upper ფუნქციით, თუ იქნება ამ სტრინგის ასოების რაოდენობა კენტი, ჩაამატეთ ეს ელემენტი ახალ სიაში რომელსაც პირველი character ექნება გადიდებული, დანარჩენი პატარა. საბოლოოდ გამოიტანეთ ეს სია.

def even_odd_letters(strings):
    odd = []
    even = []
    for i in strings:
        if len(i) % 2 == 0:
            even.append(i.upper())
        else:
            odd.append(i.capitalize())
    return even, odd

print(even_odd_letters(["ada","adada","as"]))
            


# 19) შექმენით ფუნქცია რომელსაც გადაეცემა სია შემდგარი ყველანაირი სტრინგისგან (დიდი ასოებით / პატარა ასოებით : "dato" , "LUKA") , გადაურეთ ამ სიას და თუ ეს კონკრეტული ელემენტი არის შემდგარი დიდი ასოებისგან, დაამატეთ სიაში ისე როგორც lower, ხოლო თუ შედგება პატარა ასოებისგან დაამატეთ სიაში ისე როგორც upper / !HINT : გადახედეთ ფუნქციებს, isupper() და islower()! 

def swap_caps(strings):
    swap_list = []
    for i in strings:
        if i.isupper():
            swap_list.append(i.lower())
        else:
            swap_list.append(i.upper())
    return swap_list

print(swap_caps(["ada","HH","as"]))

# 20)შექმენით ფუნქცია რომელსაც გადაეცემა სტრინგი, ამ სტრინგზე გამოიყენეთ find() ფუნქცია და თუ find ფუნქცია დააბრუნებს ლუწ ინდექს მაშინ ეს სტრინგი დააბრუნეთ დიდი ასოებით (upper) ხოლო თუ დააბრუნებს კენტ ინდექსს, მაშინ დააბრუნეთ ეს სტრინგი რომლის პირველი ასოც იქნება დიდი (capitalize)

def cap_or_up(str):
    indx = str.find("a")
    if indx % 2 == 0:
        return str.upper()
    else:
        return str.capitalize()

print(cap_or_up("ani"))



