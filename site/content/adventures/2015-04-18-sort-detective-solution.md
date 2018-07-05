---
title: "Sort Detective - Solution ☕"
date: 2015-04-18
description: "Stuck on that homework assignment involving SortDetective.jar? No need to worry!"
banner: https://fvcproductions.files.wordpress.com/2015/04/banners-001.jpg?w=1024&h=436&crop=1
aliases:
  - /2015/04/18/sort-detective-solution/
categories:
  - blog
tags:
  - alpha
  - beta
  - bubble sort
  - delta
  - epsilon
  - experimentOrders
  - formula
  - gamma
  - greek letters
  - heap sort
  - homework assignment
  - insertion sorts
  - java
  - java decompiler
  - jd
  - ui
  - jd.benow.ca
  - merge sort
  - quick sort
  - selection sort
  - sort detective
  - sortdetective.jar
  - sorting methods
  - SortingExperiment
  - student ID
  - zeta
---

> This tutorial is "certifiably" Mac Friendly. Whoop. 

## Files Provided To You

* `SortDetective.jar`, which looks something like this:

![](//fvcproductions.files.wordpress.com/2015/04/sortdetective-jar.png)

> The purpose of this little HW assignment is to correctly identify the 6 Greek letters (Alpha, Beta, Gamma, Delta, Epsilon, & Zeta) with their matching sorting method (selection, insertion, bubble, quick, merge, & heap sort).

## Step 1 - Download JD-GUI

Head over to the Java Decompiler [page located at `jd.benow.ca`](//jd.benow.ca/ 'Java Decompiler')) and download the `ZIP` file for the `JD-GUI`.

![](//fvcproductions.files.wordpress.com/2015/04/jd-gui.png)

## Step 2 - Launch JD-GUI

Now that you've downloaded the `ZIP` file, unzip it and launch the application.

![](//fvcproductions.files.wordpress.com/2015/04/jd-gui-unzipped.png)

## Step 3 - Open your `SortDetective.jar` file using `JD-GUI`

![](//fvcproductions.files.wordpress.com/2015/04/open-sortdetective.png)

# Step 4 - Find the Formula That Determines The Order

`SortDetective.jar` determines the sorting method ordering according to your student ID.

It has an array defined with **5 different** orders that the sorting methods **CAN** be placed in. See `Line 256` in the `SortDetective.class`.

![](//fvcproductions.files.wordpress.com/2015/04/sortingexperiment-line.png)

Zooming in...

![](//fvcproductions.files.wordpress.com/2015/04/screenshot-2015-04-18-16-09-09.png)

With some minor searches, we find out that the method `experimentOrders` uses the variable `selectedPermutation` to determine what array value it will use to determine the order.

![](//fvcproductions.files.wordpress.com/2015/04/experimentorders-2nd-case.png)

This redirects us to the `setStudentID()` method. So now we've figured out the ordering all just depends on the formula the program uses.

![](//fvcproductions.files.wordpress.com/2015/04/selectedpermutation.png)

## Step 5 - Apply Formula To `experimentOrders`

So, in my case, my student ID is `00319124`.

Using the formula, we can determine that the value of `selectedPermutation` is going to be `2` for me since `319124` / `10` % `5`= `2.4` or simply `2` for `int`. That means that the array value for `experimentOrders` will be `2`, making a match to the order found on `Line 7` when zooming in to `Line 256` in `SortDetective.class`.

Remember, arrays are ordered like `{0,1,2}`. So `experimentOrders[2]` would be the 3rd value in the array.

![](//fvcproductions.files.wordpress.com/2015/04/screenshot-2015-04-18-16-09-09.png)

There we go! Just like that, I now know for sure that the ordering of the Greek letters for me would go

* Alpha - Quick Sort
* Beta - Selection Sort
* Gamma - Merge Sort
* Delta - Bubble Sort
* Epsilon - Insertion Sort
* Zeta - Heap Sort

### Good luck with your HW! :wink:
