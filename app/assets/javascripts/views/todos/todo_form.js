Backbonetodo.Views.TodoForm = Backbone.View.extend({
  className: 'todo-form',
  template: _.template('<form class="form-inline" role="form">' +
              '<div class="form-group">' +
              '<input class="form-control" name="title" value="<%= title %>" placeholder="Something to do..." />' +
              '</div>' +
              '<button class="btn btn-default"><span class="glyphicon glyphicon-plus"</span></button></form>' +
              ''),
  events: {
    submit: 'save'
  },
  
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  save: function(e) {
    e.preventDefault();
    var newTitle = this.$('input[name=title]').val();
    newTodo = this.model.set({title: newTitle});
    newTodo.save();
    this.collection.add(newTodo);
    this.reset();
  },

  reset: function() {
    this.model = new Backbonetodo.Models.Todo();
    this.render();
  }
});
