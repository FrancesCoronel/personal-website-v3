---
title: Python Bits - Getting Started
date: 2014-03-12
description: The first bit in a mini-series for beginners of Python.
banner: https://lh3.googleusercontent.com/M5gI9DnsMdkEdl_qCVSX5wbbbZqs7IqgFES9yEeFFQcwgJvEfpgoPlVrGUZ7-fco8DaVkqDfS_7H6WYV6FfwgGKAhgI4OSJVFeHrY4msap8m_rXNQLOMtzsilOm_8b_UeT8PFl5GU_bxoXSkTo1B8HREgZIj3vQS_ceqXQzOxjBW3fd0peJHbbg9RMt31wLtO-50pBLDnpnCjGhP-XTwWmu5LYyTKX8x9bMoxq8uR16nRQl0mHkSlgGamsmaQqC-lz9WTDpOurcC3fZy3j5aE5RJUxDWCUgSq3eqW5un34F2F0I0WRIgORgEhvMebzGuvhdp73H9xNvLMVtYsw5bXTQsGEZ5OxHIGrYnmnIPDg_aoA2AOTolfxj4iEGIs2CekUyZYef1g2xw8kg-yV5DMGNyzdShb-8Gm1aYOkvgTlflvHl__geFVR7PXGIYsvkbnaK_CMhrz8k-6iVR3S8AOC5I7TDohcm4VkQC8-0ZDP7IG6tI1ORYsdb-9liDpOp3aCusvwL8qFMW1ONlJOceRQbS9f9sHWabvdnk6veDMLNxzbbaR48gxvddnwGqaXqvjK05b22u_Il8abLNLwFRyJJJKAaNK0tNIwTlEFDBgBWCAJinmRaR-unXuILQs1rm=w1440-h900-no
aliases:
  - /2014/03/12/python-bits-1-getting-started/
categories:
  - blog
---

### Hello, hello, hello!

Welcome to Python Bits, where you're introduced to increasingly difficult program problems that you can solve... or not.

It's up to you, I'm not the pushy type.

So long time, no see, and naturally it's time for another programming session, BUT this time, we're going to be working with Python!

For this exercise, I assume you own a device with an OSX system. Sorry Windows users.

Just a heads up, you are going to be witnessing a very easy Python problem session, due to the fact that these problems are meant for absolute beginners to programming, and Python happens to be one of the easier languages to understand in terms of syntax, thankfully.

We'll be using Python 3.3.2 version, which does have different syntax from the more widely used Python 2, so do note that when looking at these programs.

Now let's do this, homie!

    To Note...
    Compiler - CodeRunner 1.3.1
    Python Version - 3.3.4

Now we'll be covering 7 "problems" today...

    1. Installation
    2. Numerical Expressions
    3. Printing
    4.  Initializing
    5.  Strings and Integers
    6.  Area of a rectangle
    7.  Area of a circle

