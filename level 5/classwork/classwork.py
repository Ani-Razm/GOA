from turtle import*

def draw_rectangle(width,lenght,color):
    for _ in range(2):
        forward(lenght)
        right(90)
        forward(width)
        right(90)
    color(color)

draw_rectangle(10,20,"red")