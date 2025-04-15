`Set` operations are used for query operations that produce result set based on presence or absence of elements within same or different data source.

Usecase example:
- Select distinct records from a data source (No duplicate records).
- Select all students from a school except class 1 students.
- Select all the toppers from all the classes.
- Create a single class data source from all sections data sources.

Methods:  
`Distinct()`: Removes duplicate values from data source.(Works on the single data source to eliminate repeats.)  
`Except()`: Return all the elements from one data source that do not exists in second data source (Like a `LEFT JOIN` minus matches.)  
`Intersect()`: Return all the elements which exists in both of the data source. (Like `INNER JOIN`).  
`Union()`: Return all the elements that appear in either of two data sources. (Combines both sets and removes duplicates, `FULL OUTER JOIN`.)  


All set methods use reference equality for complex types unless a custom IEqualityComparer is provided.  
All set operations automatically remove duplicates unless explicitly preserved (e.g., using Concat() instead of Union()).  

1. Example of `Distinct()`:  
Removes duplicate values from data source.(Works on the same data source to eliminate repeats.)  
it has 2 overload methods.  
Distinct can be used with comparer also  
`Normal Example`  
```C#
            List <int> numbers = new List<int>() { 1,2,3,1,2,3,1,2,3 };

            Console.WriteLine("using query syntax");
            var qs = (from n in numbers 
                      select n).Distinct()
                      .ToList();
            foreach (int i in qs) { Console.WriteLine(i); }


            Console.WriteLine("\nusing method syntax");
            var ms = numbers.Distinct().ToList();
            foreach (int i in ms) { Console.WriteLine(i); }
```  
#### output:
```terminal
1
2
3
```  
`2nd example: with object & only with pair`   
```C#
using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;

namespace LinqProjectionDemo {
    class Program {
        static void Main(string[] args) {

            List<Students> students = new List<Students>() {
                new Students(){ Id = 1, Name = "John" },
                new Students(){ Id = 2, Name = "Kim" },
                new Students(){ Id = 1, Name = "John" },
                new Students(){ Id = 4, Name = "Kim" },
            };

            Console.WriteLine("using query syntax");
            var qs = (from s in students
                     select s.Name).Distinct().ToList();
            foreach (var i in qs) { Console.WriteLine(i); }

            Console.WriteLine("\nusing method syntax");
            var ms = students.Select(x=>x.Name).Distinct().ToList();
            foreach (var i in ms) { Console.WriteLine(i); }
        }

    }
    class Students {
        public int Id { get; set; }
        public string Name { get; set; }
    }
   
}
```  
#### output:
```terminal
John
Kim
```  
problem in this example:
```C#
            var ms = students.Select(x=>x.Name).Distinct().ToList();
```  
here we are comparing duplicate values by names  
but what if we compare whole object entries instead of only single object key?  
```C#
            var ms = students.Distinct().ToList();
```  
it gives us ll array without eliminating duplicate value of object john.  
because again it is checking refences not actual values.  
`3rd example, with full object comparison`
```C#
using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;

namespace LinqProjectionDemo {
    class Program {
        static void Main(string[] args) {

            List<Students> students = new List<Students>() {
                new Students(){ Id = 1, Name = "John" },
                new Students(){ Id = 2, Name = "Kim" },
                new Students(){ Id = 1, Name = "John" },
                new Students(){ Id = 4, Name = "Kim" },
            };

            var ms = students.Distinct(new StudentComparer()).ToList();
            foreach (var i in ms) { Console.WriteLine(i); }
        }

    }
    class Students {
        public int Id { get; set; }
        public string Name { get; set; }
       
    }

        class StudentComparer : IEqualityComparer<Students> {
            public bool Equals(Students? x, Students? y) {
                return x.Id.Equals(y.Id) && x.Name.Equals(y.Name);
            }

            public int GetHashCode([DisallowNull] Students obj) {
                int idHashCode = obj.Id.GetHashCode();
                int nameHashCode = obj.Name.GetHashCode();

                return idHashCode ^ nameHashCode;
            }
        }

}
```  
#### output:
```terminal
LinqProjectionDemo.Students
LinqProjectionDemo.Students
LinqProjectionDemo.Students
```  
here we can see only 3 entries means duplicate entry of john is removed.  
2. Example of `Except()`:  
Return all the elements from one data source that do not exists in second data source (Like a `LEFT JOIN` minus matches.)  
it has 2 overload methods.  
Except can be used with comparer also  
`Normal Example`  
```C#
            List<string> datasource1 = new List<string>() { "A", "B", "C", "D"};
            List<string> datasource2 = new List<string>() { "C", "D", "E", "F"};


            Console.WriteLine("\nusing method syntax");
            var qs = (from i in datasource1
                      select i).Except(datasource2).ToList();
            foreach (var item in qs) Console.WriteLine(item);
            
            Console.WriteLine("\nusing method syntax");
            var ms = datasource1.Except(datasource2).ToList();
            foreach (var item in ms) Console.WriteLine(item);
```  
#### output:
```terminal
A
B
```  
`2nd example: with objects (with pairs)`:    
```C#
using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;

namespace LinqProjectionDemo {
    class Program {
        static void Main(string[] args) {

            List<Students> stud1 = new List<Students>() {
                new Students() { Id = 1, Name = "John"},
                new Students() { Id = 2, Name = "Kim"},
                new Students() { Id = 3, Name = "Susan"},
                new Students() { Id = 4, Name = "Eric"},
            };
            List<Students> stud2 = new List<Students>() {
                new Students() { Id = 1, Name = "John"},
                new Students() { Id = 2, Name = "Kim"},
                new Students() { Id = 5, Name = "Tim"},
                new Students() { Id = 6, Name = "Eddie"},
            };

            Console.WriteLine("using query method");
            var qs = (from s1 in stud1
                      select s1.Name).Except(from s2 in stud2 select s2.Name).ToList();
            foreach (var i in qs) {
                Console.WriteLine(i);
            }


            Console.WriteLine("\nusing method syntax");
            var ms = stud1.Select(s1=>s1.Name).Except(stud2.Select(s2=>s2.Name)).ToList();
            foreach (var i in ms) { 
            Console.WriteLine(i);
            }

            Console.ReadLine();
        }

    }
    class Students {
        public int Id { get; set; }
        public string Name { get; set; }
       
    }

}
```  
#### output:
```terminal
Susan
Eric
```  
`3rd with objects (entire object, using anonymouse method)`:  
```C#
using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;

namespace LinqProjectionDemo {
    class Program {
        static void Main(string[] args) {

            List<Students> stud1 = new List<Students>() {
                new Students() { Id = 1, Name = "John"},
                new Students() { Id = 2, Name = "Kim"},
                new Students() { Id = 3, Name = "Susan"},
                new Students() { Id = 4, Name = "Eric"},
            };
            List<Students> stud2 = new List<Students>() {
                new Students() { Id = 1, Name = "John"},
                new Students() { Id = 2, Name = "Kim"},
                new Students() { Id = 5, Name = "Tim"},
                new Students() { Id = 6, Name = "Eddie"},
            };

            var ms = stud1.Select(x=> new { x.Id, x.Name}).Except(stud2.Select(x => new { x.Id, x.Name })).ToList();
            foreach (var i in ms) { 
            Console.WriteLine(i);
            }

            Console.ReadLine();
        }

    }
    class Students {
        public int Id { get; set; }
        public string Name { get; set; }
       
    }

}
```  
#### output:
```terminal
{ Id = 3, Name = Susan }
{ Id = 4, Name = Eric }
```  
`4th with objects (entire object, using comparer)`:  
```C#
using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;

namespace LinqProjectionDemo {
    class Program {
        static void Main(string[] args) {

            List<Students> stud1 = new List<Students>() {
                new Students() { Id = 1, Name = "John"},
                new Students() { Id = 2, Name = "Kim"},
                new Students() { Id = 3, Name = "Susan"},
                new Students() { Id = 4, Name = "Eric"},
            };
            List<Students> stud2 = new List<Students>() {
                new Students() { Id = 1, Name = "John"},
                new Students() { Id = 2, Name = "Kim"},
                new Students() { Id = 5, Name = "Tim"},
                new Students() { Id = 6, Name = "Eddie"},
            };

            var ms = stud1.Except(stud2, new StudentComparer()).ToList();
            foreach (var i in ms) { 
            Console.WriteLine(i);
            }

            Console.ReadLine();
        }

    }
    class Students {
        public int Id { get; set; }
        public string Name { get; set; }
       
    }
    class StudentComparer : IEqualityComparer<Students> {
        public bool Equals(Students? x, Students? y) {
            return x.Id.Equals(y.Id) && x.Name.Equals(y.Name);
        }

        public int GetHashCode([DisallowNull] Students obj) {
            int idHashCode = obj.Id.GetHashCode();
            int nameHashCode = obj.Name.GetHashCode();

            return idHashCode ^ nameHashCode;
        }
    }
}
```  
this will give reference of those 2 uncommon object instances  
3. Example of `Intersect()`:  
Return all the elements which exists in both of the data source. (Common elements, Like `Inner Join`).  
it has 2 overload methods.  
Intersect can be used with comparer also  
`Normal Example`  
```C#
            List<string> datasource1 = new List<string>() { "A", "B", "C", "D" };
            List<string> datasource2 = new List<string>() { "C", "D", "E", "F" };

            Console.WriteLine("using query syntax");
            var qs = (from s1 in datasource1 select s1).
                    Intersect(datasource2).ToList();
            foreach (var i in qs) { Console.WriteLine(i); }


            Console.WriteLine("\nusing method syntax");
            var ms = datasource1.Intersect(datasource2).ToList();
            foreach(var i in ms) { Console.WriteLine(i); }
```  
#### output:
```terminal
C
D
```  
`2nd with objects (entire object, using anonymouse method)`:  
```C#
using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;

namespace LinqProjectionDemo {
    class Program {
        static void Main(string[] args) {

            List<Students> stud1 = new List<Students>() {
                new Students() { Id = 1, Name = "John"},
                new Students() { Id = 2, Name = "Kim"},
                new Students() { Id = 3, Name = "Susan"},
                new Students() { Id = 4, Name = "Eric"},
            };
            List<Students> stud2 = new List<Students>() {
                new Students() { Id = 1, Name = "John"},
                new Students() { Id = 2, Name = "Kim"},
                new Students() { Id = 5, Name = "Tim"},
                new Students() { Id = 6, Name = "Eddie"},
            };

            var ms = stud1.Select(s1=> new {s1.Id, s1.Name}).Intersect(stud2.Select(s2=> new {s2.Id, s2.Name})).ToList();
            foreach (var i in ms) {
                Console.WriteLine(i);
            }

        }

    }
    class Students {
        public int Id { get; set; }
        public string Name { get; set; }

    }
}
```  
#### output:
```terminal
{ Id = 1, Name = John }
{ Id = 2, Name = Kim }
```  
`3rd with objects (entire object, using comparer)`:  
```C#
using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;

namespace LinqProjectionDemo {
    class Program {
        static void Main(string[] args) {

            List<Students> stud1 = new List<Students>() {
                new Students() { Id = 1, Name = "John"},
                new Students() { Id = 2, Name = "Kim"},
                new Students() { Id = 3, Name = "Susan"},
                new Students() { Id = 4, Name = "Eric"},
            };
            List<Students> stud2 = new List<Students>() {
                new Students() { Id = 1, Name = "John"},
                new Students() { Id = 2, Name = "Kim"},
                new Students() { Id = 5, Name = "Tim"},
                new Students() { Id = 6, Name = "Eddie"},
            };

            var ms = stud1.Intersect(stud2, new StudentComparer()).ToList();
            foreach (var i in ms) {
                Console.WriteLine(i);
            }

            Console.ReadLine();
        }

    }
    class Students {
        public int Id { get; set; }
        public string Name { get; set; }

    }
    class StudentComparer : IEqualityComparer<Students> {
        public bool Equals(Students? x, Students? y) {
            return x.Id.Equals(y.Id) && x.Name.Equals(y.Name);
        }

        public int GetHashCode([DisallowNull] Students obj) {
            int idHashCode = obj.Id.GetHashCode();
            int nameHashCode = obj.Name.GetHashCode();

            return idHashCode ^ nameHashCode;
        }
    }
}
```  
this will give reference of those 2 mutual object instances  

