# git hub არის პლატფორმა სადაც დეველოპერები ტვირთავენ თავიანთ პროექტებს.
# git არის ვერსიების მართვის სისტემა, რომელიც გვეხმარება თვალი ვადევნოთ და ორგანიზება გავუკეთოთ პროექტის ცვლილებებს.

def consonants(s):
    count = 0
    vowels = "AEIOUaeiou"
    for l in s:
        for i in vowels:
            if l != i:
                count += 1
    return count
print(consonants("asda"))

