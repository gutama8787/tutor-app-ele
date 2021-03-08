# week01 - Mutliple Choice Questions
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
----
###### 2. What output will be produced by the following?

~~~Java
    System.out.print("\\* This is not\n a comment");
    
    (A) * This is not a comment *
    (B) \* This is not a comment *\
    (c) * This is not a comment *
    (D) \\* This is not a comment *\\
    (E) \* This is not a comment *\
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



