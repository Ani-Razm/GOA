from turtle import*


# we want to paint a house
  

#step 1: draw a square
speed(100)
width(7)
color('bisque3')
begin_fill()

for i in range(4):
     forward(200)
     left(90)
end_fill()


#step 2: draw a door
forward(70)
color("brown")
begin_fill()
left(90)
forward(120)
right(90)
forward(60)
right(90)
forward(120)
end_fill()


#step 3: draw a roof
penup()
goto(200,200)
pendown()
color("red")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()
left(30)


#step 4: draw windows
color("DeepSkyBlue")
penup()
goto(60,180)
pendown()
begin_fill()
for i in range(4):
     forward(40)
     right(90)

penup()
goto(140,180)
pendown()
for i in range(4):
     forward(40)
     left(90)
end_fill()


#step 5: draw field
penup()
goto(810,-690)
pendown()
right(180)


color("green")
begin_fill()
for i in range(43):
     left(4)
     forward(50)
end_fill()



exitonclick()
