---
title: 'Binary Trees & Recursion 🌳'
date: 2014-12-03
description: 'CSC 251 Study Guide'
banner: https://fvcproductions.files.wordpress.com/2014/12/binary_fractal_tree_03_30_60_065_075.png?w=800&h=340&crop=1
aliases:
  - /2014/12/03/binary-trees-recursion/
categories:
  - blog
---

# CSC251 Study Guide 😓

## Binary Trees and Recursion Exam 📖

### Binary Trees 🌲

- _trees_
  - a structure with unique starting point - root - where each node can have multiple children nodes, and a unique path exists from the root node to every other node
- _root_
  - top node of a tree structure, a node with no parent
- _binary tree_
  - structure where each item is called a node and where each node can have a max of two children, left and right child node
  - diagram:\
    ![Binary Tree](https://www.cs.cmu.edu/~adamchik/15-121/lectures/Trees/pix/tree1.bmp)
- _leaf_
  - node with no children
- _descendant_
  - child of a node
- _ancestor_
  - parent of a node
- _binary search tree_
  - binary tree where value in any node is greater than or equal to value in its left child and any of descendants (nodes in left subtree) and less than value in its right child and any of its descendants (nodes in right subtree)
  - diagram:\
    ![Diagram 1](https://programminggeeks.com/wp-content/uploads/2014/01/nodes-in-binary-search-tree.png)
- _full binary tree_
  - binary tree where all of leaves are on same level and every nonleaf node has 2 children
- _complete binary tree_
  - binary tree that is full or full through next-to-last level, with leaves on last level as far as possible\
    ![Diagram 2](https://www.cs.cmu.edu/~adamchik/15-121/lectures/Trees/pix/full_complete.bmp)
- _balanced tree_

  - left and right subtrees of any node are the same height\
    ![Diagram 3](https://www.stoimen.com/blog/wp-content/uploads/2012/06/10.-Balanced-or-not.png)

- _preorder_
  - node/root, left, right
- _inorder_
  - left, node/root, right
- _postorder_
  - left, right, node/root

![Balanced Tree](https://www.cse.unt.edu/~donr/courses/2050/images/Figure1010.gif)

> **FUN TIP I** 🌟
>
> > a fast way to remember this is through the following, starting by writing r in the far left then fill it out with L or R, representing left or right, as follows:
>
> **r** L R - preorder L **r** R - inorder L R **r** - postorder\
> **FUN TIP II** 🌟
>
> > in-order traversal is probably easiest to see, because it sorts the values from smallest to largest (literally)

- **How to Delete A Binary Search Tree** ␡
  - no successor
    1.  if node is leaf, simply removed
    2.  but if root is leaf, pointer to tree assigned null value
  - one successor
    1.  parent node connected to sucessor node
    2.  deleted node disposed of
  - two successors
    1.  find logical predecessor (node in left subtree with largest value)
    2.  logical predecessor replaces deleted node

### Recursion 🚥

- **recursive method is a method that calls itself**
  - in many cases, recursive algorithms are less efficient than iterative algorithms
- **recursive solutions repetitively**
  - allocate memory for parameters and local variables
  - store address of where control returns after method terminates
- **basically works like this:**
  - a base case is established
    - if matched, method solves it and returns
  - if base case cannot be solved
    - method reduces it to smaller problem (recursive case) and calls itself to solve smaller problem
- **examples of recursion in real life**

  - quick sort, merge sort, flowers,Towers of Hanoi, Fibonacci sequence, factorials
  - towers of hanoi fun pic: ![Towers of Hanoi](https://upload.wikimedia.org/wikipedia/commons/6/60/Tower_of_Hanoi_4.gif)

- **example 1 provided - emptyVase** 🍶\

```java
void emptyVase(int flowersInVase) {
    if (flowersInVase &gt; 0) {
        //takes one flower
        emptyVase(flowersInVase-1);
    } else {
        // vase is empty, nothing to do
    }
}
```

- **example 2 provided - Recursion2**\

```java
public class Recursion2 {
    public void countItDown(int counter) {
        if (counter == 0)
            return;
        else {
            System.out.println("Count: " + counter);
            counter--;
            countItDown(counter);
            System.out.println("" + counter);
            return;
        }
    }

    public static void main (String[] args) {
        Recursion2 myRecursor = new Recursion2();
        myRecursor.countItDown(5);
    }
}
```

- **example 3 provided - count** ⓴\

```java
count(n)
    if (n &gt; 0)
        print n
        count (n-1)
    else
        print done

count: n --&gt; n = 3
count: (n-1) --&gt; n = 2
count: (n-1) --&gt; n = 1
count: (n-1) --&gt; n = 0
```

- **example 4 - from textbook**

```java
public class Recursive {
    public static void message(int n) { //displays message n times
        if (n &gt; 0) {
            System.out.println("This is a recursive method.");
            message(n-1);
        }
    }
}
```

- **example 5 - from textbook**

```java
public static int fib(int n) { // returns nth number in Fibonacci sequence
    if (n == 0)
        return 0;
    else if (n == 1)
        return 1;
    else
        return fib(n - 1) + fib(n - 2);
}
```

- **example 6 - from textbook**

```java
public static int factorial(int n) { // returns factorial of non-negative argument
    if (n == 0)
        return 1;
    else
        return n * factorial(n-1);
}
```

- **example 7 - from textbook**

```java
public static int gcd(int x, int y) { // returns greater common denominator of two arguments
    if (x % y == 0)
        return y;
    else
        return gcd(y, x % y);
}
```
