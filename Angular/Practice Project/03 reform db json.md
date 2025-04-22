in last session we seen our `db,json` is like this   
`db.json`:  
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

we can modify it & see changes according to it  
`db.json`:  
```json
{
    "restaurants":[
        {
            "id": 1,
            "name": "Hotel zorba",
            "address": "Shahupuri",
            "email": "hz@mail.com"
        },
        {
            "id": 2,
            "name": "Hotel 7/12",
            "address": "Kalamba",
            "email": "hsb@mail.com"
        }
    ]
  }
```  
& all the API methods will work accordingly  
Example: 
at `Postman`  
GET: `http://localhost:3000/restaurants`  
#### output:
```terminal
[
    {
        "id": "1",
        "name": "Hotel zorba",
        "address": "Shahupuri",
        "email": "hz@mail.com"
    },
    {
        "id": "2",
        "name": "Hotel 7/12",
        "address": "Kalamba",
        "email": "hsb@mail.com"
    }
]
```  
GET: `http://localhost:3000/restaurants/1`  
#### output:
```terminal
{
    "id": "1",
    "name": "Hotel zorba",
    "address": "Shahupuri",
    "email": "hz@mail.com"
}
```  