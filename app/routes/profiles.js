import Ember from 'ember';

export default Ember.Route.extend({

  // https://guides.emberjs.com/v2.4.0/models/finding-records/
  // https://guides.emberjs.com/v2.4.0/models/creating-updating-and-deleting-records/
  model() {
    this.get('store').findAll('profile');
  }

});
