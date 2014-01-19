Backbonetodo.Views.TodosCounter = Backbone.View.extend({
  initialize: function() {
    this.collection.on('reset', this.render, this);
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
  },

  template: _.template('Total todos: <%= count %>'),

  render: function() {
    this.addStats();
    return this;
  },

  addStats: function() {
    this.$el.html(this.template({count: this.countStats()}));
  },

  countStats: function() {
    return this.collection.length;
  }

});
