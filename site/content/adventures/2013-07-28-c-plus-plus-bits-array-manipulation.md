---
title: "C++ Bits - Array Manipulation ✂️"
date: 2013-07-30
description: "Manipulating arrays in C++."
banner: //fvcproductions.files.wordpress.com/2013/07/banners-002.jpg?w=1024&h=436&crop=1
categories:
    - blog
tags:
    - c++
---

## Purpose

To do real simpleton array manipulation. To use functions with awkward arrays.

1. Write a C++ program to read numbers (using count technique or a sentinel loop) into an array of integers, and then manipulate the array. Declare the array of size 25 (0 to 24). Use a function to read the array, like I can read your bored out of hell face now. Then do the following shiz..
2. Print the array, writing the indexes and components.
3. Write the array and indexes in REVERSE ORDER, so the zero component will be written last. Reverse, reverse. Reverse, reverse. Cha cha now y'all, cha cha again. Cha cha now y'all, cha cha again.
4. Write the indexes and components as if the array values were divisible by two (so EVEN NUMBERS you blockhead). Test the array components, not the indexes.
5. Write the indexes and components where the component is GREATER THAN the value in the next position. Note, Minecraft Look-Alike, that there will be no defined value after the last to compare.
6. Finally, each of the above algorithms should be coded with a nice procedure with a nice little message before the output. And yeah parameters need to be in the correct form and shizz...

## Sample Input/Data For Array Program (AKA MY NUMBERS HARPY)

```txt
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
```

## Solution

```c++
#include <iostream>
using namespace std;

const int MAXSIZE = 25;
void getlist(int[], int&);
void putlist(const int[], int);
void reverse(const int[], int);
void EvenValues(const int[], int);
void GreaterThan(const int[], int);

int main()
{
    int list[MAXSIZE];
    int num_items;

    getlist(list, num_items);
    putlist(list, num_items);
    reverse(list, num_items);
    EvenValues(list, num_items);
    GreaterThan(list, num_items);

    system("pause");
    return 0;
}

void getlist(int list[], int& num_items)
{
    int i;
    cout << "Please enter the number of array values" << endl;
    cin >> num_items;
    for (i = 0; i < num_items; i++) {
        cout << "Enter the next array value" << endl;
        cin >> list[i];
    }
}

void putlist(const int list[], int num_items)
{
    cout << "Array Elements" << endl;
    for (int i = 0; i < num_items; i++)
        cout << i << " " << list[i] << endl;
}

void reverse(const int list[], int num_items)
{
    cout << "List in Reverse Order" << endl;
    for (int i = num_items - 1; i >= 0; i--)
        cout << i << " " << list[i] << endl;
}

void EvenValues(const int list[], int num_items)
{
    cout << "Even Values" << endl;
    for (int i = 0; i <= num_items; i++)
        if (list[i] % 2 == 0)
            cout << i << " " << list[i] << endl;
}

void GreaterThan(const int list[], int num_items)
{
    cout << "Greater Than" << endl;
    for (int i = 0; i <= num_items - 1; i++)
        if (list[i] > list[i + 1])
            cout << i << " " << list[i] << endl;
}
```

## Output

Just look at this here friggin output text I provided your a\*\*.

```txt
Please enter the number of array values
17
Enter the next array value
28
Enter the next array value
80
Enter the next array value
53
Enter the next array value
19
Enter the next array value
30
Enter the next array value
37
Enter the next array value
76
Enter the next array value
9
Enter the next array value
48
Enter the next array value
1
Enter the next array value
8
Enter the next array value
89
Enter the next array value
41
Enter the next array value
36
Enter the next array value
10
Enter the next array value
25
Enter the next array value
38
Array Elements
0 28
1 80
2 53
3 19
4 30
5 37
6 76
79
8 48
91
10 8
11 89
12 41
13 36
14 10
15 25
16 38
List in Reverse Order 16 38
15 25 14 10 13 36 12 41 11 89 10 8 91
8 48 79 6 76 5 37 4 30
3 19
2 53
1 80
0 28
Even Values
0 28
1 80
4 30
6 76
8 48
10 8
13 36
14 10
16 38
17 7081592
Greater Than
1 80
2 53
6 76
8 48
11 89
12 41
13 36
Press any key to continue . . .
```

## Prototypes For Functions

```c++
void getlist (int[ ], int &);
void putlist (const int[ ], int);
void reverse (const int[ ], int);
void EvenValues (const int[ ], int);
void GreaterThan (const int[ ], int);
```
