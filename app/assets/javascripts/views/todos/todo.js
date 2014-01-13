Backbonetodo.Views.Todo = Backbone.View.extend({
  tagName: 'li',
  className: 'todo',
  template: _.template('<%= title %>'),
  
  initialize: function() {
    this.model.on('hide', this.remove, this);
  },

  render: function() {
    var attributes = this.model.toJSON();
    this.$el.html(this.template(attributes));
    return this;
  }
});
