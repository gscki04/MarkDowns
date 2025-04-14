now we have created the controller, we need to inject the DbContext inside our controller  
we have DbContext (Bridge between Code & Database) inside our main `Program.cs` file  
now lets use it in controller  

### 1. create constructor function inside a controller  
snippet shortcut(visual studio 2022) is ctor  
```C#
        public EmployeesController() {
            
        }
```  
pass application-database-context & variable as a parameter.  
after variable `ctrl` + `.` ----> create and assign field & hit enter.  
it will create private & readonly variable for you. 
this `private field` or `variable` we will be going for all API operations  
```C#
        private readonly ApplicationDbContext dbContext;

        public EmployeesController(ApplicationDbContext dbContext) {
            this.dbContext = dbContext;
        }
```  
