import Ember from 'ember';

const {
  defineProperty,
  computed,
  observer
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
    this._super(...params);

    const key = this.get('key');
    defineProperty(this, 'value', computed.oneWay(`model.${key}`));
    defineProperty(this, 'errors', computed.oneWay(`model.errors.${key}`));
    defineProperty(this, '_value', computed(`model.${key}`, {
      get() {
        return this.get(`model.${key}`);
      },
      set(key, value) {
        return value;
      }
    }));
  },

  actions: {
    edit(){
      this.set('isEditing', true);
    }
  }
});

FieldContainer.reopenClass({
  positionalParams: ['key']
});

export default FieldContainer;
