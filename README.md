# Todo_app_2020:
An example build of a MERN stack todo app.

## Stack:
- ReactJS Frontend
- Express
- MongoDb for the backend
- Node.js

## Setting up the App:

### Frontend:
- CD into Todo_Frontend
- run:
```
npm install
```

### Backend:
- CD into Todo_Backend
- run:
```
npm install
```

- create.env file and set variables:
```
DATABASE_URL=mongodb://127.0.0.1:27017/todos
PORT=4000
```
## Starting The App:

### Frontend:
1. CD into Todo_Frontend
2. Start the app
```
npm start
```

### Backend:
1. CD into Todo_Backend
2. Start the app
```
nodemon index
```

## Test MongoDB connections:
### Enter the MongoDB Shell by running:
```
mongosh
```

### See all tables/collections:
```
show dbs
```

You SHOULD see a todos table

### Switch to the todos db:
```
use todos
```
### List current records:
```
db.todos.find()
```

### Add test record:
If its empty, you should add a test, just incase.
```
db.todos.insertOne( { todo_title: 'test', todo_description: 'test_desc', todo_dueDate: '2022-25-01', todo_completed: false } );
```

You can now use postman to run a test with the following request:

```
http://localhost:4000/todos/api/getAll/
```
This Should return back the test. If so, you are good to go.
