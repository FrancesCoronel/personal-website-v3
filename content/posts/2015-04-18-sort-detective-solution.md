---
title: "Sort Detective - Solution"
date: 2015-04-18
description: "Stuck on that homework assignment involving SortDetective.jar? No need to worry! ☕"
image: https://i.imgur.com/aNVfqmh.jpg
aliases:
  - /2015/04/18/sort-detective-solution/
categories:
  - blog
---

> This tutorial is "certifiably" Mac Friendly. Whoop. 

## Files Provided To You

- `SortDetective.jar`, which looks something like this:

![Sort Detective 1](https://i.imgur.com/F2H9Dfn.png)

> The purpose of this little HW assignment is to correctly identify the 6 Greek letters (Alpha, Beta, Gamma, Delta, Epsilon, & Zeta) with their matching sorting method (selection, insertion, bubble, quick, merge, & heap sort).

## Step 1 - Download JD-GUI

Head over to the Java Decompiler [page located at `jd.benow.ca`](https://jd.benow.ca/ "Java Decompiler")) and download the `ZIP` file for the `JD-GUI`.

![Sort Detective 2](https://i.imgur.com/wbqEqEN.png)

## Step 2 - Launch JD-GUI

Now that you've downloaded the `ZIP` file, unzip it and launch the application.

![Sort Detective 3](https://i.imgur.com/BaxfcPN.png)

## Step 3 - Open your `SortDetective.jar` file using `JD-GUI`

![Sort Detective 4](https://i.imgur.com/8fh8k5F.png)

# Step 4 - Find the Formula That Determines The Order

`SortDetective.jar` determines the sorting method ordering according to your student ID.

It has an array defined with **5 different** orders that the sorting methods **CAN** be placed in. See `Line 256` in the `SortDetective.class`.

![Sort Detective 5](https://i.imgur.com/OhbKagg.png)

Zooming in...

![Sort Detective 6](https://i.imgur.com/J4bJkr0.png)

With some minor searches, we find out that the method `experimentOrders` uses the variable `selectedPermutation` to determine what array value it will use to determine the order.

![Sort Detective 7](https://i.imgur.com/aZ3eCS2.png)

This redirects us to the `setStudentID()` method. So now we've figured out the ordering all just depends on the formula the program uses.

![Sort Detective 8](https://i.imgur.com/ikZhmZs.png)

## Step 5 - Apply Formula To `experimentOrders`

So, in my case, my student ID is `00319124`.

Using the formula, we can determine that the value of `selectedPermutation` is going to be `2` for me since `319124` / `10` % `5`= `2.4` or simply `2` for `int`. That means that the array value for `experimentOrders` will be `2`, making a match to the order found on `Line 7` when zooming in to `Line 256` in `SortDetective.class`.

Remember, arrays are ordered like `{0,1,2}`. So `experimentOrders[2]` would be the 3rd value in the array.

![Sort Detective 9](https://i.imgur.com/mbBS8eR.png)

There we go! Just like that, I now know for sure that the ordering of the Greek letters for me would go

- Alpha - Quick Sort
- Beta - Selection Sort
- Gamma - Merge Sort
- Delta - Bubble Sort
- Epsilon - Insertion Sort
- Zeta - Heap Sort

### Good luck with your HW! 😉️
