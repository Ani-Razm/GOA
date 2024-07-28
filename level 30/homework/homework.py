# 3) შექმენით ფუნქცია სახელად odd_index_sum რომელსაც გადაეცემა რიცხვების სია, თქვენი დავალებაა შეკრიბოთ ყველა ის რიცხვი რომელიც დგას !!!!კენტ ინდექსზე!!!, მიღებული ჯამი დააბრუნეთ ფუნქციიდან

def odd_index_sum(nums):
    odd_i_sum = 0
    for i in range(len(nums)):
        if i % 2 != 0:
            odd_i_sum += nums[i]
    return(odd_i_sum)

print(odd_index_sum([2,3,4,1]))
            

        