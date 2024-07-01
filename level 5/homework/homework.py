# Level 4:
# finall boss, EXTREME LEVEL
# turtle-ში დახაზეთ სასახლე, მეფე და დედოფალი, დაარჭვეთ GOA-ს დროშა კოშკზე.


from turtle import*


speed(100)
width(5)
color("brown")
bgcolor("skyblue")\


# grass
penup()
goto(-800,-200)
pendown()
color('limegreen')
begin_fill()
for i in range(2):
    forward(1600)
    right(90)
    forward(400)
    right(90)
end_fill()

# Left mountain
penup()
goto(-770, -200)
pendown()
color("gray")
begin_fill()
for i in range(3):
    forward(500)
    left(120)
end_fill()

# Mountain cap
penup()
color("white")
goto(-520,240)
pendown()
begin_fill()
right(120)
forward(150)
left(150)
forward(50)
right(90)
forward(60)
left(130)
forward(50)
right(100)
forward(80)
left(150)
forward(170)
left(240)
end_fill()


# Right mountain
penup()
goto(260, -200)
pendown()
color("gray")
begin_fill()
for i in range(3):
    forward(500)
    left(120)
end_fill()

# Mountain cap
penup()
color("white")
goto(510,240)
pendown()
begin_fill()
right(120)
forward(150)
left(150)
forward(50)
right(90)
forward(60)
left(130)
forward(50)
right(100)
forward(80)
left(150)
forward(170)
left(240)
end_fill()


# Middle mountain
penup()
goto(-280, -200)
pendown()
color("dimgray")
begin_fill()
for i in range(3):
    forward(550)
    left(120)
end_fill()

# Mountain cap
penup()
color("white")
goto(-5,280)
pendown()
begin_fill()
right(120)
forward(150)
left(150)
forward(50)
right(90)
forward(60)
left(130)
forward(50)
right(100)
forward(80)
left(150)
forward(170)
right(240)
end_fill()


# sun
penup()
goto(-800,400)
pendown()
color('yellow')
begin_fill()
circle(80)
end_fill()
  

# castle

# first tower
penup()
goto(-50,-250)
right(60)
color("LightYellow4")
pendown()
begin_fill()
for i in range(2):
    forward(150)
    right(90)
    forward(350)
    right(90)
end_fill()

# tower roof
penup()
goto(-250,-50)
pendown()
color("aquamarine4")
begin_fill()
left(180)
for i in range(3):
    left(120)
    forward(150)
end_fill()
right(180)


# second tower
penup()
goto(-250,-250)
color("LightYellow4")
pendown()
begin_fill()
for i in range(2):
    forward(150)
    right(90)
    forward(200)
    right(90)
end_fill()

# tower roof
penup()
goto(-50,100)
pendown()
color("aquamarine4")
begin_fill()
left(180)
for i in range(3):
    left(120)
    forward(150)
end_fill()
right(180)


# third tower
penup()
goto(50,-250)
color("PeachPuff4")
pendown()
begin_fill()
for i in range(2):
    forward(150)
    right(90)
    forward(250)
    right(90)
end_fill()

# tower roof
penup()
goto(50,0)
pendown()
color("aquamarine4")
begin_fill()
left(180)
for i in range(3):
    left(120)
    forward(150)
end_fill()
right(180)


# building
penup()
goto(-300,-250)
color("PeachPuff4")
pendown()
begin_fill()
right(180)
for i in range(2):
    forward(600)
    left(90)
    forward(100)
    left(90)
end_fill()

penup()
goto(-300,-150)
color("LightSalmon4")
pendown()
begin_fill()
left(180)
forward(20)
right(90)
forward(40)
for i in range(10):
    right(90)
    forward(30)
    right(90)
    forward(20)
    left(90)
    forward(30)
    left(90)
    forward(20)
right(90)
forward(30)
right(90)
forward(40)
right(90)
forward(620)
end_fill()


# fourth tower
penup()
goto(225,-250)
color("bisque4")
pendown()
begin_fill()
for i in range(2):
    forward(150)
    right(90)
    forward(220)
    right(90)
end_fill()

# tower roof
penup()
goto(225,-30)
pendown()
color("aquamarine4")
begin_fill()
left(180)
for i in range(3):
    left(120)
    forward(150)
end_fill()
right(180)


# queen and king

# king

# head
penup()
goto(-80,-20)
pendown()
begin_fill()
color("PapayaWhip")
circle(15)
end_fill()

# body
penup()
goto(-95,-70)
pendown()
color("blue")
right(90)
begin_fill()
for i in range(10):
    forward(5)
    right(18)
forward(30)
right(90)
forward(32)
right(90)
forward(30)
left(90)
end_fill()

