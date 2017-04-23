import DS from 'ember-data';

const {attr} = DS;

export default DS.Model.extend({

  bar: attr('string'),

  baz: attr('string'),

  qux: attr('string')

});
