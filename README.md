# Todos Front End
### App that makes use of the Todos-API
[The Advanced Web Developer Bootcamp](https://www.udemy.com/the-advanced-web-developer-bootcamp/)



## Start the API server from within the API folder with `node index.js`. Then index.html is being served due to the config made in 01.


&nbsp;
## 00 Initial

* Use the *Skeleton* responsive CSS boilerplate.
* Include the API. Changes required for serving static pages will be applied here.


&nbsp;
## 01 Configure the API for static content

* Add a use statement for *express.static* and edit the main GET route so that the API can serve a static web page.
* The static use statement points at *index.html* which is located in the parent directory of the API's *index.js*.

&nbsp;
## 02 Todos page

* Edit and style the index page.

&nbsp;
## 03 Fetch todos

* Use jQuery's getJSON method and fetch the data by calling the API.
* Fill the todo list with the todos that the API fetches from the database.  

&nbsp;
## 04 Display todo status

* Style the *completed* class and apply it conditionally to todos.


&nbsp;
## 05 Create todos with the input

* Add a keypress handler so that a todo is saved when enter is pressed.
* Refactor *addTodos* bringing *addTodo* to a separate function.
* Add the *createTodo* function.
* Clear the input.


&nbsp;
## 06 Remove todos

* In *addTodo*, use the jQuery `.data()` method to attach ids to the list items.
* Add a click event on the list that gets triggered from the span and calls *removeTodo*.
* The *removeTodo* function removes the todo with the clicked id from the db with an AJAX request. It also takes the todo element out of the DOM by use of the jQuery `.remove()` method.


&nbsp;
## 07 Toggle completion

* Add another click event on the list that gets triggered from the list items and calls *upateTodo*.
* Stop event propagation from the span so that only the delete functionality is triggered from there.
* In *addTodo*, use the jQuery `.data()` method again in order to attach the *completed* property to the list items.
* The *updateTodo* function updates the db with an AJAX PUT request where data is being sent with the completed property state toggled. Then the DOM is being updated as well by adding or removing the *completed* class. The *todo.data('completed')* property state must be updated with each toggle in order to be able to perform consecutive toggles.
