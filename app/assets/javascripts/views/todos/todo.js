Backbonetodo.Views.Todo = Backbone.View.extend({
  className: 'todo',
  template: _.template('<button type="button" class="btn btn-default btn-xs">' + 
    '<span class="glyphicon glyphicon-ok"></span>' +
    '</button>' +
    '<span class="<%= model.get("complete") == true ? "complete" : "" %>"><%= model.escape("title") %></span>' +
    '<a href="#" class="remove-todo"><span class="glyphicon glyphicon-remove"</span></a>'),
  
  initialize: function() {
    this.model.on('hide', this.remove, this);
    this.model.on('change', this.render, this);
  },
  
  events: {
    'click button': 'toggleStatus',
    'click a': 'deleteTodo'
  },

  render: function() {
    this.$el.html(this.template({model: this.model}));
    return this;
  },

  toggleStatus: function() {
    this.model.toggleStatus();
   },

  deleteTodo: function(e) {
    e.preventDefault();
    this.model.destroy();
  }
});