# crown
penup()
goto(-65,-20)
color("orange")
pendown()
begin_fill()
forward(30)
right(90)
forward(10)
right(135)
forward(10)
left(90)
forward(10)
right(90)
forward(10)
left(90)
forward(10)
right(130)
forward(10)
end_fill()
right(95)


# queen

# hair
penup()
goto(-46,-40)
pendown()
color("brown")
right(90)
begin_fill()
for i in range(10):
    forward(5)
    right(18)
forward(30)
right(90)
forward(32)
right(90)
forward(30)
left(90)
end_fill()

# head
penup()
goto(-30,-20)
pendown()
begin_fill()
color("PapayaWhip")
circle(15)
end_fill()

# bangs
penup()
goto(-46,-30)
pendown()
color("brown")
right(90)
begin_fill()
for i in range(10):
     right(180/10)
     forward(5) 
right(90)
forward(32)
right(90)
forward(2)
left(90)
end_fill()

# body
penup()
goto(-45,-70)
pendown()
color("purple")
right(90)
begin_fill()
for i in range(10):
    forward(5)
    right(18)
forward(30)
right(90)
forward(32)
right(90)
forward(30)
left(90)
end_fill()

# crown
penup()
goto(-15,-20)
color("orange")
pendown()
begin_fill()
forward(30)
right(90)
forward(10)
right(135)
forward(10)
left(90)
forward(10)
right(90)
forward(10)
left(90)
forward(10)
right(130)
forward(10)
end_fill()
right(95)


# Entrance building
penup()
goto(-180,-250)
color("burlywood4")
pendown()
begin_fill()
right(180)
for i in range(2):
    forward(250)
    left(90)
    forward(150)
    left(90)
end_fill()

penup()
goto(-170,-100)
color("LightSalmon4")
pendown()
begin_fill()
left(180)
forward(20)
right(90)
forward(40)
for i in range(4):
    right(90)
    forward(30)
    right(90)
    forward(20)
    left(90)
    forward(30)
    left(90)
    forward(20)
right(90)
forward(30)
right(90)
forward(40)
right(90)
forward(270)
end_fill()


#windows 

# window1
penup()
goto(-145,40)
pendown()
color("black")
right(90)
begin_fill()
for i in range(10):
    forward(5)
    right(18)
forward(30)
right(90)
forward(32)
right(90)
forward(30)
end_fill()

# window2
penup()
goto(-380,-100)
pendown()
color("black")
begin_fill()
for i in range(10):
    forward(5)
    right(18)
forward(30)
right(90)
forward(32)
right(90)
forward(30)
end_fill()

# window3
penup()
goto(140,-70)
pendown()
color("black")
begin_fill()
for i in range(10):
    forward(5)
    right(18)
forward(30)
right(90)
forward(32)
right(90)
forward(30)
end_fill()

# window4
penup()
goto(140,-170)
pendown()
color("black")
begin_fill()
for i in range(10):
    forward(5)
    right(18)
forward(30)
right(90)
forward(32)
right(90)
forward(30)
end_fill()

# window5
penup()
goto(20,-150)
pendown()
color("black")
begin_fill()
for i in range(10):
    forward(5)
    right(18)
forward(30)
right(90)
forward(32)
right(90)
forward(30)
end_fill()

# window6
penup()
goto(-160,-150)
pendown()
color("black")
begin_fill()
for i in range(10):
    forward(5)
    right(18)
forward(30)
right(90)
forward(32)
right(90)
forward(30)
end_fill()


# door
penup()
goto(-105,-190)
pendown()
color("salmon4")
begin_fill()
for i in range(11):
    forward(15)
    right(180/11)
forward(75)
right(90)
forward(105)
right(90)
forward(75)
end_fill()

penup()
goto(-54,-250)
color("black")
pendown()
forward(120)


# road
penup()
goto(-105,-255)
pendown()
color("PeachPuff3")
begin_fill()
left(135)
forward(210)
left(135)
forward(402)
left(135)
forward(210)
left(45)
forward(102)
end_fill()
right(90)


# flag
penup()
goto(-125,230)
pendown()
color("brown")
forward(70)
right(90)
begin_fill()
color("black")
forward(100)
right(135)
forward(30)
left(90)
forward(30)
right(135)
forward(100)
right(90)
forward(40)
end_fill()


# GOA

# G
penup()
width(2.5)
color("green")
goto(-105,290)
left(90)
pendown()
for i in range(10):
    forward(5)
    left(250/10)
left(20)
forward(5)
left(90)
forward(5)

# O
penup()
width(2.5)
color("green")
goto(-80,290)
pendown()
circle(11)

# A
penup()
width(2.5)
color("green")
goto(-62,268)
pendown()
right(110)
forward(25)
right(140)
forward(25)
left(180)
forward(10)
left(70)
forward(10)
hideturtle()


exitonclick()