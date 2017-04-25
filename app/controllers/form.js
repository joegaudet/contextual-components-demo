import Ember from 'ember';

export default Ember.Controller.extend({

  _showingErrors: false,

  foos: new Array(1000).fill(''),

  toggleErrors(){

    if(this.get('_showingErrors')){
      this.set('model.errors.baz', []);
      this.set('model.errors.qux', []);
    }
    else {
      this.set('model.errors.baz', ['An error', 'Another Error']);
      this.set('model.errors.qux', ['An error', 'Another Error']);
    }

    this.toggleProperty('_showingErrors');
  }
});
