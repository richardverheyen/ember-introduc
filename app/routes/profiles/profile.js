import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.get('store').peekRecord('profile', params.id);
  },

  afterModel(model) {
    if (!model) {
      this.transitionTo('profiles');
    }
  },

  renderTemplate() {
    this.render('profiles/profile', {
      into: 'application'
    });
  }

});
