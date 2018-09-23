---
title: 'Sort Detective - Solution ☕'
date: 2015-04-18
description: 'Stuck on that homework assignment involving SortDetective.jar? No need to worry!'
banner: https://lh3.googleusercontent.com/5dPfd6KYrqCHfGxJ13NZE8psAo5fJx_U3xRLUB6btQzb57csLifXgabrsiZDCqtpFIhSmcfK-cHfTho8ehJCtk_l-yYTYW9jf0Gi21zV2LuQte0glgQTiyqls4P1dZVqVGbvz9g9SISPkIvcwtZY88OQG5TKgh0frtqZcHluFg4fxyH2eK9JHOqjLwC3UAa2MJu8boEd1KySiT9J5sms2yTTIPi4lDYGWgnZYDPd83eAoBMSb4Wjs1B3hxDjhJiTy7X-20kXUy83KIoUkg6h0OaT3Cp6y6thSwzQ2fCduPY_4PK4uZyhAmrLwBHztxUtQMvRfC01af5p2p-xyfzb2gMiU6bnsRVNgjI265wUPt_cV3P7sAqXxP1Cmo3fmXEfnEz6NXBRY6rLE_kasTovAU_XXzsKsx7eSAtgaoxN7CHEFp20wuL9BUDoBEKqQ-sLEd6kBtrSmSlwF7EmHDriUJxkoq21nFefQgLxe05nYeYNaKsA-vmpC9Z6p1mFr_ueoay__mVsFm4mcWm-hDl5JnpCvTAy_kzNV3OOVbbXraiNwWSopFpQmjLM_DcT4r9pTBcvWz_edGnSY-Ks1Z_kCCPiPMDdvoHQo4MDfOqe9AUF_V_2eSgqCCKY8oxUXwm4=w1140-h500-no
aliases:
  - /2015/04/18/sort-detective-solution/
categories:
  - blog
---

> This tutorial is "certifiably" Mac Friendly. Whoop. 

## Files Provided To You

- `SortDetective.jar`, which looks something like this:

![Sort Detective 1](https://fvcproductions.files.wordpress.com/2015/04/sortdetective-jar.png)

> The purpose of this little HW assignment is to correctly identify the 6 Greek letters (Alpha, Beta, Gamma, Delta, Epsilon, & Zeta) with their matching sorting method (selection, insertion, bubble, quick, merge, & heap sort).

## Step 1 - Download JD-GUI

Head over to the Java Decompiler [page located at `jd.benow.ca`](https://jd.benow.ca/ 'Java Decompiler')) and download the `ZIP` file for the `JD-GUI`.

![Sort Detective 2](https://fvcproductions.files.wordpress.com/2015/04/jd-gui.png)

## Step 2 - Launch JD-GUI

Now that you've downloaded the `ZIP` file, unzip it and launch the application.

![Sort Detective 3](https://fvcproductions.files.wordpress.com/2015/04/jd-gui-unzipped.png)

## Step 3 - Open your `SortDetective.jar` file using `JD-GUI`

![Sort Detective 4](https://fvcproductions.files.wordpress.com/2015/04/open-sortdetective.png)

# Step 4 - Find the Formula That Determines The Order

`SortDetective.jar` determines the sorting method ordering according to your student ID.

It has an array defined with **5 different** orders that the sorting methods **CAN** be placed in. See `Line 256` in the `SortDetective.class`.

![Sort Detective 5](https://fvcproductions.files.wordpress.com/2015/04/sortingexperiment-line.png)

Zooming in...

![Sort Detective 6](https://fvcproductions.files.wordpress.com/2015/04/screenshot-2015-04-18-16-09-09.png)

With some minor searches, we find out that the method `experimentOrders` uses the variable `selectedPermutation` to determine what array value it will use to determine the order.

![Sort Detective 7](https://fvcproductions.files.wordpress.com/2015/04/experimentorders-2nd-case.png)

This redirects us to the `setStudentID()` method. So now we've figured out the ordering all just depends on the formula the program uses.

![Sort Detective 8](https://fvcproductions.files.wordpress.com/2015/04/selectedpermutation.png)

## Step 5 - Apply Formula To `experimentOrders`

So, in my case, my student ID is `00319124`.

Using the formula, we can determine that the value of `selectedPermutation` is going to be `2` for me since `319124` / `10` % `5`= `2.4` or simply `2` for `int`. That means that the array value for `experimentOrders` will be `2`, making a match to the order found on `Line 7` when zooming in to `Line 256` in `SortDetective.class`.

Remember, arrays are ordered like `{0,1,2}`. So `experimentOrders[2]` would be the 3rd value in the array.

![Sort Detective 9](https://fvcproductions.files.wordpress.com/2015/04/screenshot-2015-04-18-16-09-09.png)

There we go! Just like that, I now know for sure that the ordering of the Greek letters for me would go

- Alpha - Quick Sort
- Beta - Selection Sort
- Gamma - Merge Sort
- Delta - Bubble Sort
- Epsilon - Insertion Sort
- Zeta - Heap Sort

### Good luck with your HW! :wink:
