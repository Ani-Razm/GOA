# socks shop program
socks = 100
wallet = int(input("enter how much money you have: "))
counter = 0 

while socks > 0 and wallet > 0:
    wallet -= 1
    socks -= 1
    counter += 1
print("you can buy",counter,"socks")
print("remaining socks in shop",socks)
print("remaining money:",wallet)