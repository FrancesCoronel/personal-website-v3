---
title: "C Bits - Getting Started"
date: 2013-09-20
description: The 1st part in a mini-series for beginners in C.
banner: https://fvcproductions.files.wordpress.com/2013/09/banners-001.jpg?w=1024&h=436&crop=1
aliases:
  - /blog/2013/09/20/c-bits-getting-started/
  - /2013/09/20/c-bits-getting-started/
categories:
  - blog
tags:
  - C programming
  - comment
  - Compiler
  - digital hieroglyphics
  - Floating point
  - GitHub
  - integer
  - Main function
  - Printf
  - Source code
  - Variables
  - blog
---

## Hello. Hello. Hello.

It's been a while, but no worries. Once again, I'm here to make programming a little easier by providing the literal solutions...

I've decided to use better resources so that my programs can be more easily shared.

The obvious solution of course was to use GitHub – git it?!

Any who, here I will provide the questions and then you can go to the necessary GitHub repository that I uploaded and download the program files - yay! :D

The solutions that also include the question as a comment on top and can be found on my GitHub.

<blockquote class="embedly-card"><h4><a href="//github.com/fvcproductions/coder-bits">fvcproductions/coder-bits</a></h4><p>coder-bits - HTML, Java, Python, C, PHP, C++, JS 💩</p></blockquote>
<script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>

### Problem 1.1 - Compute division

Why is the result `0.000`? Please fix it.

```c
#include
float answer; /*The result of our calculation*/
int main() {
    answer = 1/8;
    printf("The value of  1/8 is  %f\n", answer);
    return 0;
}
```

### Problem 1.2 - Wrong output

Why does the program print `The answer is –1073745604`?

Values will vary.

Please fix it, so it displays the correct result.

```c
#include
int answer; /*The result of our calculation*/
int main() {
    answer = 3 + 9;
    printf("The answer is %d\n");
    return 0;
}
```

### Problem 1.3 - A compile error

You will get compiler errors, when you try to compile the given code example below.

Read the error messages that the compiler produces and fix the errors, so your source code compiles sucessfully.

Then fix the program to print the correct result.

```c
#include
float result;  /* The result of the division */
int main() {
    result = 6/23.0;
    printf("The result is %d\n", result);
    return 0;
}
```

### Problem 1.4 - Simple arithmetics

Write a program that:

1.  assigns 13 to a and 9 to b
2.  computes the sum of a and b and prints the result
3.  computes the product of a and b and prints the result 4. computes the difference of a and b and prints the result 5. computes the division of a and b and prints the result (the result should be a float) 6. computes the remainder of the division of a and b and prints the result 7. prints the values of a and b

### Problem 1.5 - Using printf for multiple data types and conversions

Write a program that:

1.  declares and initializes an integer variable a with 123, and prints the value of a over 7 places
2.  declares and initializes an float variable b with −89.6548754, and prints the value of b over 10 places and with a floating point precision of
3.  declares and initializes a char variable c with 'b', and prints the character on the screen 4. declares and initializes a double variable d with 19.987243, and prints the value of d with a floating point precision of 2

### Problem 1.6 - Printing a char as character and as decimal value

Write a program that:

1.  declares and initializes a char variable letter with 'a' and prints it on the screen as a character and as corresponding ASCII code
2.  declares and initializes an integer variable a with 123, and prints the value of a over 7 place
3.  declares and initializes a char variable letter with 'a' and prints it on the screen as a character and as corresponding ASCII code
