---
title: C++ Bits - Time Measurements 🕑
date: 2013-07-28
description: Measuring time in C++.
banner: https://lh3.googleusercontent.com/ZjgASvaeNDYVQMgfhJ_w31GJoFuy0Dcpmei_O2iS3H1gjKvjTjg83Ljzdva_SuNa8SvGagJejs39K4i4YcoFfT1dAcKqGQAz8DGV2OiXlNm-C_Zrok8agVho53zIoeire-T2NeifdbLWQDt898XZKNkLNQ52LCUTlZJvEKubuEccXnuEhurrziBWHIUOtKsRDTy_dI5RYPjBZqrO5tN2HA_3dmUP7zl2F0Ft6g1hYKKcQIIBiwWxnrG6itvJXF-g-nI7PsYmuWFs5wT5qe-RHsbOKybE9Q_9o3M7AdQoXhGcsAzQ1tqmvVG1mRM6aR9_qvjoQGypyJvprFYxZspHtYxZ9Aga9hKQONEfUfpOo7f0y7uKEXsRSs3nKackkfVJ79MmTBrvPCWcHMsbFljid7qjAdQRCj3H0-tY_a8zkIB74Tkh-Sym3iyloLNOyjdpVvUIwidog9fJTfpFW1bo37A3EC8sV_EDurRFPSAJV-7os0-WQ-C84JrzGsKae2xkNPCduzaOtzZYEldtzDgRk16ODpyp-894TpVIZywpPVtoDUiPUrU_9haZl1yg-V8eDeaps9ILS552Sm3QwGsAt3nTBPeEk3u6MWKnLd-WXOx_0pnYfQA7Ka9DGTypqYNO=w1140-h500-no
categories:
  - blog
---

## Purpose

To write a simple C++ program. To use quotient-remainder arithmetic. To use format. To properly comment/document throughout a program.

1.  Write a simple C++ program to read time measurements from the keyboard in hours and minutes. There will be two data sets. The first will be the hours and minutes. There will be two data sets. The first will be the hours and minutes for the first time, the second the hours and minutes for the second time.
2.  Add the two data sets and calculate the result in hours and minutes. Use quotient remainder arithmetic. The minutes in the final answer should be less than 60. Also calculate the answer as a real number representing the number of hours.
3.  The program should use format to control the output. The format should include showpoint, fixed, setprecision, and setw. It should also be documented.
4.  Documentation typically includes the following: the name of your C++ file, your name, some kind of date (due date or date finished), type of input, type of output, and finally a brief description of the algorithm.
5.  Use the input data given below, and write out each answer with appropriate messages for your output. Use prompting messages for your input. The program should work for any positive whole number input data, not just the numbers provided.

## Libraries

`iostream`, `iomanip`

## Sample Input

```text
5   39  // 5 hours, 39 minutes
6   52 // 6 hours, 52 minutes
```

## Sample Output

```text
12 hours, 31 minutes // 12.52 hours
```

## Solution

```c++
//project name "Time Measurements"
//reads time measurements from the keyboard in hours and minutes
//name: Whatchama call it.
//type of input: hours 1, hours 2, minutes 1, minutes 2
//type of output: time in hours and minutes and time as a real number
//brief description of algorithm: adds two data sets of hours and minutes

#include iostream
#include iomanip
using namespace std;

int main()
{
    int hour1, hour2, minutes1, minutes2, total_hours, total_minutes;
    float fraction_hours;

    cout << fixed<> hour1;
    cout << "Please type in 1st minute: ";
    cin >> minutes1;
    cout << "Please type in 2nd hour: ";
    cin >> hour2;
    cout << "Please type in 2nd minute: ";
    cin >> minutes2;

    total_minutes = hour1 * 60 + minutes1 + hour2 * 60 + minutes2;
    total_hours = total_minutes / 60;
    total_minutes = total_minutes % 60;
    fraction_hours = total_hours + total_minutes / 60.0;

    cout << total_hours << " hours " << total_minutes << " minutes \n";
    cout << fraction_hours << " hours \n";

    system("pause");

    return 0;
}
```

## Output

```text
Please type in 1st hour: 7
Please type in 1st minute: 43
Please type in 2nd hour: 12
Please type in 2nd minute: 36
20 hours 19 minutes
20.32 hours
Press any key to continue . . .
```

Woowiii - that was my 1st post! :)
