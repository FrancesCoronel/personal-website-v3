---
title: "Study Guide - Linked Lists"
date: 2014-11-10
excerpt: "A study guide for simple linked lists in Java."
header:
    image: https://fvcproductions.files.wordpress.com/2014/10/banners-005.jpg?w=1024&h=436&crop=1
tags:
    - algorithms
    - arrays
    - data
    - data structures
    - digital hieroglyphics
    - fvcproductions
    - Hampton
    - hampton university
    - head
    - insert
    - int node
    - Int\_Node
    - java
    - link
    - linked lists
    - nodes
    - 'null'
    - Pointer
    - properties
    - pseudocode
    - remove
    - traversal
---

CSC251 Study Guide {#csc251-study-guide style="text-align:center;"}
==================

### Linked Lists Exam {#linked-lists-exam style="text-align:center;"}

------------------------------------------------------------------------

Index
-----

- [Linked Lists vs Arrays](#section-versus)
- [Linked Lists Properties](#section-linked)
- [Linked Lists Algorithms/Code](#section-algo)

------------------------------------------------------------------------

### Linked Lists vs Arrays {#section-versus}

-   *Arrays*
    -   can access any element directly via indexing
    -   all elements grouped together
    -   sitting in 1 block of memory
    -   size is fixed
-   *Linked Lists*
    -   each element sits in own block of memory (called node)
    -   nodes can only be accessed in sequential order
    -   appears limited
    -   size varies - nodes allocated on need basis
    -   list elements can be easily inserted/removed without
        reallocation and at any point in the list
    -   no random access to data
    -   no efficient form of indexing
-   *Key Differences*
    -   underlying layout of data in memory
    -   how individual elements are accessed

------------------------------------------------------------------------

### Linked Lists Properties {#section-linked}

-   *overview*
    -   a sequence of elements arranged 1 after another with each
        element connected to next by a link
    -   one of the simplest and most common data structures
    -   can be used to implement other abstract data types
-   *defintion*
    -   data structure of group of nodes that represent a sequence
-   *diagram*

![](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Singly-linked-list.svg/408px-Singly-linked-list.svg.png)

> above is a linked list with nodes that contain 2 fields - an integer
> value and a link to next to the next node; last node linked to
> terminator symbol to signify end of list/null link

-   *conceptual implementation*
    -   each node has data and reference (link) to next node in sequence
    -   allows for insertion of removal of elements from any position in
        sequence
-   *operations for singly linked list*
    -   `insertion`
    -   `deletion`
    -   `traversal` - going through entire sequence until reaching last
        node
-   *advantages*
    -   dynamic data structure that allocates needed memory
    -   easy implementation for insertion and deletion operations
    -   other data structures can be easily executed with linked lists
    -   reduce access time and can expand without more memory being used
-   *disadvantages*
    -   usually wastes memory with pointers which requires extra storage
        space
    -   nodes must be read sequentially
    -   nodes stored in an in-contiguous manner, so more difficult to
        access individual nodes
    -   very difficult to reverse traverse

### Linked Lists Algorithms {#section-algo}

-   *constructor for an integer node in a linked list*\
    \[code language="java"\]public Int\_Node (int initialData, Int\_node
    initialLink) {\
    data = initialData; //integer value\
    link = initialLink; //reference to next node in list\
    }\
    \[/code\]
-   *define empty linked list*\
    \[code language="java"\]Int\_Node head = null;\
    \[/code\]
    -   pseudocode
        1. representing empty list by storing null in head reference\

            > keeping track of front node by using an Int\_Node
            > reference variable called `head`
-   *add new node to empty list*\
    \[code language="java"\]head = new Int\_Node(data, null);\
    \[/code\]
    -   pseudocode
        1. create new node for head
        2. place data in new node's data field
        3. make head refer to null which is initial head value
        4.  connect new node to head
-   *add node to front of list*\
    \[code language="java"\]head = new Int\_Node(newData, head);\
    \[/code\]
    -   pseudocode
        1. create new node
        2. place data (`newData`) in new node's data field
        3. connect new node to front of list
        4.  make original `head` refer to **new** `head` of linked list

![](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/CPT-LinkedLists-addingnode.svg/474px-CPT-LinkedLists-addingnode.svg.png)

> Diagram showing how a node is inserted after an existing node\
> Inserting node before existing node cannot be done directly - instead
> you have to keep track of the previous node and insert a node after
> that

-   *adding anywhere but front*\
    \[code language="java"\]previous.link = new Int\_Node(newData,
    previous.link);

    while (prev.link != null) {\
    prev = head;\
    prev = prev.link;\
    }\
    \[/code\]

    -   pseudocode
        1. set a reference named `prev` (for previous) to refer to node
            which is just before new node's position

-   *removing node at head*\
    \[code language="java"\]head = head.link;\
    \[/code\]
    -   pseudocode
        1. directing `head` to node right next to it (`head.link`) so
            that original `head` is removed
-   *removing node anywhere*

![](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/CPT-LinkedLists-deletingnode.svg/380px-CPT-LinkedLists-deletingnode.svg.png)

> Removing node after given node - to find and remove a particular node,
> you still have to keep track of the previous element

-   *traverse through list*\
    \[code language="java"\]Int\_Node pointer = head;

    while (pointer != null) {\
    pointer = pointer.link;\
    }\
    \[/code\]

    -   pseudocode
        1. initializing `pointer` to reference `head`
        2. while loop that keeps going through entire list until
            `pointer` (or `head`) is `null`\

            > `null` implying that it's reached the last node because
            > the last node will always have a `null` link since there's
            > nothing next to the last node so no link so `null` link

        3. `pointer` referenced to next node or `pointer.link`

-   *print list through traversal*\
    \[code language="java"\]Int\_Node pointer = head;

    while (pointer != null) {\
    System.out.print(pointer.data + " ");\
    pointer = pointer.link;\
    }\
    \[/code\]

    -   pseudocode\

        > same as traversal algorithm but just printing out data of
        > pointer as you go along the node sequence with `pointer.data`

------------------------------------------------------------------------

> Tips or Tricks?
>
> > Contact me [@fvcproductions](https://twitter.com/fvcproductions)
