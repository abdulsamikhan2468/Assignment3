// Q1

let xy=prompt("Enter first number:")
let yx=prompt("Enter second number:")
let x=parseFloat(xy)
let y=parseFloat(yx)
let z = x + y
document.write("Sum of "+x+" and "+y+" is "+z)

// Q2 ( Everything will remain same just we will change the sign in variable "z" according to question.)

// Q3

x="Value after variable decleration is undefined"
document.write(x)

y=5
document.write("<br>Initial Value:",y)

z=6
document.write("<br>Value after increment is:", z)

a=7
b=a+z
document.write("<br>Value after addition is:",b)
c=b-1
document.write("<br>Value after decrement is:", c)
document.write("<br>The reminder is:",c%3)

// Q4
a=5
b=600
c=a*b
document.write("Total cost to buy " +a+ " tickets to a movie is " +c+ " PKR.")

// Q5
  
let x=prompt("Enter number of table you want:");

document.write("<br>Table of "+x)

document.write("<br>"+x+" x 1 = "+ x*1)
document.write("<br>"+x+" x 2 = "+ x*2)
document.write("<br>"+x+" x 3 = "+ x*3)
document.write("<br>"+x+" x 4 = "+ x*4)
document.write("<br>"+x+" x 5 = "+ x*5)
document.write("<br>"+x+" x 6 = "+ x*6)
document.write("<br>"+x+" x 7 = "+ x*7)
document.write("<br>"+x+" x 8 = "+ x*8)
document.write("<br>"+x+" x 9 = "+ x*9)
document.write("<br>"+x+" x 10 = "+ x*10)

// Q6

c=prompt("Enter temperature in Celsius:")
f=prompt("Enter temperature in Fahrenheit:")

document.write(c+"<sup>o</sup>C is "+((c*9/5)+32)+c+"<sup>o</sup>F<br>");
document.write(f+"<sup>o</sup>F is "+((f-32)*5/9)+f+"<sup>o</sup>C");


// Q7

p1=prompt("Price of Item 1:")
q1=prompt("Quantity of Item 1:")
p2=prompt("Price of Item 2:")
q2=prompt("Quantity of Item 2:")

document.write("Price of Item 1 is "+ p1)
document.write("<br>Quantity of Item 1 is "+ q1)
document.write("<br>Price of Item 2 is "+ p2)
document.write("<br>Quantity of Item 2 is "+ q2)
document.write("<br>Shipping charges 100")
t1=p1*q1
t2=p2*q2
t=t1+t2
total=t+100
document.write("<br>Total cost of your order is "+ total)







 








