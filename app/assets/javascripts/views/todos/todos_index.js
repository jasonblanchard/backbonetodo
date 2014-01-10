Backbonetodo.Views.TodosIndex = Backbone.View.extend({
  tagName: 'ul',
  template: JST['todos/index'],
  render: function() {
    this.collection.forEach(this.addOne, this);
  },
  
  addOne: function(todo) {
  }

});
