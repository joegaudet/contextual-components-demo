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

  autoCommit: true,

  dirty: computed('_value', 'value', function () {
    return this.get('_value') !== this.get('value');
  }),

  commitValue(_key, _value) {
  },

  handleChange(value) {
    this.set('_value', value);

    if (this.autoCommit) {
      this.commit();
    }
  },

  commit(){
    this.commitValue(this.get('key'), this.get('_value'));
  },

  cancel(){
    this.set('_value', this.get('value'));
  },

  init(...params){
    this._super(...params)

    const key = this.get('key');


    let valuePath = `model.${key}`;
    defineProperty(this, 'value', computed(valuePath, '_value', () => {
      console.log('Foo');

      return this.get(valuePath);
    }));
    defineProperty(this, 'errors', computed.oneWay(`model.errors.${key}`));

    this.set('_value', this.get('value'));
  }
});

FieldContainer.reopenClass({
  positionalParams: ['key']
});

export default FieldContainer;
