$(document).ready(main());

function main() {
  // fetch data from the API and then display in the DOM
  $.getJSON("/api/todos")
  .then(addTodos);

  // create todo using the input
  $('#todo-input').keypress(function(event){
    // create todo when we press enter (code 13)
    if (event.which == 13) {
      createTodo();
      // clear the input after creating todo
      $('#todo-input').val('');
    }
  });

  // remove todo listener
  $('#todos-list').on('click', 'span', function(e) {
    e.stopPropagation();
    removeTodo($(this).parent());
  });

  // update todo listener
  $('#todos-list').on('click', 'li', function() {
    updateTodo($(this));
  });
} // end main

function addTodos(todos) {
    todos.forEach(function(todo) {
      addTodo(todo);
    });
}

function addTodo(todo) {
  var todoItem = $('<li>' + todo.name + '<span class="u-pull-right">✖</span></li>');
  todoItem.data('id', todo._id);
  todoItem.data('completed', todo.completed);
  if (todo.completed) { todoItem.addClass("completed"); }
  $('#todos-list').append(todoItem);
}

function createTodo() {
  //get the value of the user input
  var userInput = $('#todo-input').val();
  // post the todo to the API (and save in the db)
  $.post('/api/todos', {name: userInput})
  .then(function(newTodo) {
    // display the todo in the DOM
    addTodo(newTodo);
  })
  .catch(function(error) {
    console.log(error)
  });
}

function removeTodo(todo) {
  var clickedId = todo.data('id');
  console.log('trying to delete todo with id: ' + clickedId);
  var urlToDelete = '/api/todos/' + clickedId;
  // AJAX call to the API in order to remove from db
  $.ajax({
    method: 'DELETE',
    url: urlToDelete
  })
  .then(function(serverMessage) {
    console.log(serverMessage);
  })
  .then(function() {
    // remove from the DOM
    todo.remove();
  })
  .catch(function(error) {
    console.log(error)
  });
}


function updateTodo(todo) {
  console.log(todo.data('completed'));
  var clickedId = todo.data('id');
  console.log('trying to update todo with id: ' + clickedId);
  var urlToUpdate = '/api/todos/' + clickedId;
  // AJAX call to the API in order to update in db
  // send data with the completed property toggled
  $.ajax({
    method: 'PUT',
    url: urlToUpdate,
    data: { completed: !(todo.data('completed')) }
  })
  .then(function(serverMessage) {
    console.log(serverMessage);
  })
  .then(function() {
    // update the DOM conditionally in order to display the toggled state
    todo.data('completed') ? todo.removeClass("completed") : todo.addClass("completed")
    // update the todo.data('completed') so that consecutive toggles can be performed
    todo.data('completed', !todo.data('completed'));
  })
  .catch(function(error) {
    console.log(error)
  });
}
