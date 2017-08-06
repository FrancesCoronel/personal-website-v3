---
title: "Midterm Melodrama - Data Structures with Java"
date: 2014-10-17
excerpt: "A study guide for the Data Structures midterm."
header:
    image: https://fvcproductions.files.wordpress.com/2014/10/banners-005.jpg?w=1024&h=436&crop=1
tags:
    - array implementation
    - computer science
    - data structures
    - data structures
    - java
    - digital hieroglyphics
    - java
    - java arrays
    - java queues
    - melodrama
    - midterm
    - queue implementation
    - study guide
---

CSC251 Study Guide {#csc251-study-guide style="text-align:center;"}
==================

### Midterm Melodrama {#midterm-melodrama style="text-align:center;"}

------------------------------------------------------------------------

Index
-----

-   [Array Properties](#section-arrays)
    -   overview
-   [Stack Properties](#section-stacks)
    -   overview
    -   defintion
    -   diagram
    -   conceptual implementation
    -   operations
-   [Queue Properties](#section-queues)
    -   overview
    -   defintion
    -   diagram
    -   conceptual implementation
    -   operations
-   [Stack Code & Algorithms](#section-stackcode)\

    > uses arrays for implementation

    -   is stack empty
    -   is stack full
    -   add to stack
    -   delete from stack
    -   print in order
    -   find an element in stack

-   [Comparing Stacks & Queues](#section-comparing)
    -   overview
    -   advantages
    -   disadvantages
    -   examples of how they can be used
-   [Queue Algorithms](#section-queuealgo)\

    > uses arrays for implementation

    -   shift queue
    -   circular queues

-   [Basic Definitions & Phrases](#section-defintions)

------------------------------------------------------------------------

### Array Properties {#section-arrays}

-   *overview*
    -   fixed size
    -   more efficient b/c it uses less memory
    -   easier to manage
    -   collection
    -   linear
    -   can add/remove at any position

------------------------------------------------------------------------

### Stack Properties {#section-stacks}

-   *overview*
    -   example of a collection SDT
    -   since stacks are lists, any list implementation will do
    -   Last In, First Out data structure
    -   can be implemented as an array
    -   can only access the top
    -   harder to manage b/c only top can be accessed
-   *defintion*
    -   data structure of ordered items such that items can be inserted
        and removed only at 1 end (called the \[code
        language="java"\]top\[/code\])
-   *diagram*![](https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Data_stack.svg/1280px-Data_stack.svg.png){.aligncenter}
-   *conceptual implementation*
    -   First In, First Out (FIFO)
        -   add to rear and remove from front
-   *operations*
    -   \[code language="java"\]push\[/code\] - adds item to stack
    -   \[code language="java"\]pop\[/code\] - deletes item from stack
    -   \[code language="java"\]peek\[/code\] - looks at top item in
        stack
    -   \[code language="java"\]size\[/code\] - returns \# of elements
        in stack by examining top
    -   \[code language="java"\]isEmpty\[/code\] - tests for emptiness
        in stack by examining top

------------------------------------------------------------------------

### Queue Properties {#section-queues}

-   *overview*
    -   example of a collection SDT
    -   operations: enqueue (add), dequeue (delete)
-   *defintion*
    -   data structure of ordered items that can be inserted only at end
        (rear) and removed at other end (front)
-   *diagram*

![](https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Data_Queue.svg/1280px-Data_Queue.svg.png){.aligncenter}

-   *conceptual implementation*
    -   First In, First Out (FIFO)
        -   add to rear and remove from front
-   *operations*
    -   \[code language="java"\]enqueue\[/code\] - adds item to queue
    -   \[code language="java"\]dequeue\[/code\] - removes item from
        queue
    -   \[code language="java"\]first\[/code\] - looks at top item in
        stack - so front
    -   \[code language="java"\]size\[/code\] - returns \# of elements
        in queue by examining top
    -   \[code language="java"\]isEmpty\[/code\] - tests for emptiness
        by examining top

------------------------------------------------------------------------

### Stack Code & Algorithms {#section-stackcode}

> *isEmpty*

\[code language="java"\]int top = -1; //or 0\
public boolean isEmpty () {\
return (top == -1);\
}\
\[/code\]

> *isFull*

\[code language="java"\]public boolean isFull() {\
return (top == size-1);\
}\
\[/code\]

> *add to stack*

\[code language="java"\]public void add (int element) {\
if (isFull() == true)\
System.out.println("Stack full, cannot add element.");\
else\
stack\[++top\] = element;\
}\
\[/code\]

1.  check if stack is not full
2.  set top position of array to element being added to stack
3.  increment values of top and count (if partially filled array)

> *delete from stack*

\[code language="java"\]public int delete () {\
if (isEmpty() == true)\
System.out.println("Stack empty, cannot delete element.");\
else\
return stack\[top--\];\
}\
\[/code\]

1.  check if stack is not empty
2.  decrement top
3.  set return value to top position of array

> *print in order*

\[code language="java"\]public void printOrder() {\
while(!isEmpty()) {\
int value = remove();\
System.out.print(value + " ");\
}\
}\
\[/code\]

> *find an element in stack*

\[code language="java"\]public boolean find(int element) {\
System.out.print("Please enter element to find: ");\
element = keyboard.nextInt();\
for (int i = 0; i &lt; size; i++) {\
if (stack\[i\] == element)\
return true;\
}\
return false;\
}\
\[/code\]

------------------------------------------------------------------------

### Comparing Stacks & Queues {#section-comparing}

-   *overview*
    -   stacks and queues are similar data structures
    -   they’re different only by how an item is removed first
    -   both can be implemented as arrays or linked lists
-   *advantages*
    -   implementing a stack as an array is easy, but implementing a
        queue as an array is more difficult because you have to dequeue
        from front and enqueue at end
    -   ***TL; DR***
        -   when you want to be able to add or remove values from any
            position, arrays are the way to go because any value can be
            accessed through indexes
-   *disadvantages*
    -   main limitations of arrays is that they cannot be extended or
        shrunk so you want to use an array when you know your max upper
        limit
    -   ***TL; DR***
        -   if you’re not sure how many values there will be in your
            data structure, then it’s better to not use an array and
            stick with a linked list (ergo, queues) because arrays
            always have a fixed size
-   *examples of stacks*
    -   CD storage case
    -   cafeteria tray
    -   batteries in a flashlight
    -   cars in a single car garage
    -   Towers of Hanoi
-   *examples of queues*
    -   waiting line for a roller coaster
    -   hamburger processing line at Mickey D’s
    -   vehicles on a toll bridge
    -   luggage checking machine
    -   phone answering system for most big tech companies

------------------------------------------------------------------------

### Queue Algorithms {#section-queuealgo}

-   *shift queues*
    -   enqueue operation
        1.  save value at first index to item you want to enqueue
        2.  increment size
        3.  if array fills up, all n elements have to be copied to a
            new, larger array
    -   dequeue operation
        1.  save value at first index
        2.  shift all elements left
        3.  decrement size
-   *circular queues*
    -   advance queue indexes front (to delete an item) and back (to
        insert an item) by moving them both clockwise around array

------------------------------------------------------------------------

### Basic Definitions & Phrases {#section-definitions}

-   *abstract data type*\

    > taken straight from the textbook

    -   a data structure is the underlying programming construct used to
        implement a collection

-   *abstractions*
    -   ignores or hides certain details at certain times, e.g.
        collection is abstraction where details of implementation are
        hidden
-   *“abstract” in abstract data type*
    -   means that there are many different ways of implementing data
        type
-   *algorithm*
    -   step by step instructions on how to execute a program or set of
        instructions
-   *data structure*
    -   memory structure with associated representation mapping, e.g. a
        collection is a type of data structure that acts as an object
        that gathers & organizes other objects
-   *a data type is specified by describing both*
    -   its set of values & operations used for implementation
-   *implementing an abstract data type proceeds in 2 stages*
    -   declaring necessary variables of data types
    -   writing methods & procedures to implement operations of data for
        given data types

------------------------------------------------------------------------

> **TO NOTE**
>
> > Although stack and queues have been implemented using an array -
> > these ADTs are not accessed as an array. No actual code for a queue
> > on this test; but you should be able to write an algorithm to
> > demonstrate the concept of a queue.

------------------------------------------------------------------------

> Tips or Tricks?
>
> > Contact me [@fvcproductions](https://twitter.com/fvcproductions)
