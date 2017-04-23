import Ember from 'ember';

export default Ember.Controller.extend({

  _showingErrors: false,

  toggleErrors(){
    this.toggleProperty('_showingErrors');

    if(this.get('_showingErrors')){
      this.set('model.errors.baz', []);
      this.set('model.errors.qux', []);
    }
    else {
      this.set('model.errors.baz', ['An error', 'Another Error']);
      this.set('model.errors.qux', ['An error', 'Another Error']);
    }
  }
});
