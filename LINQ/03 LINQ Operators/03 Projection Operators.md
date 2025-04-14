`Projection` is used to select or transform data from a data source into a new form. This typically creates a copy or a shaped version of the original data, leaving the original untouched and safe.  
Projection Methods:  
`Select()`: Project/transform each item into a new form
`SelectMany()`:	Flatten collections and project their items
Example:
### `Select()`:  
```C#
using System;

namespace MyApp {
    internal class Program {
        static void Main(string[] args) {

            List<Employee> employees = new List<Employee> {
    new Employee { Id = 1, Name = "Ramesh", Salary = 50000 },
    new Employee { Id = 2, Name = "Suresh", Salary = 60000 }
};

            var projected = employees.Select(e => new {
                e.Name,
                MonthlySalary = e.Salary / 12
            });

            foreach (var e in projected) {
                Console.WriteLine($"{e.Name}: {e.MonthlySalary}");
            }

        }
    }

    class Employee {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Salary { get; set; }
    }
} 
```  
#### output:
```terminal
Ramesh: 4166
Suresh: 5000
```  
This projection:
- Selects only Name and Salary
- Transforms salary into monthly
- Keeps employees list untouched  


### `SelectMany()`:  
```C#
using System;
using System.Collections.Generic;
using System.Linq;

namespace LinqProjectionDemo {
    class Program {
        static void Main(string[] args) {

            List<Customer> customers = new List<Customer> {
                new Customer { Name = "Alice", Orders = new List<string> { "Book", "Pen" } },
                new Customer { Name = "Bob", Orders = new List<string> { "Notebook", "Pencil" } }
            };

            Console.WriteLine("Using Select:");
            var selectResult = customers.Select(c => c.Orders);

            foreach (var orderList in selectResult) {
                foreach (var order in orderList) {
                    Console.WriteLine(order);
                }
            }

            Console.WriteLine("\nUsing SelectMany:");
            var selectManyResult = customers.SelectMany(c => c.Orders);

            foreach (var order in selectManyResult) {
                Console.WriteLine(order);
            }

            Console.ReadLine();
        }
    }

    class Customer {
        public string Name { get; set; }
        public List<string> Orders { get; set; }
    }
}
```
#### output:
```terminal
Using Select:
Book
Pen
Notebook
Pencil

Using SelectMany:
Book
Pen
Notebook
Pencil
```    
`Select()`: keeps the nesting — it returns a collection of collections.
`SelectMany()`: flattens the nested structure into one single collection.

if we perform `SelectMany()` on plain string collection like `{ "Ganesh", "Gorav"}`  
```C#
            List<string> strList = new List<string>() { "Ganesh", "Gorav" };

            var nestedResult = strList.SelectMany(p => p).ToList();

            foreach(var item in nestedResult) {
                Console.WriteLine(item);
            }
```  
it will give us result like.
#### output:
```terminal
G
a
n
e
s
h
G
o
r
a
v
```  
same method syntax in query syntax:  
```C#
            List<string> strList = new List<string>() { "Ganesh", "Gorav" };

            var nestedResult = from entry in strList
                               from character in entry
                               select character;

            foreach(var item in nestedResult) {
                Console.WriteLine(item);
            }
```  