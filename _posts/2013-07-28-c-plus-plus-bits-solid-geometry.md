---
title: "C++ Bits - Solid Geometry"
date: 2013-07-28
excerpt: "Messing with Geometry in C++."
header:
    image: https://fvcproductions.files.wordpress.com/2013/07/banners-002.jpg?w=1024&h=436&crop=1
---

**Purpose**

To use symbolic constants, nested decisions, and sentinel loops.

1.  Write a simple C++ program to calculate the surface area, volume, or
    cross-sectional are of a sphere. Use functions to calculate each
    figure. The formulas are as follows for the stupid sphere:

        Volume = 4.0/3.0*Pi*r^3 (^ means to the power of in case you didn't know but I know probably you know...smart ass)
        Surface Area = 4.0*Pi*r^2
        Cross-Sectional Area = Pi*r^2

2.  The input of this friggin program will be a damn letter. ‘V’ as in V
    for Vendetta will indicate volume, ‘A’ will indicate surface area,
    ‘X’ as in drop that x before she cheats will indicate the
    cross-sectional area, and finally ‘Q’ will indicate you want to quit
    this little midget of a program.The second part of this dang long
    input will be a single float number representing the rocking radius.
    Woo.
3.  Now to provide a detestable little example: A 12.8 means find the
    surface area of a sphere with radius 12.8. Ergo, V 15.7 means find
    the volume of a sphere with radius 15.7. Get it, got it, goo.. and
    no one gives a shiz!
4.  For each input, you’re suppose to just calculate what is called for
    (like volume, surface area, cross-section) not all three dang
    answers. The coding doesn’t do that crazy shiz here. Just use NESTED
    decisions to control your actions. NESTED as in nest as in bird as
    in bird procreation. Fantastic! Now, the output should have
    appropriate labels and don’t forgot to use formatting to control the
    appearance of your answers, no one likes coding that could make a
    dang on blind kid cry his eyes out.
5.  Use sentinel controlled while loops to read the data. The letter ‘Q’
    will be the sentinel. The program should work for any data set, not
    just my data set. So get your numbers right the first dang time! If
    the first input to the program is ‘Q’, the loop should be inactive
    (I mean - duh dipshiz).
6.  FINALLY, use 3.14159 for π, that lovely global symbolic constant.
    Fun fact, half of π is 1.618, the GOLDEN RATIO! WOAHHHHHH.

------------------------------------------------------------------------

**Libraries**

iostream, cmath, iomanip

------------------------------------------------------------------------

**Solution**\
\[code language="c"\]\
\#include iostream\
\#include cmath\
\#include iomanip\
using namespace std;\
const char QUIT = 'Q';\
const float PI = 3.1415927;\
int main()\
{\
float radius, surface\_area, volume, cross\_section;\
char method;\
cout &lt;&lt; "Please enter\\n"\
&lt;&lt; "V for volume,\\n"\
&lt;&lt; "A for surface area"\
&lt;&lt; ",X for cross-sectional area,\\n"\
&lt;&lt; "and finally Q if you would like to quit.\\n";\
cin &gt;&gt; method;

while(method != QUIT)\
{\
cout &lt;&lt; "Now please enter the radius of your sphere.\\n";\
cin &gt;&gt; radius;\
if(method == 'V')\
{\
volume = 4.0/3.0 \* PI \* radius \* radius \* radius;\
cout &lt;&lt; "The volume of the sphere is:" &lt;&lt;volume&lt;&gt;
method;\
}\
system("pause");\
return 0;\
}\
\[/code\]

------------------------------------------------------------------------

**Sample Input (AKA MY NUMBERS HARPY)**

    A 15.9

    X 12.8

    V 34.8

    A 23.8

    Q (The sentinel)

------------------------------------------------------------------------

**Output**

Just look at the friggin file right up in here that I provided your
a\*\*.

\[scribd id=156212922 key=key-p1nebd1shusya4d1sdo mode=scroll\]

------------------------------------------------------------------------

2nd post - hollla!
