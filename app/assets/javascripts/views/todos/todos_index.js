Backbonetodo.Views.TodosIndex = Backbone.View.extend({
  tagName: 'ul',
  template: JST['todos/index'],
  render: function() {
    this.addAll();
    return this;
  },

  addAll: function() {
    this.collection.forEach(this.addOne, this);
  },
  
  addOne: function(todo) {
    var todoView = new Backbonetodo.Views.Todo({model: todo});
    this.$el.append(todoView.render().el);
  }

});
