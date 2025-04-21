we can add routing to project by accepting the prompt while creating the app.  
but in some case if we denied while making application we can add routing to existing project with this command  
```sh
ng generate module app-routing --flat --module=app
```  
this will create routing file `src\app\app-routing.module.ts` in your project  
if this file already exists means you have already installed routing mechanism in your angular project  