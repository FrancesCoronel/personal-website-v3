---
title: "C++ Bits - Clothing Sizes"
date: 2013-07-28
excerpt: "Testing out clothes in C++."
header:
    image: https://images.pexels.com/photos/169657/pexels-photo-169657.jpeg
---

**Purpose**

To declare weight, height, hat size, jacket size, and waist size.

1.  Write a C++ program to calculate a person’s hat size, jacket size,
    and waist size (in inches). Use functions to calculate each figure.
    The formulas are as follows: Hat Size = 2.9 times weight in pounds
    divided by height in inches
2.  The input of each program will be the weight (hopefully the person
    ain’t fat as hell either otherwise I’m guessing the program would
    literally terminate itself, no coding need), followed by the height
    in feet and inches.
3.  For each input, calculate all three answers (hat size, jacket size,
    and waist size). Use functions for each and then output the results
    with appropriate labels, as a thug would out-shank that priss with
    an appropriate OntarioMKIII Navy Knife (holla!). And yeah as always,
    format to control the appearance of your answers in coding because
    we don’t any blind kids cryin’.
4.  Read the count before the data then use a loop to read the data. The
    program will work for ANY data set, not just my nutty numbers. Use
    regular functions to calculate hat size, jacket size, and waist
    size. Use a void function and call by reference to read the input
    data. There will be three input arguments of type int. The first
    will be the weight followed by height. SO we cool!

------------------------------------------------------------------------

**Sample Input (AKA MY NUMBERS HARPY)**

    3 (for the count)

    180 6 1 // 180 pounds, 6 feet 1 inches, so 73 inches -- thank you calculator

    155 5 4 // 155 pounds, 5 feet 4 inches, so 64 inches

    165 5 8 // 165 pounds, 5 feet 8 inches, so 68 inches

------------------------------------------------------------------------

**Solution**\
\[code language="c"\]\#include\
\#include\
\#include

using namespace std;

double hat (double w, double h);\
double jacket (double w, double h);\
double waist (double w, double h);

int main ()

{

double height;\
double weight;\
char yesno;

do\
{\
cout &lt;&lt; "Please enter your height (in inches). Note that 1 Foot =
12 inches:" &lt;&lt; endl;\
cin &gt;&gt; height;

cout &lt;&lt; "Please enter your weight (in pounds):" &lt;&lt; endl;\
cin &gt;&gt; weight;

cout &lt;&lt; "Your hat size is: " &lt;&lt; hat(weight, height) &lt;&lt;
endl;\
cout &lt;&lt; "Your jacket size is: " &lt;&lt; jacket(weight, height)
&lt;&lt; endl;\
cout &lt;&lt; "Your waist size is: " &lt;&lt; waist(weight, height)
&lt;&lt; endl;\
cout &lt;&lt; "Do you want to run again? Enter Y for yes or N for no"
&lt;&lt; endl;\
cin &gt;&gt; yesno;\
}\
while (yesno == 'y'|| yesno == 'Y');\
system("PAUSE");\
return 0;\
}\
double hat (double w, double h)\
{double r;\
r = (w / h)\*2.9;\
return (r);\
}\
double jacket (double w, double h)\
{double r;\
r = (w\*h) / 288;\
return (r);\
}\
double waist (double w, double h)\
{double r;\
r = w/4.9;\
return (r);\
}\
\[/code\]

------------------------------------------------------------------------

**Output**

\[scribd id=156214568 key=key-2mxhfjjgcx37r6rq1zc5 mode=scroll\]

 

------------------------------------------------------------------------

Any who, hopefully this helped y’all out.Toodle loo now.
