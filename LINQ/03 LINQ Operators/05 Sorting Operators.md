`Sorting` is used to manage data in a perticular order.  
this will not change the source but only arrange the output.  
there are only 2 sortings, ascending & descending.

Order may vary of data type of condition.
like:
- Student order by Roll numbers  
- Name of countries in alphabet order  
- Phone contact list (sort using first name)  


`OrderBy()`: Sorts elements in ascending order  
`OrderByDescending()`: Sorts elements in descending order  
`ThenBy()`: Secondary sort in ascending order  
`ThenByDescending()`: Secondary sort in descending order  
`Reverse()`: Reverses the current order of a sequence  

1. Examples of `OrderBy()`:  
```C#
            var dataSourceInt = new List<int>() { 5,45,23,78,56,12,45 };

            Console.WriteLine("using query");
            var querySyntax = from num in dataSourceInt
                              orderby num
                              select num;
            foreach (var item in querySyntax) {
                Console.WriteLine(item);
            }

            Console.WriteLine("\nusing method");
            var methodSyntax = dataSourceInt.OrderBy(n => n);
            foreach (var item in methodSyntax) {
                Console.WriteLine(item);
            }
```  
#### output:
```terminal
5
12
23
45
45
56
78
```  

2. Examples of `OrderByDescending()`:  
```C#
            var dataSourceInt = new List<String>() { 
            "Mahesh",
            "Ramesh",
            "Suresh",
            "Ganesh",
            "Yadnesh"
            };

            Console.WriteLine("using query");
            var querySyntax = from names in dataSourceInt
                              orderby names descending
                              select names;
            foreach (var item in querySyntax) {
                Console.WriteLine(item);
            }

            Console.WriteLine("\nusing method");
            var methodSyntax = dataSourceInt.OrderByDescending(n => n);
            foreach (var item in methodSyntax) {
                Console.WriteLine(item);
            }
```  
#### output:
```terminal
Yadnesh
Suresh
Ramesh
Mahesh
Ganesh
```  

another example:  
```C#
            var dsObj = new List<Employee>() {
                new Employee() {
                    id = 3,
                    name = "Yadnesh",
                    email = "y@ymaill.com"
                },
                new Employee() {
                    id = 1,
                    name = "Sidhesh",
                    email = "s@smaill.com"
                },
                new Employee() {
                    id = 4,
                    name = "Ramesh",
                    email = "r@rmaill.com"
                },
                new Employee() {
                    id = 2,
                    name = "Maltesh",
                    email = "m@mmaill.com"
                },
            };

            Console.WriteLine("using query syntax");
            var querySyntax = from emp in dsObj
                              orderby emp.id descending
                              select emp;
            foreach (var item in querySyntax) {
                Console.WriteLine($"{item.id}, name: {item.name}, mail: {item.email}");
            }


            Console.WriteLine("\nusing method syntax");
            var methodSyntax = dsObj.OrderByDescending(p => p.id).ToList();
            foreach(var item in methodSyntax) {
                Console.WriteLine($"{item.id}, name: {item.name}, mail: {item.email}");
            }
```  
#### output:
```terminal
4, name: Ramesh, mail: r@rmaill.com
3, name: Yadnesh, mail: y@ymaill.com
2, name: Maltesh, mail: m@mmaill.com
1, name: Sidhesh, mail: s@smaill.com
```  