4. Example of `Union()`:  
(All values from both datasources & remove duplicates)  
Return all the elements that appear in either of two data sources. (Combines both sets and removes duplicates.)  
it has 2 overload methods.  
Union can be used with comparer also  
`Normal Example`  
```C#
            List<string> datasource1 = new List<string>() { "A", "B", "C", "D" };
            List<string> datasource2 = new List<string>() { "C", "D", "E", "F" };

            Console.WriteLine("using query syntax");
            var qs = (from s1 in datasource1 select s1).
                    Union(datasource2).ToList();
            foreach (var i in qs) { Console.WriteLine(i); }


            Console.WriteLine("\nusing method syntax");
            var ms = datasource1.Union(datasource2).ToList();
            foreach (var i in ms) { Console.WriteLine(i); }
```  
#### output:
```terminal
A
B
C
D
E
F
```  
`2nd with objects (entire object, using anonymouse method)`:  
```C#
using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;

namespace LinqProjectionDemo {
    class Program {
        static void Main(string[] args) {

            List<Students> stud1 = new List<Students>() {
                new Students() { Id = 1, Name = "John"},
                new Students() { Id = 2, Name = "Kim"},
                new Students() { Id = 3, Name = "Susan"},
                new Students() { Id = 4, Name = "Eric"},
            };
            List<Students> stud2 = new List<Students>() {
                new Students() { Id = 1, Name = "John"},
                new Students() { Id = 2, Name = "Kim"},
                new Students() { Id = 5, Name = "Tim"},
                new Students() { Id = 6, Name = "Eddie"},
            };

            var ms = stud1.Select(s1 => new { s1.Id, s1.Name }).Union(stud2.Select(s2 => new { s2.Id, s2.Name })).ToList();
            foreach (var i in ms) {
                Console.WriteLine(i);
            }

        }

    }
    class Students {
        public int Id { get; set; }
        public string Name { get; set; }

    }
}
```  
#### output:
```terminal  
{ Id = 1, Name = John }
{ Id = 2, Name = Kim }
{ Id = 3, Name = Susan }
{ Id = 4, Name = Eric }
{ Id = 5, Name = Tim }
{ Id = 6, Name = Eddie }
```  

