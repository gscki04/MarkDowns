`Filtering` is the process to get only those elements from a data source who satisfy a specofied conditions.  
we can write one or more condition base on requiredment. like  
- student having number greater than 80 from a certain batch.
- Employees having salary less than 50k.
- List of students having attendance more tha 90% and marks more than 95%.  


## **LINQ Filtering Operators**

| Operator        | Description                                                                 |
|-----------------|-----------------------------------------------------------------------------|
| `Where()`       | Filters a sequence based on a **predicate (condition)**                     |
| `OfType<T>()`   | Filters elements based on **type** (useful with non-generic collections)    |
| `TakeWhile()`   | Returns elements **from the start** of a sequence **as long as** the condition is true |
| `SkipWhile()`   | Skips elements **from the start** **until** the condition becomes false     |

---

### Examples

#### 1. `Where()`
```csharp
var highScorers = students.Where(s => s.Marks > 80);
```

#### 2. `OfType<T>()`
```csharp
ArrayList mixed = new ArrayList { 1, "hello", 2, "world" };
var stringsOnly = mixed.OfType<string>();
```

#### 3. `TakeWhile()`
```csharp
var untilFail = scores.TakeWhile(score => score >= 40);  // Stops at first failing mark
```

#### 4. `SkipWhile()`
```csharp
var afterFail = scores.SkipWhile(score => score >= 40);  // Skips until first failing mark
```

---

### You can **combine** filtering operators with projection, sorting, and more. For example:

```csharp
var result = students
    .Where(s => s.Marks > 80)
    .OrderByDescending(s => s.Marks)
    .Select(s => new { s.Name, s.Marks });
```

# Example  
## 🧾 Sample Class

```csharp
class Student {
    public string Name { get; set; }
    public int Marks { get; set; }
}
```

And a list of students to work with:

```csharp
List<Student> students = new List<Student> {
    new Student { Name = "Amit", Marks = 95 },
    new Student { Name = "Priya", Marks = 88 },
    new Student { Name = "Rahul", Marks = 45 },
    new Student { Name = "Sneha", Marks = 78 },
    new Student { Name = "Kiran", Marks = 33 }
};
```

---

## 🔹 1. `Where()` – Basic Filtering

```csharp
var topStudents = students.Where(s => s.Marks > 80);

foreach (var s in topStudents)
    Console.WriteLine($"{s.Name} - {s.Marks}");
```

📤 **Output**:
```
Amit - 95  
Priya - 88
```

---

## 🔹 2. `OfType<T>()` – Filter by Type

```csharp
ArrayList mixed = new ArrayList { 1, "hello", 2.5, "world", 3 };

var onlyStrings = mixed.OfType<string>();

foreach (var str in onlyStrings)
    Console.WriteLine(str);
```

📤 **Output**:
```
hello  
world
```

---

## 🔹 3. `TakeWhile()` – Take Until Condition Fails

```csharp
List<int> scores = new List<int> { 90, 85, 80, 50, 30, 60, 20, 90, 87 };

var passedUntilFail = scores.TakeWhile(score => score >= 60);

foreach (var s in passedUntilFail)
    Console.WriteLine(s);
```

📤 **Output**:
```
90  
85  
80
```

> Stops at first score < 60 (50), doesn't include it or anything after.

---

## 🔹 4. `SkipWhile()` – Skip Until Condition Fails

```csharp
var failedThenRest = scores.SkipWhile(score => score >= 60);

foreach (var s in failedThenRest)
    Console.WriteLine(s);
```

📤 **Output**:
```
50  
30  
60
20
90
87
```

> Skips all values ≥ 60, includes everything from first failure (50) onward.

---

## ✅ Wrap-up:

| Operator     | Use Case                            |
|--------------|-------------------------------------|
| `Where()`     | General-purpose filtering by condition |
| `OfType<T>()` | Filter elements of a specific type     |
| `TakeWhile()` | Take from start while condition is true |
| `SkipWhile()` | Skip from start while condition is true |
