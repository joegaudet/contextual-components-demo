import Ember from 'ember';

const {
  RSVP: {Promise}
} = Ember;

export default Ember.Controller.extend({
  actions: {

    setErrors(){

      this.set('model.errors.bar', ['An bar error']);
      this.set('model.errors.baz', ['An error', 'Another Error']);
      this.set('model.errors.qux', ['An error', 'Another Error']);

      return Promise.resolve(true)
    },

    resetErrors(){
      this.set('model.errors.bar', []);
      this.set('model.errors.baz', []);
      this.set('model.errors.qux', []);

      return Promise.resolve(true)
    }
  }
});