`3rd with objects (entire object, using comparer)`: 
```C#
using System.Diagnostics.CodeAnalysis;

namespace LinqProjectionDemo {
    class Program {
        static void Main(string[] args) {

            List<Students> stud1 = new List<Students>() {
                new Students() { Id = 1, Name = "John"},
                new Students() { Id = 2, Name = "Kim"},
                new Students() { Id = 3, Name = "Susan"},
                new Students() { Id = 4, Name = "Eric"},
            };
            List<Students> stud2 = new List<Students>() {
                new Students() { Id = 1, Name = "John"},
                new Students() { Id = 2, Name = "Kim"},
                new Students() { Id = 5, Name = "Tim"},
                new Students() { Id = 6, Name = "Eddie"},
            };

            var ms = stud1.Union(stud2, new StudentComparer()).ToList();
            foreach (var i in ms) {
                Console.WriteLine(i);
            }

            Console.ReadLine();
        }

    }
    class Students {
        public int Id { get; set; }
        public string Name { get; set; }

    }
    class StudentComparer : IEqualityComparer<Students> {
        public bool Equals(Students? x, Students? y) {
            return x.Id.Equals(y.Id) && x.Name.Equals(y.Name);
        }

        public int GetHashCode([DisallowNull] Students obj) {
            int idHashCode = obj.Id.GetHashCode();
            int nameHashCode = obj.Name.GetHashCode();

            return idHashCode ^ nameHashCode;
        }
    }
}
```  
it will give 6 entries, which is mutual & without duplicate values