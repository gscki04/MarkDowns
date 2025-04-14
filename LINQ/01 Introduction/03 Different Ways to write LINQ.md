## What you need to write a `LINQ` query?  
1. Data Source  
2. Query  
3. Execution  
## What is a Query?  
A query is set of instruction which is applied on a data source to perform an action (CRUD) and tells the shape of output from that query  
- Each query is combination of 3 things  
1. Initialization – define where data is from
2. Condition – apply filter (where, select, etc.)
3. Selection – shape what comes out (entire object, specific fields, transformed data)
## Different ways to write a LINQ query.  
- Three different Ways to write a Query  
1. Query Syntax
2. Method Syntax
3. Hybrid from both (Query + Method)

### `Query Syntax`  
syntax:  
```c#
from object in datasource
where condition
select object
```  
Example:
```C#
using System;

namespace MyApp {
    internal class Program {
        static void Main(string[] args) {

            List<int> nums = new List<int> { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };

            var querySyntax = from obj in nums
                              where obj > 5
                              select obj;

            foreach (var item in querySyntax) {
                Console.WriteLine(item);
            }

            Console.ReadLine();

        }
    }
}
```  
#### output:
```terminal
6
7
8
9
```  
### `Method Syntax`  
Lambada expressions to define any condition.  
Easy for simple query,  
Hard for complex query. 
this way is basically chaining of methods using dot notation (.).  
syntax:  
```c#
DataSource.ConditionMethod().SelectionMethod()
```  
Method syntax are shorter comparing to Query  
Example:  
```C#
using System;

namespace MyApp {
    internal class Program {
        static void Main(string[] args) {

            List<int> nums = new List<int> { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };

            var methodSyntax = nums.Where(obj => obj > 5);

            foreach(var items in methodSyntax) {
                Console.WriteLine(items);
            }

            Console.ReadLine();

        }
    }
}
```  
#### output:
```terminal
6
7
8
9
```  
### `Hybrid Syntax`  
the combination of both, Query + Method syntax.  
syntax:  
```c#
(from object in datasource
where condition
select object).Method()
```  
Example:  
```C#
using System;

namespace MyApp {
    internal class Program {
        static void Main(string[] args) {

            List<int> nums = new List<int> { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };

            var hybridSyntax = (from obj in nums
                                select obj).Max();
            Console.WriteLine("Maximum Value: " + hybridSyntax);

            Console.ReadLine();

        }
    }
}
```  
#### output:
```terminal
Maximum Value: 9
```  
