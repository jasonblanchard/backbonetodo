Backbonetodo.Views.TodosCounter = Backbone.View.extend({
  initialize: function() {
    this.collection.on('reset', this.render, this);
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
    this.collection.on('change', this.render, this);
  },

  template: _.template('<div class="todos-counter text-muted text-center">Total todos: <%= count %>' +
                        ' | Unfinished todos: <%= unfinished %>' +
                        ' | Finished todos: <%= finished %>' +
                        '</div>'),

  render: function() {
    this.addStats();
    return this;
  },

  addStats: function() {
    this.$el.html(this.template({count: this.countTotal(), unfinished: this.countUnfinished(), finished: this.countFinished()}));
  },

  countTotal: function() {
    return this.collection.length;
  },

  countUnfinished: function() {
    var count = 0;

    this.collection.forEach(function(todo) {
      if (todo.get('complete') == false) {
        count++;
      }
    });
    return count;
  },

  countFinished: function() {
    var count = 0;

    this.collection.forEach(function(todo) {
      if (todo.get('complete') == true) {
        count ++;
      }
    });
    return count;
  }

});
