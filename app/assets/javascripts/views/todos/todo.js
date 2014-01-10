Backbonetodo.Views.Todo = Backbone.View.extend({
  tagName: 'li',
  className: 'todo',
  template: _.template('<strong><%= title %></strong>'),

  render: function() {
    var attributes = this.model.toJSON();
    this.$el.html(this.template(attributes));
  }
});