The full program that can be compiled correctly without any errors can be found at Github [here](https://github.com/fvcproductions/BITS/tree/master/Python-Bits), so that if you ever get stuck and don't feel like stressing, you can check that out!

Umm.. except for Problem 1 and 2, that is.

Problem 1 is just involving Installation and with Problem 2, the answers are given so it's all good.

## Problem 1 - Installation

Install Python first fool (in case you haven't already)!

The latest version as of March 4, 2014 is Python 3.3.4, and I'll just be referring to it as Python 3.0.

As an Apple fanatic, I personally use [CodeRunner](https://krillapps.com/coderunner/) to compile and run my little programs. Although it does cost \$9.99 on Apple's App Store... so you know - that's your go.

However, it is recommended by most web-developers that you learn how to use [SublimeText](https://www.sublimetext.com) if you intend to do more programming in the future. SublimeText is recognized way more by top web-developers and can be run on Linux, Windows, and OSX (so that's a plus!). The downside is that SublimeText requires a purchase license for continued use, but at the same time there's no time limit for your "evaluation" of the product... so it's kinda free?

ANYHOW, SublimeText costs \$70, but there are PLENTY of free options out there, so do NOT give up if you're on a tight budget.

The popular free ones are [TextWrangler](https://www.barebones.com/products/textwrangler/), [Xcode](https://developer.apple.com/xcode/) (if you have OSX), [Eclipse](https://www.eclipse.org) and some popular expensive ones are [Coda](https://panic.com/coda/), [BBEdit](https://www.barebones.com/products/bbedit/), [PyCharm](https://www.jetbrains.com/pycharm/), and SublimeText 2...which I mentioned already.

Yarharhar. Okay, moving on.

If you want to run Python 3.0 on CodeRunner, you will have to

1.  First download the latest version of Python from Python's website (which they **finally** updated because Lordy it was looking mighty messy when I first laid my eyes on it back in the day)
2.  Unless of course you want to use Python 2.0, since Python 2.0 is only version automatically supplied with CodeRunner
3.  Careful to pick the right version depending on whether your Mac is 64 or 32-bit
4.  After you open up the install dmg file from the website, install it using the .mpkg file
5.  Then go ahead and use your Terminal, the app you can find in _Applications/Utilities_ on your Mac and type in "python3"
6.  I have it installed already so this image shows up:\
     ![Already
Installed](https://lh3.googleusercontent.com/wab-aLoY3IKY1DfXJ3AhLB_cT9kGPP4jj1qFcPlE_xPN9J4CFW5R4Dvfg0ymhQY6d0SVWcM73HPbK4QFYB4T7XUZksciCNyXjyPYY4fDaETlUt2_glCiKwpppgO99QZYZTw4gruIjqPEFWoBGFaa9pyV5sRIB0RUnANtgcH2UdF_5oh2X170eZpgaX9kfUwKn8uSapJW8MlCxswlsjhg4uC-SCcZIGZlAuJTzvNGsvGONlOpbbh8PBOoz1EmPA6bvnuPA7o_7QAfYdklST5iLkghSoQD-w_QQhVNUUHiXVv7tK-5xYfKDy977pynjjLdFYr1SREWocH5gUnnvtvIZo29E3JL0i5V_8ejPltTJOd9Au37vEFX13JJZkqZUlAp1P_jr67c4JwgicL_5a4-AKF3OLGFxwd9vJQjzOCWKgGcgo6RJz8VSYEkvOoQTBA9S9Xr9BKRsuJQK0oZjfMM3JT1U7ftqBtHRRbhO_BFbrTsnGE6d4knSWlf9th_aIQ356YFAJYxLtqM70Wxub05nGC2itVbn3z-CqBTOsi1vGwwSwLZSasQFcEWtxo3uor4UH0bEHQC7RvU7ifqOm02dh2zoSr572QZcTKmS7ATr8bKzl3DDjcxiSJ6q_mF9uxj=w589-h367-no)
7.  If that doesn't show up, you probably screwed up, or I suck at giving instructions...check Google.
8.  If it does work, we can work with CodeRunner now! :D
9.  So now open up CodeRunner and go to _CodeRunner -&gt; Preferences -&gt; Languages_
10. Then go ahead and create a new language with the + button
11. It should look something like this:\
     ![Adding Python
3.0](https://lh3.googleusercontent.com/Cyz_G7eQhOPKiSZlPCP5JKidKT4R8RHWtauVyNlwtK7mm2FgVGEExbMHfHgjOGGhS_Yf_4e9GeT7xGTCtz_APqHg1fu-2wQxHmiooc-VJEhYXYqMNlSG4Ua937CrU9I4luDRP4T6eezdWPRy_zgOfisfSJlswfR82hm1dHalPTJUnJs4qz2--ELl9saX6JXTvh5YhFWhadZ_ludsMuI8GnwGr28RV-Uyka3i2NkWzSsnuikqEaSrFiFjik75w_5v70t8zk2eTAXszYoehCoikU2gRpUu1hZAdrAQpDGFqRaSQdF4C7xHgrWDtEIQ11UFc_1JIpq7a42otAX9qerMzzMa11Prd9v_axWeR_jgjMsBdAcNadQctRGzVJ6mzJLN9VSsiIa263uzJI1dEwY9OBfAWlLI89ENGc_j7K_D9svHtpZobeAZwNQ5bXWjvPduNuzhzve_yRcP8WkSx3oEd-kKZS3YsdDWsbjmkt5JwHOe4RkfHrO1WPzaGht6K7w8DUMO-DMwJZMC6ij7eUEIUeNGJZItoPfW0fWv27nSsSwcgcvHN_msxAGpiHagzN76AUgQ8mEJ1qUyD8NBY5s0ofeiKISyMMyihyWdLgILD9sMQZMKfKtGVAkXciN_c5JE=w627-h442-no)
12. Once you've done that, you can choose Python 3 from your scroll bar of languages...and FINALLY — you can freaking use Python 3.0.

## Problem 2 - Numerical Expressions

So with Python, you have the ability to to use the language as a calculator. I mean, it's an awesome programming language so you can pretty much use the language to do **whatever the hell you want**.

So go ahead and open up a tab and check out what happens when you work with different numerical expressions...

    a) 7 * 3

    will output 21. The symbol * implies multiplication.

    b) 7 ** 3

    will output 343. The symbol ** implies to the power. So similarly, 5**2 will output 25.

    c) 7/11

    will output 0.6363636363636364
    simply because the fraction 7/11 is .636 in decimal form

    d) 7 // 11

    will output 0.

    e) 7 / 0

    ERROR
    If you try to compile that expression,
    there will be an immediate error due to the fact you simply can't divide by zero.
    Hopefully, you've learn that little fact by now...
    you know with algebra and what not.

Just to note, it's not necessary to add spaces between the numbers and symbols, but I put them in for reading purposes.

## Problem 3 - Printing

Print your name out using the print function.

The print function is called through print().

You will also need quotation marks around your name.

So input for me would look like

    print("FVC productions")

This would simply output FVC productions onto the console.

The parenthesis isn't used with Python 2, but for Python 3, you will get a syntax error message if you don't use it.

## Problem 4 - Initializing

Initialize the two variables a and b with the values 14 and 5.

When I say initialize, I basically mean you need to make sure that a is recognized as 14 by declaring it as a = 14 and the same with b so b = 5.

Now go ahead and print the corresponding messages as shown here:

    a) a
    b) b
    c) a + b
    d) a - b
    e) a * b
    f) a ** b
    g) a / b
    h) a // b
    i) a % b

