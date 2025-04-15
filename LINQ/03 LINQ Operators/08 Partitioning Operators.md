`Partitioning` operations are used to divide data source into two parts (Based on condition) and return one of them as output wihtout changing element positions.  

usecase examples:  
- Select top n numbers of records from datasource.  
- Select records from a data-source until a specified condition is true. (pre-condition records)  
- Skip records from a datasource until a specified condition is true and select rest all records. (post-condition records)  
- Select all records except first n numbers of records.  
- Can be used to implement pagination for datasource.  

Methods:  
`Take()`: Returns a specified number of elements from the start of the sequence. (pre-condition records)  
`TakeWhile()`: Returns elements from the sequence as long as the condition is true. Stops when it encounters the first element that fails the condition.  
`Skip()`: Skips the specified number of elements from the start of the sequence and returns the remaining elements.  
`SkipWhile()`: Skips elements as long as the condition is true, then returns the rest of the sequence. (Post-Condition records)  

1. Example of `Take()`:  
(pre-condition records)  
`Take` Operator is used to get first `n` numbers of records from a datasource.  
Where `n` is an integer which is passed in `Take(n)` method.  
Take method will not make any changes in element position.  
`Normal Example`  
```C#
            int[] numbers = new int[] { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };

            Console.WriteLine("using query syntax");
            var qs = (from n in numbers select n).Take(5).ToList();
            foreach (var i in qs) { Console.WriteLine(i); }

            Console.WriteLine("\nusing method syntax");
            var ms = numbers.Take(5).ToList();
            foreach (var i in ms) { Console.WriteLine(i); }
```  
#### output:
```terminal
0
1
2
3
4
```  
`2nd example: combining condition`:    
```C#
            int[] numbers = new int[] { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };

            Console.WriteLine("using query syntax");
            var qs = (from n in numbers select n).Take(5).Where(x => x > 2).ToList();
            foreach (var i in qs) { Console.WriteLine(i); }

            Console.WriteLine("\nusing method syntax");
            var ms = numbers.Take(5).Where(x => x > 2).ToList();
            foreach (var i in ms) { Console.WriteLine(i); }
```  
#### output:
```
3
4
```  
2. Example of `TakeWhile()`:  
`TakeWhle` operator is used to get all records from a data source until a specified condition is true.  
Once the condition is failed TakeWhile will not validate rest elements even if the condition is true for remaining elements.  
TakeWhile method will not make any changes in element position.  
`Integer Example`  
```C#
            int[] numbers = new int[] { 1, 1, 2, 2, 3, 3, 2, 2, 1, 1 };

            Console.WriteLine("using query syntax");
            var qs = (from n in numbers select n).TakeWhile(x => x <= 2).ToList();
            foreach (var i in qs) { Console.WriteLine(i); }

            Console.WriteLine("\nusing method syntax");
            var ms = numbers.TakeWhile(x => x <= 2).ToList();
            foreach (var i in ms) { Console.WriteLine(i); }
```  
#### output:
```terminal
1
1
2
2
```  
`String Example`  
```C#
            string[] names = new string[] { "Kim", "John", "Mark", "Ada", "Nitish" };

            Console.WriteLine("using query syntax");
            var qs = (from n in names select n).TakeWhile((name, index) => name.Length > index).ToList();
            foreach (var i in qs) { Console.WriteLine(i); }

            Console.WriteLine("\nusing method syntax");
            var ms = names.TakeWhile((name, index)=> name.Length > index).ToList();
            foreach (var i in ms) { Console.WriteLine(i); }
```  
#### output:
```terminal
Kim
John
Mark
```  

3. Example of `Skip()`:  
(Post-Condition records)  
`Skip` operator is used to skip first `n` number of records from a datasource and select remaining elements as an output. where `n` is an integer which is passed in `Skip(n)` method  
Skip method will not make any changes in element position.  
`Integer Example`  
```C#
            List<int> numbers = new List<int>() { 1, 2, 3, 4, 5, 5, 4, 3, 2, 1 };

            Console.WriteLine("using query syntax");
            var qs = (from n in numbers select n).Skip(3).ToList();
            foreach (var i in qs) { Console.WriteLine(i); }

            Console.WriteLine("\nusing method syntax");
            var ms = numbers.Skip(3).ToList();
            foreach (var i in ms) { Console.WriteLine(i); }
```  
#### output:
```terminal
4
5
5
4
3
2
1
```  
`String Example`  
```C#
            List<String> names = new List<String>() { "Kim", "John", "Mark", "Ada", "Nitish" };

            Console.WriteLine("using query syntax");
            var qs = (from n in names select n).Skip(2).ToList();
            foreach (var i in qs) { Console.WriteLine(i); }

            Console.WriteLine("\nusing method syntax");
            var ms = names.Skip(2).ToList();
            foreach (var i in ms) { Console.WriteLine(i); }
```  
#### output:
```terminal
Mark
Ada
Nitish
```  
4. Example of `SkipWhile()`:  
`SkipWhile` operator is used to skip all records form a data source until a condition is true and select remaining elements as an output.  
SkipWhile method will not make any changes in element position.  
`Integer Example`  
```C#
            List<int> numbers = new List<int>() { 1, 2, 3, 4, 5, 5, 4, 3, 2, 1 };

            Console.WriteLine("using query syntax");
            var qs = (from n in numbers select n).SkipWhile(x => x < 5).ToList();
            foreach (var i in qs) { Console.WriteLine(i); }

            Console.WriteLine("\nusing method syntax");
            var ms = numbers.SkipWhile(x=> x < 5).ToList();
            foreach (var i in ms) { Console.WriteLine(i); }
```  
#### output:
```terminal
5
5
4
3
2
1
```  
`String Example`  
```C#
            List<String> names = new List<String>() { "Kim", "John", "Markus", "Ada", "Nill" };


            Console.WriteLine("using query syntax");
            var qs = (from n in names select n).SkipWhile(x => x.Length < 5).ToList();
            foreach (var i in qs) { Console.WriteLine(i); }

            Console.WriteLine("\nusing method syntax");
            var ms = names.SkipWhile(x=> x.Length < 5).ToList();
            foreach (var i in ms) { Console.WriteLine(i); }
```  
#### output:
```terminal
Markus
Ada
Nill
```  