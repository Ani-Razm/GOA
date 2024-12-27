def better_than_average(class_points, your_points):
    average = sum(class_points) / len(class_points)
    return average < your_points

print(better_than_average([2, 3, 4, 4], 3))
print(better_than_average([2, 3, 4, 4], 5))