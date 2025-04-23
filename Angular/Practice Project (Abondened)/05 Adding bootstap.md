using bootstrap 4  

## 1. install bootstrap  
```sh
npm install --save bootstrap
```  

## 2. add bootstrap css in `angular.json` to styles array    
```json
            "styles": [
              "./node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.css"
            ],
```  

## 3. Restart server / Application  

## 4. Grab the simplest navbar from bootstrap 4 website & paste it at top of our main template  
`app.component.html`  
```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Resto</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#">Features</a>
      <a class="nav-item nav-link" href="#">Pricing</a>
      <a class="nav-item nav-link disabled" href="#">Disabled</a>
    </div>
  </div>
</nav>

<ul>
  <a routerLink="add">Add Restaurant</a>
  <a routerLink="update">Update Restaurant</a>
  <a routerLink="login">Login</a>
  <a routerLink="register">Register</a>
  <a routerLink="list">List</a>
</ul>

<router-outlet></router-outlet>
```  

now replace the navbar ancher tags with our own but keep the attribute `class="nav-item nav-link"`
`app.component.html`  
```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Resto</a> <!-- Changed navbar title -->
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" routerLink="add">Add Restaurant</a>
      <a class="nav-item nav-link" routerLink="update">Update Restaurant</a>
      <a class="nav-item nav-link" routerLink="login">Login</a>
      <a class="nav-item nav-link" routerLink="register">Register</a>
      <a class="nav-item nav-link disabled" routerLink="list" disabled>List</a>
    </div>
  </div>
</nav>

<div class="container"> <!-- to take some space & not to stick to left wall -->
  <router-outlet></router-outlet>
</div>
```  