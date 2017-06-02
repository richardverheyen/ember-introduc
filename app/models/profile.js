import DS from 'ember-data';

export default DS.Model.extend({
  image: DS.attr('string'),
  tagline: DS.attr('string'),
  lat: DS.attr('number'),
  lng: DS.attr('number')
  // gender: DS.attr('string')
});
