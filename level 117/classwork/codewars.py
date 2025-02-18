# 2)
def describe_age(a):return f"You're a(n) {'kid'if a<13 else'teenager'if a<18 else'adult'if a<65 else'elderly'}"

# 3)
def bin_rota(arr):
    result = []
    for j in range(len(arr)):
        if j % 2 == 0:
            result += arr[j]
        else:
            result += arr[j][::-1]
    return result