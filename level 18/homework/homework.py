# თქვენი კრეატიულობით შექმენით პროგრამა სადაც გააერთიანებთ ფორ ციკლებს იფებს და სიებს, გააკეთეთ მსგავსი პროგრამა მინიმუმ 3 ჯერ

#1
numbers = list((range(10)))

for number in numbers:
    if number == 3:
        continue
    print(number)

#2
vegetables = ["carrot", "tomatoe", "cucumber", "salad"]

for vegetable in vegetables:
    if vegetable == "cucumber":
        break
    print(vegetable)

#3
movies = ["1+1", "hachiko", "spirited away"]

for movie in movies:
    if movie == "hachiko":
        print(movie + " - you should definitely watch this!")
    else:
        print(movie)

