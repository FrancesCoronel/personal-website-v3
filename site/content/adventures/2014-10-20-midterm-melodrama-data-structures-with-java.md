---
title: "Midterm Melodrama - Data Structures with Java"
date: 2014-10-17
description: "A study guide for the Data Structures midterm."
banner: //fvcproductions.files.wordpress.com/2014/10/banners-005.jpg?w=1024&h=436&crop=1
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
categories:
    - blog
---

# CSC251 Study Guide

### Midterm Melodrama

## Index

* [Array Properties](#section-arrays)
  * overview
* [Stack Properties](#section-stacks)
  * overview
  * defintion
  * diagram
  * conceptual implementation
  * operations
* [Queue Properties](#section-queues)
  * overview
  * defintion
  * diagram
  * conceptual implementation
  * operations
* [Stack Code & Algorithms](#section-stackcode)\

  > uses arrays for implementation

  * is stack empty
  * is stack full
  * add to stack
  * delete from stack
  * print in order
  * find an element in stack

* [Comparing Stacks & Queues](#section-comparing)
  * overview
  * advantages
  * disadvantages
  * examples of how they can be used
* [Queue Algorithms](#section-queuealgo)\

  > uses arrays for implementation

  * shift queue
  * circular queues

* [Basic Definitions & Phrases](#section-defintions)

### Array Properties

* _overview_
  * fixed size
  * more efficient b/c it uses less memory
  * easier to manage
  * collection
  * linear
  * can add/remove at any position

### Stack Properties

* _overview_
  * example of a collection SDT
  * since stacks are lists, any list implementation will do
  * Last In, First Out data structure
  * can be implemented as an array
  * can only access the top
  * harder to manage b/c only top can be accessed
* _defintion_
  * data structure of ordered items such that items can be inserted and removed only at 1 end (called the \[code language="java"\]top```)
* _diagram_![](//upload.wikimedia.org/wikipedia/commons/thumb/2/29/Data_stack.svg/1280px-Data_stack.svg.png)
* _conceptual implementation_
  * First In, First Out (FIFO)
    * add to rear and remove from front
* _operations_
  * `push` - adds item to stack
  * `pop` - deletes item from stack
  * `peek` - looks at top item in stack
  * `size` - returns \# of elements in stack by examining top
  * `isEmpty` - tests for emptiness in stack by examining top

### Queue Properties

* _overview_
  * example of a collection SDT
  * operations: enqueue (add), dequeue (delete)
* _defintion_
  * data structure of ordered items that can be inserted only at end (rear) and removed at other end (front)
* _diagram_

![](//upload.wikimedia.org/wikipedia/commons/thumb/5/52/Data_Queue.svg/1280px-Data_Queue.svg.png)

* _conceptual implementation_
  * First In, First Out (FIFO)
    * add to rear and remove from front
* _operations_
  * `enqueue` - adds item to queue
  * `dequeue` - removes item from queue
  * `first` - looks at top item in stack - so front
  * `size` - returns \# of elements in queue by examining top
  * `isEmpty` - tests for emptiness by examining top

### Stack Code & Algorithms

> _isEmpty_

```int top = -1; //or 0\
public boolean isEmpty () {\
return (top == -1);\
}\
```

> _isFull_

```public boolean isFull() {\
return (top == size-1);\
}\
```

> _add to stack_

```public void add (int element) {\
if (isFull() == true)\
System.out.println("Stack full, cannot add element.");\
else\
stack\[++top\] = element;\
}\
```

1. check if stack is not full
2. set top position of array to element being added to stack
3. increment values of top and count (if partially filled array)

> _delete from stack_

```public int delete () {\
if (isEmpty() == true)\
System.out.println("Stack empty, cannot delete element.");\
else\
return stack\[top--\];\
}\
```

1. check if stack is not empty
2. decrement top
3. set return value to top position of array

> _print in order_

```public void printOrder() {\
while(!isEmpty()) {\
int value = remove();\
System.out.print(value + " ");\
}\
}\
```

> _find an element in stack_

```public boolean find(int element) {\
System.out.print("Please enter element to find: ");\
element = keyboard.nextInt();\
for (int i = 0; i &lt; size; i++) {\
if (stack\[i\] == element)\
return true;\
}\
return false;\
}\
```

### Comparing Stacks & Queues

* _overview_
  * stacks and queues are similar data structures
  * they're different only by how an item is removed first
  * both can be implemented as arrays or linked lists
* _advantages_
  * implementing a stack as an array is easy, but implementing a queue as an array is more difficult because you have to dequeue from front and enqueue at end
  * **_TL; DR_**
    * when you want to be able to add or remove values from any position, arrays are the way to go because any value can be accessed through indexes
* _disadvantages_
  * main limitations of arrays is that they cannot be extended or shrunk so you want to use an array when you know your max upper limit
  * **_TL; DR_**
    * if you're not sure how many values there will be in your data structure, then it's better to not use an array and stick with a linked list (ergo, queues) because arrays always have a fixed size
* _examples of stacks_
  * CD storage case
  * cafeteria tray
  * batteries in a flashlight
  * cars in a single car garage
  * Towers of Hanoi
* _examples of queues_
  * waiting line for a roller coaster
  * hamburger processing line at Mickey D's
  * vehicles on a toll bridge
  * luggage checking machine
  * phone answering system for most big tech companies

### Queue Algorithms

* _shift queues_
  * enqueue operation
    1. save value at first index to item you want to enqueue
    2. increment size
    3. if array fills up, all n elements have to be copied to a new, larger array
  * dequeue operation
    1. save value at first index
    2. shift all elements left
    3. decrement size
* _circular queues_
  * advance queue indexes front (to delete an item) and back (to insert an item) by moving them both clockwise around array

### Basic Definitions & Phrases

* _abstract data type_\

  > taken straight from the textbook

  * a data structure is the underlying programming construct used to implement a collection

* _abstractions_
  * ignores or hides certain details at certain times, e.g. collection is abstraction where details of implementation are hidden
* _"abstract" in abstract data type_
  * means that there are many different ways of implementing data type
* _algorithm_
  * step by step instructions on how to execute a program or set of instructions
* _data structure_
  * memory structure with associated representation mapping, e.g. a collection is a type of data structure that acts as an object that gathers & organizes other objects
* _a data type is specified by describing both_
  * its set of values & operations used for implementation
* _implementing an abstract data type proceeds in 2 stages_
  * declaring necessary variables of data types
  * writing methods & procedures to implement operations of data for given data types

> **TO NOTE**
>
> > Although stack and queues have been implemented using an array - these ADTs are not accessed as an array. No actual code for a queue on this test; but you should be able to write an algorithm to demonstrate the concept of a queue.
