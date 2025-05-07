### DotNet framework:
1. old classic only works for windows
2. poor performance, because it has unified Dlls which contains smaller Dlls inside it, it has to do lots of digging.
Example: System.Collection.Concurrence (load entire collection, causing bulk)
3. Heavily IDE based

### DotNet Core:
1. Cross platform
2. better performace, because it has smaller individual Dlls so it has can load it need precisely without loading bulk.
Example: System.Collection.Concurrence (load only Concurrence)
3. Has both IDE & CLI support


### DotNet 5:
Combitation & improvement of both