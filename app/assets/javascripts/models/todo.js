Backbonetodo.Models.Todo = Backbone.Model.extend({
  urlRoot: '/todos',
  defaults: {
    title: 'Something to do...',
    complete: false
  },

  toggleStatus: function() {
    if (this.get('complete') == false) {
      this.set({'complete': true});
    } else {
      this.set({'complete': false});
    }
    this.save();
  }


});