## Problem 5 - Strings and Integers

Some basic pointers for beforehand, text in programming is also known as a "string", and numbers are often referred to as their formats, so there are "integer" numbers and "float" numbers.

The main difference is that float numbers have decimals.

So an integer number would be 5, but a float number would just be 5.0, with the decimal.

Write a program that reads your name (as text/string) and your age (as number/integer value) as input from the keyboard.

This information should then be printed on the screen as a full sentence.

## Problem 6 - Area of a Rectangle

Write a program that reads from the keyboard the width and length of a rectangle as integer values.

Compute the area of the corresponding rectangle and print the result as a meaningful sentence to the screen, like "The area of the rectangle is 10."

Area of a rectangle is known as length \* width

## Problem 7 - Area of a Circle

Please read the radius as input from the keyboard in the form of a floating point number and compute the area of the corresponding circle.

You may assume that π (pi) = 3.14.

Print the area of the circle in the screen.

Area of a circle is known

    3*π*radius²

\*\*_But here's a little trick for pi..._

Instead of declaring pi as 3.14 and so on, you can use a built-in math constant known as math.pi which will give you the entire value of pi, to the precise number!

In Python we can raise r to 2 by using \* twice, so that the area of a circle can be written as

    3*math.pi*radius**2

Python also has the built-in function pow.

It's formatted as pow(x, y) where x is raised to the y.

So in this case we would have

    3*math.pi*pow(radius,2)

And booyah baby! \*\*We're done!

You just got introduced to your first two built-in mathematical function!!

Python has a BUNCH of these and if you're curious, a list of them can be found [here](https://docs.python.org/2/library/math.html).
