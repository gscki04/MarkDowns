`Quantifier` operation are used on data source to check if some or all elements of that data source satisfy a condition or not.  
All the methods in quantifier operation returns a `Boolean` value.  
Condition may be for some or all the elements.  

usecase example:  
- we need to check whether all the students of a class are present or not.  
- in class of students we need to check if any student has number more than 80%.  
- we need to check if a class of students has any student with name Bob.  
- Etc.  
`All()`: to check condition on all elements  
`Any()`: to check condition on all elements or atleast one element   
`Contains()`: check whether data source contains a specified element  

1. Example of `All()`  
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
1. Example of `Contains()`  