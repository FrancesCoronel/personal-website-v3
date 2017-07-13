---
title: "The How To's When It Comes To Java Arrays"
date: 2014-08-09
excerpt: "How to define, assign, and print an array using Java."
header:
    image: https://images.pexels.com/photos/169657/pexels-photo-169657.jpeg
tags:
    - arrays
    - assigning
    - character
    - defining
    - digital hieroglyphics
    - float
    - java
    - list
    - printing
---

1.  Defining an array (character type) of a size 3 called `array`\
    \[code language="java"\]char \[\] array = new char\[10\]\
    \[/code\]
2.  Ask user to enter 10 characters and assign each of the characters
    into the `array`\
    \[code language="java"\]for (int i = 0; i &lt; array.length; i++)\
    array\[i\] = keyboard.next().charAt(0);\
    \[/code\]
3.  Use the data in `array` to reverse a list called `reverse` so that
    the first element in the list called `array` is the last element in
    `reverse`\
    \[code language="java"\]for (int i = 0; i &lt; array.length; i++)\
    reverse\[reverse.length – i\] = array\[i\];\
    \[/code\]
4.  Write the first use way to use *for-loop* to print out all elements
    in the list called `reverse`\
    \[code language="java"\]for (int i = 0; i &lt; reverse.length; i++)\
    System.out.print(reverse\[i\] + “ ” );\
    \[/code\]
5.  Write the second use way to use *for-loop* to print out all elements
    in the list called `reverse`\
    \[code language="java"\]for (char value : reverse)\
    System.out.print(value + “ ” );\
    \[/code\]
6.  Define a 3 by 4 floating point values array, called `scores`\
    \[code language="java"\]double \[\]\[\] scores = new double
    \[3\]\[4\];\[/code\]
7.  Assign the value for each cell in the array called `scores` to
    `columnIndex * 20 / rowIndex`\
    \[code language="java"\]for (int row = 0; row &lt; scores.length;
    row++)\
    for (int col = 0; col &lt; scores\[row\].length; col++)\
    scores\[row\]\[col\] = col \* 20 / (double) row;\
    \[/code\]
8.  Print all the values in the array called `scores`\
    \[code language="java"\]for (int row = 0; row &lt; scores.length;
    row++) {\
    for (int col = 0; col &lt; scores\[row\].length; col++)\
    System.out.print (scores\[row\]\[col\] + “\\t”);\
    System.out.println();\
    }\
    \[/code\]
9.  Write a `findMax` method which finds the maximum value in the data
    stored in\
    `scores`\
    \[code language="java"\]static double findMax(double \[\]\[\]
    scores) {\
    double max = scores\[0\]\[0\];\
    for (int row = 0; row &lt; scores.length; row++)\
    for (int col = 0; col &lt; scores\[row\].length; col++)\
    if (scores\[row\]\[col\] &gt; max)\
    max = myScores\[row\]\[col\];\
    return max;\
    }\
    \[/code\]
