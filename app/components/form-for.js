import Ember from 'ember';

const FormFor = Ember.Component.extend({

  tagName: '',

  model: null,

  updateValue(key, value){
    this.set(`model.${key}`, value);
  }

});

FormFor.reopenClass({
  positionalParams: ['model']
});

export default FormFor;

