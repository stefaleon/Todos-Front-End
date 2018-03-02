### An API for todos
as in the [The Advanced Web Developer Bootcamp](https://www.udemy.com/the-advanced-web-developer-bootcamp/)


## 00 Initial

* Initialize app and add express.
```
$ npm init
```

```
npm install --save express
```

* Configure a basic express server.


## 01 Todo model

* Add mongoose.

```
npm install --save mongoose
```

* Add the models folder.
* Create index.js and setup mongoose.
* Create todo.js, setup the todo schema and create the model.


## 02 Routes

* Add the routes folder.
* Create todos.js and add a GET route.
* Use the todos routes with an "/api/todos" prefix.


## 03 Get todos from db

* Add the database.
* Set the GET route so that it finds all todos from database and returns them in a json object.


## 04 Create todos

* Add body-parser.

```
npm install --save body-parser
```

* Require body-parser at index.js and add the use statements in order be able to access the request body.
* Add the post route in todos.js.


## 05 Get a specific todo

* Add a GET route that will be finding todos by todoId.


## 06 Update a todo

* Add a PUT route. Use the *findOneAndUpdate* mongoose method with the `{new: true}` option in order to respond with the new data in Postman.


## 07 Delete a todo

* Add a DELETE route. Use the *remove* mongoose method in order to remove a todo with the selected id.
