---
title: 'The How-Tos When It Comes to Defining, Assigning, and Printing a Java Array 🔃'
date: 2014-08-09
description: 'How to define, assign, and print an array using Java.'
banner: https://lh3.googleusercontent.com/Ea2fAXV5_mxzyuM4r5sZhLRayaBwciJUqC5onBNyzXPqa519AbJw1OilonBb7KUBmf2ZMEclxrBUx8knQNFskEmlFuzEFuHkv3yZdnKy7naM5vwS_XqtPVCz7bMuHnPd29LDphsIrmSBzBEZ_KYhMDhQSSh9UUsYMtJUFvWe4O-cieeJSREhbGAIyNn3gALuHHplvFHzl_a_DqcrWytRrsIunNpcafqGe0gK1B76Iac1AGdgxw-6krjyD_PvrxkbAJyUG9MNLc2EFbjv-96GbgzAg2CMN_M0os5G0qeDtaM27BfXCy6NkscKOFMpKKCgDkuARQqzNhg5Kekqqd43sKtjmXlgbJT7VE9K3jdMNe0E0sNSwj3HM6gtWpKGZrcoz2ee6gLsfdYdKGrn3VbrdjHPuGwDjbAidqmhMSiLs0wq8dD6Yc5jO9YiJuhk6gbl2WuGBjiMNj1VuKhjovd4FegwJo0c8sjlp3rVti2PJ0RE1BMNJjU8Qi4yUo0rKzlILEpwR35dyAKedLHun-hu26G0fNbPExD5PeA7oIM_uBA2WZcXnKgS0WKDK86iPExzNgs_LQ6kJqY-BDnEUWdbG6lXMl9on0MVLL9Mss44sQvpPCa5dh2LMBSBAX67OcPR=w1140-h500-no
aliases:
  - /2014/08/09/the-how-tos-when-it-comes-to-java-array/
categories:
  - blog
---

1.  Defining an array (character type) of a size 3 called `array`
    ```java
    char [] array = new char[10]
    ```
2.  Ask user to enter 10 characters and assign each of the characters into the `array`
    ```java
    for (int i = 0; i < array.length; i++)
      array[i] = keyboard.next().charAt(0);
    ```
3.  Use the data in `array` to reverse a list called `reverse` so that the first element in the list called `array` is the last element in `reverse`
    ```java
    for (int i = 0; i < array.length; i++)
      reverse[reverse.length – i] = array[i];
    ```
4.  Write the first use way to use _for-loop_ to print out all elements in the list called `reverse`
    ```java
    for (int i = 0; i < reverse.length; i++)
      System.out.print(reverse[i] + " " );
    ```
5.  Write the second use way to use _for-loop_ to print out all elements in the list called `reverse`
    ```java
    for (char value : reverse)
      System.out.print(value + " ");
    ```
6.  Define a 3 by 4 floating point values array, called `scores`
    ```java
    double [][] scores = new double [3][4];
    ```
7.  Assign the value for each cell in the array called `scores` to `columnIndex * 20 / rowIndex`
    ```java
    for (int row = 0; row < scores.length; row++)
      for (int col = 0; col < scores[row].length; col++)
        scores[row][col] = col * 20 / (double) row;
    ```
8.  Print all the values in the array called `scores`
    ```java
    for (int row = 0; row < scores.length; row++) {
      for (int col = 0; col < scores[row].length; col++)
        System.out.print (scores[row][col] + "\t");
      System.out.println();
    }
    ```
9.  Write a `findMax` method which finds the maximum value in the data stored in `scores`
    ```java
    static double findMax(double [][] scores) {
      double max = scores[0][0];
      for (int row = 0; row < scores.length; row++)
        for (int col = 0; col < scores[row].length; col++)
          if (scores[row][col] > max)
            max = myScores[row][col];
      return max;
    }
    ```
