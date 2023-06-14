## Python

### Python Comments

Comment lines are ignored by compilers and interpreters. Comment lines can be used for two different purposes.

*   Increasing code readability.
*   Make debugging easier.

#### **1\. Single - Line Comments**

Prepend each line with a hash (#).

#### **2\. Multi - Line Comments**

Python doesn’t offer a separate way to write multiline comments.

To comment out multiple lines in Python, you can prepend each line with a **hash (**`#`**)**.

> _**Python Indentation**_
> 
> To indicate a block of code in Python, you must indent each line of  
> the block by the same whitespace.

---

### Variables

Variables allow us to store data so that we can process it. You don’t need to specify the variable type in Python. Just define the variable name and assign the value with the equals symbol ( = ) .

> _**Variable Identification Rules**_
> 
> *   Non-ascii character (ı,İ,ğ,Ğ, ş, Ş,ü, Ü, ö, Ö, ç, Ç ) should not be used.
> *   Variables names must begin with letters or \_ (underscore). Variables cannot start with a digit.
> *   Python keywords should not be used.
> *   Python is case sensitive.
> *   Variable names must be different and unique.

#### Python Input and Output

```python
#input
input('Enter a number: ')


#output
print("Hello Python")
```

We can also use the values of variables as output in Python.

```python
x = input('Enter a value: ') 
print("Hello",x)
```

> You can find the type of a variable with type() in Python.

#### **1\. Numbers**

```python
# Numbers: integer
x = 46
print(type(x))

# Numbers: float
x = 10.3
print(type(x))

# Numbers: complex
x = 2j + 1
print(type(x))

# Four basic mathematical operations
x=20
y=5
print(x + y) #25
print(x - y) #15
print(x * y) #100
print(x / y) #4.0

#Exponentiation: The process of raising one quantity to the power of another.
print(y ** 2) #25

#Modulo operation: The modulo operation returns the remainder of dividing one number by another .
print(x % y) #0
```

#### **2\. Strings**

> _**Strings are Arrays**_
> 
> _When you create a string variable, an index is created for each character. With the help of this index, you can access any character.The first character has an index of 0._

![](https://miro.medium.com/max/831/1*oXBxW2tiHeRHBa0qBMVolQ.png)

```python
# String " " or ' '

x = "Hello aidealab "
print(type(x))

x = 'Hello aidealab '
print(type(x))

word = "aidealab"

#Square brackets can be used to access elements of the string.
print(word[0]) #a 

#Reverse indexing 
print(word[-1]) #b

#len() String size
print(len(word))  #8

#The index value of the last element is len()-1.
print( ( word[len(word)-1] ) == (word[-1]) ) #True

#Slice Operation in Strings
print(word[0:2]) #ai

#Querying a Character in a String
print("ai" in word) #True

# .upper() & .lower(): lowercase to uppercase conversions
upper_word=word.upper()
print(upper_word) #AIDEALAB

word=word.lower()
print(word) #aidealab

# .capitalize(): capitalizes the first letter
print(word.capitalize()) #Aidealab

# .replace(): replaces characters
print(word.replace("dea", "dev")) #aidevlab

"""
.split(separator, maxsplit) Splits the String.
seperator:  Specifies the separator to use when splitting the string.Default value is space.
maxsplit: Specifies how many splits to do. Default value is -1, which is "all occurrences".
"""
print(word.split("a")) #['', 'ide', 'l', 'b']

# .strip(): Removes the character from the beginning and the end, if any.Default value is space.
print(word.strip("a")) #idealab
```

#### **3\. Boolean**

```python
True
False

print(type(True))

print(type(3 == 2))
```

#### **Python Casting**

Conversion between variable types is possible.

```python
x = 10.3
print(type(x))

x=int(x) # You must assign the same variable again for the new variable type to take effect.
print(type(x))

x=str(x) 
print(type(x))

x=complex(x) 
print(type(x))
```

---

### **Python Collections**

#### **1\. List**

*   It is inclusive. It can contain different types of variables.
*   It is sequential. Index operations can be done.
*   Can be changed.

```python
#Create a List:
#It is inclusive. It can contain different types of variables.

new_list = [1, 2, 3,"String"]
print(new_list,type(new_list)) #[1, 2, 3, 'String'] <class 'list'>

#It is sequential. Index operations can be done.
print(new_list[0]) #1

#Can be changed.
new_list[1]=0
print(new_list) #[1, 0, 3]

# .append(): Adds a new element to the list.
new_list.append(100) 
print(new_list) #[1, 0, 3, 'String', 100]

# .pop(): Deletes an element from the list by index.
new_list.pop(0)
print(new_list) #[0, 3, 'String', 100]

# .insert(): Adds a new item to the list by index.
new_list.insert(2, 99)
print(new_list) #[0, 3, 99, 'String', 100]
```

#### **2\. Dictonary**

*   It is inclusive. It can contain different types of variables.
*   It is non-sequential. (Sequential after version 3.7.)
*   Can be changed.

```python
#Create a Dictonary:
#It is inclusive. It can contain different types of variables.
new_dict = {"LI": ["List",1],
            "DI": ["Dictonary",2],
            "TU": ["Tuple",3]}
print(new_dict,type(new_dict)) #{'LI': ['List', 1], 'DI': ['Dictonary', 2], 'TU': ['Tuple', 3]} <class 'dict'>

#It is non-sequential. (Sequential after version 3.7.)
#key-value
print(new_dict["LI"]) #['List', 1]

#Can be changed.
new_dict["LI"] = ["List",4]

print(new_dict) #{'LI': ['List', 4], 'DI': ['Dictonary', 2], 'TU': ['Tuple', 3]}

# Querying whether to be found with the key.
print("LI" in new_dict) #True

# Accessing value by key
print(new_dict["LI"]) #['List', 4]
print(new_dict.get("LI")) #['List', 4]

#Accessing all keys
print(new_dict.keys()) #dict_keys(['LI', 'DI', 'TU'])

# Accessing all values
print(new_dict.values()) #dict_values([['List', 4], ['Dictonary', 2], ['Tuple', 3]])

# Accessing all items
print(new_dict.items()) #dict_items([('LI', ['List', 4]), ('DI', ['Dictonary', 2]), ('TU', ['Tuple', 3])])

# Updating Key-Value
new_dict.update({"LI": ["List",1]})
print(new_dict) #{'LI': ['List', 1], 'DI': ['Dictonary', 2], 'TU': ['Tuple', 3]}

# Adding new Key-Value
new_dict.update({"SET": ["Set",4]})
print(new_dict) #{'LI': ['List', 1], 'DI': ['Dictonary', 2], 'TU': ['Tuple', 3], 'SET': ['Set', 4]}
```

#### **3\. Tuple**

*   It is inclusive. It can contain different types of variables.
*   It is sequential. Index operations can be done.
*   It cannot be changed.

```python
#Create a Tuple:
#It is inclusive. It can contain different types of variables.

new_tuple = (1, 2, 3,3,"String",True)
print(new_tuple,type(new_tuple)) #(1, 2, 3, 3, 'String', True) <class 'tuple'>

#It is sequential. Index operations can be done.
print(new_tuple[0],new_tuple[0:2]) #1 (1, 2)

#It cannot be changed.
tuple[0] = 256 #TypeError: 'type' object does not support item assignment

# .count Returns the number of repeat of the element.
print(new_tuple.count(3))  #2

# .index() Returns the index of the element.
print(new_tuple.index("String"))  #4
```

#### **4\. Set**

*   It is inclusive. It can contain different types of variables.
*   It is non-sequential and unique.
*   Can be changed.

```python
#Create a Set:
#It is inclusive. It can contain different types of variables.

set1 = {"a", "b", "c",1,2}
set2 = {"b", "c", "d",2,3}
print(set1,set2,type(set1)) #{1, 2, 'b', 'c', 'a'} {2, 3, 'b', 'c', 'd'} <class 'set'>

#It is non-sequential and unique.

print(set1,set2) #{1, 2, 'a', 'c', 'b'} {2, 3, 'c', 'd', 'b'} non-sequential

set3 = {"a","a"}
print(set3) #{'a'} unique

#Can be changed.Sets are mutable. However, since they are unordered, indexing has no meaning.

# .diffrence() set1 difference set2
print(set1.difference(set2)) #{1, 'a'}
print(set1 - set2) #{1, 'a'}

# set2 difference set1
print(set2.difference(set1)) #{3, 'd'}
print(set2 - set1) #{3, 'd'}

# .symmetric_difference(): The returned set contains a mix of items that are not present in both sets.
print(set1.symmetric_difference(set2)) #{1, 3, 'a', 'd'}
print(set2.symmetric_difference(set1)) #{1, 3, 'a', 'd'}

# .intersection(): Intersection of two sets
print(set1.intersection(set2)) #{'c', 2, 'b'}
print(set2.intersection(set1)) #{'c', 2, 'b'}

# .union(): Union of two sets.
print(set1.union(set2)) #{1, 2, 3, 'c', 'd', 'a', 'b'}
print(set2.union(set1)) #{1, 2, 3, 'c', 'd', 'a', 'b'}

# .isdisjoint(): Is the intersection of two sets empty?
print(set1.isdisjoint(set2)) #False
print(set2.isdisjoint(set1)) #False

# .isdisjoint(): Is one set a subset of another set?
print(set1.issubset(set2)) #False
print(set2.issubset(set1)) #False

# .issuperset(): Does one cluster include another cluster?
print(set2.issuperset(set1)) #False
print(set1.issuperset(set2)) #False
```

---

### **Functions**

Functions allow a block of code to be reused without having to write it more than once.

> _**Don’t Repeat Yourself (DRY)**_

Functions are defined with the **def** keyword. The body of the function is separated from the definition by an indent. In order for the function to be used, the function must be called with the optional defined name.

```python
def functions_name():
    print("Hello Python")
functions_name() #Hello Python
```

We can send information, that is, parameters, to functions and use them within the function.

```python
def functions_name(parameters):
    print("Hello Python",parameters)
functions_name("and aidealab") #Hello Python and aidealab
```

The **return** keyword allows to use function outputs as inputs.

```python
def functions_name(parameters="aidealab"):
    return parameters
parametere=functions_name("aidevlab") #The parameter ignores the default value when the value is sent.
print(parametere) #aidevlab
```

#### **Calling a function from within a function**

```python
def rectangular_perimeter(x,y):
    return 2*(x+y)
def rectaguler_area(x,y):
    return x*y
def print_rectaguler(x,y):
    print(rectangular_perimeter(x,y),rectaguler_area(x,y))
print_rectaguler(5,4) #18 20
```

> _**Local and Global Variables in Python**_
> 
> _**Local** variables are variables declared inside a function. They are only used within the function they are in._
> 
> _**Global** variables are variables declared outside of a function.This means that they can be accessed throughout an entire program, including within functions._

```python
#Global Variable
name = "aidealab"
def printName():
	print(name)

printName() #aidealab

#Local Variable
def printName():
	name = "Georgia Anderson"
	print(name)

printName()
print(name) #Error: name 'name' is not define
```

---

### Operators

#### 1\. Relational Operators

![](https://cdn-images-1.medium.com/max/1000/1*AhOFCvx7TN_4ciy4r3Jt-Q.png)

#### 2\. Logical Operators

#### Not Operator

![](https://cdn-images-1.medium.com/max/1000/1*iwp-t63ho51Jw7CN3AlRJg.png)

#### And Operator

![](https://cdn-images-1.medium.com/max/1000/1*NjVgEJ-JWAJzmrOaT2nUpQ.png)

#### **Or Operator**

![](https://cdn-images-1.medium.com/max/1000/1*Lh4wOPR2S6S5DyBYFdtwaA.png)

---

### Conditions

The **conditions** are evaluated and processed as true or false.

#### 1\. if-elif-else

### if

The **if** keyword executes the code block if it provides the specified expression.

```python
'''
if expression:
    statement
'''

if 1 == 1:
    print("EQUAL") #EQUAL

#Expression is not provided and the code block is not executed.
def number_check(number):
    if number == 10:
        print("number is 10")

number_check(12)
```

### **else**

The **else** keyword executes the code block if the if statement does not provide the specified.

```python
"""
if expression:
    statement 
else:         
    statement
"""

def number_check(number):
    if number == 10:
        print("number is 10")
    else:
        print("number is 12")

number_check(12) #number is 12
```

### **elif**

More than one expression is checked with the **elif** keyword.

```python
'''
if expression1: 
    statement 
elif expression2: 
    statement 
elif expression3: 
    statement 
else: 
    statement
'''

def number_check(number):
    if number > 10:
        print("greater than 10")
    elif number < 10:
        print("less than 10")
    else:
        print("equal to 10")

number_check(6) #less than 10
```

### **2.Match-Case**

match-case is similar to the if-elif-else statement. Match-case python 3.10. included with the version.

```python

"""
match term:
    case pattern-1:
         action-1
    case pattern-2:
         action-2
    case pattern-3:
         action-3
    case _:
        action-default
"""


def check_number(number):
    match number:
        case 0:
            print("nothing")
        case 1 | 4 | 9 | 16:
            print("a square")
        case 2 | 3 | 5 | 7 | 11 | 13 | 17 | 19:
            print("a prime")
        case int():
            print("some other number")
        case _:
            print("please provide an integer")
            
check_number(20) #some other number
```

---

### **Loops**

In python, loop is used to execute a block of statements repeatedly until a given condition is satisfied.

#### **1\. For Loop**

#### **for … in …**

```python
for character in “Python”:
    print(character)
'''
output:
P
y
t
h
o
n
'''
```

#### **for … range …**

```python
#range(start value, end value, change amount)
#default start value: 0
#default change amount: 1
for number in range(0,5): 
    print(number)
"""
output: 
0
1
2
3
4
"""
```

#### **Enumerate**

For loop with automatic Counter / Indexer

```python
students = ["John", "Mark", "Venessa", "Mariam"]
for index, student in enumerate(students):
    print(index, student)
    
"""
output:
0 John
1 Mark
2 Venessa
3 Mariam
"""
```

### **2\. While Loop**

```python
number = 1 #start value
while number < 5: #end value
    print(number) 
    number += 1 #change amount
"""
output:
1
2
3
4
"""
```

> **Break and Continue**
> 
> _The break statement terminates the whole iteration of a loop whereas continue skips the current iteration._

```python

salaries = [1000, 2000, 3000, 4000, 5000]

#for loop
for salary in salaries:
    if salary == 3000:
        break
    print(salary)
    
"""
output:
1000
2000
"""

#while loop   
counter = 0
while counter < len(salaries):
    if salaries[counter] == 3000:
        counter += 1
        continue
    else:
        print(salaries[counter])
        counter += 1
        
"""
output:
1000
2000
4000
5000
"""
```

> _**Modules and import**_
> 
> _Functions were constructs that allowed to use a particular block over and over in the same file. The module system allows you to use a function repeatedly in different files and programs. We can import modules in Python or that we have prepared ourselves with the import keyword._

```python
#Random module is an in-built module of Python which is used to generate random numbers.
import random  
print(random.randint(5, 15)) #13
#Math module is an in-built module of Python which is used for mathematical tasks.
from math import e #euler number
print(e) #2.718281828459045
```

---

### **Python Methods**

#### **Zip Method**

**zip()** method takes iterable or containers and returns a single iterator object, having mapped values from all the containers.

Parameters : Python iterables or containers ( list, string etc )

Return Value : Returns a single iterator object, having mapped values from all the containers.

```python
students = ["John", "Mark", "Venessa", "Mariam"]
departments = ["mathematics", "statistics", "physics", "astronomy"]
ages = [23, 30, 26, 22]
print(list(zip(students, departments, ages)))
"""
output:
[('John', 'mathematics', 23), ('Mark', 'statistics', 30), ('Venessa', 'physics', 26), ('Mariam', 'astronomy', 22)]
"""
```

#### **Lambda Method**

Lambda is similar to an anonymous function that only returns one value.

```python
#function
def summer(a, b): 
    return a + b
result_function = summer(4, 5)
print(result_function) #9
#lambda
new_sum = lambda a, b: a + b
result_lambda = new_sum(4, 5)
print(result_lambda) #9
```

#### **Map Method**

Applies a function to all items in a list.

```python
salaries = [1000, 2000, 3000, 4000, 5000]
print(list(map(lambda x: x * 20 / 100 + x, salaries))) #[1200.0, 2400.0, 3600.0, 4800.0, 6000.0]
```

#### **Filter Method**

Filter creates a list of elements that return True from a function.

```python
list_store = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(list(filter(lambda x: x % 2 == 0, list_store))) #[2, 4, 6, 8, 10]
```

#### **Reduce Method**

Reduce is used to perform some calculations on a list and return a result.

```python
from functools import reduce
 
list_store = [1, 2, 3, 4]
print(reduce(lambda a, b: a + b, list_store)) #10Applies a function to all items in a list.Applies a function to all items in a list.
```

---

### **Comprehensions**

It allows us to create a new list/dictionary by manipulating the values of a list/dictionary.

if: \[ \[ ifResult \] for i in \[…\] if \[ condition \] \]

if-else: \[ \[ ifResult \] if \[ condition \] else \[ elseResult \] for i in \[…\]\]

#### **List Comprehensions**

```python
salaries = [1000, 2000, 3000, 4000, 5000]
print([salary * 2 for salary in salaries]) #[2000, 4000, 6000, 8000, 10000]
print([salary * 2 for salary in salaries if salary < 3000]) #[2000, 4000]
print([salary * 2 if salary < 3000 else salary * 0 for salary in salaries]) #[2000, 4000, 0, 0, 0]
```

#### **Comprehensions Dictionary**

```python
dictionary = {'a': 1,
              'b': 2,
              'c': 3,
              'd': 4}
              
print({k: v ** 2 for (k, v) in dictionary.items()  }) #{'a': 1, 'b': 4, 'c': 9, 'd': 16}
print({k.upper(): Dictionary.items() içindeki (k, v) için v, v==1} ise) #{'A': 1}
print({k.upper(): v if v==3 else v**2 for (k, v) in Dictionary.items() }) #{'A': 1, 'B': 4, 'C ': 3, 'G': 16}
```