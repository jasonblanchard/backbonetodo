Backbonetodo.Views.Todo = Backbone.View.extend({
  className: 'todo',
  template: _.template('<span class="<%= complete == true ? "complete" : "" %>"><%= title %></span>'),
  
  initialize: function() {
    this.model.on('hide', this.remove, this);
    this.model.on('change', this.render, this);
  },
  
  events: {
    'click': 'toggleStatus'
  },

  render: function() {
    var attributes = this.model.toJSON();
    this.$el.html(this.template(attributes));
    return this;
  },

  toggleStatus: function() {
    this.model.toggleStatus();
   }
});
