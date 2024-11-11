# დაწერეთ count_area ფუნქცია რომელსაც შეეძლება გამოთვალოს ფიგურის ფართობი მართკუთხედისთვის(ინფუთი იქნება 2  რიცხვი) ,  წრისთვის (ინფუთი იქნება 1 მთელი რიცხვი ) და სამკუთხედისთვის (ინფუთი იქნება 3 მთელი რიცხვი)
# ( პითონში და ასევე ჯავასკიპტში )
import math

def count_rectangle_area(length, width):
    return length * width

def count_circle_area(radius):
    return math.pi * radius ** 2

def count_triangle_area(a, b, c):
    s = (a + b + c) / 2
    return math.sqrt((s * (s - a) * (s - b) * (s - c)))

print(count_circle_area(4))
print(count_rectangle_area(10, 10))
print(count_triangle_area(10, 20, 15))