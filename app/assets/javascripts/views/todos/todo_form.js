Backbonetodo.Views.TodoForm = Backbone.View.extend({
  className: 'todo-form',
  template: _.template('<form class="form-inline" role="form">' +
              '<div class="form-group">' +
              '<input class="form-control" name="title" value="<%= title %>" />' +
              '</div>' +
              '<button class="btn btn-default"><span class="glyphicon glyphicon-plus"</span></button></form>' +
              ''),
  
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }


});
