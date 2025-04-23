## 1. create new app  
```sh
ng new resto
```  
## 2. install `json-server` into project, to make a single json file work as db.  
```sh
npm install -g json-server
```    
## 3. start json as db server  
```sh
mkdir mockdb
cd mockdb
touch db.json
```  
& paste this snippet inside that `db.json` file  
`mockDB\db.json`
```json
{
  "posts": [
    { "id": "1", "title": "a title", "views": 100 },
    { "id": "2", "title": "another title", "views": 200 }
  ],
  "comments": [
    { "id": "1", "text": "a comment about post 1", "postId": "1" },
    { "id": "2", "text": "another comment about post 1", "postId": "1" }
  ],
  "profile": {
    "name": "typicode"
  }
}
```  
& start your `db.json` as a db server  
```sh
json-server --watch db.json
```  
this will give you output similar to this in terminal  
#### output:
```terminal
--watch/-w can be omitted, JSON Server 1+ watches for file changes by default
JSON Server started on PORT :3000
Press CTRL-C to stop
Watching .\db.json...

( ˶ˆ ᗜ ˆ˵ )

Index:
http://localhost:3000/

Static files:
Serving ./public directory if it exists

Endpoints:
http://localhost:3000/posts
http://localhost:3000/comments
http://localhost:3000/profile
```  
if you visit those URL you can see dummy data there  
## 4. install postman  

## 5. test any end point in postman  
GET: `http://localhost:3000/posts`  
& it will show the output in postman  
#### output:
```terminal
[
    {
        "id": "1",
        "title": "a title",
        "views": 100
    },
    {
        "id": "2",
        "title": "another title",
        "views": 200
    }
]
```  