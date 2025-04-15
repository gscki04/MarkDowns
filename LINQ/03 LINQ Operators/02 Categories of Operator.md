Types of Operators:  
- Sorting Data
- Set Operations
- Filtering Data
- Quantifier Operations
- Projection Operations
- Partitioning Data
- Grouping Data
- Equality Operations
- Element Operations
- Converting Data Types
- Concatenation Operations
- Aggregation Operations
- Generation Operations
- join Operations  

A. Projection Operators:  
1. `Select()`: a simple select operator  
2. `SelectMany()`: a nested select operator  

B. Filtering Operator:
1. `where()`: Conditional filter
2. `OfType<T>()`: type check filter
3. `TakeWhile()`: pre condition values filter
4. `SkipWhile()`: post condition values filter

C. Sorting Operators:  
`OrderBy()`: Sorts elements in ascending order  
`OrderByDescending()`: Sorts elements in descending order  
`ThenBy()`: Secondary sort in ascending order  
`ThenByDescending()`: Secondary sort in descending order  
`Reverse()`: Reverses the current order of a sequence  

D. Quantifier Operators  
`All()`: to check condition on all elements  
`Any()`: to check condition on atleast one element   
`Contains()`: check whether data source contains a specified element  

E. Set Operators  
`Distinct()`: Removes duplicate values from data source.(Works on the single data source to eliminate repeats.)  
`Expect()`: Return all the elements from one data source that do not exists in second data source (Like a `LEFT JOIN` minus matches.)  
`Intersect()`: Return all the elements which exists in both of the data source. (Like `INNER JOIN`).  
`Union()`: Return all the elements that appear in either of two data sources. (Combines both sets and removes duplicates, `FULL OUTER JOIN`.)  

F. Partitioning Operators  
`Take()`: Returns a specified number of elements from the start of the sequence. (pre-condition records)  
`TakeWhile()`: Returns elements from the sequence as long as the condition is true. Stops when it encounters the first element that fails the condition.  
`Skip()`: Skips the specified number of elements from the start of the sequence and returns the remaining elements.  
`SkipWhile()`: Skips elements as long as the condition is true, then returns the rest of the sequence. (Post-Condition records)    