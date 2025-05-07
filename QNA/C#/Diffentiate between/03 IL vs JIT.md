### IL: Intermediate Language Code  

### JIT: Just In Time Compiler  

C# execution happens in two steps first it get converted to IL code that is not specific to any operating system or hardware. then it handed over to JIT which converts that agnostic code into OS dependant Code.  

### CLR: 
CLR converts IL code into Native machine langauage by invoking JIT.  
CLR cleans any unused objects by using Garbage collector.  