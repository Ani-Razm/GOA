#1
def filter_odd(list):
    list2 = []
    for i in list:
        if i % 2 == 0:
            list2.append(i)
    return list2

print(filter_odd([2,12,4,21,2,1]))

#ფუნქცია არის კოდების ერთობლიობა, რომელიც ასრულებს რაღაც კონკრეტულ დავალებას
#პარამეტრი არის ცვლადი, რომელიც იღებს მნიშვნელობას, როდესაც ჩვენ გამოვიძახებთ ფუნქციას და გადავცემთ მას არგუმენტს
#არგუმენტი არის მნიშვნელობა რომელიც გადაეცემა პარამეტრს
#იმისათვის რომ გამოვიძახოთ ფუნქცია, საჭიროა დავწეროთ ფუნქსიის სახელი და ფრჩხილებში გადავცეთ არგუმენტი

#2
def even_sum(list):
    counter = 0
    for num in list:
        if num % 2 == 0:
            counter += num
    return(counter)

print(even_sum([2,3,4,5,2]))

#3
def odd_index_sum(list):
    counter = 0
    for num in list:
        if num % 2 != 0:
            counter += num
    return(counter)

print(odd_index_sum([2,5,4,5,2]))
    
