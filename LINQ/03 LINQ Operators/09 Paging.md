`Paging` is a process of dividing n number of records into multiple pages. At one-page only certain number of records are visible. And next records set can ve visible with next button. we can navigate though pages with previous, next, scroll or using some other techniques.  

## `Benefits`:  
- Fast data travel (less data weight faster travel)  
- Improve memory management  
- Easy to read & focus  

## `Drawback`:  
in client server structure it increases number of request sent to server  


`Formulae`:  
in LINQ to implement Paging we can use `skip` and `take` operator.  
total pages = tp.  
number of entries per page = epp.  
for index = skip(index * epp) take(epp)  
for pages = skip((pageNumber -1) * epp) take(epp)  

```C#
using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;

namespace LinqProjectionDemo {
    class Program {
        static void Main(string[] args) {

            int totalEntryPerPage = 4;
            do {
                Console.Write("Enter Your Page Number: ");

                if (int.TryParse(Console.ReadLine(), out int pageNumber)) {
                    var ms = GetEmployees().Skip((pageNumber - 1) * totalEntryPerPage).Take(totalEntryPerPage);
                    foreach (var item in ms) {
                        Console.WriteLine($"{item.Id}: {item.Name}");
                    }
                        Console.WriteLine();

                } else {
                        Console.WriteLine("Enter a valid number");
                        Console.WriteLine();
                }
            } while (true);

            Console.ReadLine();
        }

        public static List<Employee> GetEmployees() {

            return new List<Employee>() {
                new Employee() {Id = 1, Name = "John Cena"},
                new Employee() {Id = 2, Name = "The Rock"},
                new Employee() {Id = 3, Name = "Steve Rogers"},
                new Employee() {Id = 4, Name = "Tony Stark"},
                new Employee() {Id = 5, Name = "Bruce Wayne"},
                new Employee() {Id = 6, Name = "Clark Kent"},
                new Employee() {Id = 7, Name = "Natasha Romanoff"},
                new Employee() {Id = 8, Name = "Peter Parker"},
                new Employee() {Id = 9, Name = "Wanda Maximoff"},
                new Employee() {Id = 10, Name = "Thor Odinson"},
                new Employee() {Id = 11, Name = "Loki Laufeyson"},
                new Employee() {Id = 12, Name = "Diana Prince"},
                new Employee() {Id = 13, Name = "Barry Allen"},
                new Employee() {Id = 14, Name = "Hal Jordan"},
                new Employee() {Id = 15, Name = "Arthur Curry"},
                new Employee() {Id = 16, Name = "Bruce Banner"},
                new Employee() {Id = 17, Name = "Scott Lang"},
                new Employee() {Id = 18, Name = "T'Challa"},
                new Employee() {Id = 19, Name = "Nick Fury"},
                new Employee() {Id = 20, Name = "Stephen Strange"}
            };
        }

    }

    class Employee {
        public int Id { get; set; }
        public string Name { get; set; }
    }
    


}
```  
#### output:
```terminal
Enter Your Page Number: something
Enter a valid number

Enter Your Page Number: 1
1: John Cena
2: The Rock
3: Steve Rogers
4: Tony Stark

Enter Your Page Number: 5
17: Scott Lang
18: T'Challa
19: Nick Fury
20: Stephen Strange

Enter Your Page Number:
```  