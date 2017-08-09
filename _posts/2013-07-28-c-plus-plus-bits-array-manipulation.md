---
title: "C++ Bits - Array Manipulation"
date: 2012-07-30
excerpt: "Manipulating arrays in C++."
header:
    image: https://fvcproductions.files.wordpress.com/2013/07/banners-002.jpg?w=1024&h=436&crop=1
---

**Purpose**

To do real simpleton array manipulation. To use functions with awkward
arrays.

1. Write a C++ program to read numbers (using count technique or a
    sentinel loop) into an array of integers, and then manipulate the
    array. Declare the array of size 25 (0 to 24). Use a function to
    read the array, like I can read your bored out of hell face now.
    Then do the following shiz..
2. Print the array, writing the indexes and components.
3. Write the array and indexes in REVERSE ORDER, so the zero component
    will be written last. Reverse, reverse. Reverse, reverse. Cha cha
    now y’all, cha cha again. Cha cha now y’all, cha cha again.
4.  Write the indexes and components as if the array values were
    divisible by two (so EVEN NUMBERS you blockhead). Test the array
    components, not the indexes.
5.  Write the indexes and components where the component is GREATER THAN
    the value in the next position. Note, Minecraft Look-Alike, that
    there will be no defined value after the last to compare.
6.  Finally, each of the above algorithms should be coded with a nice
    procedure with a nice little message before the output. And yeah
    parameters need to be in the correct form and shizz..

------------------------------------------------------------------------

**Sample Input/Data For Array Program (AKA MY NUMBERS HARPY)**

    17 - number of array values to read

    28

    80

    53

    19

    30

    37

    76

    9

    48

    1

    8

    89

    41

    36

    10

    25

    38

------------------------------------------------------------------------

**Solution**

\[code language="c"\]\#include &lt;iostream&gt;\
using namespace std;

const int MAXSIZE = 25;\
void getlist(int\[\], int&);\
void putlist(const int\[\], int);\
void reverse(const int\[\], int);\
void EvenValues(const int\[\], int);\
void GreaterThan(const int\[\], int);

int main ()\
{\
int list \[MAXSIZE\];\
int num\_items;

getlist(list, num\_items);\
putlist(list, num\_items);\
reverse(list, num\_items);\
EvenValues(list, num\_items);\
GreaterThan(list, num\_items);

system("pause");\
return 0;\
}

void getlist(int list\[\], int& num\_items)\
{\
int i;\
cout&lt;&lt;"Please enter the number of array values"&lt;&lt;endl;\
cin&gt;&gt;num\_items;\
for(i=0; i&lt;num\_items;i++)\
{\
cout&lt;&lt;"Enter the next array value"&lt;&lt;endl;\
cin&gt;&gt;list\[i\];\
}\
}

void putlist(const int list\[\], int num\_items)\
{\
cout&lt;&lt;"Array Elements"&lt;&lt;endl;\
for (int i=0; i&lt;num\_items; i++)\
cout&lt;&lt;i&lt;&lt;" "&lt;&lt;list\[i\]&lt;&lt;endl;\
}

void reverse(const int list\[\], int num\_items)\
{\
cout&lt;&lt;"List in Reverse Order"&lt;&lt;endl;\
for (int i=num\_items - 1; i&gt;=0; i--)\
cout&lt;&lt;i&lt;&lt;" "&lt;&lt;list\[i\]&lt;&lt;endl;\
}

void EvenValues(const int list\[\], int num\_items)\
{\
cout&lt;&lt;"Even Values"&lt;&lt;endl;\
for (int i=0; i&lt;=num\_items; i++)\
if (list\[i\]%2 == 0)\
cout&lt;&lt;i&lt;&lt;" "&lt;&lt;list\[i\]&lt;&lt;endl;\
}

void GreaterThan(const int list\[\], int num\_items)\
{\
cout&lt;&lt;"Greater Than"&lt;&lt;endl;\
for (int i=0; i &lt;= num\_items-1; i++)\
if (list\[i\]&gt;list\[i + 1\])\
cout&lt;&lt;i&lt;&lt;" "&lt;&lt;list\[i\]&lt;&lt;endl;\
}\
\[/code\]

------------------------------------------------------------------------

**Output**

Just look at this here friggin output text I provided your a\*\*.

\[scribd id=156214585 key=key-25zp0g6uyq3gx4l3n5c3 mode=scroll\]

------------------------------------------------------------------------

**Prototypes For Functions…**

    void getlist (int[ ], int &);
    void putlist (const int[ ], int);
    void reverse (const int[ ], int);
    void EvenValues (const int[ ], int);
    void GreaterThan (const int[ ], int);
