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
    this.set('isEditing', false);
  },

  cancel(){
    this.set('_value', this.get('value'));
    this.set('isEditing', false);
  },

  init(...params){
    this._super(...params)

    const key = this.get('key');
    defineProperty(this, 'value', computed.oneWay(`model.${key}`));
    defineProperty(this, 'errors', computed.oneWay(`model.errors.${key}`));

    this.set('_value', this.get('value'));
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
