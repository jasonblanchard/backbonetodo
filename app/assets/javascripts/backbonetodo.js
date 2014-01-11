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
    $('#app').append(this.todosView.el);
    console.log(this.todosView.render());
  }
};

$(document).ready(function(){
  Backbonetodo.initialize();
});
