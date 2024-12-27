# 2) https://www.w3schools.com/python/python_lists.asp გადახედეთ ამ მასალას და თითო სექციაზე გააკეთეთ 5-5 მაგალითი


#Python lists

#1
list1 = list(("hunger games", "interstellar", "puss in boots"))
print(list1)

#2
list2 = ["hunger games", "interstellar", "puss in boots"]
print(type(list2))

#3
list3 = ["hunger games", "interstellar", "puss in boots", "hunger games", "puss in boots"]
print(list3)

#4
list4 = [True, 23, 2.4, False, "banana"]
print(list4)

#5
list5 = ["hunger games", "interstellar", "puss in boots"]
print(len(list5))


#access list items

#1
list6 = ["hunger games", "interstellar", "puss in boots"]
print(list[1])

#2
list7 = ["hunger games", "interstellar", "puss in boots"]
print(list[-1])

#3
list8 = ["hunger games", "interstellar", "puss in boots", "minions"]
print(list[1:3])

#4
list9 = ["hunger games", "interstellar", "puss in boots"]
print(list9[1:])

#5
list10 = ["hunger games", "interstellar", "puss in boots"]
print("hunger games" in list10)

#6
list11 = ["hunger games", "interstellar", "puss in boots"]
if "hunger games" in list11:
    print("you can watch hunger games")


#change list items

#1 
list12 = ["hunger games", "interstellar", "puss in boots"]
list12[0] = "assassination classroom"
print(list12)

#2
list13 = ["hunger games", "interstellar", "puss in boots"]
list13[1:3] = ["banana" , "cherry"]
print(list13)

#3
list14 = ["hunger games", "interstellar", "puss in boots"]
list14[0:2] = ["banana"]
print(list14)

#4 
list15 = ["hunger games", "interstellar", "puss in boots"]
list15[0:2] = ["banana", "cherry", "peach"]
print(list15)

#5
list16 = ["hunger games", "interstellar", "puss in boots"]
list16.insert(1,"banana")
print(list16)







