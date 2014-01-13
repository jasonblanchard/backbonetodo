Backbonetodo.Collections.Todos = Backbone.Collection.extend({
  url: '/todos',
  model: Backbonetodo.Models.Todo,
  initialize: function() {
    this.on('remove', this.hideModel);
  },

  hideModel: function(model) {
    model.trigger('hide');
  }

});
