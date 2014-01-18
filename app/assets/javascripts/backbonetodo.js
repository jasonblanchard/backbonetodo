window.Backbonetodo = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    console.log('Hello from Backbone!');
    this.todosList = new Backbonetodo.Collections.Todos();
    this.todosList.fetch();
    this.todosView = new Backbonetodo.Views.TodosIndex({collection: this.todosList});
    this.todosView.render();
    this.todosForm = new Backbonetodo.Views.TodoForm({model: new Backbonetodo.Models.Todo(), collection: this.todosList});
    $('#app').prepend(this.todosForm.render().el);
    $('#app').append(this.todosView.el);
  }
};

$(document).ready(function(){
  Backbonetodo.initialize();
});
