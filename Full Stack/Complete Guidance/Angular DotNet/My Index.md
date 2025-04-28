Divide full stack in parts  
# 1. Setup backend & connect it to database via connection string.  
- ## 1.a: Create backend project  
- ## 1.b: Add Dependencies   
- ## 1.c: Database connection string   
- ## 1.d: Add CORS (Cross-Origin Resource Sharing)     

# 2. Implenent Backend & test with tools like postman/Swagger.  
- ## 2.a: Reflect Model to Database  
    - ### 2.a.1: Model creation  
    - ### 2.a.2: Define Database context  
    - ### 2.a.3: AddDbContext to main program file  
    - ### 2.a.4: Migration  
- ## 2.b: Controller (CRUD)
    - ### 2.b.1: Create Controller  
    - ### 2.b.2: Controller Constructore Injection  
    - ### 2.b.3: GET method  
    - ### 2.b.4: create DTO for POST method  
    - ### 2.b.5: POST method  
    - ### 2.b.6: GET By ID method  
    - ### 2.b.7: Create DTO for PUT method  
    - ### 2.b.8: PUT method  
    - ### 2.b.9: DELETE method  

# 3. Setup frontend.  
- ## 3.a: Setup frontend project    
    - ### 3.a.1: Create project
    - ### 3.a.2: Add dependacies like bootstrap, common, form
    - ### 3.a.3: Add bootstrap to angular.json

 - ## 3.b: Structure the project  
    - ### 3.b.1: generate router file in not, generate service file & component  
    - ### 3.b.2: create model    

- ## 3.c: Routing  
    - ### 3.c.1: import all components & add it to route array as object with path & component keys 

- ## 3.d: Impletemt service layer / crud  
    - ### 3.d.1: create enviroment file & place backend string there  
    - ### 3.d.2: access that url string into service file & using that string implememt all frontend request methods there   


- ## 3.e: Apply Component  
    - ### 3.e.1: list component
    - ### 3.e.2: form component