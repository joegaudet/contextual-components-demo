import Ember from 'ember';

const {
  debug
} = Ember.Logger;

const FormFor = Ember.Component.extend({

  model: null,

  updateValue(key, value){
    debug(`[form-for] update value ${key}, ${value}`);

    const model = this.get('model');

    if(model){
      model.set(key, value);
    }
    else {
     debug('[form-for] no model present on this form')
    }
  }

});

FormFor.reopenClass({
  positionalParams: ['model']
});

export default FormFor;

