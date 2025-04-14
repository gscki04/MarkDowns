# Linq Operators  
LINQ operators are non other than methods, same method we use in methods syntax to narrow down the output  
Example:  
```C#
List<int> nums = new List<int> { 1, 2, 3, 4, 5, 6 };

var result = nums.Where(n => n > 3)     // filter
                 .Select(n => n * 10);  // transform

foreach (var r in result)
    Console.WriteLine(r);
```  
like here `where()` & `Select()`  

