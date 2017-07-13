---
title: "A Few Java Factoids - Part 1"
date: 2014-03-03
excerpt: "A few basic facts about Java."
header:
    image: https://images.pexels.com/photos/169657/pexels-photo-169657.jpeg
tags:
    - basic structure
    - beginner
    - beginning programming
    - classes
    - comments
    - digital hieroglyphics
    - error
    - java
    - java programming
    - main method
    - program
    - semicolons
    - string
    - system
---

I’m taking a Java class right now and sometimes just looking at code is
really great to get the learning started.

Meant for beginners, I’ve come up with a few basic code samples to
showcase as a convenient way of getting to know Java. You and me are
going to explore the bare surface of the digital hieroglyphics of Java
and its all wonderful ciphers! :D

Let’s look at comments first.
-----------------------------

    class CommentOutCode {
        public static void main(String args[]) {
            System.out.println("Haha!");
            System.out.println("That was awesome!"); // No doubt!
            // System.out.println("Harharhar");
            /*
            System.out.println("I had tears rolling down my eyes..for real tho");
            System.out.println("Zoo-wee-MAMA!");
            */
    }

### single line comments

    // stuff

### multi-line comments

    /*
    more
    stuff
    */

###### Okay, so that was **super easy**…

### Go ahead, press the button! :D Virtually…

![Computer
Hope](http://citycleanersoftx.com/wp-content/uploads/2014/01/Easy-Button.jpg){width="190"
height="85"}

------------------------------------------------------------------------

So moving on…to the main method!
--------------------------------

    class MainMethodShizz {
        public static void main (String[] args) {
            System.out.println("Gotta use it!");
        }
    }

This is the main method that you’re going to use every time you run a
Java program, unless you’re making just a class file, in which case you
will not need the whole `public static void main (String[] args)`, but
you will still need [`class`]{style="color:#0000ff;"} with the class
name next to it.

Brackets or the curly braces (what have you) that look like this `{ }`
are required at the beginning and end of each method you’ve used to
indicate when you’ve finished the programming statements for that
particular method.

Finally, for each `System.out.println("Text");` that you have there
always needs to be a `;` at the end. Always! So get used to it!

#### If you decide **NOT** to put the stupid `;` at the end of your output statements, you WILL get an **ERROR**.

Also, in case you were wondering, with most IDEs or Integrated
Development Environments, there is syntax highlighting which makes it
easier to understand what’s going on by adding color to the types of
different texts.

For example, with the Strings involved in the program, they are the
color [red]{style="color:#ff0000;"}. With the comments involved in the
program, they are the color [gray[. Different methods are highlighted in
[blue]{style="color:#0000ff;"}.]{style="color:#000000;"}]{style="color:#999999;"}

So that’s pretty much it for the super duper basics of any Java program.

Remember, you gotta have your:\
1. main method `public static void main (String[] args)`\
2. curly braces `{}`\
3. semi-colons `;`\
4. comments to explain what the heck you’re doing in the program such
as [`//single-line stuff`]{style="color:#999999;"} or
[`/*multi-line stuff*/`]{style="color:#999999;"}

#### Get it? Got it? Good.
