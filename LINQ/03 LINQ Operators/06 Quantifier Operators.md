`Quantifier` operation are used on data source to check if some or all elements of that data source satisfy a condition or not.  
All the methods in quantifier operation returns a `Boolean` value.  
Condition may be for some or all the elements.  

usecase example:  
- we need to check whether all the students of a class are present or not.  
- in class of students we need to check if any student has number more than 80%.  
- we need to check if a class of students has any student with name Bob.  
- Etc.  

Metthods:  
`All()`: to check condition on all elements  
`Any()`: to check condition on atleast one element   
`Contains()`: check whether data source contains a specified element  

1. Example of `All()`  
to check condition on all elements  
```C#
using System;
using System.Collections.Generic;
using System.Linq;

namespace LinqProjectionDemo {
    class Program {
        static void Main(string[] args) {

            var studs = new List<Student>() { 
            new Student(){ Name="Ganesh", Marks=69},
            new Student(){ Name="Gorav", Marks=75},
            new Student(){ Name="Vorag", Marks=79},
            };

            Console.WriteLine("using query syntax");
            var qs = (from s in studs
                     select s).All(s => s.Marks > 60);
            Console.WriteLine(qs);

            Console.WriteLine("using method syntax");
            var ms = studs.All(s => s.Marks > 60);
            Console.WriteLine(ms);

            //Console.ReadLine();
        }

        class Student {
            public string Name { get; set; }
            public int Marks { get; set; }
        }

    }
}
```  
#### output:
```terminal
using query syntax
True
using method syntax
True
```  
it returns true because all marks are greater than 60.  


2. Example of `Any()`  
to check condition on atleast one element  
```C#
            List<int> numbers = new List<int>();
            var isAvailable = numbers.Any();
            Console.WriteLine(isAvailable);
```  
#### output:
```terminal
False
```  
```C#
            List<int> numbers = new List<int>() { 1,2,3,4,5};
            var isAvailable = numbers.Any();
            Console.WriteLine(isAvailable);
```  
#### output:
```terminal
True
```  
```C#
            if(numbers.Count() > 0) { }
            if (numbers.Any()) { }
            // Both are same
```  
```C#
List<int> numbers = new List<int>() { 1, 2, 3, 4, 5 };
bool hasEven = numbers.Any(n => n % 2 == 0);
Console.WriteLine(hasEven); 
```  
#### output:
```terminal
True
```  
```C#
List<int> numbers = new List<int>() { 1, 3, 5, 7, 9 };
bool hasEven = numbers.Any(n => n % 2 == 0);
Console.WriteLine(hasEven); 
```  
#### output:
```terminal
False
```  
#### More helpful to understand  
```C#
using System;
using System.Collections.Generic;
using System.Linq;

namespace LinqProjectionDemo {
    class Program {
        static void Main(string[] args) {

            Student[] studs = {
                new Student { Name = "Kim", Marks = 95 },
                new Student { Name = "John", Marks = 87 },
                new Student { Name = "Lee", Marks = 75 },
            };

            Console.WriteLine("using query method");
            var qs = (from s in studs
                     select s).Any(x => x.Marks >90);
            Console.WriteLine(qs);

            Console.WriteLine("\nusing method syntax");
            var ms = studs.Any(x => x.Marks > 90);
            Console.WriteLine(ms);

            //Console.ReadLine();
        }

        class Student {
            public string Name { get; set; }
            public int Marks { get; set; }
        }

    }
}
``` 
#### output:
```terminal
using query method
True

using method syntax
True
```  
because alteast one entry is greater than 90. 
3. Example of `Contains()`  
check whether data source contains a specified element  
```C#

            List<string> students = new List<string>() { "ganesh", "sagar", "pankaj", "ajay"};

            Console.WriteLine("using query syntax");
            var qs = (from s in students
                      select s).Contains("ganesh");
            Console.WriteLine(qs);

            Console.WriteLine("\nusing method syntax");
            var isExists = students.Contains("ganesh");
            Console.WriteLine(isExists);
```  
#### output:
```terminal
True
```  
Reference Checking  
```C#
using System;
using System.Collections.Generic;
using System.Linq;

namespace LinqProjectionDemo {
    class Program {
        static void Main(string[] args) {

            List<Student> students = new List<Student>() { 
            new Student(){ Id=1, Name = "Ganesh"},
            new Student(){ Id=2, Name = "Ramesh"},
            new Student(){ Id=3, Name = "Suresh"},
            };

            Console.WriteLine("\nusing method syntax");
            var ms = students.Contains(new Student() { Id = 1, Name = "Ganesh" });
            Console.WriteLine(ms);
        }

    }

    class Student {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
```  
#### output:
```terminal
using method syntax
False
```  
this gives us false even if value is head to toe same, but still those are different objects in memory with different addresses. it is checking reference & not values  
#### sneaky way to bypass this:  
```C#
using System;
using System.Collections.Generic;
using System.Linq;

namespace LinqProjectionDemo {
    class Program {
        static void Main(string[] args) {

            List<Student> students = new List<Student>() { 
            new Student(){ Id=1, Name = "Ganesh"},
            new Student(){ Id=2, Name = "Ramesh"},
            new Student(){ Id=3, Name = "Suresh"},
            };

            Console.WriteLine("\nusing method syntax");
            var std = new Student() { Id = 1, Name = "Ganesh" };
            students.Add(std);
            var ms = students.Contains(std);
            Console.WriteLine(ms);
        }

    }

    class Student {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
```  
this will do the work but ideal way is.  
```C#
using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;

namespace LinqProjectionDemo {
    class Program {
        static void Main(string[] args) {

            List<Student> students = new List<Student>() { 
            new Student(){ Id=1, Name = "Ganesh"},
            new Student(){ Id=2, Name = "Ramesh"},
            new Student(){ Id=3, Name = "Suresh"},
            };
            var comparer = new StudentComparer();

            Console.WriteLine("using query method");
            var qs = (from s in students
                      select s).Contains(new Student() { Id = 1, Name = "Ganesh" }, comparer);
            Console.WriteLine(qs);

            Console.WriteLine("\nusing method syntax");
            var ms = students.Contains(new Student() { Id = 1, Name = "Ganesh" }, comparer);
            Console.WriteLine(ms);
        }

    }

    class Student {
        public int Id { get; set; }
        public string Name { get; set; }
    }
    class StudentComparer : IEqualityComparer<Student> {
        public bool Equals(Student? x, Student? y) {
            if (object.ReferenceEquals(x, y)) {
                return true;
            }
            if (object.ReferenceEquals(x, null) || object.ReferenceEquals(null, y)) {
                return false;
            }

            return x.Id == y.Id && x.Name == y.Name;
        }

        public int GetHashCode([DisallowNull] Student obj) {
            if(obj == null || Object.ReferenceEquals(obj, null)) {
                return 0;
            }

            int idHashCode = obj.Id.GetHashCode();
            int nameHashCode = obj.Name == null ? 0 : obj.Name.GetHashCode();

            return idHashCode ^ nameHashCode;
        }
    }
}
```  
#### output:
```terminal
using method syntax
True
```  