---
title: "C++ Bits - Clothing Sizes 🚺"
date: 2013-07-28
excerpt: "Testing out clothes in C++."
header:
    image: //fvcproductions.files.wordpress.com/2013/07/banners-002.jpg?w=1024&h=436&crop=1
---

## Purpose

To declare weight, height, hat size, jacket size, and waist size.

1. Write a C++ program to calculate a person's hat size, jacket size, and waist size (in inches). Use functions to calculate each figure. The formulas are as follows: Hat Size = 2.9 times weight in pounds divided by height in inches
2. The input of each program will be the weight (hopefully the person ain't fat as hell either otherwise I'm guessing the program would literally terminate itself, no coding need), followed by the height in feet and inches.
3. For each input, calculate all three answers (hat size, jacket size, and waist size). Use functions for each and then output the results with appropriate labels, as a thug would out-shank that priss with an appropriate Ontario MKIII Navy Knife (holla!). And yeah as always, format to control the appearance of your answers in coding because we don't any blind kids cryin'.
4. Read the count before the data then use a loop to read the data. The program will work for ANY data set, not just my nutty numbers. Use regular functions to calculate hat size, jacket size, and waist size. Use a void function and call by reference to read the input data. There will be three input arguments of type int. The first will be the weight followed by height. SO we cool!

## Sample Input (AKA MY NUMBERS HARPY)

```txt
3 (for the count)

180 6 1 // 180 pounds, 6 feet 1 inches, so 73 inches -- thank you calculator

155 5 4 // 155 pounds, 5 feet 4 inches, so 64 inches

165 5 8 // 165 pounds, 5 feet 8 inches, so 68 inches
```

## Solution

```c++
#include
#include
#include

using namespace std;

double hat(double w, double h);
double jacket(double w, double h);
double waist(double w, double h);

int main()
{
    double height;
    double weight;
    char yesno;

    do {
        cout << "Please enter your height (in inches). Note that 1 Foot = 12 inches:" << endl;
        cin >> height;

        cout << "Please enter your weight (in pounds):" << endl;
        cin >> weight;

        cout << "Your hat size is: " << hat(weight, height) << endl;
        cout << "Your jacket size is: " << jacket(weight, height) << endl;
        cout << "Your waist size is: " << waist(weight, height) << endl;
        cout << "Do you want to run again? Enter Y for yes or N for no" << endl;
        cin >> yesno;
    } while (yesno == 'y' || yesno == 'Y');
    system("PAUSE");
    return 0;
}
double hat(double w, double h)
{
    double r;
    r = (w / h) * 2.9;
    return (r);
}
double jacket(double w, double h)
{
    double r;
    r = (w * h) / 288;
    return (r);
}
double waist(double w, double h)
{
    double r;
    r = w / 4.9;
    return (r);
}
```

## Output

```txt
Please enter your height (in inches):
73
Please enter your weight (in pounds):
180
Your hat size is: 7.15068
Your jacket size is: 45.625
Your waist size is: 36.7347
Do you want to run again? Enter Y for yes or N for no
Y
Please enter your height (in inches):
64
Please enter your weight (in pounds):
155
Your hat size is: 7.02344
Your jacket size is: 34.4444
Your waist size is: 31.6327
Do you want to run again? Enter Y for yes or N for no
Y
Please enter your height (in inches):68
Please enter your weight (in pounds):165
Your hat size is: 7.03676
Your jacket size is: 38.9583
Your waist size is: 33.6735
Do you want to run again? Enter Y for yes or N for no
N
sh: PAUSE: command not found
```

> Any who, hopefully this helped y'all out. Toodle loo now.
