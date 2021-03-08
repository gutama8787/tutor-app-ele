# week01 - Mutliple Choice Solution and Explanation
## Topic - The Basics of Java.

###### 1. Which of the following pairs of declarations will cause an eror

~~~Java
1. double x = 14.7;
    int y = x;

2. double x = 14.7;
    int y = (int) x;

3. int x = 14;
    double y = x;

(A) None.

(B) 1 only. 

(C) 2. only. 

(D) 3 only. 

(E) 1 and 3 only.
~~~
***ANSWER: ***
***(B) 1 only***

The following leads to an error in _java_
~~~Java
    double x = 14.7;
    int y = x;
~~~

This question tests a few things. Let's go through each of them one by one
###### 1. what is an _int_ and what is a _double_

They both are primitive data types used to store numerical datas. 
Their difference? while _int_ can only store whole numbers like 1,2, -90 or 2323 and so on. 
_double_ on the other hand can store floating points or decimals such as 1.33, 1.0, 4.5, 2323.33 ... 

What happens if you assign a number that is of type double to an int variable or do the oppisite. Asign an int to a double?

In java, one leads to an error.

Lets look at an example and discover why.

~~~Java
// Example 1.

double a;
a = 4;
// a is now 4.0

int b;
b = 4.5;
// b is now 4

b = 4.9
// b is now 4
~~~
~~~Java
// Example 2.

double t = 4.6;
int ti = t;
// ti is now 4
~~~

What do these examples show?

They tell us that if you assign a double or floating point to an int, it gets rid of every thing and only stores the whole number that comes before the decimal point. This means you're losing data when you assign a double to an int.

Now, ask yourself.
What does the following do?
~~~Java
int num = (int) 4.9;
~~~

It casts the floating point number **4.9** to an int number. Therefore, it becomes just 4. Here, you're expilicity telling java to do the conversion and leting it now that you're fine with losing data. 

**What is the point?**

Since assigning a floating point number to an _int_ can lead to a loss of data, java trys to protect you by requiring casting.
Therefore, you get a warning when you try to do
~~~Java
int a = 4.1;

// however, this is okay to do.
int b = (int) 4.1;

// and this is always okay to do
// you don't have to cast to go from int to double.
double b = 4;
~~~

**Note** : this may not be the case in other languages. _Java loves you_

----
###### 2. What output will be produced by the following?

~~~Java
   System.out.print("\\* This is not\n a comment *\\");
    
    (A) * This is not a comment *
    (B) \* This is not a comment *\
    (C) * This is not
    a comment *
    (D) \\* This is not
    a comment *\\
    (E) \* This is not
    a comment *\

~~~
***ANSWER: ***
~~~
(E) \* This is not
    a comment *\
~~~

The character \ or backslash is unique. Any character that follows it has a special meaning.

Ex. \t is a tab and \" is a double quote 

when \ is followed by \ it means that it will not be treated any different from other characters.
Therefore, if you want to print a backslash you've to do \\. You can think of it like the first backslash telling 
the compiler to treat the the second one like any other character.

~~~Java
   System.out.print("\\* This is not\n a comment *\\");

   // \\* means you print \*
   // \n means you print a new line
   // and \\ at the end means you print just a backslash. 
~~~


---
###### 3. Consider the follwing code segement.

~~~Java
    if (n != 0 && x / n > 100)
        statement1;
        
    else
        statement2;
~~~
if _n_ is of  type _int_ and has a value of 0 when the segment is executed what will happen?


(A) An __ArithmeticException__ will be thrwon

(B) A syntax error will occur.

(C) **statement1**, but not **statement2**, will be executed.


(D) **statement2**, but not statement1, will be executed.

(E) Neither **statement1** nor **statement2** will be executed control pass to the first **statement** following th _if_ statement.

***Answer: ***
(D) **statement2**, but not statement1, will be executed.

What you need to know here is how boolean expresions are evaluated. 
Lets look at some exampls.

~~~Java

if (1 == 1 && 2 == 3)
    // some code ...
else
    // another code ...
~~~

in this case, since 1 == 1 evaluates to true, 2 == 3 also needs to be checked because an AND connection means
they both have to be true.

However, if you have
~~~Java

if (2 == 3 && 1 == 1)
    // some code ...
else
    // another code ...
~~~

Only the first one is evaluated because it evaluates to true. Again, in an AND connection all expressions have to true, therefore, if one is false there is no reason to evaluate the others. 

Then if you have
~~~Java
double x = 2000;
double y = 2;

int n = 0
if (n != 0 &&  == x / n > 100)
    // some code ...
else
    // another code ...
~~~
The 2000/0 term is never reached because 0 != 0 is false. There is no reason to look at the second expression and that leads the program to go to the _else_ statement in this case.  


--------
###### 4. Refer to the following code fragment.

~~~Java
double answer = 13 / 5
System.out.println("12 / 5 = " +answer);
~~~

The output is 

~~~Java 
13 / 5 = 2.0 
~~~

The programmer intends the output to be

~~~Java
13 / 5 = 2.6

~~~

Which of the follinwg replacements for the first line of code will not fix the problem?

~~~
(A) double answer = (double) 13 / 5;

(B) double answer = 13 / (double) 5;

(C) double answer = 13.0 / 5;

(D) double answer = 13 / 5.0;

(E) double answer = (double) (13 / 5)
~~~

***ANSWER:***

(E) double answer = (double) (13 / 5)

Lets see how it is evaluated 

This is how it is evaluated.
~~~Java
double answer = (double) (13 / 5) 
=>  (double) (2) 
=> 2.0
// therefore, answer is now 2.0
~~~

***Casting does not have precedence over parentheses***

___

###### 5. What value is stored in _result_ if 

~~~
int result = 13 - 3 * 6 / 4 % 3

(A) -5

(B) 0

(C) 13

(D) -1

(E) 12
~~~

We'll go over this next week. 


