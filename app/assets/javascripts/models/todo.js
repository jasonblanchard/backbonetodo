Backbonetodo.Models.Todo = Backbone.Model.extend({
  urlRoot: '/todos',
  defaults: {
    title: 'Something to do...',
    complete: false
  }


});
