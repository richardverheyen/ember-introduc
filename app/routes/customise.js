import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('profile', {
      lat: 2,
      lng: 3
    })
  }
});
