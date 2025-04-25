Sure! Here's a comprehensive table showing different ways to declare arrays in various programming languages, covering both common and less-common syntaxes:

| **Language**   | **Array Declaration Syntax**                                                | **Notes**                                                                                         |
|----------------|----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|
| **JavaScript** | `let arr = [1, 2, 3];`                                                     | Literal notation.                                                                                 |
|                | `let arr = new Array(3);`                                                   | Creates an array of length 3 with empty slots.                                                     |
|                | `let arr = new Array(1, 2, 3);`                                             | Array with values.                                                                                 |
|                | `let arr = Array.of(1, 2, 3);`                                              | Creates an array with the given values.                                                            |
| **Python**     | `arr = [1, 2, 3]`                                                          | List literal.                                                                                     |
|                | `arr = list([1, 2, 3])`                                                    | Using the `list` constructor.                                                                      |
|                | `arr = [None] * 3`                                                         | Creates a list with 3 `None` elements.                                                             |
| **C**          | `int arr[3] = {1, 2, 3};`                                                  | Static array declaration.                                                                          |
|                | `int* arr = (int*)malloc(sizeof(int) * 3);`                                 | Dynamic allocation using `malloc` (for pointers).                                                   |
|                | `int arr[] = {1, 2, 3};`                                                   | Implicit size deduction from initializer.                                                          |
| **C++**        | `int arr[3] = {1, 2, 3};`                                                  | Static array declaration.                                                                          |
|                | `int* arr = new int[3];`                                                   | Dynamic allocation using `new`.                                                                     |
|                | `std::vector<int> arr = {1, 2, 3};`                                        | Using the `std::vector` class (dynamic array).                                                     |
| **Java**       | `int[] arr = {1, 2, 3};`                                                   | Array literal notation.                                                                             |
|                | `int[] arr = new int[3];`                                                  | Array declaration with fixed size.                                                                  |
|                | `int[] arr = new int[] {1, 2, 3};`                                         | Combined declaration and initialization.                                                            |
| **C#**         | `int[] arr = new int[] {1, 2, 3};`                                         | Array literal notation with new keyword.                                                            |
|                | `int[] arr = new int[3];`                                                  | Fixed size array declaration.                                                                      |
|                | `int[] arr = {1, 2, 3};`                                                   | Implicit array declaration (only works within methods).                                            |
|                | `ArrayList<int> arr = new ArrayList<int>();`                               | Using `ArrayList` for dynamic arrays.                                                               |
| **Ruby**       | `arr = [1, 2, 3]`                                                          | Array literal notation.                                                                             |
|                | `arr = Array.new(3, 0)`                                                    | Creates an array with 3 elements, initialized with `0`.                                             |
| **PHP**        | `$arr = array(1, 2, 3);`                                                   | Array declaration using `array()` (before PHP 5.4).                                                 |
|                | `$arr = [1, 2, 3];`                                                        | Short array syntax (PHP 5.4 and above).                                                            |
| **Swift**      | `var arr: [Int] = [1, 2, 3]`                                               | Array declaration with type annotation.                                                            |
|                | `var arr = Array(1...3)`                                                   | Using range and converting to array.                                                                |
| **Go**         | `arr := []int{1, 2, 3}`                                                    | Array literal notation with type inference.                                                         |
|                | `var arr [3]int = [3]int{1, 2, 3}`                                         | Explicit size and type declaration.                                                                |
| **Rust**       | `let arr = [1, 2, 3];`                                                     | Array literal notation.                                                                             |
|                | `let arr: [i32; 3] = [1, 2, 3];`                                           | Array with explicit size and type.                                                                  |
| **Kotlin**     | `val arr = arrayOf(1, 2, 3)`                                               | Array creation using `arrayOf`.                                                                     |
|                | `val arr = Array(3) { i -> i * 2 }`                                        | Array with a lambda initializer.                                                                   |
| **TypeScript** | `let arr: number[] = [1, 2, 3];`                                           | Type annotation with array literal.                                                                |
|                | `let arr: Array<number> = [1, 2, 3];`                                      | Using `Array<T>` syntax.                                                                            |
| **Objective-C**| `NSArray *arr = @[@1, @2, @3];`                                            | Array literal syntax with `@` for objects.                                                          |
| **Perl**       | `my @arr = (1, 2, 3);`                                                     | Array literal notation.                                                                             |
|                | `my @arr = qw(1 2 3);`                                                     | Using `qw` operator for quick word arrays.                                                          |
| **Shell (Bash)**| `arr=(1 2 3)`                                                             | Array literal notation.                                                                             |
|                | `arr=([1, 2, 3])`                                                          | Another variation, especially in `zsh` (arrays).                                                   |
| **Lua**        | `arr = {1, 2, 3}`                                                          | Table (array) literal.                                                                              |
|                | `arr = {} -- Empty table, used as array`                                    | Empty array/table creation.                                                                         |
| **Haskell**    | `arr = [1, 2, 3]`                                                         | List literal (Haskell arrays are immutable lists).                                                 |
|                | `arr = take 3 [1..]`                                                      | Infinite list, taking first `n` elements.                                                           |
| **Scala**      | `val arr = Array(1, 2, 3)`                                                 | Array creation using `Array()` constructor.                                                         |
|                | `val arr = new Array `                                              | Declaring an array of a specified size.                                                            |
| **MATLAB**     | `arr = [1, 2, 3]`                                                         | Array literal notation.                                                                             |
|                | `arr = zeros(1, 3)`                                                       | Creating an array of zeros.                                                                         |
| **Visual Basic**| `Dim arr(3) As Integer`                                                  | Static array declaration.                                                                           |
|                | `Dim arr As Integer() = {1, 2, 3}`                                         | Declaring and initializing an array.                                                                |

---

### **Key Points**:
- **Literal notation** (e.g., `[1, 2, 3]`) is common in many modern languages.
- Some languages (like C, C++) use **explicit sizes** for arrays, especially for static arrays.
- **Dynamic arrays** (e.g., `std::vector` in C++, `ArrayList` in C#, `list` in Python) are used when size can change dynamically.
- Some languages (e.g., JavaScript, Ruby, Python) allow **sparse arrays** with `undefined` or `None` as values.