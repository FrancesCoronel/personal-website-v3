---
title: "Study Guide - Linked Lists"
date: 2014-11-10
description: "A study guide for simple linked lists in Java."
banner: //fvcproductions.files.wordpress.com/2014/10/banners-005.jpg?w=1024&h=436&crop=1
tags:
    - algorithms
    - arrays
    - data
    - data structures
    - digital hieroglyphics
    - Hampton
    - hampton university
    - head
    - insert
    - java
    - link
    - linked lists
    - nodes
    - Pointer
    - properties
    - pseudocode
    - remove
    - traversal
categories:
    - blog
---

# CSC251 Study Guide

### Linked Lists Exam

## Index

* [Linked Lists vs Arrays](#section-versus)
* [Linked Lists Properties](#section-linked)
* [Linked Lists Algorithms/Code](#section-algo)

### Linked Lists vs Arrays

* _Arrays_
  * can access any element directly via indexing
  * all elements grouped together
  * sitting in 1 block of memory
  * size is fixed
* _Linked Lists_
  * each element sits in own block of memory (called node)
  * nodes can only be accessed in sequential order
  * appears limited
  * size varies - nodes allocated on need basis
  * list elements can be easily inserted/removed without reallocation and at any point in the list
  * no random access to data
  * no efficient form of indexing
* _Key Differences_
  * underlying layout of data in memory
  * how individual elements are accessed

### Linked Lists Properties

* _overview_
  * a sequence of elements arranged 1 after another with each element connected to next by a link
  * one of the simplest and most common data structures
  * can be used to implement other abstract data types
* _defintion_
  * data structure of group of nodes that represent a sequence
* _diagram_

![](//upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Singly-linked-list.svg/408px-Singly-linked-list.svg.png)

> above is a linked list with nodes that contain 2 fields - an integer value and a link to next to the next node; last node linked to terminator symbol to signify end of list/null link

* _conceptual implementation_
  * each node has data and reference (link) to next node in sequence
  * allows for insertion of removal of elements from any position in sequence
* _operations for singly linked list_
  * `insertion`
  * `deletion`
  * `traversal` - going through entire sequence until reaching last node
* _advantages_
  * dynamic data structure that allocates needed memory
  * easy implementation for insertion and deletion operations
  * other data structures can be easily executed with linked lists
  * reduce access time and can expand without more memory being used
* _disadvantages_
  * usually wastes memory with pointers which requires extra storage space
  * nodes must be read sequentially
  * nodes stored in an in-contiguous manner, so more difficult to access individual nodes
  * very difficult to reverse traverse

### Linked Lists Algorithms

* _constructor for an integer node in a linked list_\
  ```public Int_Node (int initialData, Int_node
  initialLink) {\
  data = initialData; //integer value\
  link = initialLink; //reference to next node in list\
  }\
  ```
* _define empty linked list_\

  ```Int_Node head = null;\

  ```

  * pseudocode

    1. representing empty list by storing null in head reference\

       > keeping track of front node by using an Int_Node reference variable called `head`

* _add new node to empty list_\

  ```head = new Int_Node(data, null);\

  ```

  * pseudocode
    1. create new node for head
    2. place data in new node's data field
    3. make head refer to null which is initial head value
    4. connect new node to head

* _add node to front of list_\

  ```head = new Int_Node(newData, head);\

  ```

  * pseudocode
    1. create new node
    2. place data (`newData`) in new node's data field
    3. connect new node to front of list
    4. make original `head` refer to **new** `head` of linked list

![](//upload.wikimedia.org/wikipedia/commons/thumb/4/4b/CPT-LinkedLists-addingnode.svg/474px-CPT-LinkedLists-addingnode.svg.png)

> Diagram showing how a node is inserted after an existing node\
> Inserting node before existing node cannot be done directly - instead you have to keep track of the previous node and insert a node after that

* _adding anywhere but front_\

  ```previous.link = new Int_Node(newData,
  previous.link);

  while (prev.link != null) {\
  prev = head;\
  prev = prev.link;\
  }\
  ```

  * pseudocode
    1. set a reference named `prev` (for previous) to refer to node which is just before new node's position

* _removing node at head_\

  ```head = head.link;\

  ```

  * pseudocode
    1. directing `head` to node right next to it (`head.link`) so that original `head` is removed

* _removing node anywhere_

![](//upload.wikimedia.org/wikipedia/commons/thumb/d/d4/CPT-LinkedLists-deletingnode.svg/380px-CPT-LinkedLists-deletingnode.svg.png)

> Removing node after given node - to find and remove a particular node, you still have to keep track of the previous element

* _traverse through list_\

  ```Int_Node pointer = head;
  while (pointer != null) {\
  pointer = pointer.link;\
  }\
  ```

  * pseudocode

    1. initializing `pointer` to reference `head`
    2. while loop that keeps going through entire list until `pointer` (or `head`) is `null`\

       > `null` implying that it's reached the last node because the last node will always have a `null` link since there's nothing next to the last node so no link so `null` link

    3. `pointer` referenced to next node or `pointer.link`

* _print list through traversal_\

  ```Int_Node pointer = head;
  while (pointer != null) {\
  System.out.print(pointer.data + " ");\
  pointer = pointer.link;\
  }\
  ```

  * pseudocode\

    > same as traversal algorithm but just printing out data of pointer as you go along the node sequence with `pointer.data`

> Tips or Tricks?
>
> > Contact me [@fvcproductions](//twitter.com/fvcproductions)
