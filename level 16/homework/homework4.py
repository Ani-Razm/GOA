# შექმენით სია, სადაც გექნებათ 10-იდან 20-ის ჩათვლით რიცხვები.
# გაიხსენეთ ის ფაქტი, რომ თქვენ შეგიძლიათ უკვე შექმნილი სიის ელემენტების შეცვლა - შეცვალეთ სიის ლუწ ინდექსებზე მყოფი ელემენტები და მათ მაგივრად დაწერეთ 1.

number = list((range(10,21)))

i = 0
while i < len(number):
    if i % 2 == 0:
       number[i] = 1
    i += 1

print(number)