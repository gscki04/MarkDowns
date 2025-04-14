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
