---
title: "The How To's When It Comes To Java Arrays"
date: 2014-08-09
description: "How to define, assign, and print an array using Java."
banner: https://fvcproductions.files.wordpress.com/2014/10/banners-005.jpg?w=1024&h=436&crop=1
aliases:
  - /2014/08/09/the-how-tos-when-it-comes-to-java-array/
categories:
  - blog
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

    ```char [] array = new char[10]\

    ```

2.  Ask user to enter 10 characters and assign each of the characters into the `array`\
    ```for (int i = 0; i < array.length; i++)\
    array\[i\] = keyboard.next().charAt(0);\
    ```
3.  Use the data in `array` to reverse a list called `reverse` so that the first element in the list called `array` is the last element in `reverse`\
    ```for (int i = 0; i < array.length; i++)\
    reverse\[reverse.length – i\] = array\[i\];\
    ```
4.  Write the first use way to use _for-loop_ to print out all elements in the list called `reverse`\
    ```for (int i = 0; i < reverse.length; i++)\
    System.out.print(reverse\[i\] + " " );\
    ```
5.  Write the second use way to use _for-loop_ to print out all elements in the list called `reverse`\
    ```for (char value : reverse)\
    System.out.print(value + " " );\
    ```
6.  Define a 3 by 4 floating point values array, called `scores`\
    ````double [][] scores = new double
    \[3\]\[4\];```
    ````
7.  Assign the value for each cell in the array called `scores` to `columnIndex * 20 / rowIndex`\
    ```for (int row = 0; row < scores.length;
    row++)\
    for (int col = 0; col &lt; scores\[row\].length; col++)\
    scores\[row\]\[col\] = col \* 20 / (double) row;\
    ```
8.  Print all the values in the array called `scores`\
    ```for (int row = 0; row < scores.length;
    row++) {\
    for (int col = 0; col &lt; scores\[row\].length; col++)\
    System.out.print (scores\[row\]\[col\] + "\\t");\
    System.out.println();\
    }\
    ```
9.  Write a `findMax` method which finds the maximum value in the data stored in\
    `scores`\
    ```static double findMax(double [][]
    scores) {\
    double max = scores\[0\]\[0\];\
    for (int row = 0; row &lt; scores.length; row++)\
    for (int col = 0; col &lt; scores\[row\].length; col++)\
    if (scores\[row\]\[col\] &gt; max)\
    max = myScores\[row\]\[col\];\
    return max;\
    }\
    ```
