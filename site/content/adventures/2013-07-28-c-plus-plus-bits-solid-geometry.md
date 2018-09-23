---
title: C++ Bits - Solid Geometry 📐
date: 2013-07-28
description: Messing with Geometry in C++.
banner: https://lh3.googleusercontent.com/ZjgASvaeNDYVQMgfhJ_w31GJoFuy0Dcpmei_O2iS3H1gjKvjTjg83Ljzdva_SuNa8SvGagJejs39K4i4YcoFfT1dAcKqGQAz8DGV2OiXlNm-C_Zrok8agVho53zIoeire-T2NeifdbLWQDt898XZKNkLNQ52LCUTlZJvEKubuEccXnuEhurrziBWHIUOtKsRDTy_dI5RYPjBZqrO5tN2HA_3dmUP7zl2F0Ft6g1hYKKcQIIBiwWxnrG6itvJXF-g-nI7PsYmuWFs5wT5qe-RHsbOKybE9Q_9o3M7AdQoXhGcsAzQ1tqmvVG1mRM6aR9_qvjoQGypyJvprFYxZspHtYxZ9Aga9hKQONEfUfpOo7f0y7uKEXsRSs3nKackkfVJ79MmTBrvPCWcHMsbFljid7qjAdQRCj3H0-tY_a8zkIB74Tkh-Sym3iyloLNOyjdpVvUIwidog9fJTfpFW1bo37A3EC8sV_EDurRFPSAJV-7os0-WQ-C84JrzGsKae2xkNPCduzaOtzZYEldtzDgRk16ODpyp-894TpVIZywpPVtoDUiPUrU_9haZl1yg-V8eDeaps9ILS552Sm3QwGsAt3nTBPeEk3u6MWKnLd-WXOx_0pnYfQA7Ka9DGTypqYNO=w1140-h500-no
categories:
  - blog
---

## Purpose

To use symbolic constants, nested decisions, and sentinel loops.

1.  Write a simple C++ program to calculate the surface area, volume, or the cross-sectional area of a sphere. Use functions to calculate each figure. The formulas are as follows for the stupid sphere:

    ```text
    Volume = 4.0/3.0*Pi*r^3 (^ means to the power of in case you didn't know but I know probably you know... smart ass)

    Surface Area = 4.0*Pi*r^2

    Cross-Sectional Area = Pi*r^2
    ```

2.  The input of this friggin program will be a damn letter. ‘V' as in V for Vendetta will indicate volume, ‘A' will indicate surface area, ‘X' as in drop that x, before she cheats, will indicate the cross-sectional area, and finally ‘Q' will indicate you want to quit this little midget of a program.The second part of this dang long input will be a single float number representing the rocking radius. Woo.
3.  Now to provide a detestable little example: A 12.8 means find the surface area of a sphere with radius 12.8. Ergo, V 15.7 means find the volume of a sphere with radius 15.7. Get it, got it, goo.. and no one gives a shiz!
4.  For each input, you're supposed to just calculate what is called for (like volume, surface area, cross-section) not all three dang answers. The coding doesn't do that crazy shiz here. Just use NESTED decisions to control your actions. NESTED as in nest as in bird as in bird procreation. Fantastic! Now, the output should have appropriate labels and don't forgot to use formatting to control the appearance of your answers, no one likes coding that could make a dang on blind kid cry his eyes out.
5.  Use Sentinel controlled while loops to read the data. The letter ‘Q' will be the sentinel. The program should work for any data set, not just my data set. So get your numbers right the first dang time! If the first input to the program is ‘Q', the loop should be inactive (I mean - duh dip shit).
6.  FINALLY, use 3.14159 for π, that lovely global symbolic constant. Fun fact, half of π is 1.618, the GOLDEN RATIO! WOAHHHHHH.

## Libraries

`iostream`, `cmath`, `iomanip`

## Solution

```c++
#include iostream
#include cmath
#include iomanip
using namespace std;
const char QUIT = 'Q';
const float PI = 3.1415927;
int main()
{
    float radius, surface_area, volume, cross_section;
    char method;
    cout << "Please enter\n"
         << "V for volume,\n"
         << "A for surface area"
         << ",X for cross-sectional area,\n"
         << "and finally Q if you would like to quit.\n";
    cin >> method;

    while (method != QUIT) {
        cout << "Now please enter the radius of your sphere.\n";
        cin >> radius;
        if (method == 'V') {
            volume = 4.0 / 3.0 * PI * radius * radius * radius;
            cout << "The volume of the sphere is:" << volume<> method;
        }
        system("pause");
        return 0;
    }
```

## Sample Input (AKA MY NUMBERS HARPY)

```text
A 15.9

X 12.8

V 34.8

A 23.8

Q (The sentinel)
```

## Output

Just look at the friggin file right up in here that I provided your a\*\*.

```text
Please enter
V for volume,
A for surface area,X for cross-sectional area,
and finally Q if you would like to quit.
A
Now please enter the radius of your sphere.
15.9
The surface area of the sphere is:3176.9
Please enter
V for volume,
A for surface areaX for cross-sectional area,
and finally Q if you would like to quit.
X
Now please enter the radius of your sphere.
12.8
The cross section of the sphere is:514.719
Please enter
V for volume,
A for surface areaX for cross-sectional area,
and finally Q if you would like to quit.
V
Now please enter the radius of your sphere.
34.8
The volume of the sphere is:176533
Please enter
V for volume,
A for surface areaX for cross-sectional area,
and finally Q if you would like to quit.
A
Now please enter the radius of your sphere.
23.8
The surface area of the sphere is:7118.09
Please enter
V for volume,
A for surface areaX for cross-sectional area,
and finally Q if you would like to quit.
Q
```

2nd post - hollla!
