import Ember from 'ember';

const {
  defineProperty,
  computed
} = Ember;

const FieldContainer = Ember.Component.extend({

  tagName: '',

  model: null,

  key: '',

  label: null,

  fieldComponent: null,

  updateValue: function (_key, _value) {},

  init(...params){
    this._super(...params)

    const key = this.get('key');

    defineProperty(this, 'value', computed.oneWay(`model.${key}`));
    defineProperty(this, 'errors', computed.oneWay(`model.errors.${key}`));
  }
});

FieldContainer.reopenClass({
  positionalParams: ['key']
});

export default FieldContainer;