3. Example of `ThenBy()`& `ThenByDescending()`  
```C#
using System;
using System.Collections.Generic;
using System.Linq;

namespace LinqProjectionDemo {
    class Program {
        static void Main(string[] args) {

            var dsObj = new List<Employee>() {

                new Employee() {
                    Id = 3,
                    Email = "g@gmail",
                    LastName = "XXX",
                    FirstName = "AAA"
                },
                new Employee() {
                    Id = 1,
                    Email = "r@rmail",
                    LastName = "ZZZ",
                    FirstName = "BBB"
                },
                new Employee() {
                    Id = 4,
                    Email = "v@vmail",
                    LastName = "YYY",
                    FirstName = "CCC"
                },
                new Employee() {
                    Id = 2,
                    Email = "s@smail",
                    LastName = "ZZZ",
                    FirstName = "AAA"
                }
            };

            Console.WriteLine("using query syntax");
            var qs = from emp in dsObj
                     orderby emp.LastName ascending, emp.FirstName descending
                     select emp;
            foreach (var item in qs) {
                Console.WriteLine($"id: {item.Id}, FirstName: {item.FirstName}, LastName: {item.LastName}, Email: {item.Email}");
            }


            Console.WriteLine("\nusing method syntax");
            var ms = dsObj.OrderBy(x => x.LastName).ThenByDescending(x=>x.FirstName).ToList();
            foreach(var item in ms) {
                Console.WriteLine($"id: {item.Id}, FirstName: {item.FirstName}, LastName: {item.LastName}, Email: {item.Email}");
            }
            //Console.ReadLine();
        }
    
        class Employee {
            public int Id { get; set; }
            public string FirstName { get; set; }
            public string LastName { get; set; }
            public string Email { get; set; }
        }
    }
}
```  
#### output:
```terminal
using query syntax
id: 3, FirstName: AAA, LastName: XXX, Email: g@gmail
id: 4, FirstName: CCC, LastName: YYY, Email: v@vmail
id: 1, FirstName: BBB, LastName: ZZZ, Email: r@rmail
id: 2, FirstName: AAA, LastName: ZZZ, Email: s@smail

using method syntax
id: 3, FirstName: AAA, LastName: XXX, Email: g@gmail
id: 4, FirstName: CCC, LastName: YYY, Email: v@vmail
id: 1, FirstName: BBB, LastName: ZZZ, Email: r@rmail
id: 2, FirstName: AAA, LastName: ZZZ, Email: s@smail
```  

4. Example of `Reverse()`:  
```C#
using System;
using System.Collections.Generic;
using System.Linq;

namespace LinqProjectionDemo {
    class Program {
        static void Main(string[] args) {

            int[] rollNums = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };

            Console.WriteLine("Using query syntax");
            var qs = (from nums in rollNums
                     select nums).Reverse(); // cannot write pure query syntax, need hybrid for that
            foreach (var item in qs) {
                Console.WriteLine(item);
            }


            Console.WriteLine("\nUsing method syntax");
            var ms = rollNums.Reverse();
            foreach (var item in ms) {
                Console.WriteLine(item);
            }

            //Console.ReadLine();
        }

    }
}
```  
#### output:
```terminal
Using query syntax
9
8
7
6
5
4
3
2
1

Using method syntax
9
8
7
6
5
4
3
2
1
```  
a `Reverse()` method using `System.Collections.Generic;` will not work on not integer types.
like this  
```C#
            List<string> names = new List<string>() { "Mantesh", "Anil", "Bala", "Akash", "Ranveer"};

            var ms = names.Reverse();
            foreach (var item in ms) {
                Console.WriteLine(item);
            }
```  
it will through error because `Reverse()` method using `System.Collections.Generic;` has return type of void.  
but instead if we do this without variable  which is same method `Reverse()` it will work

```C#
            List<string> names = new List<string>() { "Mantesh", "Anil", "Bala", "Akash", "Ranveer"};

            names.Reverse();
            foreach (var item in names) {
                Console.WriteLine(item);
            }
```  
#### output:
```terminal
Ranveer
Akash
Bala
Anil
Mantesh
```  
but this modifies actual source unless you are using LINQ version.  
which is `Enumerable.Reverse()` from `System.Linq;`
```C#
            List<string> names = new List<string>() { "Mantesh", "Anil", "Bala", "Akash", "Ranveer"};

            var ms = names.AsEnumerable().Reverse();

            foreach (var item in ms) {
                Console.WriteLine(item);
            }
```  
#### output:
```terminal
Ranveer
Akash
Bala
Anil
Mantesh
```  
now its reverse without modifing original source  