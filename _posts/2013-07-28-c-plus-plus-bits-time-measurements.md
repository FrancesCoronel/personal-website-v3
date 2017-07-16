---
title: "C++ Bits - Time Measurements"
date: 2013-07-28
excerpt: "Measuring time in C++."
header:
    image: https://fvcproductions.files.wordpress.com/2013/07/banners-002.jpg?w=1024&h=436&crop=1
tags:
    - c++
    - time
    - time measurements
    - quotient remainder
    - arithmetic
---

**Purpose**

To write a simple C++ program. To use quotient-remainder arithmetic. To
use format. To properly comment/document throughout a program.

1.  Write a simple C++ program to read time measurements from the
    keyboard in hours and minutes. There will be two data sets. The
    first will be the hours and minutes. There will be two data sets.
    The first will be the hours and minutes for the first time, the
    second the hours and minutes for the second time.
2.  Add the two data sets and calculate the result in hours and minutes.
    Use quotient remainder arithmetic. The minutes in the final answer
    should be less than 60. Also calculate the answer as a real number
    representing the number of hours.
3.  The program should use format to control the output. The format
    should include showpoint, fixed, setprecision, and setw. It should
    also be documented.
4.  Documentation typically includes the following: the name of your C++
    file, your name, some kind of date (due date or date finished), type
    of input, type of output, and finally a brief description of the
    algorithm.
5.  Use the input data given below, and write out each answer with
    appropriate messages for your output. Use prompting messages for
    your input. The program should work for any positive whole number
    input data, not just the numbers provided.

------------------------------------------------------------------------

**Libraries**

iostream, iomanip

------------------------------------------------------------------------

**Sample Input**

    5   39  // 5 hours, 39 minutes
    6   52 // 6 hours, 52 minutes

------------------------------------------------------------------------

**Sample Output**

    12 hours, 31 minutes // 12.52 hours

------------------------------------------------------------------------

**Solution**\
\[code language="c"\]//project name "Time Measurements"\
//reads time measurements from the keyboard in hours and minutes\
//name: Whatchama call it.\
//type of input: hours 1, hours 2, minutes 1, minutes 2\
//type of output: time in hours and minutes and time as a real number\
//brief description of algorithm: adds two data sets of hours and
minutes

\#include iostream\
\#include iomanip\
using namespace std;

int main()\
{\
int hour1, hour2, minutes1, minutes2, total\_hours, total\_minutes;\
float fraction\_hours;

cout&lt;&lt;fixed&lt;&gt; hour1;\
cout&lt;&lt; "Please type in 1st minute: ";\
cin&gt;&gt; minutes1;\
cout&lt;&lt; "Please type in 2nd hour: ";\
cin&gt;&gt; hour2;\
cout&lt;&lt; "Please type in 2nd minute: ";\
cin&gt;&gt; minutes2;

total\_minutes = hour1\*60+minutes1+hour2\*60+minutes2;\
total\_hours = total\_minutes / 60;\
total\_minutes = total\_minutes%60;\
fraction\_hours = total\_hours+total\_minutes/60.0;

cout &lt;&lt; total\_hours &lt;&lt; " hours " &lt;&lt; total\_minutes
&lt;&lt; " minutes \\n";\
cout &lt;&lt; fraction\_hours &lt;&lt; " hours \\n";

system("pause");

return 0;\
}\
\[/code\]

------------------------------------------------------------------------

**Output**

\[scribd id=156212279 key=key-5mxfkqxh5negfbneoeb mode=scroll\]

------------------------------------------------------------------------

Woowiii - that was my 1st post! :)
